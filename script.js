// MODO CLARO E ESCURO

const botaoTema = document.getElementById("tema");

botaoTema.addEventListener("click", function () {

    document.body.classList.toggle("claro");

    if (document.body.classList.contains("claro")) {
        botaoTema.textContent = "☀️";
    } else {
        botaoTema.textContent = "🌙";
    }

});


// MÁSCARA DE TELEFONE

const telefone = document.getElementById("telefone");

telefone.addEventListener("input", function () {

    let valor = telefone.value.replace(/\D/g, "");

    if (valor.length > 11) {
        valor = valor.substring(0, 11);
    }

    if (valor.length > 6) {

        valor = valor.replace(
            /^(\d{2})(\d{5})(\d{0,4}).*/,
            "($1) $2-$3"
        );

    } else if (valor.length > 2) {

        valor = valor.replace(
            /^(\d{2})(\d{0,5})/,
            "($1) $2"
        );

    }

    telefone.value = valor;

});


// FORMULÁRIO

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;

    alert("Obrigado pelo contato, " + nome + "!");

    formulario.reset();

});