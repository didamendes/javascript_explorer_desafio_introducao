const pontoDeCorte = 7
const estudantes = [
    {
        nome: "Diogo Mendes",
        nota1: 8,
        nota2: 8
    },
    {
        nome: "Thaeme",
        nota1: 7,
        nota2: 7
    },
    {
        nome: "Sabrina",
        nota1: 7,
        nota2: 6
    }
]

const media = (nota1, nota2) => ((nota1 + nota2) / 2).toFixed(2)

for (const estudante of estudantes) {
    let mediaFinal = media(estudante.nota1, estudante.nota2)
    const passou = mediaFinal >= pontoDeCorte ? 'Parabens, passou de ano' : 'Que pena, de vejo no posso ano'
    alert(`O aluno ${estudante.nome} tem a seguinte media ${mediaFinal}
    ${passou}`)
}