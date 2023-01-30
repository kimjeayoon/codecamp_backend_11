class MyCar {

    기종 = ""
    마력 = ""
    색깔 = ""
    constructor (Car,HorsePower,Color) {
        this.기종 = Car
        this.마력 = HorsePower
        this.색깔 = Color
    }

    Cars = () => {
        console.log('자동차종류:' + this.기종 + '마력:' + this.마력 + "색깔:" + this.색깔)
    }
    
    start = () => {
        console.log("출발하자")
    }

    stop = () => {
        console.log("정지하자")
    }
}

const No1Car = new MyCar('현대차', '60', '파랑')
No1Car.Cars()
No1Car.start()
No1Car.stop()

const No2Car = new MyCar('도요타', '80', '검정')
No1Car.Cars()
No1Car.start()
No1Car.stop()