// Задание 5.
//
// Переписать консольное приложение из предыдущего юнита на классы.
//
// Общие требования:
//
// Имена классов, свойств и методов должны быть информативными;
// Соблюдать best practices;
// Использовать синтаксис ES6.



class ElectricalAppliance {
    constructor(powerSupply, name, devicePower) {
        this.powerSupply = 220
        this.name = name
        this.powerOn = false
        this.devicePower = devicePower
    }

    getParameters() {
        return `Информация электроприбора  ${this.name} в гостинной`
    }


    onOffSwitch() {   // функция для включения / выключения девайс
        this.powerOn = this.onOffSwitch === 'on'; // По умолчанию все девайсы выключены

    }

    energyConsumption() {
        if (this.powerOn) {
            const consump = (this.devicePower / 1000) * perHour;
            let cost = consump * 6.19  // потребление в рублях
            console.log(`Электроприбор ${this.name} за ${perHour} час(-а, -ов) постоянной работы потребляет ${consump} КилоВатт. 
        В средем к оплате ${cost.toFixed(0)} рубл(-ей, -я, -ь)`)
        } else {
            console.log('Прибор выключен, потребления нет')


        }
    }
}

class KitchenElDevice extends ElectricalAppliance {
    constructor(name, brand, devicePower, color) {
        super(name, brand, devicePower, color);
        this.brand = brand
        this.devicePower = devicePower
        this.amper = (this.devicePower / this.powerSupply).toFixed(2) // Получаем значение силы тока, I = P(мощность) / U(напряжение)
        this.color = color
    }
    getParameters() {
        return `Информация электроприбора  ${this.name} в кухне`
    }
}

class LivingRoomElDevice extends ElectricalAppliance {
    constructor(name, brand, devicePower, color) {
        super(name, brand, devicePower, color);
        this.brand = brand
        this.devicePower = devicePower
        this.amper = (this.devicePower / this.powerSupply).toFixed(2)  // Получаем значение силы тока, I = P(мощность) / U(напряжение)
        this.color = color
    }
    getParameters() {
        return `Информация электроприбора  ${this.name} в гостинной`
    }
}


const microwave = new KitchenElDevice('myMicrowave', 'Samsung', 1000, 'black' )
const kettle = new KitchenElDevice('smartKettle', 'Electrolux', 1500, 'white')
const refrigerator = new KitchenElDevice('bigRefrigeratorWithWater', 'LG', 230, 'silver')
const ledtv = new LivingRoomElDevice('ledTvWithSmartOption', 'Sony', 250 , 'black')
const notebook = new LivingRoomElDevice('notebook', 'Sony', 60, 'white')


console.log(microwave.getParameters()) // по умолчанию электроприборы выключены
console.log(microwave.onOffSwitch('on')) // включаем приборы только на кухне


console.log(ledtv.onOffSwitch('on'))
console.log(ledtv.getParameters())

kettle.energyConsumption(3)
refrigerator.energyConsumption(1)

notebook.energyConsumption(3)
