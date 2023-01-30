import { getToday } from "./utils.js"
import nodemailer from 'nodemailer';
import axios from 'axios'
import cheerio from 'cheerio'




export function userName(name) {
    if(name === '') {
        console.log("이름을 입력안했습니다!!!")
        return false
    } else {
        return true
    }
}

export function userPrefer(prefer) {
    if(prefer === '') {
        console.log("주소를 입력안했습니다!!!")
     return false
    } else {
        return true
    }
}

export function userEmail(email) {
    if(email === '' || email.includes("@") !== true) {
        console.log("형식이 올바르지 않습니다")
        return false
    } else {
        return true
    }
}

export function userPassword(pwd) {
    if(pwd === '') {
        console.log("비밀번호를 입력안했습니다!!!")
        return false
    } else {
        return true
    }
}

export const Prefers = async (prefer) => {
    const url = prefer
    const og = {};
    const result = await axios.get(url)
    const $ = cheerio.load(result.data)
    
    $("meta").each((index, el) => {
        if($(el).attr("property") && $(el).attr("property").includes("og:")){
            const key = $(el).attr("property") // og:title, og: description, ...
            const value = $(el).attr("content") // 네이버, 네이버 메인에서 ~~
            if(key.includes(key.slice(3))) og[key.slice(3)] = value
        }
    });
    return og;
}


export function welcomeUser({ name, prefer, email, phone }) {
    const mytemplate = `
    <html>
        <body>
            <div style="displeay: flex; flex-direction: column; align-items: center;">
                <div style="width: 500px;">
                    <h1>${name}님 가입을 환영합니다</h1>
                    <hr />
                    <div>이름 : ${name}</div>
                    <div> 이메일 : ${email}</div>
                    <div>전화번호 : ${phone}</div>
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

    console.log(myEmail + "이메일로 가입환영템플릿 " + result + "를 전송합니다.")    
}