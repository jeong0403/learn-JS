(() => {
/*
  함수 생성 1 (선언문)
*/

// 선언문 방식의 함수 선언
function add(x, y) {
  console.log(this);
  const result = x + y;
  return result;
}

console.log(add(10, 20)); // 30, this = window
console.log(add(30, 40)); // 70, this = window

// this를 window가 아니라, 함수명을 의미 있는 다른 것으로 바꾸고 싶다면?
console.log(add.call({name: '콜핑'}, 30, 40)); // 70, this = {name: '콜핑'} this인 객체 빼고 나머지 30과 40은 매개변수 x와 y자리로 들어간다.
// console.log(add.call({}, 30, 40)); // 70, this = {} 빈 객체도 가능
console.log(add.apply({name: '어플핑'}, [50, 60])); // 110, this = {name: '어플핑'} apply는 매개변수를 인자값 2개까지만 받음. 그래서 두 번째 매개변수는 인자값 배열로 바꿔야 함.
})();
