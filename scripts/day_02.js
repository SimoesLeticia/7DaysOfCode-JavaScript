"use strict";

function validarEntrada(mensagem, validacao) {
    let entrada;
    do {
        entrada = prompt(mensagem);
        if (entrada === null || entrada.trim() === "" || !validacao(entrada)) {
            alert("Entrada inválida. Por favor, tente novamente.");
        }
    } while (entrada === null || entrada.trim() === "" || !validacao(entrada));
    return entrada;
}

function validarIdade(idade) {
    return !isNaN(idade) && idade.trim() !== "" && Number(idade) > 0;
}

function validarGosta(resposta) {
    return resposta === "1" || resposta === "2";
}

function executarDesafio() {
    const nome = validarEntrada("Qual o seu nome?", (entrada) => true);
    const idade = validarEntrada("Quantos anos você tem?", validarIdade);
    const linguagem = validarEntrada("Qual linguagem de programação você está estudando?", (entrada) => true);
    let mensagemInicial = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;
    alert(mensagemInicial);

    const gosta = validarEntrada(`Você gosta de estudar ${linguagem}? Responda com o número 1 - SIM ou 2 - NÃO`, validarGosta);
    let mensagemFinal = "";
    if (gosta === "1") {
        mensagemFinal = "Muito bom! Continue estudando e você terá muito sucesso.";
    } else if (gosta === "2") {
        mensagemFinal = "Ahh que pena... Já tentou aprender outras linguagens?";
    }
    alert(mensagemFinal);

    document.getElementById("saida").textContent = mensagemInicial + "\n" + mensagemFinal;
}
