"use strict";

// Part II. Task #4. Call qv, that will return square of argument.
const qv = function() {
    return this * this;
};

// Solution. Number as a context.
console.log(qv.call(3));