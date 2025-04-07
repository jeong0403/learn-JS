/*
반복문 - while문
*/

/* 
0부터 10까지 출력하세요. 

*/
//본래 하드 코딩으로 할 것
// console.log(0);
// console.log(1);
// ...
// consle.log(10);

let i = 0;
while (i <= 10) {
  console.log(i++);
}

// // 1부터 10까지의 모든 수의 합계를 출력
// i = 1;
// let sum = 0; // 값 할당 없이 let sum; 만 하면 undifined 상태가 됨 -> NaN 출력
// while (i <= 10) {
//   // i = 1 ~ 10
//   sum += i;
//   i++; // i를 증가시키는 증가연산자를 빼먹으면 무한루프에 빠짐!! (강제종료 필요하니깐 반복문에서 주의!)
// }
// console.log(i);
// console.log(sum);


// let sum = 0;
// let i = 0;
// while( i < 10){
//   ++i;
//   sum += i;
// }
// console.log(sum);