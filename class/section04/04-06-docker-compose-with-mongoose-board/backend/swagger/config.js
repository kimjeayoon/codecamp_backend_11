export const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: '나의 API 설명서',
        version: '1.0.0',
      },
    },
    apis: ['./swagger/*.swagger.js'], // *swagger.js라는 폴더를 다 얘기함
  };