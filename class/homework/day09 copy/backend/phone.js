import coolsms from 'coolsms-node-sdk'
const mysms = coolsms.default;



export function checkPhone(phone) {
    if(phone.length < 10 || phone.length > 11) {
        console.log("에러 발생!!! 핸드폰번호를 제대로 입력해주세요.");
        return false
    } else {
        return true
    }
}

export function getToken() {
    const token =  String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    console.log(token)
    return token
}

export async function sendTokenToSMS(phone, token) {
    // const SMS_KEY = process.env.SMS_KEY;
    // const SMS_SECRET = process.env.SMS_SECRET;
    // const SMS_SENDER = process.env.SMS_SENDER;
    
    const messageService = new mysms(process.env.SMS_KEY, process.env.SMS_SECRET)
    const res = await messageService.sendOne({
        to: phone,
        from: process.env.SMS_SENDER,
        text:`[코드캠프] 안녕하세요^_^ 요청하신 인증번호는 ${token}입니다`
    })
    console.log(res) 
}

