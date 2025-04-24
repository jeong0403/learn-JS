/*
  함수 생성 3 (Function 생성자 함수)
*/
// 가독성이 떨어져서 잘 사용하지 않음
// Function 생성자 함수 이용
const add = new Function('x', 'y', 'const result = x + y; return result;');

console.log(add(10, 20));