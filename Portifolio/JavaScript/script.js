const lightbox = document.getElementById('lightbox');
const lightboximg = document.getElementById('lightbox-img');
const fechar = document.getElementById('lightbox-fechar');

const imagensprojeto = document.querySelectorAll('.projeto img');

imagensprojeto.forEach(function(img) {
    img.style.cursor = 'pointer';
    img.addEventListener ('click', function () {
        lightboximg.src = img.src;
        lightboximg.alt = img.alt;
        lightbox.classList.add('ativo');
    });
});

fechar.addEventListener('click', function () {
    lightbox.classList.remove('ativo');
    lightboximg.src = '';
});

lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        lightbox.classList.remove('ativo');
        lightboximg.src = '';
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        lightbox.classList.remove('ativo');
        lightboximg.src = '';
    }
});