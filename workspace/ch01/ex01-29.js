/*
2차원 배열
*/

const numbers = [
  [2, 4, 6, 8],
  [3, 6, 9, 12],
  [4, 8, 12, 16],
  [5, 10, 15, 20],
  [6, 12, 18, 24]
];

console.log(numbers[0]); // [2, 4, 6, 8]
console.log(numbers[1]); // [3, 6, 9, 12]
console.log(numbers[2]); // [4, 8, 12, 16]
console.log(numbers[3]); // [5, 10, 15, 20]

console.log(numbers[0][2]); // 6
console.log(numbers[3][2]); // 15

let sum = 0;
for (let i = 0; i < numbers.length; i++) { // 겉 for문 5번
  console.log(numbers[i]);
  for (let k = 0; k < numbers[i].length; k++){ // 안 for문 4번
    console.log(numbers[i][k]);
    sum += numbers[i][k];
  }
}
console.log(sum);

// 헷갈리면 아래처럼..
// for (let i = 0; i < numbers.length; i++) { // 겉 for문 5번
//   const row = numbers[i]; // 한 줄
//   for (let k = 0; k < row.length; k++){ // 안 for문 4번
//     console.log(row[k]);
//     sum += row[k];
//   }
// }
// console.log(sum);

// index 사용하지 않을거라면 for-of으로 바꾸는게 더 간단해짐
// let total_1 = 0;
// for (const row of numbers) {
//   for (const num of row) {
//     total_1 += num;
//   }
// }
// console.log("총합:", total);