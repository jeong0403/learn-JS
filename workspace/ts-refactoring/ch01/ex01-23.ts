(() => {
/*
TODO Object 생성자 함수
new Object() - 생성자 함수로 객체 생성
*/

// 생성자 방식
// 대괄호 표기법 : 속성명이 변수이거나 특수 문자나 공백이 포함될 때 사용
const foo = new Object();
// const foo = null; null.name과 같이 속성명 할당할 수 없다고 오류 뜸!
// console.log(foo);

foo.name = '함수핑';
foo['age'] = 6;
foo.job = '마법사';
foo['married'] = false;

// 함수핑 6 마법사 false
console.log(foo['name'], foo['age'], foo.job, foo.married);
// object {name: '함수핑', age: 6, job: '마법사', married: false}
console.log(typeof foo, foo);

// [ ] 다시 보기
// const key = 'job';
// foo[key]
// console.log(foo[key]);
// console.log(foo.job);
})();
