/*
JSON 표기법 - 리터럴 방식으로 객체 생성
JavaScript Object Notation
---> 이거 아님
--> 객체 리터럴 방식임
*/

const foo = {
  name: '제이슨핑',
  age: 7,
  job: '요정',
  married: true
};

foo.eamil = "seehj@naver.com"; // 추가적으로 선언하고 싶을 때 사용함

// 제이슨핑 7 요정 true
console.log(foo['name'], foo['age'], foo.job, foo.married);
// object {name: '제이슨핑', age: 7, job: '요정', married: true}
console.log(typeof foo, foo);