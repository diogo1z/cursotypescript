type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = (TemNome & TemSobrenome) | TemIdade;

const pes: Pessoa = {
  nome: 'fdkfjlsfjsdk',
  idade: 20,
};

console.log(pes);

export default 1;
