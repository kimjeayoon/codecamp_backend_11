import coolsms from 'coolsms-node-sdk'
const mysms = coolsms.default;



export function checkPhone(myphone) {
    if(myphone.length < 10 || myphone.length > 11) {
        console.log("에러 발생!!! 핸드폰번호를 제대로 입력해주세요.");
        return false
    } else {
        return true
    }
}

export function getToken() {
    const result =  String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    console.log(result)
    return result
}

export async function sendTokenToSMS(myphone, result) {
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;
    const EMAIL_SENDER = process.env.EMAIL_SENDER;

    const messageService = new mysms(SMS_KEY, SMS_SECRET)
    const res = await messageService.sendOne({
        to: myphone,
        from: "01021657814",
        text:`[코드캠프] 안녕하세요^_^ 요청하신 인증번호는 ${result}입니다`
    })
    console.log(res) 
}

