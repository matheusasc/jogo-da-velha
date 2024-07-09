document.addEventListener('DOMContentLoaded', () => {
    const celulas = document.querySelectorAll('.cell');
    const statusDisplay = document.querySelector('#status');
    const botaoReiniciar = document.querySelector('#restart');

    let jogadorAtual = 'X';
    let jogoAtivo = true;
    let estadoDoJogo = Array(9).fill('');

    const condicoesDeVitoria = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    function exibirStatus(mensagem) {
        statusDisplay.textContent = mensagem;
    }

    function tratarCelulaJogada(celula, indice) {
        estadoDoJogo[indice] = jogadorAtual;
        celula.textContent = jogadorAtual;
    }

    function mudarJogador() {
        jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
        exibirStatus(`É a vez de ${jogadorAtual}`);
    }

    function validarResultado() {
        const rodadaGanha = condicoesDeVitoria.some(condicao => {
            const [a, b, c] = condicao;
            return estadoDoJogo[a] && estadoDoJogo[a] === estadoDoJogo[b] && estadoDoJogo[a] === estadoDoJogo[c];
        });

        if (rodadaGanha) {
            exibirStatus(`Jogador ${jogadorAtual} venceu!`);
            jogoAtivo = false;
            return;
        }

        const rodadaEmpatada = !estadoDoJogo.includes('');
        if (rodadaEmpatada) {
            exibirStatus('Empate!');
            jogoAtivo = false;
            return;
        }

        mudarJogador();
    }

    function tratarCliqueNaCelula(evento) {
        const celulaClicada = evento.target;
        const indiceCelulaClicada = celulaClicada.dataset.index;

        if (estadoDoJogo[indiceCelulaClicada] || !jogoAtivo) {
            return;
        }

        tratarCelulaJogada(celulaClicada, indiceCelulaClicada);
        validarResultado();
    }

    function reiniciarJogo() {
        jogoAtivo = true;
        jogadorAtual = 'X';
        estadoDoJogo = Array(9).fill('');
        exibirStatus(`É a vez de ${jogadorAtual}`);
        celulas.forEach(celula => celula.textContent = '');
    }

    celulas.forEach(celula => celula.addEventListener('click', tratarCliqueNaCelula));
    botaoReiniciar.addEventListener('click', reiniciarJogo);
    exibirStatus(`É a vez de ${jogadorAtual}`);
});
