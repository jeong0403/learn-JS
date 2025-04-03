/*
while문
*/

// 방법1
// 1부터 10까지의 홀수의 합계 출력
let i = 1;
let sum = 0;
while (i <= 10) {
  if (i % 2 === 1) {
    sum += i; // sum = sum + i;
  }
  i++;
}
console.log("1부터 10까지 홀수의 합계 출력", sum);

// 1부터 10까지의 짝수의 합계 출력
i = 1;
sum = 0;
while (i <= 10) {
  if (i % 2 === 0) {
    sum += i; // sum = sum + i;
  }
  i++;
}
console.log("1부터 10까지 짝수의 합계 출력", sum);

// // 1부터 10까지 홀수의 합계 출력
// let i = 1;
// let sum = 0;
// while (i <= 10) {
//   sum += i;
//   i = i + 2;
// }
// console.log(sum);

// // 1부터 10까지 짝수의 합계 출력

// i = 2;
// sum = 0;
// sum = 0;
// while (i <= 10) {
//   sum += i;
//   i = i + 2;
// }
// console.log(sum);

// let oddSum = 0;
// let evenSum = 0;
// let i = 1;

// while (i <= 10) {
//   if (i % 2 === 1) {
//     // 홀수 체크
//     oddSum += i;
//   } else {
//     // 짝수 체크
//     evenSum += i;
//   }
//   i++;
// }

// console.log("홀수합계:", oddSum);
// console.log("짝수합계:", evenSum);
