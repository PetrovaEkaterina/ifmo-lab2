<?php
    [$a1, $b1, $c1, $a2, $b2, $c2] = [1, 3, 2, 9, 2, 7];
    
    $D = $a1 * $b2 - $a2 * $b1;
    $D1 = $c1 * $b2 - $c2 * $b1;
    $D2 = $a1 * $c2 - $a2 * $c1;
    $x = $D1 / $D;
    $y = $D2 / $D;
    
	echo "x = $x"."\n";
	echo "y = $y"."\n";
	echo "$a1*$x + $b1*$y = $c1 is ".(boolval($a1*$x + $b1*$y == $c1) ? 'true' : 'false')."\n";
	echo "$a2*$x + $b2*$y = $c2 is ".(boolval($a2*$x + $b2*$y == $c2) ? 'true' : 'false')."\n";
?>