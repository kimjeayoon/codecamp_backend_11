// const date = new Date{
//     qqq = 3

//     getFullYear() {

//     }

//     getMonth()
//  {

//  }

date = new Date()
console.log(date.getFullYear())
console.log(date.getMonth() + 1)

class Monster {
    power = 10

    constructor(qqq) { //처음만들어질때 한번 실행된다 
        this.power = qqq
    }

    attack = () =>{
        console.log("공격하자!!")
        console.log("내 공격력은" + this.power + "야!!!")
    }

    run = () => {
        console.log("도망가자!!")
    }
}

const mymonster1 = new Monster(20) // mymoster1은 객체(인스턴)를 의미하고 Moster()는 클래스(함수)를 의미
mymonster1.attack()
mymonster1.run()

const mymonster2 = new Monster(50) // Moster안에 constructor(qqq)를 만들어서 값을 넣어주면된다
mymonster2.attack()
mymonster2.run()