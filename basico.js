// console.log('ola')

// variaveis (var, let e const)
// var a = 1
// var b = 2
// const c = a + b 

// console.log(c)

// operadores
// unarios
// let a = 3
// a++ //postfix
// ++a //prefix
// console.log(a)

// binarios (aritimeticos, atribuicao, relacionais, logicos)

// let b = 557
// let x = 2 + 3 // infix

// let a = 3 
// a += 3
// a = a + 3
// a *= 7
// console.log(a)

// > < >= <= !=
// console.log(3 > 2) // true
// console.log(!(3 < 2)) // true
// console.log(!!' ')

// console.log(3 + 4 * 5 + 6)
console.log(2 == '  2    ') // Valor igual, tipo Diferente - True
console.log(2 === '2') // Valor igual, Tipo Igual - False


// ternario
let temSol = false
let estouComDinheiro = false
let vouSair = temSol && estouComDinheiro
// console.log(vouSair ? 'Ebaaa!' : 'Que chato!!!')
let resultado = vouSair ? 'Ebaaa!' : 'Que chato!!!'
console.log(resultado)

//estruturas de controle
let nota = 8.3
let temBomComportamento = false

if(nota >= 9 && temBomComportamento) {
    console.log('Quadro de honra')
    console.log('Parabénss :)')
} else if(nota >= 7) {
    console.log('Aprovado')
} else {
    console.log('Recuperação')
    console.log('é uma pena :/')
}

// Repetição 
for(let i = 0; i < 100; i+= 10) {
    console.log(i)
}

// Array
const notas = [6.5, 7.7, 3.2, 8.1, 9.7]
// for(let i = 0; i < notas.length; i++) {
//     console.log(notas[i])
// }

// for(let nota of notas) {
//     console.log(nota)
// }

notas.forEach(nota => console.log(nota * 2))

// funcao

// Objeto

