<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@200&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="style/register.css">
    <title>Register</title>
</head>
<body>
    <main class="register__container" >
        <form action="controllers/validate.php" method="POST" class="register" id="formulario">
            <h2 class="register__title">Regístrate</h2>
            <span class="register__subtitle">Coloca tus datos en la parte inferior para continuar</span>
            <input class="register__inputEmail" name="email" type="text" placeholder="Correo">
            <input class="register__inputName" name="name" type="text" placeholder="Nombre">
            <input class="register__inputPassword" name="password"  type="password" placeholder="Contraseña">
            <input class="register__inputPassword"  name="password_v" type="password" placeholder="Confirmar contraseña">
            <p class="register__linkLogin">¿Ya tienes una cuenta? <a href="login.php">Inicia sesión.</a></p>
            <input class="register__button"  id="Registrarme" type="submit" value="Registrarme">
            <!-- <button class="register__button">Registrarme</button> -->
        </form>
    </main>
    
    
    
</body>
</html>