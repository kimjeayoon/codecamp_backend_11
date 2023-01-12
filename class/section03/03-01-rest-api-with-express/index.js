//const express = require('express') // 예전방식이라 사용을 잘안함 => commonjs
import express from "express" // 요즘에 쓰는방식이라 주로 이용함 => module

const app = express()

app.get('/qqq', function (req, res) {
  res.send('Hello World')
}) // 미들웨어 함수

app.listen(3000) // 포트번호