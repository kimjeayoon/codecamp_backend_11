import { getToday } from "./date.js"

function welcomeUser({name, email, ssNd, phoneNb, site}) {
    const mytemplate = `
    <html>
        <body>
            <h1>${name}님 가입을 환영합니다</h1>
            <hr />
            <div>이메일 : ${email}</div>
            <div>주민번호 : ${ssNd}</div>
            <div>휴대폰번호 : ${phoneNb}</div>
            <div>내가 좋아하는 사이트 : ${site}</div>
        </body>
    </html>
 `   
    console.log(mytemplate);
}

const name = "코드캠프"
const email = "support@codebootcamp.co.kr"
const ssNd = "210510-1******"
const phoneNb = "010-0000-0000"
const site = "codebootcamp.co.kr"

welcomeUser({name, email, ssNd, phoneNb, site});