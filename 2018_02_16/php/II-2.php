<?php
    // Part II. Task #2. IIFE.

    // Solution #1. Standard IIFE.
    ($greeting = function ($firstPart, $secondPart){
        echo join(", ", [$firstPart, $secondPart])."\n";
    })("Hello", "World!");

    // Solution #1. IIFE via call_user_func.
    call_user_func(function ($firstPart, $secondPart) {
        echo join(", ", [$firstPart, $secondPart])."\n";
    }, "Hello", "World!");
?>