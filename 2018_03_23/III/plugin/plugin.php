<?php
    /*
        Plugin Name: Vasily Kovalev plugin for link addition to footer.
    */
    add_action('wp_footer', function ($content) {
        $link = json_decode(file_get_contents('https://kodaktor.ru/j/wplink')) -> {'alink'};

        return $content . '<a href="' . 
               $link -> {'href'} . 
               '" target="' . 
               $link -> {'target'} . 
               '">' . 
                    $link -> {'textContent'} . 
               '</a>';
    });
?>
