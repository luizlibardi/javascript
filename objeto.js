var obj = { 
    nome: "luiz",
    sobrenome: "libardi",
    idade: 21,
    apresentar: apresentacao
};

function apresentacao() {
    console.log("Olá, eu sou "+ this.nome + ' ' + this.sobrenome + '.')
}

console.log(obj.sobrenome);

obj.apresentar();