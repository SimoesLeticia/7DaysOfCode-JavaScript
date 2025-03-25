"use scrict";

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

function mostrarCategorias() {
    let mensagemCategorias = "Em qual categoria o item se encaixa?\n";
    for (const [numero, nome] of Object.entries(categorias)) {
        mensagemCategorias += `${numero} - ${nome}\n`;
    }
    return mensagemCategorias;
}

function criarListaDeCompras() {
    let adicionarMais = "1";

    while (adicionarMais !== "2") {
        adicionarMais = prompt("Você deseja adicionar um item na lista de compras? Responda '1 para sim' ou '2 para não'.");

        while (adicionarMais !== "1" && adicionarMais !== "2") {
            alert("Operação não reconhecida! Por favor, responda '1 para sim' ou '2 para não'.");
            adicionarMais = prompt("Você deseja adicionar um item na lista de compras? Responda '1 para sim' ou '2 para não'.");
        }

        if (adicionarMais === "2") {
            break;
        }

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

    // Exibe a lista de compras final
    const listaDeCompras = `
        Lista de Compras:
        Frutas: ${listaFrutas.join(", ") || "Nenhum item"}
        Laticínios: ${listaLaticinios.join(", ") || "Nenhum item"}
        Doces: ${listaDoces.join(", ") || "Nenhum item"}
        Congelados: ${listaCongelados.join(", ") || "Nenhum item"}
    `;

    log = listaDeCompras;

    alert(listaDeCompras);
}

function executarDesafio() {
    log = "";

    criarListaDeCompras();

    document.getElementById("saida").textContent = log;
}
