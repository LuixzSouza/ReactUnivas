console.log("teste")

// node .\index.js 

// Variaveis
const nome = "Luiz"; // escopo local e não altera
let sobreNome = "Antonio"; // escopo global e altera
var ultimoNome = "Souza"; // escopo local e altera
const idade = "20";

// Funciona, pois o JS faz a inferencia de tipos, 
const nomeCompleto = `nome: ${nome} ${sobreNome} ${ultimoNome} \nidade: ${idade < 50  ? idade : "vazio"}`; // Idade menor que 50 idade se não vazio 
console.log(nomeCompleto)

// arrow function
const soma = (num1 , num2) => {
    return num1 + num2;
}
console.log(`Soma: ${soma(1, 1)}`)

// Desestruturação (Desconstruir - Tirar de algo)
const aluno = {
    nome_aluno: "Luiz", 
    sobreNome_aluno: "Antonio",
    idade_aluno: 20
}

// const nome_aluno = aluno.nome_aluno
// const sobreNome_aluno = aluno.sobreNome_aluno

const {nome_aluno, sobreNome_aluno} = aluno
console.log(nome_aluno, sobreNome_aluno)

// Metodos do array
const numeros = [1,2,3,4,5]
console.log("\n Metodos | Map | Filter | Reduce")

// map
// passar por todos os valores e criar um novo array com mesmo tamanho modificando os elementos
const numeros_dobrados = numeros.map((numero) => numero*2)
console.log(numeros_dobrados)

// filter
const numeros_impares = numeros.filter((numero) => numero%2 != 0)
console.log(numeros_impares)

// reduce
// Reduzir a um unico valor
const somaDoArray = numeros.reduce((anterior, atual) => anterior + atual, 0) // Array - Referencia para iniciar
console.log(somaDoArray)

const alunos =  [
    {nome: "Test1", nota: 8},
    {nome: "Test2", nota: 5},
    {nome: "Test3", nota: 7},
    {nome: "Test4", nota: 4},
]
// Filtrar e mostra em tela apenas os alunos aprovados (nota >= 6)
const aprovados6 = alunos.filter((aluno) => {
    return aluno.nota >= 6;
})
console.log(aprovados6)


// Usando desestruturação mapeie os alunos aprovados para um texto no seguinte formato:
// Aluno(a) {{Nome}} foi Aprovado com nota {{nota}}

// Template string, map e desestruturação