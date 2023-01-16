import axios from "axios";


// 비동기 방식
function fetchAsync(){
    const result = axios.get("https://koreanjson.com/posts/1") //axios에서 get요청을 할수있는 명렁어 
    console.log("비동기방식: ", result) //줄기없으니 Promise를 준다 { <pending>}
}

fetchAsync()

// // 동기 방식
// async function fetchSync(){ => 함수 중복선언 문제를 피하자!!! ("화살표 함수로 변경")
//     const result = await axios.get("https://koreanjson.com/posts/1") //axios에서 get요청을 할수있는 명렁어 
//     console.log("동기방식: ", result) //제대로된 결과값을 준다 예시로 { title: "...."}
//     console.log("동기방식: ", result.data.title)
// }

const  fetchSync = async () => {
        const result = await axios.get("https://koreanjson.com/posts/1") //axios에서 get요청을 할수있는 명렁어 
        console.log("동기방식: ", result) //제대로된 결과값을 준다 예시로 { title: "...."}
        console.log("동기방식: ", result.data.title)
}

fetchSync()