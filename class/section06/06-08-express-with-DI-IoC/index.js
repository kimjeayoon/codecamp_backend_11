//const express = require('express') // 예전방식이라 사용을 잘안함 => commonjs
import express from "express" // 요즘에 쓰는방식이라 주로 이용함 => module
import { ProductController } from "./mvc/controllers/product.controller.js"
import { CouponController } from "./mvc/controllers/coupon.controller.js"
import { PointService } from "./mvc/controllers/services/point.service.js"
import { CashService } from "./mvc/controllers/services/cash.service.js"
import { ProductService } from "./mvc/controllers/services/product.service.js"
const app = express()
                                            // === 의존성주입으로 발생하는 장점들!! === 
const cashService = new CashService()       // 1. new 한번으로 모든 곳에서 재사용이 가능하다(효율적으로 바뀜,싱글톤패턴이라고 부름)
const productService = new ProductService() // 2. 의존성  주입으로 한꺼번에 변경이 가능하다
const pointService = new PointService()     // 3. 의존성 주입으로 쿠폰 구매 방식을 포인트결제로 안전하게 변경 가능

                                            // [부가설명]        
                                            // 1. productController가 CashService에 의존하고 있음 (CAshService => 의존성)
                                            //    => 이 상활을 "강하게 결합되어있다" 라고 표현
                                            //    => tight-coupling
                                            
                                            // 2. 이를 개선하기 위해서 "느슨한 결합"으로 변경할 필요가 있음
                                            //    => loose-coupling
                                            //    => 이를 "의존성 주입"으로 해결 (의존성주입: Dependency-Injection. 줄여서 DI라고 부름)
                                            //    => 이 역할을 대신 해주는 Nest.js 기능: IoC 컨테이너 (알아서 new 해서 넣어주는 녀석. 즉 DI 해준다)
                                            //                                         => IoC: Inversion-Of-Control

                                            // 3. "의존성주입"으로 "싱글톤패턴" 구현 가능해짐
                                            //    => "의존성주입"이면, "싱글톤패턴"인가? 그건 아님!!
// 상품 API
const productController = new ProductController(cashService, productService)
app.post('/products/buy',productController.buyProduct) // 상품 구매하기 API
app.post('/products/refund', productController.refundProduct)// 상품 환불하기 API

// 상품권 API
const couponController = new CouponController(cashService)
app.post('/coupons/buy', couponController.buyCoupon) // 상품권 구매 API

// 게시판 API
// app.get('boards/...')

app.listen(3000) // 포트번호