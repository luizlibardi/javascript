// for, for in, while, do while

var x = 0;

// while(x < 10) {
//     console.log("X é igual a "+ x);
//     x = x + 1;

// }

do {
    console.log("X é igual a "+ x);
    x = x + 1;
}

while(x > 1);

for(var y = 0; y < 10; y++) {
    console.log(y);
}

var obj = {
    nome: 'Luffy',
    sobrenome: 'Monkey D.'
};

for(var prop in obj) {
    console.log(obj[prop]);
}