//const express = require('express') // 예전방식이라 사용을 잘안함 => commonjs
import express from "express" // 요즘에 쓰는방식이라 주로 이용함 => module
import { ProductController } from "./mvc/controllers/product.controller.js"
import { CouponController } from "./mvc/controllers/coupon.controller.js"
const app = express()

// 상품 API
const productController = new ProductController()
app.post('/products/buy',buyProduct) // 상품 구매하기 API
app.post('/products/refund', refundProduct)// 상품 환불하기 API

// 상품권 API
const couponController = new CouponController()
app.post('/coupons/buy', couponController.buyCoupon) // 상품권 구매 API

// 게시판 API
// app.get('boards/...')

app.listen(3000) // 포트번호