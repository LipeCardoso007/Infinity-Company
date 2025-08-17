<?php
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $nome  = $_POST["nome"]  ?? '';
    $email = $_POST["email"] ?? '';
    $senha = $_POST["senha"] ?? '';

    // Criptografar senha
    $senha_hash = password_hash($senha, PASSWORD_DEFAULT);

    // Mostrar resultado
    echo "<h2>Cadastro realizado!</h2>";
    echo "Nome: " . htmlspecialchars($nome) . "<br>";
    echo "Email: " . htmlspecialchars($email) . "<br>";
    echo "Senha (hash): " . $senha_hash;
} else {
    echo "Acesso inválido!";
}
?>
