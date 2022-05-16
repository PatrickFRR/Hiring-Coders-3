// let é atualmente a variável mais usada, pois a variável var ocupa muito espaço da memória.
// Sem templete String

let meuNome = "Patrick";
let meuSobrenome = "Ribeiro";
let minhaProfissao = "Developer";

console.log(
  "Olá, eu sou " +
    meuNome +
    " " +
    meuSobrenome +
    " minha profissão é: " +
    minhaProfissao
);

console.log(
  `Olá, meu nome é ${meuNome} ${meuSobrenome} e minha profissão é: ${minhaProfissao}`
);

console.log(`O resultado da soma de 2 + 2 é ${2 + 2}`);


console.log(`O meu objeto json é ${{chave: 'valor'}}`)