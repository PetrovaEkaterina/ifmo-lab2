"use strict";

// Task: summing with memory.

// Solution. Closure with reduce() method and rest operator in inner (adder) function.
function sum(number) {
    let firstNumber = number;

    function adder(...numbers) {
        return numbers.reduce((_, element) => firstNumber += element, firstNumber);
    }

    return adder;
}

// Tests.
const two = sum(2); // 2^ is the first (base) number.

console.log(two(1)); // 2^ + 1 = 3*;
console.log(two(3)); // 3* + 3 = 6*;
console.log(two(5)); // 6* + 5 = 11*;
console.log(two(7, 2)); // 11* + 7 + 2 = 20*.
console.log(two(12) + two(9));
/* 1. (20* + 12) = 32*;
2. (32* + 9) = 41*;
1. (32* + 41*) = 73*; */