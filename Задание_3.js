// Задание 3.
//
// Написать функцию, которая создает пустой объект, но без прототипа.


createBlankObjFunc = () => {
    return Object.create(null);
}
// Для проверки результата запускаем console.log
console.log(createBlankObjFunc()) // [Object: null prototype] {}


