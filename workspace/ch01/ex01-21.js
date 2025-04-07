/*
반복문 - for문

for (초기화; 조건식; 증감식;){
  반복할 구문1;
  반복할 구문2;
}
*/

// let sum = 0; // 초기화
// i = 1; //초기화
// while (i < 10) { // 조건식
//   sum += i; // 실행할 코드
//   i++; // 증감식
// }

//for문은 횟수가 정해져 있을 때 주로 씀. 주로 배열할 때 씀.
for (let i = 1, sum = 0; i <= 10; i++) { // 초기화, 조건식, 증감식
  sum += i; //실행할 코드
  console.log(i, sum);
}


// sum을 바깥에서 실행할거면 괄호에는 sum을 지워야 함. 둘은 다른 의미!
// 만약 괄호 바깥에 sum을 선언하지 않으면, console.log 실행 불가
let sum = 0;
for (let i = 1; i <= 10; i++) { // 초기화, 조건식, 증감식
  sum += i; //실행할 코드
  console.log(i, sum);
}

console.log('합계', sum);


// 횟수가 정해지지 않은 반복문에서 while을 사용함
// 1부터 몇까지 더하면 10000이 넘을까?
sum = 0;
let count = 1;
while (sum < 10000) { // sum이 10000보다 작을때까지 count를 계속 해라
  sum += count;
  count++;
}

console.log(--count, sum);


// 1부터 10까지 출력
// let i = 0;
// while (i <= 10) {
//   console.log(i++);
// }

for(let i = 0; i <= 10;) {
  console.log(i++);
}



// 1부터 10까지의 홀수의 합계 출력
// let i = 1;
// let sum = 0; // 초기화 1
// while (i <= 10) { // 조건식 2
//   if (i % 2 === 1) {
//     sum += i; // sum = sum + i;
//   }
//   i++;
// }
// console.log("1부터 10까지 홀수의 합계 출력", sum);

sum = 0;
for (let i = 1; i <= 10; i +=2 ){
  sum += i;
}
console.log('홀수 합계', sum);



// // 1부터 10까지의 짝수의 합계 출력
// i = 1;
// sum = 0;
// while (i <= 10) {
//   if (i % 2 === 0) {
//     sum += i; // sum = sum + i;
//   }
//   i++;
// }
// console.log("1부터 10까지 짝수의 합계 출력", sum);

sum = 0;
for (let i = 2; i <= 10; i += 2){
  sum += i;
}
console.log('홀수 합계', sum);