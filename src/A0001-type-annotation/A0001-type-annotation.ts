/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prefer-const */

let nome: string = 'teste';
let idade: number = 18;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');

let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['1', '2', '3'];
let arrayDeStrings2: string[] = ['1', '2', '3'];

let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'teste',
  idade: 19,
};

function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
