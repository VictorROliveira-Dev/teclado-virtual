function tocaSom(seletorAudio) {
    const element = document.querySelector(seletorAudio);

    if (element != null && element.localName === 'audio') {
        element.play();
    }
    else {
        alert('Elemento não encontrado!')
    }
}
// capturando uma lista que contém as teclas do teclado
const listaDeTeclas = document.querySelectorAll('.tecla');
//contador para referenciar o indice atual do while

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    //capturando uma tecla
    const tecla = listaDeTeclas[contador];
    //capturando o valor do Id da tecla 
    const instrumento = tecla.classList[1];
    //template string para formar o Id da tecla
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code == 'Space' || evento.code == 'Enter')
            tecla.classList.add('.ativa');
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('.ativa');
    }
}