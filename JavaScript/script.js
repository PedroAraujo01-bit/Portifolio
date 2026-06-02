// Seleciona os elementos principais do lightbox pelo id para controlar a abertura, a imagem exibida e o fechamento.
const lightbox = document.getElementById('lightbox');
const lightboximg = document.getElementById('lightbox-img');
const fechar = document.getElementById('lightbox-fechar');

// Depois que o Typewriter Effect termina, remove o cursor e devolve o texto ao estado normal.
window.addEventListener('load', function () {
    setTimeout(function () {
        document.body.classList.add('typewriter-finalizado');
    }, 4300);
});

// Busca todas as imagens dentro dos cards de projeto para transformar cada uma em um gatilho do lightbox.
const imagensprojeto = document.querySelectorAll('.projeto img');

// Percorre cada imagem encontrada e adiciona o comportamento de clique individualmente.
imagensprojeto.forEach(function(img) {
    // Mostra visualmente ao usuario que a imagem e clicavel.
    img.style.cursor = 'pointer';
    // Ao clicar em uma imagem do projeto, copia o src e o alt dela para a imagem ampliada do lightbox.
    img.addEventListener ('click', function () {
        lightboximg.src = img.src;
        lightboximg.alt = img.alt;
        // A classe 'ativo' troca o lightbox de escondido para visivel no CSS.
        lightbox.classList.add('ativo');
    });
});

// Fecha o lightbox quando o usuario clica no botao de fechar.
fechar.addEventListener('click', function () {
    lightbox.classList.remove('ativo');
    lightboximg.src = '';
});

// Fecha o lightbox quando o usuario clica fora da imagem ampliada, na area escura de fundo.
lightbox.addEventListener('click', function(e) {
    // Garante que o fechamento aconteca apenas se o clique foi no fundo, e nao na imagem.
    if (e.target === lightbox) {
        lightbox.classList.remove('ativo');
        lightboximg.src = '';
    }
});

// Permite fechar o lightbox pelo teclado usando a tecla Escape, melhorando a usabilidade.
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        lightbox.classList.remove('ativo');
        lightboximg.src = '';
    }
});
