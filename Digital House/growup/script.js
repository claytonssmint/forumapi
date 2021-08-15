console.log(document.title);
// captura o elemento
let titulo = document.querySelector('h1');
// innerText para capturar conteudo ou alterar

titulo.innerText = "Entre em contato";

// captura o elemento
let header = document.querySelector('header');


// altera a cor de fundo
header.style.backgroundColor = 'orange';

titulo.style.color = 'orange';

let botao = document.querySelector(' form button');

botao.style.backgroundColor = 'orange';


/* eventos em JS */

/* evento disparado quando a página termina de carregar */
window.onload = function () {
    console.log('A página terminou de carregar!');


    /* SELECIONA O BOTÃO DE ENVIAR FORMULÁRIO, QUANDO FOR CLASS USAR O ( . ) E QUANDO FOR ID USAR ( # ) */
    let botaoEnviar = document.querySelector('form button');
    let listaErros = document.querySelector('.erros');
    let form = document.querySelector('form');

    let inputNome = document.querySelector('input#nome');
    let inputEmail = document.querySelector('input#email');
    let inputMensagem = document.querySelector('textarea#mensagem');

    botaoEnviar.addEventListener('click', function (evento) {
        /* interromper envio do formulario */
        evento.preventDefault();

        /* validando campo - nome */
        if (inputNome.value == "") {
            listaErros.innerHTML = "<li>Preencha o campo Nome.</li>";
            inputNome.style.border = "2px solid red";

            /* validação campo-email */
        }
        if (inputEmail.value == "") {
            listaErros.innerHTML += "<li>Preencha corretamente o campo Email</li>";
            inputEmail.style.border = "2px solid red";


        }
        if (inputMensagem.value == "") {
            listaErros.innerHTML += "<li>Preencha o campo Mensagem.</li>";
            inputMensagem.style.border = "2px solid red";

        }

        if (inputNome.value !== "" && inputEmail.value !== "" && inputMensagem.value !== "") {
            Form.submit();
        }

    });

}