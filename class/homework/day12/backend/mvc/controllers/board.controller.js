//import { Board } from "./models/board.model"
// import { BoardMamber } from "./services/board.js"

// export class BoardController {
//     getBoard = async (req, res) => {
//         // 1. DB에 접속 후, 데이터를 조회 => 데이터를 조회했다고 가정
//         const result = await Board.find()

//         // 2. DB에서 꺼내온 결과를 브라우저에 응답으로 주기 (response) 주기
//         res.send(result)
//       }

//       postBoard = async(req, res) => { //post는 조회하는곳
//         // 1. 브라우저에서 보내준 데이터 확인하기
//         console.log(req)
//         console.log("=================")
//         console.log(req.body)
      
//         // 2. DB에 접속후, 데이터를 저장 => 데이터 저장했다고 가정
//         const board =  new Board({
//           writer: req.body.writer,
//           title: req.body.title,
//           contents: req.body.contents
//         })
//         await board.save()
      
//         // 3. DB에 저장된 결과를 브라우저에 응답(response) 주기
//         res.send('게시물 등록에 성공하였습니다.')
//       }
// }

