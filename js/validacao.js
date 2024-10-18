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

//

document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const senhaInput = document.getElementById("senha");
    const emailError = document.getElementById("emailError");
    const senhaError = document.getElementById("senhaError");

    // Função para validar o formulário
    function validateForm(event) {
        let valid = true;

        // Verifica se o campo de email está vazio ou inválido
        if (!emailInput.checkValidity()) {
            emailError.style.display = "inline";
            valid = false;
        } else {
            emailError.style.display = "none";
        }

        // Verifica se o campo de senha está vazio
        if (!senhaInput.value) {
            senhaError.style.display = "inline";
            valid = false;
        } else {
            senhaError.style.display = "none";
        }

        // Se o formulário não for válido, evita o envio
        if (!valid) {
            event.preventDefault();
        }
    }

    // Oculta a mensagem de erro enquanto o usuário digita ou foca no campo
    emailInput.addEventListener("input", function () {
        emailError.style.display = "none";
    });

    senhaInput.addEventListener("input", function () {
        senhaError.style.display = "none";
    });

    // Verifica o formulário no envio
    const form = document.getElementById("myForm");
    form.addEventListener("submit", validateForm);
});

function verificarCampos() {
    const gmail = document.getElementById('gmail').value;
    const senha = document.getElementById('senha').value;
    const botao = document.getElementById('submitBtn');

    // Habilita ou desabilita o botão com base no preenchimento dos campos
    if (gmail && senha) {
        botao.disabled = false;
    } else {
        botao.disabled = true;
    }
}
