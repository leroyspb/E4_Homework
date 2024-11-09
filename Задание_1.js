const door = {  // даем объект со свойствами
    weight: 700,
    height: 2000,
    depth: 150,

    }

const obj = Object.create(door)  // присваиваем собственные объекты
obj.ownWeight = 800
obj.ownDepth = 100


getObject=(obj) => {  // функция выводит в консоль ключи и значения только собственных свойств
for (let key in obj) {
    if (obj.hasOwnProperty(key))
    console.log(key + ' = ' + obj[key])
    }
}

getObject(obj)