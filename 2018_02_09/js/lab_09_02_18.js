"use strict";

// Лабораторная от 09.02.2018.
// URL: https://github.com/GossJS/js_starters1/blob/05022018/lab09022018.pdf

// Задание I-A.
const age = 17;
const restricted = (age < 18) ? "yes" : (age === 18) ? "not sure" : "no";

console.log(restricted);

// Задание I-B.
// const value = process.argv[2] || NaN;

function check(value) {
    // Проверка на:
    // - NaN;
    // - null;
    // - undefined;
    // - 0;
    // - "";
    // - false.

    return (value !== value) ? "=NaN" : 
           (value === null) ? "=null" : 
           (value === undefined) ? "=undefined" : 
           (value === 0) ? "=0" : 
           (value === "") ? '=""' : 
           (value === false) ? "=false" : "Not know";
}

// Тестирование.
console.log(check(NaN));
console.log(check(null));
console.log(check(undefined));
console.log(check(0));
console.log(check(""));
console.log(check(false));
console.log(check(true)); // Не входящее в список значение.

// console.log(check(value));

// Задание II.
// Вопрос: можно ли "создать" полный по Тьюрингу язык, используя только символы []()+!
// Ответ: Да, можно. Ниже рассмотрено получение числа с помощью 4 символов. () добавляет приоритет и отделяет одни операторы от других.
console.log(!![] + !![]); // Значение 2.

// Задание III.
// Для просмотра байт-кода необходимо через "Node command prompt" запустить файл с флагом "--print-bytecode".
// Пример: node --print-bytecode lab_09_02_18.js