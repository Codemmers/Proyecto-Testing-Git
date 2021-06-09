<?php
    require_once '../connection/conn.php';
    if(isset($_POST)){
        $name = isset($_POST['name']) ? htmlentities($_POST["name"]) : false;
        $email = isset($_POST['email']) ? htmlentities($_POST["email"]) : false;
        $password = isset($_POST['password']) ? htmlentities($_POST["password"]) : false;
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
    if(count($errores) == 0){
        //Guarda en la base de datos
        $password_segura = password_hash($password, PASSWORD_BCRYPT, ['cost'=>7]);
        $sql = "INSERT INTO users VALUES(null, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param('sss',$name,$email,$password_segura);
        $stmt->execute();
        if($stmt->affected_rows){
            $guardado = true;
            $id = $stmt->insert_id;
        }else{
            $guardado = false;
        }
        $stmt->close();
    }

    if ($guardado) {
        //Envia al usuario registrado al index
        $consulta = "SELECT * FROM users WHERE id = $id";
        $resultado = $conn->query($consulta);
        $registro = $resultado->fetch_assoc();
        if($registro["id"]){
            session_start();
            $_SESSION["name"] = $registro["user_name"];
            $_SESSION["id"] = $registro["id"];
            header("location: ../index.php");
        }
            
    }else{
        echo "ha ocurrido un error en la consulta";
    }


?>