const objetoA: {
  chaveA: string;
  readonly chaveB: string;
  [key: string]: unknown;
} = {
  chaveA: 'A',
  chaveB: 'B',
};

objetoA.chaveA = 'Nova chave';
objetoA.chaveC = 'chave c';
