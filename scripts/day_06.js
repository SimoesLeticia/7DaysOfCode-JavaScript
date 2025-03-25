"use strict";

let log;

// Dicionário de categorias
const categorias = {
    1: "Frutas",
    2: "Laticínios",
    3: "Doces",
    4: "Congelados",
};

const listaFrutas = [];
const listaLaticinios = [];
const listaDoces = [];
const listaCongelados = [];

// Função para exibir as categorias disponíveis
function mostrarCategorias() {
    let mensagemCategorias = "Em qual categoria o item se encaixa?\n";
    for (const [numero, nome] of Object.entries(categorias)) {
        mensagemCategorias += `${numero} - ${nome}\n`;
    }
    return mensagemCategorias;
}

// Função para exibir a lista de compras atual
function exibirListaDeCompras() {
    return `
        Lista de Compras:
        Frutas: ${listaFrutas.join(", ") || "Nenhum item"}
        Laticínios: ${listaLaticinios.join(", ") || "Nenhum item"}
        Doces: ${listaDoces.join(", ") || "Nenhum item"}
        Congelados: ${listaCongelados.join(", ") || "Nenhum item"}
    `;
}

// Função para remover um item da lista
function removerItemDaLista(item) {
    if (listaFrutas.includes(item)) {
        listaFrutas.splice(listaFrutas.indexOf(item), 1);
        alert(`"${item}" foi removido da lista de Frutas.`);
    } else if (listaLaticinios.includes(item)) {
        listaLaticinios.splice(listaLaticinios.indexOf(item), 1);
        alert(`"${item}" foi removido da lista de Laticínios.`);
    } else if (listaDoces.includes(item)) {
        listaDoces.splice(listaDoces.indexOf(item), 1);
        alert(`"${item}" foi removido da lista de Doces.`);
    } else if (listaCongelados.includes(item)) {
        listaCongelados.splice(listaCongelados.indexOf(item), 1);
        alert(`"${item}" foi removido da lista de Congelados.`);
    } else {
        alert(`Não foi possível encontrar o item "${item}" dentro da lista!`);
    }
}

function criarListaDeCompras() {
    let adicionarMais = "1";

    while (adicionarMais !== "2") {

        const listaEstaVazia = listaFrutas.length === 0 && listaLaticinios.length === 0 && listaDoces.length === 0 && listaCongelados.length === 0;

        if (listaEstaVazia) {
            adicionarMais = prompt("Você deseja adicionar um item na lista de compras? Responda:\n1 para sim\n2 para não");
        } else {
            adicionarMais = prompt("Você deseja adicionar um item na lista de compras? Responda:\n1 para sim\n2 para não\n3 para remover item da lista");
        }
        
        while (adicionarMais !== "1" && adicionarMais !== "2" && adicionarMais !== "3") {
            alert("Operação não reconhecida! Por favor, responda 1, 2 ou 3.");
            adicionarMais = prompt("Você deseja adicionar um item na lista de compras? Responda:\n1 para sim\n2 para não\n3 para remover item da lista");
        }
        
        if (adicionarMais === "1") {
            const item = prompt("Qual item você deseja adicionar?");
            const categoria = prompt(mostrarCategorias());

            switch (categoria) {
                case "1":
                    listaFrutas.push(item);
                    break;
                case "2":
                    listaLaticinios.push(item);
                    break;
                case "3":
                    listaDoces.push(item);
                    break;
                case "4":
                    listaCongelados.push(item);
                    break;
                default:
                    alert("Categoria inválida! O item não foi adicionado à lista.");
                    break;
            }
        }
        else if (adicionarMais === "3") {
            if (listaEstaVazia) {
                alert("A lista está vazia! Não há itens para remover.");
            } else {
                alert(exibirListaDeCompras());
                const item = prompt("Qual item você deseja remover?");
                removerItemDaLista(item);
            }
        }
        else if (adicionarMais === "2") {
            break;
        }
    }

    log = exibirListaDeCompras();
    alert(log);
}

function executarDesafio() {
    log = "";    
    criarListaDeCompras();
    document.getElementById("saida").textContent = log;
}
