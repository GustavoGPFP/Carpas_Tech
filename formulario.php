<?php
    if(isset($_POST['submit']))
    {
        print_r($_POST['nome']);
        print_r($_POST['<br>']);
        print_r($_POST['email']);
        print_r($_POST['<br>']);

    }


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>formulario</title>
<style>
       body
    {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    background-image: linear-gradient(45deg, pink, blue);
    }
    .box
    {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
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
   
</head>
<body >
    <div class="box">
        <form action="formulario.php" method="POST">
                <fieldset>
                <legend><b>FORMULÁRIO CLIENTES</b></legend>
                <br>
                <div class="inputBox">
                    <input type="text" name="nome" id="nome" class="inputUser" placeholder="nome completo" required>
                </div>
                <br><br>
                <div class="inputBox">
                    <input type="email" name="email" id="email" class="inputUser" placeholder="email" required>
                </div>
                <br><br>
                <div class="inputBox">
                    <input type="tel" name="telefone" id="telefone" class="inputUser" placeholder="telefone" required>
                </div>
                <br><br>
                <p>Sexo:</p>
                <input type="radio" id="feminino" name="genero" value="feminino" required>
                <label for="feminino">Feminino</label>
                <br>
                <input type="radio" id="masculino" name="genero" value="masculino" required>
                <label for="masculino">Masculino</label>
                <br>
                <input type="radio" id="outro" name="genero" value="outro" required>
                <label for="outro">Outro</label>
                <br>
                <br>
                <div class="inputBox">
                    <label for="data_nascimento"><b>Data Nascimento:</b></label>
                    <input type="date" name="data_nascimento" id="data_nascimento" class="inputUser" required>
                </div>
                <br><br>
                <div class="inputBox">
                    <input type="text" name="cidade" id="cidade" class="inputUser" placeholder="cidade" required>
                </div>
                <br><br>
                <div class="inputBox">
                    <input type="text" name="estado" id="estado" class="inputUser" placeholder="Estado" required>
                </div>
                <br><br>
                <div class="inputBox">
                    <input type="text" name="endereco" id="endereco" class="inputUser" placeholder="Endereço" required>
                </div>
                <br><br>
                <button type="submit" name="submit" id="submit">ENVIAR</button>
            </fieldset>
        </form>
    </div>
</body>
</html>