"use strict";

// Part II. Task #7. Sum operator via recursion.

// Solution:
const returnValue = (x, y) => y !== 0 ? 1 + returnValue(x, y - 1) : x;

console.log(returnValue(5, 10));