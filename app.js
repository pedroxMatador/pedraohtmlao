// app.js
function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    // Adicionei classes do Bootstrap para grid responsivo
    cartao.className = 'cartao col-md-4 mb-4';

    cartao.innerHTML = `
    <div class="card h-100">
        <div class="card-body d-flex flex-column justify-content-between">
            <h3 class="card-title text-center">${categoria}</h3>
            <div class="cartao__conteudo__pergunta text-center">
                <p class="card-text">${pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta text-center" style="display: none;">
                <p class="card-text">${resposta}</p>
            </div>
        </div>
    </div>
    `;

    let respostaEstaVisivel = false;
    const perguntaElement = cartao.querySelector('.cartao__conteudo__pergunta');
    const respostaElement = cartao.querySelector('.cartao__conteudo__resposta');

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        if (respostaEstaVisivel) {
            perguntaElement.style.display = 'none';
            respostaElement.style.display = 'block';
        } else {
            perguntaElement.style.display = 'block';
            respostaElement.style.display = 'none';
        }
        cartao.classList.toggle('active', respostaEstaVisivel);
    }
    cartao.addEventListener('click', viraCartao);

    container.appendChild(cartao);
}