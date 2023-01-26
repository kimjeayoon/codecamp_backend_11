import { CashService } from './services/cash.service.js'
import { ProductService } from "./services/product.service.js"

export class ProductController {
    buyProduct = (req, res) => {
        //  1. 현재 가지고 있는돈을 검증하는 코드(대략 10줄정도 코딩한상태) 10줄짜리를 2줄로 줄임
        const cashService = new CashService()
        const hasMoney = cashService.checkValue() //변수명을 정하는것은 중요하다(무엇을 얘기하는지 알수있기때문에)
        
        //  2.판매여부를 검증하는 코드 (대략 10줄정도 코딩한 상태) 10줄짜리를 2줄로 줄임
        const productService = new ProductService()
        const isSoldout =  productService.checkSoldout()
      
        // 3. 상품 구매하는 코드작성
        if(hasMoney && !isSoldout) {
          res.send("상품 구매 완료!")
        }
      }

      refundProduct = (req, res) =>{
        //  1.판매여부를 검증하는 코드 (대략 10줄정도 코딩한 상태 => 2줄로 줄음)
        const productService = new ProductService()
        const isSoldout = productService.checkSoldout()
        // 2. 상품 환불하는 코드
      
        if(isSoldout) {
          res.send("상품 환불 완료!!")
        }
      
        // 게시판 API
        // app.get('boards/...')
        
      }
}