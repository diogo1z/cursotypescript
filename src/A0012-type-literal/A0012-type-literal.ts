// eslint-disable-next-line @typescript-eslint/no-unused-vars
let x = 10;

x = 0b1010;

const y = 10;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let a: 100 = 100;

let b = 119 as const;

const person = {
  name: 'teste' as const,
  lastname: 'last',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo') {
  return cor;
}

console.log(escolhaCor('Amarelo'));

person.lastname = 'last 2';
export default 1;
