

const botaoMenu = document.getElementById("botao-menu");
const menu = document.getElementById("menu");

botaoMenu.addEventListener("click", function () {
    menu.classList.toggle("mostrar");
});



const linksMenu = document.querySelectorAll(".menu a");

linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {
        menu.classList.remove("mostrar");
    });

});




const botaoTema = document.getElementById("botao-tema");

if (localStorage.getItem("tema") === "claro") {
    document.body.classList.add("claro");
    botaoTema.textContent = "🌙";
}

botaoTema.addEventListener("click", function () {

    document.body.classList.toggle("claro");

    if (document.body.classList.contains("claro")) {

        localStorage.setItem("tema", "claro");
        botaoTema.textContent = "🌙";

    } else {

        localStorage.setItem("tema", "escuro");
        botaoTema.textContent = "☀";

    }

});




const texto = "Desenvolvedor Web";
const titulo = document.querySelector(".inicio h2");

let contador = 0;

function escreverTexto() {

    if (contador < texto.length) {

        titulo.textContent = texto.substring(0, contador + 1);
        contador++;

        setTimeout(escreverTexto, 100);

    }

}

titulo.textContent = "";
escreverTexto();




const secoes = document.querySelectorAll(".secao");

secoes.forEach(function (secao) {
    secao.classList.add("animar");
});


function verificarAnimacao() {

    secoes.forEach(function (secao) {

        const posicao = secao.getBoundingClientRect().top;

        if (posicao < window.innerHeight - 100) {
            secao.classList.add("aparecer");
        }

    });

}

window.addEventListener("scroll", verificarAnimacao);

verificarAnimacao();



const telefone = document.getElementById("telefone");

telefone.addEventListener("input", function () {

    let numero = telefone.value.replace(/\D/g, "");

    if (numero.length > 11) {
        numero = numero.substring(0, 11);
    }

    if (numero.length <= 10) {

        numero = numero.replace(
            /^(\d{2})(\d{4})(\d{0,4})/,
            "($1) $2-$3"
        );

    } else {

        numero = numero.replace(
            /^(\d{2})(\d{5})(\d{0,4})/,
            "($1) $2-$3"
        );

    }

    telefone.value = numero;

});




const formulario = document.getElementById("formulario");
const modal = document.getElementById("modal");
const fecharModal = document.getElementById("fechar-modal");
const botaoOk = document.getElementById("botao-ok");


formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    modal.classList.add("mostrar");

    formulario.reset();

});


fecharModal.addEventListener("click", function () {

    modal.classList.remove("mostrar");

});


botaoOk.addEventListener("click", function () {

    modal.classList.remove("mostrar");

});



modal.addEventListener("click", function (evento) {

    if (evento.target === modal) {
        modal.classList.remove("mostrar");
    }

});