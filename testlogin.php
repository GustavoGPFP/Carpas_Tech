<?php

    //print_r($_REQUEST);
    if(isset($_POST['submit']) && !empty($_POST['email']) && !empty($_POST['senha']))
    {
        //acessa 
        include_once('config.php');
        $email = $_POST['email'];
        $senha = $_POST['senha'];

       // print_r('Email: ' . $email);
       // print_r('<br>');
       // print_r('Senha: ' . $senha)


       $sql = "SELECT * FROM cadastro WHERE email = '$email' and senha = '$senha'";


       $result = $conn->query($sql);

       // print_r($sql); // validação que existe X email com aquela senha
       // print_r($result);

        if(mysqli_num_rows($sresult) < 1)
        {
            print_r('Não Existe');
        }
        else
        {
            print_r('Existe');
        }
       
    }
    else{
        //não acessa
        header('Location: login.php');
    }


?>