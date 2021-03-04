function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((acc, valor) => acc * valor, 1);
}

function concatenaString(...args: string[]): string {
  return args.reduce((acc, valor) => acc + valor, '');
}

console.log(multiplicaArgs(5, 5));

console.log(concatenaString('5', '5'));
