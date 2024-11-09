const door = { // создаем объект для проверки
    weight: 700,
    height: 2000,
    depth: 150, // проверяем данное свойство

    }

checkPropertyFunc = (str, obj) => { // Функция проверяет наличие свойства в объекте
    if (str in obj ) {
        console.log(true) // Если свойство в наличии, true
    } else {
        console.log(false)} // Иначе false
}

checkPropertyFunc('depth', door) // true