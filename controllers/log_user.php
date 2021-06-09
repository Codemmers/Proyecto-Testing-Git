<?php
    require_once '../connection/conn.php';
    if(isset($_POST)){
        $email = isset($_POST['email']) ? htmlentities($_POST["email"]) : false;
        $password = isset($_POST['password']) ? htmlentities($_POST["password"]) : false;
    
        $errores=array();

        if(!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)){
        $email_validado = true;
        }else{
            $email_validado = false;
            $errores['email'] = "El email no es válido";
        }
        if(empty($password)){
            $errores['password'] = "La contraseña está vacia";
        }
        
    }else{
        echo "peticion invalida";
    }