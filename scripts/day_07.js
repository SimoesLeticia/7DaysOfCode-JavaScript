"use strict";

let log;

// Funções de operação
function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero!";
    }
    return a / b;
}

function calculadora() {
    while (true) {
        const operacao = prompt("Escolha uma operação:\n" + "1. Soma\n" + "2. Subtração\n" + "3. Multiplicação\n" + "4. Divisão\n" + "5. Sair");
        log += `Operação escolhida: ${operacao}\n`;

        if (operacao === "5") {
            alert("Até a próxima!");
            log += `Até a próxima!\n`;
            break;
        }

        const num1 = parseFloat(prompt("Digite o primeiro número:"));
        log += `Primeiro número: ${num1}\n`;
        const num2 = parseFloat(prompt("Digite o segundo número:"));
        log += `Segundo número: ${num2}\n`;

        let resultado;

        switch (operacao) {
            case "1":
                resultado = soma(num1, num2);
                break;
            case "2":
                resultado = subtracao(num1, num2);
                break;
            case "3":
                resultado = multiplicacao(num1, num2);
                break;
            case "4":
                resultado = divisao(num1, num2);
                break;
            default:
                alert("Opção inválida! Tente novamente.");
                log += `Opção inválida! Tente novamente.\n`;
                continue;
        }

        log += `O resultado é: ${resultado}\n`;
        alert(`O resultado é: ${resultado}`);
    }
}

function executarDesafio() {
    log = "";

    calculadora();
    
    document.getElementById("saida").textContent = log;
}