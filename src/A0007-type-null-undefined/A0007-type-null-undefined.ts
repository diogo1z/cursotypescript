let x;
if (typeof x === 'undefined') x = 20;

console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return { firstName, lastName };
}

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

console.log(createPerson('first'));
console.log(squareOf(3));
console.log(squareOf('3'));
