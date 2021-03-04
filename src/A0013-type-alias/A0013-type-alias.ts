type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
};

const pes: Pessoa = {
  idade: 20,
  nome: 'Abc',
};

console.log(pes);
