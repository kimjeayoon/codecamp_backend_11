import { ApolloServer, gql } from "apollo-server";
import { checkValidationPhone, getToken, sendTokenToSMS} from "./phone.js"

const typeDefs = gql`
  
  input CreateTokenOfPhone {
    myphone : String
  }

  input GetToken {
    mycount : String
  }

  input SendTokenToSMSInput {
    phoneNum : String
    tokenNum : String
  }

# Board에 관한 Query는 
# 로직 내에 Query가 없는 채로 실행했을 때 나타나는
# "Error: Query root type must be provided." 에러 방지를 위한 것입니다.
type BoardReturn {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [BoardReturn]
  }reateTokenOfPhone: () => {
    //     const PhoneNumber = req.body.qqq

    //      // 1. 휴대폰번호 자릿수 맞는지 확인하기(10~11자리)
    //     const isValid =  checkPhone(PhoneNumber)
    //     if(isValid === false) {
    //         return
    //     }
    //         // 2. 핸드폰 토큰 6자리 만들기
    //     const myToken =  getToken()

    //         // 3. 핸드폰번호에 토큰 전송하기
    //     sendTokenToSMS(PhoneNumber, myToken)

    //     res.send("인증완료!!!")
    // }
    type sendTokenToSMSInput {
      #  sendTokenToSMS(phoneNum : String, tokenNum : String!): String
      sendTokenToSMS(createBoardInput : CreateBoardInput!): String
    }

    type getToken {
      # getToken (mycount : String!): String
      getToken (getToken : GetToken) : String
    }

  type Mutation {
    # 1. 아래에 createTokenOfPhone API의 요청 데이터 타입을 지정해 주세요.
      # createTokenOfPhone (myphone : String, result: String!): String
      createTokenOfPhone (createTokenOfPhone : CreateTokenOfPhone) : String
  }
`;

const resolvers = {
  Query: {
    fetchBoards: (_, args) => {
      return [
        {
          number: 1,
          writer: "철수",
          title: "제목입니다",
          contents: "내용입니다",
        },
        {
          number: 2,
          writer: "영희",
          title: "좋은 날씨입니다",
          contents: "내용입니다",
        }
      ];
    },
  },
    

  Mutation: {
    createTokenOfPhone: (_, args) => {
      // 2. 아래 로직을 만들어 주세요.
      // (힌트: phone.js 내에 존재하는 함수들을 사용해서 로직을 완성해 주시면 됩니다.
      //  로직 구성이 어려우신 분들은 rest_api 폴더 내에 존재하는 index.js 파일을 참고해 주세요.)


      // 2-1. 휴대폰번호 자릿수 맞는지 확인하기
      //console.log()
    
      // 2-2. 휴대폰 번호 자릿수가 맞다면 핸드폰 토큰 4자리 만들기

      // 2-3. 만든 토큰을 핸드폰번호에 토큰 전송하기
      console.log(args.createTokenOfPhone + "번호로 인증번호" + args.getToken + "을 전송합니다!!")

      return "인증완료"      
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors : true,
});

server.listen(3000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});