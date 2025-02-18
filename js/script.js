const tabuleiro = document.getElementById('tabuleiro');
const pecas = [];
let pecaVazia = null;

//função para criar as peças do quebra cabeça
function criarPecas() {
    const numeros = Array.from({length: 16}, (_ ,i)=> i); //numeros de 0 a 15
    embaralharArray(numeros); //Embaralha os numeros
    
    for (let i= 0; i < 16; i++){
        const peca = document.createElement('div');
        peca.style.backgroundImage = "url('/image/imagem.jpg')";
        peca.style.backgroundPosition = '${-(numeros[i] % 4) * 100}px ${-Math.floor(numeros[i] / 4) * 100}px';
        peca.dataset.numero = numeros [i]; //Armazena o numero de peça 
        peca.addEventListener('click', moverPeca); // Adicionar o evento do click

        if (numeros [i] === 0 ) {
            pecaVazia = peca; //Define a peça a vazia
        }
        pecas.push(peca);
        tabuleiro.appendChild(peca);

    
    }

}

//Função para embaralhar um array (Finisher-Yates)
function embaralharArray(array) {
    for (let i = array.lenght - i; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [ array [i], array[j]] = [array[j], array[i]]
    }
}

//Função para mover uma peça 
function moverPecas(event) {
    const pecaClicada = event.target;
    const numerosPecaClicada = parseInt(pecasClicada.dataset.numero);
    const posicaoPecaVazia = pecas.index0f(pecaVazia);
    const posicaoPecaClicada = pecas.index0f(pecaClicada);
    
    //verificar se a peça clicadavé adjacenre à peça vazia 

    if
    (Math.abs(posicaoPecaClicada - posicaoPecaVazia) === 1 || Math.abs(posicaoPecaClicada - posicaoPecaVazia) === 4  ) {
      //Troca as posições das peças
        [pecas[posicaoPecaVazia], pecas[posicaoPecaClicada]] = [pecas[posicaoPecaClicada], pecas[posicaoPecaVazia]];
        
        // Atualiza a peça vazia
        pecaVazia = pecaClicada;

        //Redesenha o tabuleiro
        tabuleiro.innerHTML = '';
        pecas.forEach(peca => tabuleiro.appendChild(peca));

    }

}

    //Inicializar o jogo
    criarPecas ();
   