// Evento de clique no botão de login
document.getElementById('loginButton').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validação de login simples
    if (username === 'admin' && password === 'admin') {
        window.location.href = 'produtos.html'; // Redireciona para a página de produtos se o login for bem-sucedido
    } else {
        document.getElementById('loginError').style.display = 'block'; // Exibe mensagem de erro
    }
});

// Verificar se estamos na página de produtos
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('produtos.html')) {
        const productList = document.getElementById('productList');
        const produtos = [
            { id: 1, nome: 'Produto 1', preco: 'R$ 10,00' },
            { id: 2, nome: 'Produto 2', preco: 'R$ 20,00' },
            { id: 3, nome: 'Produto 3', preco: 'R$ 30,00' },
        ];

        // Gerar a lista de produtos dinamicamente
        produtos.forEach(produto => {
            const produtoDiv = document.createElement('div');
            produtoDiv.classList.add('produto');
            produtoDiv.innerHTML = `
                <h3 id="produtoNome-${produto.id}">${produto.nome}</h3>
                <p id="produtoPreco-${produto.id}">${produto.preco}</p>
                <button id="adicionarCarrinho-${produto.id}" class="add-to-cart">Adicionar ao carrinho</button>
            `;
            productList.appendChild(produtoDiv);
        });

        // Adicionar evento de clique para o botão de sair
        const logoutButton = document.getElementById('logoutButton');
        if (logoutButton) {
            logoutButton.addEventListener('click', () => {
                window.location.href = 'index.html'; // Redireciona para a página de login
            });
        }
    }
});
