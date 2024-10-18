// Função para carregar os dados do perfil ao iniciar
window.onload = function() {
    loadProfile();
};

// Função para salvar o perfil
document.getElementById('saveButton').onclick = function() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const bio = document.getElementById('bio').value;
    const photo = document.getElementById('photoPreview').src;

    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('bio', bio);
    localStorage.setItem('photo', photo);

    displayProfile();
};

// Função para exibir o perfil salvo
function displayProfile() {
    document.getElementById('displayUsername').innerText = localStorage.getItem('username');
    document.getElementById('displayEmail').innerText = localStorage.getItem('email');
    document.getElementById('displayBio').innerText = localStorage.getItem('bio');
    document.getElementById('displayPhoto').src = localStorage.getItem('photo');
    document.getElementById('profileDisplay').style.display = 'block'; // Exibe as informações
}

// Função para carregar os dados do perfil
function loadProfile() {
    if (localStorage.getItem('username')) {
        displayProfile();
        document.getElementById('username').value = localStorage.getItem('username');
        document.getElementById('email').value = localStorage.getItem('email');
        document.getElementById('bio').value = localStorage.getItem('bio');
        document.getElementById('photoPreview').src = localStorage.getItem('photo');
    }
}

// Função para visualizar a imagem do perfil
function previewImage(event) {
    const photoPreview = document.getElementById('photoPreview');
    photoPreview.src = URL.createObjectURL(event.target.files[0]);
}

// Função para alterar a cor do cabeçalho
function changeHeaderColor() {
    const headerColor = document.getElementById('headerColor').value;
    document.querySelector('.header').style.backgroundColor = headerColor;
}

// Função para alterar a imagem do cabeçalho
function changeHeaderImage() {
    const headerImage = document.getElementById('headerImage').files[0];
    if (headerImage) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.querySelector('.header').style.backgroundImage = `url(${e.target.result})`;
            document.querySelector('.header').style.backgroundSize = 'cover';
            document.querySelector('.header').style.backgroundPosition = 'center';
        }
        reader.readAsDataURL(headerImage);
    }
}

// Função para habilitar a edição dos campos
document.getElementById('editButton').onclick = function() {
    document.getElementById('username').removeAttribute('readonly');
    document.getElementById('email').removeAttribute('readonly');
    document.getElementById('bio').removeAttribute('readonly');
    document.getElementById('username').focus();
};