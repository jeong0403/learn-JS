export function plus(a: number, b: number) {
  console.log(`${a} + ${b} = ${a + b}`);
  return a + b;
}

export function minus(a: number, b: number) {
  console.log(`${a} - ${b} = ${a - b}`);
  return a - b;
}

// export default function multiply(a: number, b: number) { // export를 함수 선언할 때 앞에 붙여도 되고, 아래와 같이 deault로 작성해도 된다.
//   console.log(`${a} * ${b} = ${a * b}`);
//   return a * b;
// }

function multiply(a: number, b: number) {
  console.log(`${a} * ${b} = ${a * b}`);
  return a * b;
}

export type Member = {
  name: string;
  age: number;
}

export default { plus, minus, multiply };

