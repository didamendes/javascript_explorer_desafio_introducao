const numeroUm = Number(prompt("Digite o primeiro numero: "))
const numeroDois = Number(prompt("Digite o segundo numero: "))

const soma = numeroUm + numeroDois
const subtracao = numeroUm - numeroDois
const multipicacao = numeroUm * numeroDois
const divisao = numeroUm / numeroDois
const resto = numeroUm % numeroDois

let par
let iguais

if (soma % 2 == 0) {
    par = true
} else {
    par = false
}

if (numeroUm === numeroDois) {
    iguais = true
} else {
    iguais = false
}

alert(`A soma é ${soma}`)
alert(`A subtracao é ${subtracao}`)
alert(`A multiplicacao é ${multipicacao}`)
alert(`A divisao é ${divisao}`)
alert(`O resto é ${resto}`)
alert(par ? `A soma é par` : `A soma e impar`)
alert(iguais ? `Os numeros são iguais` : `Os numeros são diferente`)