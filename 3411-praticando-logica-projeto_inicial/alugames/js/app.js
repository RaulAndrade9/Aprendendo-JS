let jogosAlugados = 0;

function contarJogosAlugados(){
    console.log(`total de jogos alugados : ${jogosAlugados}`);
}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let alugado = 0
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name')
   
    
    if (imagem.classList.contains('dashboard__item__img--rented')){
       if(confirm(`Tem certeza que deseja devolver o jogo ${nomeJogo.textContent} ?`)) 
       imagem.classList.remove('dashboard__item__img--rented');
       botao.classList.remove('dashboard__item__button--return');
       botao.textContent = 'Alugar';
       jogosAlugados--;
       
       
    } else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return')
        jogosAlugados++;
        
    }

    
    contarJogosAlugados();
}

//verifica os jogos alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarJogosAlugados();
});


//verifica se a palavra é um palindromo
function verificaPalindromo(palavraInserida){
    let resultado = '';
    let palavra = palavraInserida;
    for(var i = palavra.length -1; i >= 0; i--){
        resultado += palavra[i];
    }

    if(resultado === palavra){
        console.log("É um palidromo");
    } else {
        console.log('Não é um palidromo');
    }
}

verificaPalindromo('ovo');

function ordenarNumeros(a, b, c) {
    const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}

ordenarNumeros(5, 10, 15)