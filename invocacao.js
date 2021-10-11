function dizerOi(nome) {
    console.log(this);
    console.log("oi, " + nome);
}
dizerOi("Arya");

dizerOi.call({}, "Arya");

dizerOi.apply({}, ["Arya"]);