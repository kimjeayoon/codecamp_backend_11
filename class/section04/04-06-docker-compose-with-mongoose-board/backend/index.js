//const express = require('express') // 예전방식이라 사용을 잘안함 => commonjs
import express from "express" // 요즘에 쓰는방식이라 주로 이용함 => module
import { userEmail,welcomeUser, sendTemplateToEmail } from './email.js'


import { checkPhone, getToken, sendTokenToSMS} from './phone.js'// export 가져오기
//import express from "express"                                   // export default 가져오기
//import qwerasdf from "express"                                   // export default 이름바꿔서 가져오기
//import qqqqq, { checkPhone as zzz, getToken} from './phone.js' // export default와 export를 함께 쓰기  + 가지고와서 이름바꾸기가능
// import * as ttt  from './phone.js' // export 한방에 다 가져오기
// ttt.checkPhone                     // export 한방에 다 가져오기
// ttt.getToken                       // export 한방에 다 가져오기

import swaggerUi  from 'swagger-ui-express';
import swaggerJsdoc  from'swagger-jsdoc';
import { options } from './swagger/config.js'
import cors from 'cors'
import mongoose from "mongoose";
import { Board } from "./models/board.model.js";

const app = express()
app.use(express.json()) // 옛날에는 badyParser 사용
app.use(cors())// cors를 허용해줄지 말지 쓰는 명령어
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
app.get('/boards', async function (req, res) { //get은 등록하는곳
  // 1. DB에 접속 후, 데이터를 조회 => 데이터를 조회했다고 가정
  // const result = [
  //   { number: 1, writer: "철수", title: "철수입니다!", contents: "철수을 입력했습니다"},
  //   { number: 2, writer: "영희", title: "영희입니다!", contents: "영희을 입력했습니다"},
  //   { number: 3, writer: "훈이", title: "훈이입니다!", contents: "훈이을 입력했습니다"}
  // ]
const result = await Board.find()

  // 2. DB에서 꺼내온 결과를 브라우저에 응답으로 주기 (response) 주기
  res.send(result)
}) 

app.post('/boards',async function (req, res) { //post는 조회하는곳
  // 1. 브라우저에서 보내준 데이터 확인하기
  console.log(req)
  console.log("==========")
  console.log(req.body)

  // 2. DB에 접속후, 데이터를 저장 => 데이터 저장했다고 가정
  const board =  new Board({
    writer: req.body.writer,
    title: req.body.title,
    contents: req.body.contents
  })
  await board.save()

  // 3. DB에 저장된 결과를 브라우저에 응답(response) 주기
  res.send('게시물 등록에 성공하였습니다.')
})

app.post('/tokens/phone', function(req, res) {
  const PhoneNumber = req.body.qqq

  // 1. 휴대폰번호 자릿수 맞는지 확인하기(10~11자리)
  const isValid =  checkPhone(PhoneNumber)
  if(isValid === false) {
      return
  }
  // 2. 핸드폰 토큰 6자리 만들기
  const myToken =  getToken()

  // 3. 핸드폰번호에 토큰 전송하기
  sendTokenToSMS(PhoneNumber, myToken)

  res.send("인증완료!!!")
})

app.post("/users", function (req, res) {
  // const name = req.body.name
  // const age = req.body.age
  // const school = req.body.school
  // const email = req.body.email
  const {name,age,school,email} = req.body //위에 꺼를 간딴하게 줄일수있다
  // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
    const isValid = userEmail({email})
    if(isValid === false) {
        return
    }
   // 2. 가입환영 템플릿 만들기치
    const myTemplate = welcomeUser({name,age, school})
    // 3.이메일에 가입환영 템플릿 전송하기
    sendTemplateToEmail(email, myTemplate)

    res.send("가입완료!!!")
})

mongoose.connect("mongodb://my-database:27017/mydocker")
  .then(() => console.log("db 접속에 성공하였습니다."))
  .catch(() => console.log("db 접속에 실패하였습니다."))

app.listen(6000) // 포트번호