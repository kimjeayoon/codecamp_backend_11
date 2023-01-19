import express from 'express';
import { checkPhone, getToken, sendTokenToSMS } from './phone.js';
import { userEmail, welcomeUser, sendTemplateToEmail } from './email.js';
import * as dotenv from 'dotenv';
dotenv.config();

import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { options } from './swagger/config.js';
import cors from 'cors';
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));


app.get('/users', function (req, res) { //

    const result = [
      { email: "aaa@gmail.com", name: "철수", phone: "010-1234-5678", personal: "220220-1111111", prefer : "https:/naver.com"},
      { email: "Nick@nick.com", name: "Nick", phone: "010-1234-5678", personal: "220219-1111111", prefer : "https:/google.com"},
      { email: "Judy@judy.com", name: "Judy", phone: "010-1234-5678", personal: "220219-3333333", prefer : "https:/naver.com"},
      { email: "Anna@anna.com", name: "Anna", phone: "010-1234-5678", personal: "220219-4444444", prefer : "https:/google.com"},
      { email: "Elsa@elsa.com", name: "Elsa", phone: "010-1234-5678", personal: "220219-5555555", prefer : "https:/naver.com"}
    ]
  
    res.send(result)
  }) 

  app.get('/starbucks', (req, res) => {
    const result = [
        { name: '아메리카노', kcal: 5 },
        { name: '카페라떼', kcal: 10 },
        { name: '콜드브루', kcal: 15 },
        { name: '카페모카', kcal: 50 },
        { name: '돌체라떼', kcal: 500 },
        { name: '카라멜라떼', kcal: 200 },
        { name: '바닐라라떼', kcal: 20 },
        { name: '에스프레소', kcal: 1 },
        { name: '디카페인', kcal: 5 },
        { name: '오토라떼', kcal: 300 },
    ];
    res.send(result);
  });

  app.post('/tokens/phone', function (req, res) {
    const { myphone } = req.body;
    console.log(myphone);
    // 1. 휴대폰번호 자릿수 확인(10~11자리)
    const isValid = checkPhone(myphone);
    if (isValid === false) return;

    // 2. 핸드폰 토큰 6자리 만들기
    const myToken = getToken();

    // 3. 핸드폰 번호에 토큰 전송하기
    sendTokenToSMS(myphone, myToken);

    res.send('인증완료');
});

app.post('/users', function (req, res) {
  const { name, personal, prefer, email, myphone } = req.body;
  // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@" 포함여부)
  const isValid = userEmail(email);
  if (isValid === false) return;

  // 2. 가입환영 템플릿 만들기
  const mytemplate = welcomeUser({ name, personal, prefer, email, myphone });
  
  // 3. 이메일에 가입환영 템플릿 전송하기
  sendTemplateToEmail({ mytemplate, email });

  res.send('가입완료!');
});

mongoose.connect("mongodb://my-database:27017/mydocker")
  .then(() => console.log("db 접속에 성공하였습니다."))
  .catch(() => console.log("db 접속에 실패하였습니다."))

  app.listen(4000) 