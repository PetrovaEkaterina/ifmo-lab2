<?php
    /* безымянный класс */
    /* имя после слова class не допускается */
    $ig = new class {
        function __construct($first = 'Elias', $second = 'Goss') {
            $this->first = $first;
            $this->second = $second;
        }
        
        function getFullName() {
            return 'Mr. ' . $this->first . ' ' . $this->second;
        }
    };
    
    echo($ig -> getFullName()); // Mr. Elias Goss
?>