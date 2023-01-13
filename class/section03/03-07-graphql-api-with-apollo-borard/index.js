import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

const typeDefs = `#graphql
    input CreateBoardInput {
        writer : String
        title : String
        contents : String
    }

    type MyResult {
        number : Int
        writer : String
        title : String
        contents : String
    }

    type Query {
        # fetchBoard : MyResult # 객체 1개를 의미한다
        fetchBoards : [MyResult] # 배열 안에 객체 1개 이상을 의미한다
    }

    type Mutation {
        # createBoard(writer : String, title: String, contents: String!): String
        createBoard(createBoardInput : CreateBoardInput!): String
    }
`

const resolvers = {
    Query: {
        fetchBoards: (parent, args, context, info) => {
        // 1. DB에 접속 후, 데이터를 조회 => 데이터를 조회했다고 가정
  const result = [
    { number: 1, writer: "철수", title: "철수입니다!", contents: "철수을 입력했습니다"},
    { number: 2, writer: "영희", title: "영희입니다!", contents: "영희을 입력했습니다"},
    { number: 3, writer: "훈이", title: "훈이입니다!", contents: "훈이을 입력했습니다"}
  ]
  // 2. DB에서 꺼내온 결과를 브라우저에 응답으로 주기 (response) 주기
        }
    },

    Mutation : {
        createBoard: (_, args) => {
             // 1. 브라우저에서 보내준 데이터 확인하기
            console.log(args.createBoardInput.writer)
            console.log(args.createBoardInput.title)
            console.log(args.createBoardInput.contents)


            // 2. DB에 접속후, 데이터를 저장 => 데이터 저장했다고 가정

            // 3. DB에 저장된 결과를 브라우저에 응답(response) 주기
            return "게시물 등록에 성공하였습니다."
        },

        // 과제 아래 API가 작동되로록 만들기 - [힌트: 1), phone.js, 2) req/res 관련부분수정 3) 타입작성하기]
        // createTokenOfPhone: () => {
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
    }
}

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
     cors : true,
    // cors { origin: ["https://naver.com", "https://google.com"] }
})

startStandaloneServer(server) // 4000