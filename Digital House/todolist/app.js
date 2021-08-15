let inputTarefa = document.getElementById("tf_2do");
let form = document.getElementById("form");


function onFormSubmit(evento) {
    evento.preventDefault();
    addTarefa(inputTarefa.value);
}

function addTarefa(texto) {
    console.log(texto);
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    let tbody = document.querySelector("tbody");
    tbody.appendChild(tr);

    // Inserindo o texto na coluna 2
    td1.innerHTML = '<input type="checkbox">';
    td2.innerText = texto;
    td3.innerText = '[baixa]';
    td4.innerHTML = '<i class="material-icons">delete</i>';


    // sensor de evento click
    tr.addEventListener('click', alterarStatusTarefa);

    // Limpando o campo
    inputTarefa.value = "";

}

function alterarStatusTarefa(evento) {


    // evento.target.parentNode.classList.toggle("done");

    let elementoClicado = evento.target;
    let elementoPai = elementoClicado.parentNode;
    elementoPai.classList.toggle("done");



}

form.onsubmit = onFormSubmit; // executará a função onFormSubmit









/*
// Criando um elemento div e armazenando na variável divSara
let divSara = document.createElement("div");

// Adicionando a div criada (divSara) ao form
form.appendChild(divSara);

// Adicionar conteúdo a divSara
divSara.innerHTML = "<a href='http://google.com'>Alguma coisa que você queira adicionar.....<a>"

divSara.id = "divSuperpoderosa"
divSara.onclick = function () {
    alert("Bom dia!!!")
}
*/