<?php
    //Bloque de try catch añadidido
    try {
        $conn = new mysqli("localhost","root","root","proyecto-testing-git_bd");
    }catch (\Exception $e) {
         echo "error " . $e->getMessage();
    }



