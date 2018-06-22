<?php
    // Part II. Task #7. Sum operator via recursion.

    // Solution:
    function returnValue($x, $y) {
        return $y !== 0 ? 1 + returnValue($x, $y - 1) : $x;
    };
    
    echo returnValue(5, 10);
?>