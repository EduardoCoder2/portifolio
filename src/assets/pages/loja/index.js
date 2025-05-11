
let contador = 0;
const imagens = document.querySelectorAll('.imagem');
const totalimagens = imagens.length;

function mostraproximaimagem(){
    imagens[contador].classList.remove('ativa');    

    contador = (contador + 1) % totalimagens;

    imagens[contador].classList.add('ativa')
}

setInterval(mostraproximaimagem, 6000);

const elementosvg = document.getElementById('imagemsvg');