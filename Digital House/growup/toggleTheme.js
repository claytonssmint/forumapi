let botaoAlterarTema = document.getElementById('botaoAlterarTema');
let header = document.querySelector('header');
let body = document.querySelector('body');

function alterarTema() {

    body.style.backgroundColor = ('red');

}

botaoAlterarTema.onclick = alterarTema;