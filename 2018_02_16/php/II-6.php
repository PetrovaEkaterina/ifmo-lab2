<?php
    // Part II. Task #6. Recursion.

    // Solution:
    function returnValue($number) {
        return $number !== 1 ? $number * returnValue($number - 1) : 1;
    };
    
    echo returnValue(5);
?>