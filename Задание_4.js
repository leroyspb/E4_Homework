function ElectricalAppliance(name) { // создаем родителя для всех электроприборов
    this.powerSupply = 220
    this.name = name
    this.powerOn = false

}


ElectricalAppliance.prototype.onOffSwitch = function (OnOffSwitch) { // функция для включения / выключения девайсов
    this.powerOn = OnOffSwitch === 'on'; // По умолчанию все девайсы выключены
}

ElectricalAppliance.prototype.energyConsumption = function (perHour) { // Посчитаем потребление электроэнергии
    // Расход электроэнергии (кВт.ч) = мощность прибора (кВт) × время использования (ч). Исходя из этой формулы делаем расчет.
    if (this.powerOn){ // если есть питание то считаем
        const consump = ((this.devicePower / 1000) * perHour).toFixed(2) ;
         console.log(`Электроприбор ${this.name} за ${perHour} час(-а, -ов) 
         постоянной работы потребляет ${consump} КилоВатт(-а).`)
    } else {
        console.log(`Прибор ${this.name} выключен, потребления нет`)
    }
}

function Microwave(name, brand, devicePower, color) { // создаем конструктор девайсов
    this.name = name
    this.brand = brand
    this.devicePower = devicePower

}

Microwave.prototype = new ElectricalAppliance()
Microwave.prototype.getParameters = function () {
    console.log(`Информация электроприбора ${this.name}`)
  for (const key in this) {
      if (typeof this[key] !== "function") { // убираем все лишнее с вывода для рационального отображения
          console.log(`${key}: ${this[key]}`);
      }
  }
  console.log('\n')
}


function TV(name, brand, devicePower) { // создаем конструктор девайсов
    this.name = name
    this.brand = brand
    this.devicePower = devicePower
}

TV.prototype = new ElectricalAppliance()
TV.prototype.getParameters = function () {
    console.log(`Информация электроприбора  ${this.name}`)
  for (const key in this) {
      if (typeof this[key] !== "function") { // убираем все лишнее с вывода для рационального отображения
          console.log(`${key}: ${this[key]}`)
      }
  }
}


// создаем экземпляры класса
const microwave = new Microwave('myMicrowave', 'Samsung', 1500 )
const kettle = new Microwave('smartKettle', 'Electrolux', 1000)

const ledtv = new TV('ledTvWithSmartOption', 'Sony', 60)
const notebook = new TV('notebook', 'Sony', 150)

microwave.getParameters() // сводка параметров прибора (приборы поумолчанию выключены)
microwave.energyConsumption(3) // убеждаемся что нет потребления при выключенном приборе
microwave.onOffSwitch('on') // включаем питание на приборе
microwave.energyConsumption(3) // выводим потребление

kettle.onOffSwitch('on')
kettle.energyConsumption(3)

ledtv.onOffSwitch('on')
ledtv.energyConsumption(17)