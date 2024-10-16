<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ctprj";

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    echo("Conexão falhou: " . $conn->connect_error);
}
else{
    echo "Conectado com sucesso";
}

?>