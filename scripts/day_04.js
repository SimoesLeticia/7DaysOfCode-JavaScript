"use scrict";

let log;

function isValidChute(chute) {
    return !isNaN(chute) && chute >= 0 && chute <= 10;
}

function startGuessingGame() {
    const numeroAdivinhacao = Math.floor(Math.random() * 11); // Gera um número aleatório entre 0 e 10
    console.log(numeroAdivinhacao);
    log = `Número gerado: ${numeroAdivinhacao}\n`;
    let acertou = false;

    for (let contador = 0; contador < 3; contador++) {
        let chute = prompt("Tente adivinhar o número de 0 a 10:");

        while (!isValidChute(chute)) {
            alert("Chute inválido! Por favor, insira um número entre 0 e 10.");
            chute = prompt("Tente adivinhar o número de 0 a 10:");
        }

        log += `Tentativa ${contador + 1}: ${chute}\n`;

        if (chute == numeroAdivinhacao) {
            alert(`Parabéns, você acertou! O número era ${numeroAdivinhacao}.`);
            log += `Parabéns, você acertou! O número era ${numeroAdivinhacao}.\n`;
            acertou = true;
            break;
        }
        alert("Você errou!");
        log += "Você errou!\n";
    }

    if (!acertou) {
        alert(`Infelizmente, você não acertou. O número era ${numeroAdivinhacao}!`);
        log += `Infelizmente, você não acertou. O número era ${numeroAdivinhacao}!\n`;
    }
}

function executarDesafio() {
    log = "";

    startGuessingGame();

    document.getElementById("saida").textContent = log;
}
