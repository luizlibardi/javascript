dizerOi("Zoro")

function dizerOi(nome) {
    console.log("Olá "+ nome);
}

dizerOi("Luffy");
dizerOi("Nami");

var dizerOla = function dizerOi(nome) {
    console.log("Olá "+ nome);
}

dizerOla("Luffy");

var dizerTchau = new Function("nome", "console.log('Tchau ' + nome);");

dizerTchau("Nami");