"use strict";

// Part II. Task #8. Callback hell.

// Solution:
console.time('c1');

setTimeout(() => {
    console.timeEnd('c1');
    console.time('c2');

    setTimeout(() => {
        console.timeEnd('c2');
        console.time('c3');

        setTimeout(() => {
            console.timeEnd('c3');
        }, 10000);
    }, 7000);
}, 3000);