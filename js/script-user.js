// script.js

// Função para gerar um nome de usuário aleatório
function generateUsername() {
    const usernames = ['user123', 'johndoe', 'janedoe', 'anonymous', 'guest'];
    return usernames[Math.floor(Math.random() * usernames.length)];
}

// Ao carregar a página, definir o nome de usuário
window.onload = function() {
    const username = generateUsername();
    document.getElementById("username").value = username; // Define o valor do campo de nome de usuário
    document.getElementById("displayUsername").innerText = username; // Exibe o nome de usuário
};

// Função para visualizar a imagem carregada
function previewImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function() {
        const imgPreview = document.getElementById("photoPreview");
        imgPreview.src = reader.result;
        imgPreview.style.display = 'block'; // Exibe a imagem
        document.getElementById("displayPhoto").src = reader.result; // Exibe a imagem no perfil
    }

    if (file) {
        reader.readAsDataURL(file); // Lê a imagem como URL
    }
}

// Manipulação do formulário
document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtendo os valores dos campos
    const name = document.getElementById("name").value;
    const bio = document.getElementById("bio").value;

    // Atualizando a visualização do perfil
    document.getElementById("displayName").innerText = name;
    document.getElementById("displayBio").innerText = bio;

    // Limpando o formulário
    this.reset();
});