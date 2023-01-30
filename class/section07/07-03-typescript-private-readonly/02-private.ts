// public, private, protected, readonly

// class Monster2 {
//     //power = 10 => public, private, protected, readonly 중 1개라도 있으면 생략이 가능하다

//     constructor(private  power: any) {
//         //this.power = power => public, private, protected, readonly 중 1개라도 있으면 생략이 가능하다
//     }

//     attack1 = () =>{
//         console.log("공격하자!!")
//         console.log("내 공격력은" + this.power + "야!!!") // 안에서 접근가능
//         this.power = 30 //안에서 수정가능
//     }
// }

// class 공중몬스터2 extends Monster2{ 
//     attack2 = () =>{
//         console.log("공격하자!!")
//         console.log("내 공격력은" + this.power + "야!!!") // 자식이 접근불가
//         this.power = 30 // 자식이 수정불가
//     }
// }



// const mymonster22 = new 공중몬스터2(20) // mymoster1은 객체(인스턴)를 의미하고 Moster()는 클래스(함수)를 의미
// mymonster22.attack1()
// mymonster22.attack2()
// console.log(mymonster22.power) //밖에서 접근불가
// mymonster22.power = 10 // 밖에서 수정불가

