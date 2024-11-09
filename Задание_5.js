class ElectricalAppliance {
    constructor(powerSupply, name, devicePower, perHour) {
        this.powerSupply = 220
        this.name = name
        this.powerOn = false
        this.devicePower = devicePower
        this.perHour = perHour

    }

    enableOnOffSwitch() {
        this.powerOn = true;
    }

    disableOnOffSwitch() {
        this.powerOn = false;
    }

    energyConsumption() {
        if (this.powerOn) {
            console.log(`Электроприбор ${this.name} за ${(this.perHour)} час(-а, -ов)
             постоянной работы потребляет ${(this.devicePower / 1000 * this.perHour).toFixed(2)} КилоВатт(-а, -ов).`)
        console.log('\n')
        } else {
            console.log(`Прибор ${this.name} выключен, потребления нет`)
            console.log('\n')
        }
    }

    getParameters() {
        console.log(`Информация электроприбора ${this.name}`)
        for (const key in this) {
            if (typeof this[key] !== "function") { // убираем все лишнее с вывода для рационального отображения
                console.log(`${key}: ${this[key]}`);
            }
        }
    console.log('\n')
    }
}
class Microwave extends ElectricalAppliance {
    constructor( name, powerSupply, devicePower, perHour) {
        super();
        this.name = name
        this.powerSupply = powerSupply
        this.devicePower = devicePower
        this.perHour = perHour

    }
}

class TV extends ElectricalAppliance {
    constructor(name, powerSupply, devicePower, perHour, system) {
        super();
        this.name = name
        this.powerSupply = powerSupply
        this.devicePower = devicePower
        this.perHour = perHour
        this.system = system
    }
}


const microwave = new Microwave('myMicrowave', 220, 1500, 3 )
const kettle = new Microwave('smartKettle', 220, 1000, 3)
const ledtv = new TV('smartTvSamsung', 220, 60,17, 'AndroidTv')

microwave.getParameters() // смотрим параметры, по умолчанию все приборы выключены
microwave.energyConsumption() // проверяем что при выключенном приборе нет потребления
microwave.enableOnOffSwitch() // подаем питание
microwave.energyConsumption() // считываем потребление


kettle.enableOnOffSwitch()
kettle.energyConsumption()

ledtv.enableOnOffSwitch()
ledtv.energyConsumption()

kettle.disableOnOffSwitch() // перестаем подавать питание на чайник
kettle.energyConsumption() // проверяем что потребления нет

ledtv.getParameters()
kettle.getParameters()
microwave.getParameters()