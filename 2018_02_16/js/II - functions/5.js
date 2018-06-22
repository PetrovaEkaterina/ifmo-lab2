"use strict";

// Part II. Task #5. Function factory.

// Solution:
const pow = (x, y) => x**y;
const base = x => y => y**x;

// Bind.
const piPow = pow.bind(null, Math.PI),
      ePow = pow.bind(null, Math.E),
      twoPow = pow.bind(null, 2);

// Tests.
console.log(piPow(2));
console.log(piPow(3));
console.log(ePow(2));
console.log(ePow(3));
console.log(twoPow(2));
console.log(twoPow(3));

console.log('--------------------------------------------------');

// Carry.
const pow2 = base(2),
      pow3 = base(3),
      pow4 = base(4);

// Tests.
console.log(pow2(2));
console.log(pow2(3));
console.log(pow3(2));
console.log(pow3(3));
console.log(pow4(2));
console.log(pow4(3));