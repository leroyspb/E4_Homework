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
    constructor(powerSupply, name) {
        this.powerSupply = 220
        this.name = name
        this.powerOn = false
    }
    getParameters() {
        console.log(`Информация электроприбора  ${this.name} в гостинной`)
        for (const key in this) {
            if (typeof this[key] !== "function") { // убираем все лишнее с вывода для рационального отображения
                console.log(`${key}: ${this[key]}`)
}


    onOffSwitch extends ElectricalAppliance {   // функция для включения / выключения девайс
    constructor(powerOn, onOffSwitch) {
        super(powerOn);
        this.powerOn = onOffSwitch === 'on'; // По умолчанию все девайсы выключены
    }
}

class energyConsumption extends ElectricalAppliance { // Посчитаем расход и сколько это в рублях
    constructor(powerOn, perHour) {
        super(powerOn);
        if (this.powerOn){
        const consump = (this.devicePower / 1000) * perHour ;
        let cost = consump * 6.19  // потребление в рублях
        console.log(`Электроприбор ${this.name} за ${perHour} час(-а, -ов) постоянной работы потребляет ${consump} КилоВатт. 
        В средем к оплате ${cost.toFixed(0)} рубл(-ей, -я, -ь)`)
    } else {
        console.log('Прибор выключен, потребления нет')
    }
console.log('\n')
}
    }


class KitchenElDevice {
constructor(name, brand, devicePower, color) {
    this.name = name
    this.brand = brand
    this.devicePower = devicePower
    this.amper = (this.devicePower / this.powerSupply).toFixed(2) // Получаем значение силы тока, I = P(мощность) / U(напряжение)
    this.color = color
    }
}


class LivingRoomElDevice { // создаем конструктор девайсов в гостиной
    constructor(name, brand, devicePower, color) {
        this.name = name
        this.brand = brand
        this.devicePower = devicePower
        this.amper = (this.devicePower / this.powerSupply).toFixed(2)  // Получаем значение силы тока, I = P(мощность) / U(напряжение)
        this.color = color
    }

}


            }
        }
    }
}


const microwave = new KitchenElDevice('myMicrowave', 'Samsung', 1000, 'black' )
const kettle = new KitchenElDevice('smartKettle', 'Electrolux', 1500, 'white')
const refrigerator = new KitchenElDevice('bigRefrigeratorWithWater', 'LG', 230, 'silver')
const ledtv = new LivingRoomElDevice('ledTvWithSmartOption', 'Sony', 250 , 'black')
const notebook = new LivingRoomElDevice('notebook', 'Sony', 60, 'white')


microwave.getParameters() // по умолчанию электроприборы выключены
KitchenElDevice.prototype.onOffSwitch('on') // включаем приборы только на кухне


ledtv.onOffSwitch('on')
ledtv.getParameters()

kettle.energyConsumption(3)
refrigerator.energyConsumption(1)

notebook.energyConsumption(3)
