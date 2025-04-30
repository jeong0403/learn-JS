(() => {
/*
  함수 생성 2 (표현식)
*/

// 표현식 방식의 함수 선언(기명함수)
const add = function sum (x, y) {
  const reuslt = x + y;
  return reuslt;
};

console.log(add(10, 20));
// console.log(sum(10, 20)); // 함수명을 통한 접근은 함수 내부에서만 가능함.(재귀 함수) error 발생함
})();
