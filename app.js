function criaCartao(categoria, pergunta, resposta) {
    console.log('Criando cartão:', categoria, pergunta, resposta);
    
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    // Escapar aspas nas strings para evitar problemas no onclick
    const categoriaEscapada = categoria.replace(/'/g, "\\'");
    const perguntaEscapada = pergunta.replace(/'/g, "\\'");
    const respostaEscapada = resposta.replace(/'/g, "\\'");

    cartao.innerHTML = `
    <div class="card h-100 border-0" onclick="abrirResposta('${categoriaEscapada}', '${perguntaEscapada}', '${respostaEscapada}')">
        <div class="card-body d-flex flex-column justify-content-between">
            <h3 class="card-title text-center">${categoria}</h3>
            <div class="cartao__conteudo__pergunta text-center flex-grow-1 d-flex align-items-center justify-content-center">
                <p class="card-text">${pergunta}</p>
            </div>
        </div>
    </div>
    `;

    container.appendChild(cartao);
}

function abrirResposta(categoria, pergunta, resposta) {
    console.log('Abrindo resposta:', categoria, pergunta, resposta);
    
    // Criar overlay se não existir
    let overlay = document.getElementById('overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'overlay';
        overlay.className = 'overlay';
        overlay.onclick = fecharResposta;
        document.body.appendChild(overlay);
    }

    // Criar aba de resposta se não existir
    let abaResposta = document.getElementById('resposta-aba');
    if (!abaResposta) {
        abaResposta = document.createElement('div');
        abaResposta.id = 'resposta-aba';
        abaResposta.className = 'resposta-aba';
        
        abaResposta.innerHTML = `
            <div class="resposta-header">
                <h3 class="resposta-titulo" id="resposta-titulo"></h3>
                <button class="fechar-btn" onclick="fecharResposta()">×</button>
            </div>
            <p class="resposta-pergunta" id="resposta-pergunta"></p>
            <div class="resposta-conteudo" id="resposta-conteudo"></div>
        `;
        
        document.body.appendChild(abaResposta);
    }

    // Atualizar conteúdo da aba
    document.getElementById('resposta-titulo').textContent = categoria;
    document.getElementById('resposta-pergunta').textContent = pergunta;
    document.getElementById('resposta-conteudo').textContent = resposta;

    // Mostrar overlay e aba
    overlay.classList.add('show');
    abaResposta.classList.add('show');

    // Prevenir scroll do body
    document.body.style.overflow = 'hidden';
}

function fecharResposta() {
    const overlay = document.getElementById('overlay');
    const abaResposta = document.getElementById('resposta-aba');
    
    if (overlay) {
        overlay.classList.remove('show');
    }
    
    if (abaResposta) {
        abaResposta.classList.remove('show');
    }

    // Restaurar scroll do body
    document.body.style.overflow = 'auto';
}

// Fechar aba com tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        fecharResposta();
    }
});