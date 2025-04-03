/*
기본 함수
*/



// 하드 코딩
console.log('안녕 Function!');
console.log('안녕 Function!');

// 함수 생성
function sayHello () {
  console.log('안녕 Function!');
}

// 함수 호출
sayHello();

// 횟수도 추가 해서 반복 호출 가능
for(let i=0; i < 100; i++){
  sayHello();
}