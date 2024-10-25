function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let numero = obterNumeroAleatorio(de, ate);
    let sorteados = [];

    // Obtém o elemento da imagem usando índice 0 para pegar o primeiro (e único) elemento com a classe
    let imagem = document.getElementsByClassName('container__imagem-pessoa')[0];

    // Altera a imagem se a quantidade for 6
    if (quantidade === 6) {
        imagem.src = './img/megasena.png';
        imagem.alt = 'Imagem de Mega-Sena';
    }else if (quantidade === 5) {
        imagem.src = './img/quina.png';
        imagem.alt = 'Imagem de Quina';
    }else if (quantidade === 15) {
        imagem.src = './img/lotofacil.png';
        imagem.alt = 'Imagem de Loto-Fácil';
    } else {
        imagem.src = './img/ia.png';
        imagem.alt = 'Uma pessoa com capacete de astronauta';
    }


    do {

        for (let i = 0; i < quantidade; i++) {
            numero = obterNumeroAleatorio(de, ate)

            while (sorteados.includes(numero)) {
                numero = obterNumeroAleatorio(de, ate);
            }

            sorteados.push(numero)
        }
        
        let resultado = document.getElementById('resultado');
        resultado.innerHTML =  `<label class="texto__paragrafo">Números sorteados: ${sorteados.sort(compararNumeros)}</label>`;

    } while (verificaSequenciaExistente(sorteados)); // Verifica se a sequência já foi sorteada antes

}



// Função para verificar se a sequência já foi sorteada
function verificaSequenciaExistente(sorteados) {
    return loteria.some(seq => JSON.stringify(seq) === JSON.stringify(sorteados)
    );
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function compararNumeros(a, b) {
    return a - b;
  }

