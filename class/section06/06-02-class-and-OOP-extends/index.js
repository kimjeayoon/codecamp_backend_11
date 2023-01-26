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

    constructor(qqq) { //처음만들어질때 한번 실행되며 초기값을 생성해줄수 있다
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

class 공중몬스터 extends Monster{ // extends는 상속을 의미한다(부모인 Monster을 상속받은것)
    
    constructor(aaa) {  //자식쪽에 constructor을부여해서 부모에게 새로값을 넘겨준다 값을 새로 덮어쓴걸 의미한다
        super(aaa + 1)
    }
    
    run = () => { //자식쪽에 글을 쓰면 부모쪽 run을 덮어쓴다(오버라이딩이라고 부름)
        console.log("날라서 도망가자!!")
    }
}

class 지상몬스터 extends Monster{

    constructor(bbb) { 
        super(bbb)
    }

    run = () => {  //자식쪽에 글을 쓰면 부모쪽 run을 덮어쓴다(오버라이딩이라고 부름)
        console.log("뛰어서 도망가자!!")
    }
}

const mymonster1 = new 공중몬스터(20) // mymoster1은 객체(인스턴)를 의미하고 Moster()는 클래스(함수)를 의미
mymonster1.attack()
mymonster1.run()

const mymonster2 = new 지상몬스터(50) // Moster안에 constructor(qqq)를 만들어서 값을 넣어주면된다
mymonster2.attack()
mymonster2.run()