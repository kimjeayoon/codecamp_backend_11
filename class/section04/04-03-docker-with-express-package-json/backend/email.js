import { getToday } from "./utils.js"
import nodemailer from 'nodemailer';


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
            <div style="displeay: flex; flex-direction: column; align-items: center;">
                <div style="width: 500px;">
                    <h1>${name}님 가입을 환영합니다</h1>
                    <hr />
                    <div style="color: red;">이름 : ${name}</div>
                    <div>나이 : ${age}</div>
                    <div>학교 : ${school}</div>
                    <div>가입일 : ${getToday()}</div>
                </div>
            </div>
        </body>
    </html>
 `   
    return mytemplate
    
}

export async function sendTemplateToEmail(myEmail, result) {
    const transportr = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "kimjy9698@gmail.com",
            pass: "jvjdxlubbcvogprs"
        }
    })

    const res = await transportr.sendMail ({
        from: "kimjy9968@gmail.com",
        to: myEmail,
        subject: "[코드캠프] 가입을 축하합니다!!!",
        html: result
    })
    console.log(res)

    //console.log(myEmail + "이메일로 가입환영템플릿 " + result + "를 전송합니다.")    
}