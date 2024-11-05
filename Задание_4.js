// Задание 4.
// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер).
// Выбрав прибор, подумайте, какими свойствами он обладает.
// План:
// Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создать экземпляры каждого прибора.
// Вывести в консоль и посмотреть результаты работы, гордиться собой. :)
// Общие требования:
//
// Имена функций, свойств и методов должны быть информативными.
// Соблюдать best practices:
// использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
// информативные имена (а не a, b);
// четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
// использование синтаксиса ES6 (кроме функции-конструкторов) и т. д.


function ElectricalAppliance(name) { // создаем родителя для всех электроприборов
    this.powerSupply = 220
    this.name = name
    this.powerOn = false

}


ElectricalAppliance.prototype.onOffSwitch = function (OnOffSwitch) { // функция для включения / выключения девайсов
    this.powerOn = OnOffSwitch === 'on'; // По умолчанию все девайсы выключены
}

ElectricalAppliance.prototype.energyConsumption = function (perHour) { // Посчитаем расход и сколько это в рублях
    // Расход электроэнергии (кВт.ч) = мощность прибора (кВт) × время использования (ч). Исходя из этой формулы делаем расчет.
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

function KitchenElDevice(name, brand, devicePower, color) { // создаем конструктор девайсов в кухне
    this.name = name
    this.brand = brand
    this.devicePower = devicePower
    this.amper = (this.devicePower / this.powerSupply).toFixed(2) // Получаем значение силы тока, I = P(мощность) / U(напряжение)
    this.color = color

}

KitchenElDevice.prototype = new ElectricalAppliance()
KitchenElDevice.prototype.getParameters = function () {
    console.log(`Информация кухонного электроприбора ${this.name}`)
  for (const key in this) {
      if (typeof this[key] !== "function") { // убираем все лишнее с вывода для рационального отображения
          console.log(`${key}: ${this[key]}`);
      }
  }
  console.log('\n')
}


function LivingRoomElDevice(name, brand, devicePower, color) { // создаем конструктор девайсов в гостиной
    this.name = name
    this.brand = brand
    this.devicePower = devicePower
    this.amper = (this.devicePower / this.powerSupply).toFixed(2)  // Получаем значение силы тока, I = P(мощность) / U(напряжение)
    this.color = color
}

LivingRoomElDevice.prototype = new ElectricalAppliance()
LivingRoomElDevice.prototype.getParameters = function () {
    console.log(`Информация электроприбора  ${this.name} в гостинной`)
  for (const key in this) {
      if (typeof this[key] !== "function") { // убираем все лишнее с вывода для рационального отображения
          console.log(`${key}: ${this[key]}`)

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
