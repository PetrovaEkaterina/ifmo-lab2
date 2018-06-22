"use strict";

// Part II. Task #2. IIFE.

// Solution #1. Right outer call.
(function greeting(firstPart, secondPart) {
    console.log([firstPart, secondPart].join(", "));
})("Hello", "World!");

// Solution #2. Right inner call.
(function greeting(firstPart, secondPart) {
    console.log([firstPart, secondPart].join(", "));
}("Hello", "World!"));

// Solution #3. Closure.
(function outer() {
    function greeting(firstPart, secondPart) {
        console.log([firstPart, secondPart].join(", "));
    }

    return greeting(...arguments);
})("Hello", "World!");