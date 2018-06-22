"use strict";

// Task: write quine.

// Solution:
(function self() {require('fs').readFile(process.argv[1], (error, code) => console.log(code.toString()));})();