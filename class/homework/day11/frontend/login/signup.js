

// 휴대폰 인증 토큰 전송API를 요청해주세요.
const getValidationNumber = async () => {
  document.querySelector("#ValidationInputWrapper").style.display = "flex";
  const phone1 = document.getElementById('PhoneNumber01').value;
  const phone2 = document.getElementById('PhoneNumber02').value;
  const phone3 = document.getElementById('PhoneNumber03').value;

  const phone = phone1 + phone2 + phone3;
  axios
        .post('http://127.0.0.1:3000/tokens/phone', {
            phone
        })
        .then((res) => {
            console.log(res.data);
        });
    console.log("인증번호를 보냈습니다")
};

// 핸드폰 인증 완료 API를 요청해주세요.
const submitToken = async () => {
  const token = document.getElementById("TokenInput").value
  const phone1 = document.getElementById('PhoneNumber01').value;
  const phone2 = document.getElementById('PhoneNumber02').value;
  const phone3 = document.getElementById('PhoneNumber03').value;

  const phone = phone1 + phone2 + phone3;
  axios
        .patch("http://127.0.0.1:3000/tokens/phone", {
            phone,
            token
        })
        .then((res) => {
            console.log(res.data);
        })
    console.log("인증이 완료되었습니다")
};

// 회원 가입 API를 요청해주세요.
const submitSignup = async () => {
  const name = document.getElementById('SignupName').value;
  const personal1 = document.getElementById('SignupPersonal1').value;
  const personal2 = document.getElementById('SignupPersonal2').value;
  const prefer = document.getElementById('SignupPrefer').value;
  const email = document.getElementById('SignupEmail').value;
  const pwd = document.getElementById('SignupPwd').value;
  const phone1 = document.getElementById('PhoneNumber01').value;
  const phone2 = document.getElementById('PhoneNumber02').value;
  const phone3 = document.getElementById('PhoneNumber03').value;

  const personal = personal1 + '-' + personal2.replace(/[0-9]+/gi, '*******')
  const phone = phone1 + phone2 + phone3;


  axios
      .post('http://127.0.0.1:3000/users', {
          name,
          email,
          phone,
          personal,
          pwd,
          prefer,
      })
      .then((res) => {
          console.log(res.data);
      });
  console.log("회원 가입 완료");
};
