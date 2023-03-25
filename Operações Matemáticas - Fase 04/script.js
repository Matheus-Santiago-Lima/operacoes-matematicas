
let fisrtNumber = prompt ('Digite o primeiro número:')
let secondNumber = prompt ('Digite o segundo número:')

fisrtNumber = Number(fisrtNumber);
secondNumber = Number(secondNumber);

const sum = fisrtNumber + secondNumber;
const sub = fisrtNumber - secondNumber;
const multi = fisrtNumber * secondNumber;
const div = (fisrtNumber / secondNumber).toFixed(2);
const restDiv = fisrtNumber % secondNumber;


alert('Soma: '+ sum)
alert('Subtração: '+ sub)
alert('Multiplicação: '+ multi)
alert('Divisão: '+ div)
alert('Resto da divisão: '+ restDiv)

if ((sum % 2) == 0) {
    alert('A soma dos dois números é par: '+ sum)
} else {
    alert('A soma dos dois números é ímpar: ' + sum)
}

if (fisrtNumber == secondNumber) {
    alert('Os números inseridos são iguais.')
} else {
    alert('Os números inseridos são diferentes.')
}