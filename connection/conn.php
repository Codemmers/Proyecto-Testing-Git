<?php
try {
    $conn = new mysqli("localhost","root","","proyecto-testing-git_bd");
} catch (Exception $e) {
    echo "Conexion fallida. " $e->getMessage();
}

// if(!isset($_SESSION)){
// 	session_start();
// }

