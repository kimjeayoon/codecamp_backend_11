import { checkPhone, getToken, sendTokenToSMS} from './services/phone.js'

export class Token {
    postToken = (req, res) => {
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
      }
}