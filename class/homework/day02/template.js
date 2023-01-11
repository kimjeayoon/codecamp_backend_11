
export function userEmail(email) {
    if (email === undefined || email.includes("@") === false) {
        console.log("에러 발생!!! 이메일이 올바르지 않습니다!!")
        return false
    } else {
        return true
    }
}

export function ssNdCheck(ssNd){
    if(ssNd.includes("-") !== true) {
       console.log("에러 발생!!! 주민번호가이 올바르지 않습니다!!!")
        return false
    } else {
        return true
    }
}

export function lengthCheck(ssNd) {
    const frontNum = ssNd.slice(0, 6);
    const endNum = ssNd.slice(7);
  
    if (frontNum.length !== 6 || endNum.length !== 7) {
      console.log("에러 발생!!! 개수를 제대로 입력해주세요!!!");
      return false
    } else {
        return true
    }
}

// export function securityNumber(ssNb) {
//     return ssNb.substr(0, 8).padEnd(14, "*");   
// }

export function checkPhone(phoneNb) {
    if(phoneNb.length < 10 || phoneNb.length > 11) {
        console.log("에러 발생!!! 핸드폰번호를 제대로 입력해주세요.");
        return false
    } else {
        return true
    }
}

export function getToday(today) {
    if(today === undefined) {
        console.log("에러 발생!!! 가입날짜가 표시가 안되고있습니다.");
        return false
    } else {
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        var date = today.getDate();
        var hours = today.getHours(); 
        var minutes = today.getMinutes();  
        var seconds = today.getSeconds();
        console.log("가입 날짜는 " + year + "년" + month + "월 " + date + "일 " +  hours + ":" + minutes + ":" + seconds + "입니다")
        return true
    }
    
}

export function welcomeUser({name, email, ssNd, phoneNb, site}) {
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
    return mytemplate;
}

export function sendTemplateToEmail(myEmail, result) {
    console.log(myEmail + "이메일로 가입환영템플릿 " + result + "를 전송합니다.")    
}