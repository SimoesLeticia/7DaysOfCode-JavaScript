"use strict"

function executarDesafio() {
    let numeroUm = 1;
    let stringUm = "1";
    let numeroTrinta = 30;
    let stringTrinta = "30";
    let numeroDez = 10;
    let stringDez = "10";
    let resultado = "";
    if (numeroUm == stringUm) {
        resultado += "As variáveis numeroUm e stringUm têm o mesmo valor, mas tipos diferentes\n";
    } else {
        resultado += "As variáveis numeroUm e stringUm não têm o mesmo valor\n";
    }
    if (numeroTrinta === stringTrinta) {
        resultado += "As variáveis numeroTrinta e stringTrinta têm o mesmo valor e mesmo tipo\n";
    } else {
        resultado += "As variáveis numeroTrinta e stringTrinta não têm o mesmo tipo\n";
    }
    if (numeroDez == stringDez) {
        resultado += "As variáveis numeroDez e stringDez têm o mesmo valor, mas tipos diferentes\n";
    } else {
        resultado += "As variáveis numeroDez e stringDez não têm o mesmo valor\n";
    }
    document.getElementById("saida").textContent = resultado;
}
