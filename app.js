function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    // Adicionei classes do Bootstrap para grid responsivo e estilo de cartão
    cartao.className = 'cartao col-md-4 mb-4';

    cartao.innerHTML = `
    <div class="card h-100 shadow-sm border-0" data-bs-toggle="modal" data-bs-target="#respostaModal" data-categoria="${categoria}" data-pergunta="${pergunta}" data-resposta="${resposta}">
        <div class="card-body d-flex flex-column justify-content-between">
            <h3 class="card-title text-center text-primary">${categoria}</h3>
            <div class="cartao__conteudo__pergunta text-center flex-grow-1 d-flex align-items-center justify-content-center">
                <p class="card-text fs-5 fw-bold">${pergunta}</p>
            </div>
        </div>
    </div>
    `;

    container.appendChild(cartao);
}

// Event listener para quando o modal for exibido
document.getElementById('respostaModal').addEventListener('show.bs.modal', function (event) {
    // Botão que acionou o modal
    let button = event.relatedTarget; 
    // Extrai informações dos atributos data-*
    let categoria = button.getAttribute('data-categoria');
    let pergunta = button.getAttribute('data-pergunta');
    let resposta = button.getAttribute('data-resposta');

    // Atualiza o conteúdo do modal
    let modalTitle = this.querySelector('.modal-title');
    let modalQuestion = this.querySelector('.modal-question');
    let modalAnswer = this.querySelector('.modal-answer');

    modalTitle.textContent = categoria;
    modalQuestion.textContent = pergunta;
    modalAnswer.textContent = resposta;
});