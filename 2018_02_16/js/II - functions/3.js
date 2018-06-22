"use strict";

// Part II. Task #3. Wrapper.

// Solution:
function num2rgb(color1 = 0, color2 = 0, color3 = 0) {
    return `rgb(${color1}, ${color2}, ${color3})`;
}

function generateColor() {
    return Math.floor(Math.random() * 255);
}

console.log(num2rgb(generateColor(), generateColor(), generateColor()));