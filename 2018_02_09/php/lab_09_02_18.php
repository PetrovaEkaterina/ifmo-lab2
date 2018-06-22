<?php
    // Лабораторная от 09.02.2018.
    // URL: https://github.com/GossJS/js_starters1/blob/05022018/lab09022018.pdf
    
    // Задание I-A.
    $age = 17;
    $restricted = ($age < 18) ? 'yes' : (($age == 18) ? 'not sure' : 'no');
    echo $restricted."\n";
    
    // Задание I-B.
    function check($value) {
        // Проверка на:
        // - null;
        // - 0;
        // - "";
        // - false.
    
        return ($value === null) ? "=null" : 
               (($value === 0) ? "=0" : 
               (($value === "") ? '=""' : 
               (($value === false) ? "=false" : "Not know")));
    }
    
    // Тестирование.
    echo check(null)."\n";
    echo check(0)."\n";
    echo check("")."\n";
    echo check(false)."\n";
    echo check(true)."\n"; // Не входящее в список значение.
?>