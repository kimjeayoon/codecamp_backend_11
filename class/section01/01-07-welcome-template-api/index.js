function userEmail({email}) {
    if(email.includes(" ") === undefined || email.includes("@") !== true) {
        console.log("에러 발생!!! 형식이 올바르지 않습니다!!!")
        return false
    } else {
        return true
    }
}

function welcomeUser({name,age, school, createdAt}) {
    const mytemplate = `
    <html>
        <body>
            <h1>${name}님 가입을 환영합니다</h1>
            <hr />
            <div>이름 : ${name}</div>
            <div>나이 : ${age}</div>
            <div>학교 : ${school}</div>
            <div>가입일 : ${createdAt}</div>
        </body>
    </html>
 `   
    return mytemplate
    
}

function sendTemplateToEmail(myEmail, result) {
    console.log(myEmail + "이메일로 가입환영템플릿 " + result + "를 전송합니다.")    
}



function createUser({name, age, school, email, createdAt}) {
    // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
    const isValid = userEmail({email})
    if(isValid === false) {
        return
    }
   // 2. 가입환영 템플릿 만들기
    const myTemplate = welcomeUser({name,age, school, createdAt})
    // 3.이메일에 가입환영 템플릿 전송하기
    sendTemplateToEmail(email, myTemplate)
}

const name = "철수"
const age = 8
const school = "다람쥐초등학교"
const email = "a@a.com"
const createdAt = new Date()

createUser({name, age, school, email, createdAt})


