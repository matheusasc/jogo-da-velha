# Jogo da Velha

Um simples jogo da velha desenvolvido em HTML, CSS e JavaScript.

## Descrição

Este é um jogo da velha interativo para dois jogadores, desenvolvido como um exemplo de projeto web. O jogo permite que dois jogadores alternem turnos, verifique automaticamente por vitórias ou empates e possibilita a reinicialização do jogo.

## Pré-requisitos

Para executar este projeto, você precisa ter o [Node.js](https://nodejs.org/) e o [http-server](https://www.npmjs.com/package/http-server) instalados.

## Instalação

1. **Clone este repositório em sua máquina local:**

    ```bash
    git clone https://github.com/seu-usuario/jogo-da-velha.git
    ```
    
2. **Navegue até o diretório do projeto:**

    ```bash
    cd jogo-da-velha
    ```

3. **Instale o http-server globalmente, caso ainda não o tenha:**

    ```bash
    npm install -g http-server
    ```

### Executando o Jogo

**Dentro do diretório do projeto, inicie o servidor HTTP:**

    ```bash
    http-server
    ```
**Abra seu navegador e navegue até o endereço fornecido pelo http-server (geralmente http://127.0.0.1:8080).**


### Funcionalidades

- Alternância de jogadores entre 'X' e 'O'.
- Verificação automática de vitória ou empate após cada jogada.
- Exibição do status do jogo, indicando o jogador atual, o vencedor ou empate.
- Botão para reiniciar o jogo e começar uma nova partida.