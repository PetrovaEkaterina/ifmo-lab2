"use strict";

// Part II. Task #6. Recursion.

// Solution:
const returnValue = (number) => number !== 1 ? number * returnValue(number - 1) : 1;

console.log(returnValue(5));