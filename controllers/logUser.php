<?php
    require "../connection/conn.php";
    if(isset($_POST)){
        $email = isset($_POST["email"]) ? htmlentities($_POST["email"]) : false;
        $password = isset($_POST["password"]) ? htmlentities($_POST["password"]) : false;
        
        $errores = array();
        if(!$email){
            $errores["email"] = "Campo email vacío";
        }
        if(!$password){
            $errores["password"] = "Campo password vacío";
        }
        if(count($errores) === 0){
            $sql = "SELECT * FROM users WHERE user_email = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param('s',$email);
            $stmt->execute();
            $result = $stmt->get_result();
            $user = $result->fetch_assoc();
            
            if($user["id"]){
                $password_segura = password_hash($password, PASSWORD_BCRYPT, ['cost'=>7]);
                if(password_verify($password,$user["user_pass"])){
                    session_start();
                    $_SESSION["name"] = $user["user_name"];
                    $_SESSION["id"] = $user["id"];
                    header("location: ../index.php");
                }else{
                    echo "contraseña incorrecta";
                }
            }else{
                echo "no se encontro el usuario";
            }
        }else{
            foreach ($errores as $key => $value) {
                echo $value . "<br>";
            }
        }
        
    }