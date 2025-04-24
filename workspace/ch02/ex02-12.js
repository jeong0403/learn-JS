/*
* 변수 호이스팅
  - 호이스팅 단계에서 var로 선언한 변수의 경우 선언만 되고 그 값은 undefined로 초기화 됨
  - let, const로 선언한 변수의 경우 호이스팅 단계에서 선언은 되지만 초기화가 되지 않기 때문에 
    선언 전에 접근하면 에러 발생 (undefined 값도 할당되지 않은 상태)
*/

console.log(a); // var로 선언한 경우 : a 변수는 undefined로 호이스팅 단계에서 초기화가 된다.
console.log(b); // let은 초기화 되기 전에 b 변수에 접근할 수 없다고 뜬다. 호이스팅 단계에서 선언만 되고 초기화가 되지 않는다.
console.log(c); // const는 초기화 되기 전에 c 변수에 접근할 수 없다고 뜬다. 호이스팅 단계에서 선언만 되고 초기화가 되지 않는다.

var a = 10;
// let, const로 선언한 경우는 그 위까지가 TDZ로 생김
let b = 20;
const c = 30;

console.log(a);
console.log(b);
console.log(c);
