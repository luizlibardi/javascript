// Array guarda qualquer tipo de dado

var stark = ["Ned", "Jon", "Rob"];
console.log(stark[1])

var array = "Ned Jon Robb Bran Rickon".split(' ');

console.log(array.toString());
console.log(array.join(' | '));

// Insere o Ultimo elemento
array.push("Sansa");

// Insere o Primeiro elemento
array.unshift("Sansa");

console.log(array);

// Remove o Ultimo elemento
var elemento = array.pop();
elemento = array.shift();

console.log(elemento);
console.log(array);

array[1] = "Jon Snow";

console.log(array);

// Não altera o Array original
var slice = array.slice(3, 4);
console.log(slice);

// Altera o Array original
var splice = array.splice(1, 1, "Arya", "Sansa")
console.log(splice);
console.log(array);

array.splice(3, 1);
console.log(array);

array = array.concat(splice, slice);
console.log(array);
