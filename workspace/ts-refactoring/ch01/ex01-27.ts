(() => {
/*
배열의 모든 요소 읽기 1 - for 루프, for...of, for...in
*/

// const arr = [10, 20, 30]; // 배열의 요소들 10, 20, 30

// 배열의 모든 요소 출력(for)
// 배열이 몇 개가 되든 유연하게 출력할 수 있다 : arr.length 사용 (위에 적힌 요소의 개수가 늘어날 때 하드 코딩이면 아래 값을 계속 바꿔줘야 해서 불편함. 그래서 arr.length 사용)
// console.log('for');
// for (let i = 0; i < arr.length; i++) { // i=0, i=1, i=2 경우에 for문이 실행됨
//   const elem = arr[i]; // arr[0], arr[1], arr[2]
//   console.log(i, elem); // 0 10, 1 20, 2 30
// }

/*
// for 배열 모든 요소의 합계, 홀수값의 합계, 짝수값의 합계를 출력

// const arr = [1, 2, 3, 4];
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
let oddSum = 0;
let evenSum = 0;

for (let i = 0; i < arr.length; i++) {
  const num = arr[i];
  sum += num; // 0 + 1 + 2 + 3 + 4
  if (num % 2 === 0) { // 짝수
    evenSum += num;
  } else {// 홀수
    oddSum += num;  
  }
}
console.log('합계', sum);
console.log('짝수 합계', evenSum);
console.log('홀수 합계', oddSum);
*/

// for-of 배열 모든 요소의 합계, 홀수값의 합계, 짝수값의 합계를 출력
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = {
  total: 0,
  even: 0,
  odd: 0,
};

for (const num of arr) {
  sum.total += num;
  num % 2 === 0 ? (sum.even += num) : (sum.odd += num);
}

console.log("총합:", sum.total);
console.log("짝수 합:", sum.even);
console.log("홀수 합:", sum.odd);


// for, 인덱스를 사용할 경우
for (let i=0; i<arr.length; i++){
  let elem = arr[i];
  console.log(elem);
}

// for-of, 인덱스 사용하지 않고 배열 요소의 값만 꺼내서 사용할 때
for (let elem of arr) { // elem가 arr (배열)의 첫 번째 값이 들어있음
  console.log(elem);
}

// for-in
for (let prop in arr) {
  console.log(prop, arr[prop]); // 닷 연산자 못 씀 -> 닷 연산자가 되려면 arr 객체 내에 prop가 있어야 함
  // console.log(prop, arr.prop); // arr 객체 내에 prop 속성 없기 때문에, undefined 출력
}

// 닷 연산자 헷갈려요 arr.prop하면 안 되는 이유 예시
let hello = 'world';
console.log('hello'); // hello로 출력됨! 변수 hello가 아니라 텍스트 'hello'라고 인식하고 출력된다.
console.log(hello); // 이렇게 적어야 변수 hello를 인식한 'world'가 출력된다.
})();
