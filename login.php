<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilo.css">
    <title>LOGIN</title>
</head>
<style> 
    body 
    {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    background-image: linear-gradient(45deg, pink, blue);
    margin: 0; /* Adicionando margem zero para evitar espaçamento indesejado */
    }

    div {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 80px;
    border-radius: 15px;
    color: aliceblue;
    }

    input
    {
    padding: 15px;
    border: none;
    outline: none;
    font-size: 15px;   
    }

    button
    {
    background-color: aquamarine;
    border: none;
    padding: 15px; /*distancia elemensto e borda */
    width: 100%; /*dlargura */
    border-radius: 10px;
    color: purple;
    font-size: 15px;
    cursor: pointer;
    }
    button:hover
    {
    background-color: antiquewhite;
    }
</style>


<body>
    <a href="home.php">voltar</a>
    
    <div class="tela-login">
        <h1>LOGIN</h1>
        <form action="testlogin.php" method="POST">
        <input type="text" name="email" placeholder="nome">
        <br>
        <br>
        <input type="password" name="senha" placeholder="Senha">
        <br>
        <br>
        <button type="submit" name="submit" value="enviar">Logar</button>
        </form>
    </div>
</body>
</html>