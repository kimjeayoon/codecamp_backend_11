import express from "express"
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { options } from './swagger/config.js';
const app = express()
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));


app.get('/users', function (req, res) { //

    const result = [
      { email: "aaa@gmail.com", name: "철수", phone: "010-1234-5678", personal: "220110-2222222", prefer : "https:/naver.com"},
      { email: "Nick@nick.com", name: "Nick", phone: "010-1234-5678", personal: "220219-1111111", prefer : "https:/google.com"},
      { email: "Judy@judy.com", name: "Judy", phone: "010-1234-5678", personal: "220219-3333333", prefer : "https:/naver.com"},
      { email: "Anna@anna.com", name: "Anna", phone: "010-1234-5678", personal: "220219-4444444", prefer : "https:/google.com"},
      { email: "Elsa@elsa.com", name: "Elsa", phone: "010-1234-5678", personal: "220219-5555555", prefer : "https:/naver.com"},
    ]
  
    res.send(result)
  }) 

  app.get('/starbucks', (req, res) => {
    const result = [
        { name: '아메리카노', kcal: 5 },
        { name: '카페라떼', kcal: 10 },
        { name: '콜드브루', kcal: 15 },
        { name: '카페모카', kcal: 50 },
        { name: '돌체라떼', kcal: 500 },
        { name: '카라멜라떼', kcal: 200 },
        { name: '바닐라라떼', kcal: 20 },
        { name: '에스프레소', kcal: 1 },
        { name: '디카페인', kcal: 5 },
        { name: '오토라떼', kcal: 300 },
    ];
    res.send(result);
  });

  app.listen(3000) 