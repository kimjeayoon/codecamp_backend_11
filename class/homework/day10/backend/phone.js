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
    const result =  String(Math.floor(Math.random() * 1000000))
    .padStart(6, "0");
    return result
}

let interval;
export function getTokenTimer(){
    let timer = 10
    interval = setInterval(() => {
        if(timer >= 0){
            const minutes = Math.floor(timer / 60)
            const seconds = timer % 60

            document.getElementById("token__timer").innerText = minutes + ":" + String(seconds).padStart(2, "0")
            timer -= 1
        } else {
            document.getElementById("token").innerText = "000000"
            document.getElementById("token__button").style = ""
            document.getElementById("token__button").setAttribute("disabled", "true")
            
            document.getElementById("token__timer").innerText = "3:00"
            document.getElementById("token__timer__confirm__button").style = ""
            document.getElementById("token__timer__confirm__button").setAttribute("disabled", "true")
            
            clearInterval(interval)
        }
    }, 1000)
}


export async function sendTokenToSMS(myphone, result) {
    const SMS_KEY = process.env.SMS_KEY;
    const SMS_SECRET = process.env.SMS_SECRET;
    const SMS_SENDER = process.env.SMS_SENDER;
    
    const messageService = new mysms(process.env.SMS_KEY, process.env.SMS_SECRET)
    const res = await messageService.sendOne({
        to: myphone,
        from: process.env.SMS_SENDER,
        text:`[코드캠프] 안녕하세요^_^ 요청하신 인증번호는 ${result}입니다`
    })
}

