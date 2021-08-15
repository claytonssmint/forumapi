// Capturar/selecionar os elementos de interesse//

let botaoPedra = document.getElementById("botaoPedra");
let botaoPapel = document.getElementById("botaoPapel");
let botaoTesoura = document.getElementById("botaoTesoura");
let botaoResetar = document.getElementById("botaoResetar");
let apresentacao = document.getElementById("result");
let pontuacaoDoUsuario = 0;
let pontuacaoDoComputador = 0;



// getElementByid é pegar o elemento pelo ID //

/* Teste de captura, para testes
botaoPapel.style.backgroundColor = "red"
console.log(botaoPedra, botaoPapel, botaoTesoura); */

// Criar a junção jogar()
function jogar(evento) {
    let idClicado = evento.target.id;
    let jogadaDoUsuario = idClicado.replace("botao", "").toLowerCase();

    let jogadaDoComputador = jogaComputador();
    let jogada = jogadaDoUsuario + jogadaDoComputador;
    console.log(jogada);
    if (
        jogada == "papelpedra" ||
        jogada == "tesourapapel" ||
        jogada == "pedratesoura"
    ) {
        console.log("Usuário ganha")
        pontuacaoDoUsuario++;
        apresentacao.innerHTML = `Você jogou ${jogadaDoUsuario}. O computador jogou ${jogadaDoComputador}. Você ganhou!`;
        evento.target.className = "green-glow";

    } else if (
        jogada == "pedrapapel" ||
        jogada == "papeltesoura" ||
        jogada == "tesourapedra"
    ) {
        console.log("Computador ganhou")
        pontuacaoDoComputador++;
        apresentacao.innerHTML = `Você jogou ${jogadaDoUsuario}. O computador jogou ${jogadaDoComputador}. Você perdeu!`;
        evento.target.className = "red-glow";
    } else {
        console.log("Empate!")
        apresentacao.innerHTML = `Você jogou ${jogadaDoUsuario}. O computador jogou ${jogadaDoComputador}. Deu empate!`;

    }
    setTimeout(function () {
        evento.target.className = ""
    }, 300);

    mostraPlacar()

}

function jogaComputador() {
    // passo 1: Sortear e guardar um número numa variável
    let sorteado = 30 * Math.random();

    // passo 2: verificar em que pedaço da régua ele está
    if (sorteado <= 10) {
        return "pedra";
    } else if (sorteado > 10 && sorteado <= 20) {
        return "papel";
    } else {
        return "tesoura";
    }

    // passo 3: retornar pedra, papel ou tesousa, dependendo do número obtido 
}

function mostraPlacar() {
    // Capturar o elemento que mostra os pontos do usuário
    let placarUsuario = document.getElementById("placarUsuario");
    placarUsuario.innerHTML = pontuacaoDoUsuario;

    // Alterar o conteúdo desse elemento com o pontoacaodousuario


    let placarComputador = document.getElementById("placarComputador")
    placarComputador.innerHTML = pontuacaoDoComputador;

    // Capturar o elemento de id="placares"
    let placares = document.getElementById("placares");

    if (pontuacaoDoUsuario < pontuacaoDoComputador) {
        placares.className = "red-glow"

    } else if (pontuacaoDoUsuario > pontuacaoDoComputador) {
        placares.className = "green-glow "

    } else {
        placares.className = "";
    }
}

function resetarPlacar() {
    pontuacaoDoUsuario = 0;
    pontuacaoDoComputador = 0;
    mostraPlacar();

}


// Associar o click dos botões à função jogar
botaoPedra.onclick = jogar;
botaoPapel.onclick = jogar;
botaoTesoura.onclick = jogar;
botaoResetar.onclick = resetarPlacar;