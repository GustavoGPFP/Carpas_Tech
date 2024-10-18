
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

const catalogo = document.getElementById('catalogo');
const buscador = document.getElementById('buscador');

// Função para renderizar os produtos
function renderizarProdutos(produtosFiltrados) {
    catalogo.innerHTML = ''; // Limpa o catálogo antes de renderizar
    produtosFiltrados.forEach(produto => {
        const divProduto = document.createElement('div');
        divProduto.classList.add('produto');
        divProduto.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.titulo}">
            <h2>${produto.titulo}</h2>
            <p>${produto.descricao}</p>
            <span>${produto.preco}</span>
        `;
        catalogo.appendChild(divProduto);
    });
}

// Função de busca
function buscarProdutos() {
    const termoBusca = buscador.value.toLowerCase();
    const produtosFiltrados = produtos.filter(produto =>
        produto.titulo.toLowerCase().includes(termoBusca) ||
        produto.descricao.toLowerCase().includes(termoBusca)
    );
    renderizarProdutos(produtosFiltrados);
}

// Adiciona evento de input ao buscador
buscador.addEventListener('input', buscarProdutos);

// Renderiza todos os produtos inicialmente
renderizarProdutos(produtos);
