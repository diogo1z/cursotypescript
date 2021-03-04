enum Cores {
  VERMELHO = 5,
  AZUL,
  AMARELO,
  ROXO = 'ROXO',
  VERDE = 15,
  PRETO,
}

enum Cores {
  BRANCO = 60,
  ROSA,
}

console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores[6]);
console.log(Cores['ROXO']);
console.log(Cores.ROXO);
console.log(Cores[16]);
console.log(Cores.BRANCO);

function escolherCor(cor: Cores) {
  console.log('cor:', Cores[cor]);
}

escolherCor(Cores.BRANCO);
