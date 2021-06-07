<?php
<<<<<<< HEAD
        //Bloque de try catch añadidido
        try {
            $conn = new mysqli("localhost","root","root","proyecto-testing-git_bd");
        } catch (\Exception $e) {
            echo "error " . $e->getMessage();
        }




?>
=======
try {
    $conn = new mysqli("localhost","root","","proyecto-testing-git_bd");
} catch (Exception $e) {
    echo "Conexion fallida. " $e->getMessage();
}

// if(!isset($_SESSION)){
// 	session_start();
// }

>>>>>>> 353be73bf585e46794d52c2fa77c6456b5d55470
