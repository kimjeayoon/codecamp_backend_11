import { getToday } from "./utils.js"
import nodemailer from 'nodemailer';


export function userEmail(email) {
    if(email.includes(" ") === undefined || email.includes("@") !== true) {
        console.log("에러 발생!!! 형식이 올바르지 않습니다!!!")
        return false
    } else {
        return true
    }
}

export function welcomeUser({ name, personal, prefer, email, myphone }) {
    const mytemplate = `
    <html>
        <body>
            <div style="displeay: flex; flex-direction: column; align-items: center;">
                <div style="width: 500px;">
                    <h1>${name}님 가입을 환영합니다</h1>
                    <hr />
                    <div>이름 : ${name}</div>
                    <div>전화번호 : ${myphone}</div>
                    <div>좋아하는 사이트 : ${prefer}</div>
                    <div style="color: red;">가입일 : ${getToday()}</div>
                </div>
            </div>
        </body>
    </html>
 `   
    return mytemplate
    
}

export async function sendTemplateToEmail({mytemplate, email}) {
    // const EMAIL_USER = process.env.EMAIL_USER;
    // const EMAIL_PASS = process.env.EMAIL_PASS;
    // const EMAIL_SENDER = process.env.EMAIL_SENDER;
    
    const transportr = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    })

    const res = await transportr.sendMail ({
        from: process.env.EMAIL_SENDER,
        to: email,
        subject: "가입을 환영합니다^^",
        html: mytemplate
    })
    console.log(res)

    //console.log(myEmail + "이메일로 가입환영템플릿 " + result + "를 전송합니다.")    
}