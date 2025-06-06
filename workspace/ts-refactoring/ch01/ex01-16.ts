(() => {
/*
if문

if(조건식){
 조건식이 참일 때 실행할 코드;
 조건식이 참일 때 실행할 코드;
......
}

*/

const age = 15;
// age가 20 이상이면 "성인" 출력
if (age >= 20) {
  console.log('성인');
}
// age가 20 미만이면 "미성년자" 출력
if (age < 20) {
  console.log('미성년자');
}

const num = 10;
// num이 양수이면 "양수" 출력
if (num > 0)
  console.log('양수'); // 중괄호 없이 사용은 가능하지만, console.log(); 한 번 더 쓰면 if문 바깥에 있는 것으로 인식하고 출력 됨
// num이 음수이면 "음수" 출력
if (num < 0)
  console.log('음수');
// num이 0이면 "0" 출력
if (num === 0) {
  console.log(0);
}

const password = 12334;
// password가 1234면 "로그인 성공!" 출력
if (password === 1234){
  console.log('로그인 성공!');
}
// password가 1234가 아니면 "로그인 실패!" 출력
if (password !== 1234) {
  console.log('로그인 실패!');
}

const num2 = 4;
// num2가 짝수이면 "짝수" 출력
if (num2 % 2 === 0) {
  console.log('짝수');
}
// num2가 홀수이면 "홀수" 출력
if (num2 % 2 === 1) {
  console.log('홀수');
}

const num3 = 12;
// num3가 3의 배수이면 "3의 배수" 출력
if (num3 % 3 === 0){
  console.log('3의 배수');
}
// num3가 3의 배수가 아니면 "3의 배수가 아님" 출력
if (num3 % 3 !== 0){
  console.log('3의 배수가 아님');
}

})();
