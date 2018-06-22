"use strict";

// Решение линейных уравнений методом Крамера.
// URL: https://ru.wikipedia.org/wiki/Метод_Крамера
/*
    a1*x + b1*y = c1;
    a2*x + b2*y = c2;
*/

const [a1, b1, c1, a2, b2, c2] = [1, 3, 2, 9, 2, 7];

const D = a1 * b2 - a2 * b1,
      D1 = c1 * b2 - c2 * b1,
      D2 = a1 * c2 - a2 * c1,
      x = D1 / D,
      y = D2 / D;

console.log(`x = ${x}`);
console.log(`y = ${y}`);
console.log(`${a1}*${x} + ${b1}*${y} = ${c1} is ${a1*x + b1*y === c1}`);
console.log(`${a2}*${x} + ${b2}*${y} = ${c2} is ${a2*x + b2*y === c2}`);