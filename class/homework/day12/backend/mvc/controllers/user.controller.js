import { userEmail,welcomeUser, sendTemplateToEmail  } from "./services/email.js"

export class User {
    postUser = (req, res) => {
    // const name = req.body.name
    // const age = req.body.age
    // const school = req.body.school
    // const email = req.body.email
    const {name,age,school,email} = req.body //위에 꺼를 간딴하게 줄일수있다
    // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
      const isValid = userEmail({email})
      if(isValid === false) {
          return
      }
     // 2. 가입환영 템플릿 만들기치
      const myTemplate = welcomeUser({name,age, school})
      // 3.이메일에 가입환영 템플릿 전송하기
      sendTemplateToEmail(email, myTemplate)
  
      res.send("가입완료!!!")
  }
} 