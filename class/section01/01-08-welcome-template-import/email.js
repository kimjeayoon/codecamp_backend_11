import { getToday } from "./utils.js"

export function userEmail({email}) {
    if(email.includes(" ") === undefined || email.includes("@") !== true) {
        console.log("에러 발생!!! 형식이 올바르지 않습니다!!!")
        return false
    } else {
        return true
    }
}

export function welcomeUser({name,age, school}) {
    const mytemplate = `
    <html>
        <body>
            <h1>${name}님 가입을 환영합니다</h1>
            <hr />
            <div>이름 : ${name}</div>
            <div>나이 : ${age}</div>
            <div>학교 : ${school}</div>
            <div>가입일 : ${getToday()}</div>
        </body>
    </html>
 `   
    return mytemplate
    
}

export function sendTemplateToEmail(myEmail, result) {
    console.log(myEmail + "이메일로 가입환영템플릿 " + result + "를 전송합니다.")    
}