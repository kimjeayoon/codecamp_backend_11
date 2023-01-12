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

export function sendTokenToSMS(PhoneNumber, result) {
    console.log(PhoneNumber + "번호로 인증번호 " + result + "를 전송합니다.")    
}

