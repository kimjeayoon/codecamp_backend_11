import { 
    userEmail, 
    ssNdCheck, 
    lengthCheck,
    checkPhone, 
    welcomeUser, 
    sendTemplateToEmail,
    getToday
} from "./template.js"

function createUser({name, email, ssNd, phoneNb, site, today}) {

    const isValid = userEmail(email)
    if(isValid === false) {
        return
    }

    const isSsNb = ssNdCheck(ssNd)
    if(isSsNb === false) {
        return
    }

    const isReg = lengthCheck(ssNd);
    if (isReg === false) return;
  
    const isPhone = checkPhone(phoneNb);
    if (isPhone === false) return;

    const myTemplate = welcomeUser({name, email, ssNd, phoneNb, site, today})

    sendTemplateToEmail(email, myTemplate)
    
    const isTime = getToday(today);
    if (isTime === false) return;
}

const name = "코드캠프"
const email = "support@codebootcamp.co.kr"
const ssNd = "210510-1******"
const phoneNb = "01000000000"
const site = "codebootcamp.co.kr"
const today = new Date()

createUser({name, email, ssNd, phoneNb, site, today});