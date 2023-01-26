import express from 'express';
import { checkPhone, getToken,  sendTokenToSMS } from './phone.js';
import { userName,  userEmail, userPrefer,userPassword, welcomeUser, sendTemplateToEmail } from './welcomeSignup.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { options } from './swagger/config.js';
import cors from 'cors';
import mongoose from "mongoose";
import { Token } from './models/token.model.js';
import { User } from "./models/user.model.js";

import * as dotenv from 'dotenv';
// import axios from 'axios'
// import cheerio from 'cheerio'myfolder
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

app.get('/users', async function (req, res) { 
    const result = await User.find()

    res.send(result)
  })
  
  // app.get('tokens/phone', async function (req, res) { 
  //   const token = await Token.find()

  //   res.send(token)
  // }) 

  app.post('/tokens/phone', async function (req, res) {
    const { phone } = req.body;
    // 1. 휴대폰번호 자릿수 확인(10~11자리)
    const isValid = checkPhone(phone);
    if (isValid === false) return;

    // 2. 핸드폰 토큰 6자리 만들기
     const myToken = getToken();

    // 3. 핸드폰 번호에 토큰 전송하기
    sendTokenToSMS(myphone, myToken);
    
    const phoneNum = await Certify.findOne({ phone });

  if (phoneNum === null) {
    new Certify({ phone: phone, token: token, isAuth: false }).save();
  } else {
    //번호가 이미 있다면 token만 최신화해서 하나만 수정하기
    await Certify.updateOne({ phone: phone }, { token: token });
  }
  console.log("인증 완료")
  // 4.토큰을 입력 제대로했는지 확인하기
  // const isToken = sendToken(token);
  // if (isToken === false) return;
  const token =  new Token({
    token: req.body.token,
    phone: req.body.phone,
    isAuth: req.body.isAuth
  })

  console.log("인증 완료")



  //res.send(`${myphone}으로 인증 문자가 전송되었습니다.`);
});

app.patch("/tokens/phone", async function (req, res) {
  let { phone, token } = req.body;
  const receiveToken = await Certify.findOne({ phone });
  if (receiveToken === null) {
    res.send("false");
    return;
  }

  if (receiveToken.token === token) {
    await Certify.updateOne({ phone: phone }, { isAuth: true });
    res.send("true");
    return;
  } else {
    await Certify.updateOne({ phone: phone }, { isAuth: false });
    res.send("false");
  }
});

app.post('/users', async function (req, res) {
  const { name, personal, prefer, email, pwd, phone } = req.body;
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
  // 6. DB에 저장된 users결과를 브라우저에 응답(response) 주기
  const user =  new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    personal: req.body.personal,
    prefer: req.body.prefer,
    pwd: req.body.pwd
  })

  await user.save()
  // 6. 가입환영 템플릿 만들기
  const mytemplate = welcomeUser({  name, personal, prefer, email, myphone ,pwd });
  
  // 7. 이메일에 가입환영 템플릿 전송하기
   sendTemplateToEmail({ mytemplate, email });

  res.send('가입완료!');
});
  app.listen(3000)
mongoose.connect("mongodb://my-mongodb:27017/mydocker")
  .then(() => console.log("db 접속에 성공하였습니다."))
  .catch(() => console.log("db 접속에 실패하였습니다."))

