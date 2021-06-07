<?php

require_once '../connection/conn.php'; 


    if(isset($_POST)){
        $name = isset($_POST['name']) ? mysqli_real_escape_string($conn, $_POST['name']) : false;
        $email = isset($_POST['email']) ? mysqli_real_escape_string($conn, $_POST['email']) : false;
        $password = isset($_POST['password']) ? mysqli_real_escape_string($conn, $_POST['password']) : false;
        // $password_v = isset($_POST['password_v']) ? mysqli_real_escape_string($conn, $_POST['password_v']) : false;
    }
    else{
    echo "No encontro datos";
    } 
    $errores=array();

    if(!empty($name) && !is_numeric($name)){
        $name_validado = true;
    }else{
        $name_validado = false;
        $errores['nombre'] = "El nombre no es válido";
    }

    if(!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)){
        $email_validado = true;
    }else{
        $email_validado = false;
        $errores['email'] = "El email no es válido";
    }

    if(!empty($password)){
        $password_validado = true;
    }else{
        $password_validado = false;
        $errores['password'] = "La contraseña está vacía";
    }

    $guardar=false;
    if(count($errores) == 0){
        
        $password_segura = password_hash($password, PASSWORD_BCRYPT, ['cost'=>7]);
        $sql = "INSERT INTO users VALUES(null, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param('sss',$name,$email,$password_segura);
        $stmt->execute();

        if($stmt->affected_rows){
            $guardar = true;
            $id = $stmt->insert_id;
        }else{
            $guardar = false;
        }
        $stmt->close();
    }

    if ($guardar) {
        //Envia al usuario registrado al index
            header("location: ../index.php");
    }else{
        echo "ha ocurrido un error en la consulta";
    }


?>