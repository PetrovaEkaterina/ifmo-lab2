<?php
    // Part II. Task #3. Wrapper.

    // Solution:
    function num2rgb($color1 = 0, $color2 = 0, $color3 = 0) {
        return "rgb(".join(", ", [$color1, $color2, $color3]).")";
    }
    
    function generateColor() {
        return rand(0, 255);
    }

    echo num2rgb(generateColor(), generateColor(), generateColor());
?>