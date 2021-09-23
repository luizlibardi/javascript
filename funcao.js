// console.log(!!undefined)
// console.log('' || 'legal')

function somar(a, b) {
    if(b == undefined) {
        b = 10
    }
    console.log(a + b)
}

somar(3, 4)
// somar(3, 4, 5, 6, 7, 8) // Vai ignorar o resto além dos parâmetros da func
somar(3) // 3 + undefined = NaN

function somar2(a, b) {
    console.log(a + (b || 2)) // B ou 2 -> Como b é 'undefined' = false
}

somar2(3, 4)
somar2(3) // 3 + 2 = 5

function somar3(a = 1, b = 1) {
    console.log(a + b)
}

somar3(3) // 3 + 1(padrão)
somar() // 1 + 1 

// Not a Number - NaN SEMPRE vai ser falso

function subtrair(a, b) {
    return a - b
}

let y = subtrair(594, 185)
y *= 2
console.log(y)

// Function Declaration
function multiplicar1(a, b) {
    return a * b
}

// Function Expression
const multiplicar2 = function(a, b) {
    return a * b
}

console.log(multiplicar1(4, 5))
console.log(multiplicar2(4, 5))

function executar(fn) {
    if(typeof fn === 'function') {
        console.log('Executando...')
        fn(3, 500)
    }
}

executar(/* somar(3, 4) */ 7)
executar(somar3)
