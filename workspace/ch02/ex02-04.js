/*
* 자바스크립트의 함수는 일급 객체이다.
  - 변수, 배열 엘리먼트, 다른 객체의 프로퍼티에 할당될 수 있다.
  - 함수의 인자로 전달될 수 있다.
  - 함수의 결과 값으로 반환될 수 있다.
  - 리터럴로 생성될 수 있다.
  - 동적으로 생성된 프로퍼티를 가질 수 있다.
*/

// 함수는 동적으로 생성된 프로퍼티를 가질 수 있다.
function add(x, y){
  // 함수 내부에 선언한 지역변수는 함수가 실행 되고 나면 사라진다.
  // 함수는 객체고, 객체는 속성을 정의할 수 있다.
  add.result = x + y; // 변수 선언 키워드 없이 변수를 사용하면, 암묵적으로 전역 변수가 된다.
  return add.result;
}

console.log(add(10, 20), add(10, 20)); // 재활용 해서 여러 번 함수 출력할 수 있음.

const result = add(30, 40); // 보통 재활용한다고 하면 변수를 새로 설정해서 하긴 함.
console.log(result, result);

// add.result 같이 작성하면, 다른 사람들이 알아볼 수 없음. 이론적으로 가능하긴 함.
add(50, 60);
console.log(add.result, add.result);

console.log(add); // 함수 내용이 보인다.
console.dir(add); // 함수 속성이 보인다.

// globalThis: 브라우저에서는 window, Node.js에서는 global 객체
console.log(globalThis.result);