"use strict";

const echo = console.log;
const $ig = new class {
    constructor($first = 'Elias', $second = 'Goss') {
        this.first = $first;
        this.second = $second;
    }
    
    getFullName() {
        return 'Mr. ' + this.first + ' ' + this.second;
    }
};

echo($ig.getFullName()); // Mr. Elias Goss