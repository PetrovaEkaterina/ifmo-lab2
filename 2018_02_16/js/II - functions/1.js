"use strict";

// Part II. Task #1. Calling of functions without parentheses.
function greeting(firstPart, secondPart) {
    console.log([firstPart, secondPart].join(", "));
}

// Solution #1. Operator new.
new greeting("Hello", "World!");

// Solution #2. Method 'call'.
greeting.call(null, "Hello", "World!");

// Solution #3. Method 'apply'.
greeting.apply(null, ["Hello", "World!"]);