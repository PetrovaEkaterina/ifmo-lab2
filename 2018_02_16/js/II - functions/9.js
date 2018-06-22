"use strict";

// Part II. Task #9. Decorator.

// Solution:
const logged = function(f) {
    return function() {
        return f.apply(this, arguments);
    };
};

const q = x => x * x;

console.log(logged(q)(2));