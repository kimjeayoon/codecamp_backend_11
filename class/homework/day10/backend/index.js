import express from 'express';
import { checkPhone, getToken, sendTokenToSMS } from './phone.js';
import cors from 'cors';
import mongoose from "mongoose";
import { Token } from './models/token.model.js';

const app = express();
app.use(express.json());
app.use(cors());


  app.post('/tokens/phone', async function (req, res) {
    const { phone } = req.body;
    console.log(phone)
    // 1. 휴대폰번호 자릿수 확인(10~11자리)
    const isValid = checkPhone(phone);
    if (isValid === false) return;
    // 2. 핸드폰 토큰 6자리 만들기
    const myToken = getToken();

    sendTokenToSMS(phone, token)

    if (doc) {
      await Token.updateOne({ phone })
    } else {
      new Token({ phone, isAuth: false }).save()
    }
    return res.send(`${phone}으로 인증문자가 전송되었습니다.`)
  })
  
  app.patch('/tokens/phone', async (req, res) => {
    const { phone, token } = req.body
    const doc = await Token.findOne({ phone })
    if (doc && doc.token === token) {
      await Token.updateOne({ phone }, { isAuth: true })
      return res.send(true)
    }
    return res.send(false)
  })

mongoose.connect("mongodb://mongodb:27017/myfolder")
  .then(() => console.log("db 접속에 성공하였습니다."))
  .catch(() => console.log("db 접속에 실패하였습니다."))

  app.listen(4000,  () => {
    console.log("백엔드 API 서버가 켜졌습니다")
  })