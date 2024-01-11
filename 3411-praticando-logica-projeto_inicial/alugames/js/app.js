function alterarStatus(status) {
    var botao = document.querySelector('.dashboard__item__button');
    var texto_botao = 'Devolver'

    if (status === 1) {
        botao.textContent = texto_botao
        botao.style.backgroundColor = '#95a5a6'; // Altera a cor diretamente usando style
    }

    
    
}