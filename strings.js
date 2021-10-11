var s = "Ned,Jon,Robb,Sansa,Bran,Arya,Rickon";

// Encontrando a primeira posição da palavra
console.log(s.indexOf("coming"));

// Encontrando a ultima posição da palavra
console.log(s.lastIndexOf("coming"));

// Encontrando a palavra a partir entre as posições do indice passadas no parametro
console.log(s.slice(4, 10));

// Encontrando a palavra a partir entre as posições do indice passadas e quantidade de caracteres
console.log(s.substr(4, 6));

// Substituindo strings
console.log(s.replace("winter", "summer"));

console.log(s.toUpperCase());

console.log(s.toLowerCase());

console.log(s + "!!");

console.log(s.concat("!"));

console.log(s.split(","));
