<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style/style.css">
    <title>ToDo</title>
</head>

<body>
    <main>
        <header class="header">
            <h1><a href="#">TODO</a></h1>
            <div class="header__menu">
                <img src="./img/user-icon.png" alt="Perfil">
                <p><?php echo $_SESSION["name"];?></p>
                <nav>
                    <ul>
                        <li><a href="#">Cerrar sesión</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <section class="task__Container">

            <h2>Introduce un TODO</h2>
            <div class="task__Inputs">
                <input type="text" placeholder="Introduce un todo">
                <button type="button">Crear TODO</button>
            </div>

            <div class="taskList__Container">
                <div class="taskItem">
                    <h3>Todo</h3>
                    <div class="taskButtons">
                        <button type="button" class="editTODO">Edit</button>
                        <button type="button" class="deleteTODO">Delete</button>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <script src="js/scripts.js"></script>
</body>

</html>