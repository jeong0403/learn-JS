(() => {
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

// 네트워크로 전송할 때는 꼭 문자열을 큰 따옴표로 감싸야 한다.
// TODO ajax 단원에서..., JSON.stringify() 함수를 사용하면 객체를 JSON 형태의 문자열로 변환 가능
const strFoo = JSON.stringify(foo);
console.log('strFoo', typeof strFoo, strFoo);
console.log(foo.job, strFoo.job); // 요정, undefined

// TODO ajax 단원에서 ..., JSON.pars() 함수를 사용하면 JSON 형태의 문자열을 객체로 변환 가능
const objFoo = JSON.parse(strFoo); // 문자열을 다시 객체로 바꿈
console.log('objFoo', typeof objFoo, objFoo);
})();
