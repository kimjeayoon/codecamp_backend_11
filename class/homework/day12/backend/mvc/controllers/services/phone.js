import coolsms from 'coolsms-node-sdk'
const mysms = coolsms.default



export function checkPhone(PhoneNumber) {
    if(PhoneNumber.length < 10 || PhoneNumber.length > 11) {
        console.log("에러 발생!!! 핸드폰번호를 제대로 입력해주세요."); //early-exit 먼저 에러를 찾아서 일찍 종료하는 명령어
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

export async function sendTokenToSMS(PhoneNumber, result) {
    const messageService = new mysms("NCSOEYQPHASRL0JL", "EITRLV9F00ZFR2H9OKGBR5CS9BBWLKGH")
    const res = await messageService.sendOne({
        to: PhoneNumber,
        from: "01021657814",
        text:`[코드캠프] 안녕하세요^_^ 요청하신 인증번호는 ${result}입니다`
    })
    console.log(res)
    console.log(PhoneNumber + "번호로 인증번호 " + result + "를 전송합니다.")    
}

