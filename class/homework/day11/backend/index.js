import express from 'express';
import { checkPhone, getToken,  sendTokenToSMS } from './phone.js';
import { userName,  userEmail, userPrefer,userPassword, welcomeUser, sendTemplateToEmail , Prefers} from './welcomeSignup.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { options } from './swagger/config.js';
import cors from 'cors';
import mongoose from "mongoose";
import { Token } from './models/token.model.js';
import { User } from "./models/user.model.js";

import * as dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

app.get('/users', async function (req, res) { 
    const result = await User.find()

    res.send(result)
  })

  app.post('/tokens/phone', async function (req, res) {
    const { phone } = req.body;
    // 1. 휴대폰번호 자릿수 확인(10~11자리)
    const isPhone = checkPhone(phone);
    if (isPhone === false) return;

    // 2. 핸드폰 토큰 6자리 만들기
     const myToken = getToken();
    // 3. 핸드폰 번호에 토큰 전송하기
    sendTokenToSMS(phone, myToken);
  
    const phoneNB = await Token.findOne({ phone });
    if(phoneNB === undefined) {
        const token =  new Token({
        token: myToken,
        phone: req.body.phone,
        isAuth: false
      }) 

      await token.save()
    } else {
      await Token.updateOne({ phone}, {token: myToken})
    }
  

  res.send(`${ phone }으로 인증 문자가 전송되었습니다.`);
});

app.patch("/tokens/phone", async function (req, res) {
  
  let { phone , token } = req.body;
 const receiveToken = await Token.findOne({ token });
  if (receiveToken === null) {
    res.send("false");
    return;
  }

  if (receiveToken.token === token) {
    console.log(phone,  req.body.phone)
    await Token.updateOne({ phone: req.body.phone }, { isAuth: true });
    res.send("true");
    return;
  } else {
    await Token.updateOne({ phone: req.body.phone }, { isAuth: false });
    res.send("false");
  }
});

app.post('/users', async function (req, res) {
  const { name, email,  personal, prefer, phone, pwd} = req.body;
  const og = await Prefers(prefer)
  // 1. 이름을 입력했는지 확인 
  
  const isName = userName(name);
  if (isName === false) return;
  // 3. 이메일이 정상인지 확인(1-존재여부, 2-"@" 포함여부)
  const isEmail = userEmail(email);
  if (isEmail === false) return;
  // 4. 주소를 입력했는지 확인
  const isPrefer = userPrefer(prefer);
  if (isPrefer === false) return;
  // 5. 비밀번호를 입력했는지 확인
  const isPassword = userPassword(pwd);
  if (isPassword === false) return;
  // 6. 휴대폰 번호를 인증했는지 확인
  const phoneNB = await Token.findOne({ phone });
    if (!phoneNB || phoneNB.isAuth === false) {
      return res.status(422).send("휴대폰 번호인증이 필요합니다!!!");
   }

  // 7. DB에 저장된 users결과를 브라우저에 응답(response) 주기
  const user =  new User({
    name: req.body.name,
    email: req.body.email,
    personal: req.body.personal,
    prefer: req.body.prefer,
    phone: req.body.phone,
    pwd: req.body.pwd,
    og: { title: og.title, description: og.description, image: og.image }
  }).save();
  // 8. 가입환영 템플릿 만들기
  const mytemplate = welcomeUser({  name, personal, prefer, email, phone });
  
  // 9. 이메일에 가입환영 템플릿 전송하기
   sendTemplateToEmail({ mytemplate, email });

  res.send('가입완료!');
});
  app.listen(3000)
mongoose.connect("mongodb://my-mongodb:27017/mydocker")
  .then(() => console.log("db 접속에 성공하였습니다."))
  .catch(() => console.log("db 접속에 실패하였습니다."))

