const dadosClientes: [number, string, string, string?, ...string[]] = [
  1,
  'Nome',
  'Sobre',
];

const dadosClientes2: readonly [number, string] = [11, 'Nome 11'];

dadosClientes[0] = 2;

console.log(dadosClientes);
console.log(dadosClientes2);
