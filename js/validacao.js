// Seleciona o campo de e-mail e o botão de envio
const emailInput = document.getElementById('email');
const submitBtn = document.getElementById('submitBtn');
const recuperarBtn = document.getElementById('recuperarBtn');
const senhaInput = document.getElementById('senha'); // Adiciona a referência ao campo de senha
// Mensagem error
const emailError = document.getElementById('emailError');
const senhaError = document.getElementById('senhaError');
// Função para validar o e-mail
function validateEmail() {
    const emailValue = emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // Habilita o botão de recuperação se o e-mail for válido
    if (emailPattern.test(emailValue)) {
        recuperarBtn.disabled = false;
    } else {
        recuperarBtn.disabled = true;
        emailError.textContent = "Email inválido!";
    }
}

// Função para validar a senha
function validarSenha() {
    const senhaValue = senhaInput.value;
   // const senhaError = document.getElementById('senhaError');

    // Condições para a senha ser válida
    if (senhaValue.length < 8) {
    //    senhaError.textContent = "A senha deve ter no mínimo 8 caracteres.";
        submitBtn.disabled = true; // Desabilita o botão
        senhaError.textContent = "Minímo 8 caracters!";
    } else {
      //  senhaError.textContent = ""; // Limpa a mensagem de erro
        submitBtn.disabled = false; // Habilita o botão
    }
}

// Adiciona eventos 'input' aos campos de e-mail e senha para validação
emailInput.addEventListener('input', validateEmail);
senhaInput.addEventListener('input', validarSenha); // Agora senhaInput está corretamente referenciado
