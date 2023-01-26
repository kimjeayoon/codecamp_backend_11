//const express = require('express') // 예전방식이라 사용을 잘안함 => commonjs
import express from "express" // 요즘에 쓰는방식이라 주로 이용함 => module

const app = express()

// 상품 구매하기 API
app.post('/products/buy', (req, res) => {
  //  1. 현재 가지고 있는돈을 검증하는 코드(대략 10줄정도 코딩한상태)
  // ... x10
  
  //  2.판매여부를 검증하는 코드 (대략 10줄정도 코딩한 상태)
  // ... x10

  // 3. 상품 구매하는 코드작성
  // if(돈있거나 && !판매완료) {
  //   res.send("상품 구매 완료!")
  // }
})

// 상품 환불하기 API
app.post('/products/refund', (req, res) =>{
  //  1.판매여부를 검증하는 코드 (대략 10줄정도 코딩한 상태)
  // ... x10

  // 2. 상품 환불하는 코드

  if(판매완료) {
    res.send("상품 환불 완료!!")
  }
  
})
app.listen(3000) // 포트번호