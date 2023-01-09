
function qqq(ssNb){
    if(ssNb.includes("-") !== true) {
       console.log("에러 발생!!! 형식이 올바르지 않습니다!!!")
       return false
    } else {
        return true
    }
}

function lengthCheck(ssNb) {
    const frontNum = ssNb.slice(0, 6);
    const endNum = ssNb.slice(7);
  
    if (frontNum.length !== 6 || endNum.length !== 7) {
      console.log("에러 발생!!! 개수를 제대로 입력해주세요!!!");
      return false
    } else {
        return true
    }
}

function securityNumber(ssNb) {
    return ssNb.substr(0, 8).padEnd(14, "*");   
  }



function customRegistrationNumber(ssNb) {
    const isValid = qqq(ssNb)
    if(isValid === false) {
        return
    }

    const isValid1 = lengthCheck(ssNb)
    if (isValid1 === false) {
        return
    }
    console.log(securityNumber(ssNb))


}

customRegistrationNumber("222222-2222222") 






