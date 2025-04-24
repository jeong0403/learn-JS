/*
* 자바스크립트의 함수는 일급 객체이다.
  - 변수, 배열 엘리먼트, 다른 객체의 프로퍼티에 할당될 수 있다.
  - 함수의 인자로 전달될 수 있다.
  - 함수의 결과 값으로 반환될 수 있다.
  - 리터럴로 생성될 수 있다.
  - 동적으로 생성된 프로퍼티를 가질 수 있다.
*/

const num = 100;        // number
const str = 'hello';    // string
const obj = {};         // object
const arr = [num, str]; // object(array)

// 함수를 변수에 할당
// const(선언) foo(변수명 지정) = 할당 ()괄호 앞에 함수명 없애도 됨
const foo = function () {
  console.log(this); // this는 window
  return 'I am foo.';
}

// 함수를 배열의 요소로 할당 => push 하면 추가 가능
arr.push(obj); // [100, 'hello', {}]
arr.push(foo); // [100, 'hello', {}, function(){}]

// 함수를 객체의 속성으로 할당(메서드)
obj.bar = foo;
obj.baz = function () {
  return 'I am baz.';
};

// console.log(foo()); // 함수는 ()괄호 붙여서 호출한다.
console.log(foo(), arr[3](), obj.bar(), arr[2].bar(), obj.baz()); // 함수는 ()괄호 붙여서 호출한다. foo를 호출하는 또 다른 방법 : 배열로

// foo() this는 window --> 잘 안 쓰는 방식
// arr[3]() this는 arr --> 잘 안 쓰는 방식
// obj.bar() this는 obj --> 중요 (메서드 방식) .앞의 객체가 this가 된다!
// arr[2].bar() this는 obj --> 중요 (메서드 방식) .앞의 객체가 this가 된다!