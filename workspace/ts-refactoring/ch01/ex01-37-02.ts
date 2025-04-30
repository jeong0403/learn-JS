(() => {
console.log('1. 프로그램 시작.');
// 함수를 호출하면 무조건 frame에 stack이 쌓인다.
// 함수가 종료되면 쌓여 있던 frame은 소멸한다.
function a(n1){
  console.log('2. a 시작.', n1);
  const n2 = b(n1); // return n4에서 끝난 20이 b frame stack이 사라지면서 a 함수의 지역 변수로 남게 됨
  console.log('7. a 종료.', n2); // 남은 20이 출력된다.
}

function b(n3){
  console.log('3. b 시작.', n3);
  const n4 = c(n3); // n6에서 return 받은 20 가져와서 n4를 출력함. b 함수의 지역 변수로 남게 됨
  console.log('6. b 종료.', n4); // 20이 출력
  return n4;
}

function c(n5){
  console.log('4. c 시작.', n5);
  const n6 = n5 + 10;
  console.log('5. c 종료.', n6);

  const user = JSON.parse(`{"age": ${n6}}`);
  console.log(user);

  return n6; // return 후에 제일 마지막에 쌓여있던 c starck frame이 사라진다. 사라지면서 그 아래에 있는 b로 넘어감

}

// TODO 함수 단원에서 확인. 매개변수와 인자값의 개수가 달라도 에러 발생하지 않음!
a(10);

console.log('8. 프로그램 종료.');
})();
