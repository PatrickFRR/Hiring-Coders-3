const pessoa={
    nome: 'Pk',
    sobrenome: 'Ribeiro',
    idade: 41,
    profissao: 'escritor'
  };

  console.log(pessoa);

// metodo sem desestruc utilizado para repartir o objeto
// let nome = pessoa.nome;
// let sobrenome= pessoa.sobrenome;
// let idade = pessoa.idade;
// let profissao = pessoa.profissao;

// utilizando o desestruct

// let {nome, sobrenome, idade, profissao} = pessoa;
let {nome, idade} = pessoa;

// console.log(nome, sobrenome, idade, profissao);

console.log(nome, idade);
