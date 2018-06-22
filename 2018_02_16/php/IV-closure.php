<?php
    // Part IV. Closure.

    // Solution:
    function sum($number) {
        $firstNumber = $number;
    
        return function(...$numbers) use (&$firstNumber) {
            foreach ($numbers as $value) {
                $firstNumber = $firstNumber + $value;
            }

            return $firstNumber;
        };
    }

    $two = sum(2); // 2^ is the first (base) number.
    
    echo $two(1)."\n"; // 2^ + 1 = 3*;
    echo $two(3)."\n"; // 3* + 3 = 6*;
    echo $two(5)."\n"; // 6* + 5 = 11*;
    echo $two(7, 2)."\n"; // 11* + 7 + 2 = 20*.
    echo $two(12) + $two(9);
    /* 1. (20* + 12) = 32*;
    2. (32* + 9) = 41*;
    1. (32* + 41*) = 73*; */
?>