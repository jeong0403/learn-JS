/*
  함수 생성 4 (화살표 함수 표현식)
*/

// 기존 함수
let add = function (x, y) {
  return x + y;
};

// 화살표 함수
// function 키워드 생략, 매개함수와 바디 사이에 화살표로 연결!
add = (x, y) => {
  return x + y;
};

// 화살표 함수 축약
// 중괄호 안에 실행할 코드가 1개라면, 중괄호 생략 가능하고 이 자체가 return 값으로 실행 되기 때문에 return도 생략 가능하다.
add = (x, y) => x + y;

console.log(add(10, 20));

// 기존 함수
let add10 = function (x) {
  return x + 10;
};

// 화살표 함수
add10 = (x) => {
  return x + 10;
};

// 매개 변수 1개면 괄호도 생략 가능
// 화살표 함수 축약
add10 = x => x + 10;

console.log(add10(100));
