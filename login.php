<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@200&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style/login.css">
    <title>Login</title>
</head>

<body>
    <main class="login__container">
        <form action="controllers/logUser.php" class="login" method="POST">
            <h2 class="login__title">Iniciar sesión</h2>
            <input class="login__inputName" type="email" name="email" placeholder="Email">
            <input class="login__inputPassword" type="password" name="password" placeholder="Contraseña">
            <p class="login__linkRegister">¿No tienes cuenta todavía? <a href="./register.php">Crea una.</a></p>
            <button class="login__button">Iniciar sesión</button>
        </form>
    </main>
</body>

</html>