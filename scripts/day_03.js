"use scrict";

let log;

function showAlert(message) {
    alert(message);
}

function askUser(promptMessage) {
    return prompt(promptMessage);
}

function getArea() {
    let message = "Você quer seguir para a área de 'Front-End' ou 'Back-End'? Digite o nome da área:";
    let area = askUser(message);
    while (area.toUpperCase() !== "FRONT-END" && area.toUpperCase() !== "BACK-END") {
        showAlert("Área inválida! Por favor, insira 'Front-End' ou 'Back-End'.");
        area = askUser(message);
    }
    log += `${message}\n${area}\n`;
    return area;
}

function getLinguagem(area) {
    let linguagem = "";
    let message = "";
    if (area.toUpperCase() === "FRONT-END") {
        message = "Você quer aprender React ou Vue?";
        linguagem = askUser(message);
        while (linguagem.toUpperCase() !== "REACT" && linguagem.toUpperCase() !== "VUE") {
            showAlert("Linguagem inválida! Por favor, insira 'React' ou 'Vue'.");
            linguagem = askUser(message);
        }
        log += `${message}\n${linguagem}\n`;
    } else if (area.toUpperCase() === "BACK-END") {
        message = "Você quer aprender C# ou Java?";
        linguagem = askUser(message);
        while (linguagem.toUpperCase() !== "C#" && linguagem.toUpperCase() !== "JAVA") {
            showAlert("Linguagem inválida! Por favor, insira 'C#' ou 'Java'.");
            linguagem = askUser(message);
        }
        log += `${message}\n${linguagem}\n`;
    }
    return linguagem;
}

function getEspecialidadeOuFullstack() {
    let message = "Digite 1 para se especializar na área escolhida ou 2 para se tornar Fullstack:";
    let escolha = askUser(message);
    while (escolha !== "1" && escolha !== "2") {
        showAlert("Opção inválida! Por favor, insira 1 ou 2.");
        escolha = askUser(message);
    }
    log += `${message}\n${escolha}\n`;
    return escolha;
}

function askAboutTechnologies() {
    let message = "Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.";
    let msg = askUser(message);
    while (msg.toUpperCase() === "OK") {
        log += `${message}\n${msg}\n`;

        let novaTecnologia = askUser("Qual tecnologia você gostaria de aprender?");
        log += `Qual tecnologia você gostaria de aprender?\n${novaTecnologia}\n`;

        showAlert(`${novaTecnologia} é realmente uma tecnologia muito interessante!`);
        log += `${novaTecnologia} é realmente uma tecnologia muito interessante!\n`;

        msg = askUser(message);
    }
}

function startCareerGuide() {
    const area = getArea();
    const linguagem = getLinguagem(area);
    const especialidadeOuFullstack = getEspecialidadeOuFullstack();
    if (especialidadeOuFullstack == 1) {
        let message = `Continue se especializando em ${linguagem} para dominar a área de ${area.toLowerCase()}!`;
        showAlert(message);
        log += `${message}!\n`;
    } else if (especialidadeOuFullstack == 2) {
        let message = `Chegou a hora de aprender outras linguagens além de ${linguagem} para se tornar Fullstack!`;
        showAlert(message);
        log += `${message}\n`;
    }
    askAboutTechnologies();
}

function executarDesafio() {
    log = "";

    startCareerGuide();

    document.getElementById("saida").textContent = log;
}
