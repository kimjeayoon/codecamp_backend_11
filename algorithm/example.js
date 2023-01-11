console.log("안녕하세요~!");

/*1번문제 풀이과정*/
let name = "영희"

/*2번문제 풀이과정*/
/*const,var은 재할당이 안된다*/ 
let name = "철수"

/*3번문제 풀이과정*/

let fruits = ["사과", "바나나", "파인애플"]

// 선생님 풀이

//const fruits = [];
// fruits.push('사과') 실무에서는 push를 많이 이용한다
// fruits.push('바나나')
// fruits.push('파인애플')

// fruits[0] = "사과";
// fruits[1] = "바나나";
// fruits[2] = "파인애플";
/*4번문제 풀이과정*/

let newFruits = []

for(let i = 0; i < fruits.length - 2; i++) {
  newFruits.push(fruits[2])
}

//선생님 풀이
// let newFruits = []

// newFruits.push(fruits[fruits.length - 1])


/*5번문제 풀이과정*/

let newArr = students.slice(0, 3)

/*6번문제 풀이과정*/

const  arr1 = []
const  arr2 = []

arr1.push("맛있는 " + fruits[0])
arr2.push("맛있는 " + fruits[1])

fruits = [...arr1 , ...arr2]

/*7번문제 풀이과정*/

const number = "01012345678"
console.log(arr)

/*8번문제 풀이과정*/

const student = {};

//const student = {name: "철수"};
//student.name = "철수";
//student['name'] = '철수';
student;

/*9번문제 풀이과정*/

student['school'] = school;
//student.school = school;
student;

/*10번문제 풀이과정*/

delete student.drink

/*11번문제 풀이과정*/

classmates[1].school = "다람쥐초등학교"

/*13번문제 풀이과정*/

/*14번문제 풀이과정*/

/*15번문제 풀이과정*/

str = typeof num




