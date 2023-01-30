import { CashService } from "./services/cash.service.js"

export class CouponController {

    CashService

    constructor(cashService) {
        this.CashService =cashService
    }

    buyCoupon =  (req, res) => {
        // 1. 가진돈 검증하는 코드
        // const cashService = new CashService()
        const hasMoney = this.CashService.checkValue()

        // 2. 상품권 구매하는 코드
        if(hasMoney) {
            res.send("상품권 구매 완료!!")
        }
    }
}