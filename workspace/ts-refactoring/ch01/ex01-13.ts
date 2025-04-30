(() => {
/*
논리 연산자 &&, ||, !
*/

// 논리합(OR) : 피연산자 둘 중 하나라도 true일 경우 true가 됨
// 둘 다 false일 경우에만 false가 됨
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

var id = "hong";
var invalidId = id.length < 4 || id.length > 12;
// var invalidId = !(id.length >= 4 && id.length <= 12);
console.log("id 입력 조건에 맞지 않음", invalidId);

// 앞의 값이 참이면 앞의 값을 반환
// 앞의 값이 거짓이면 뒤의 값을 반환
//falsy(거짓스러운): number 0, string '', boolean false, null, undefined
// truthy(참스러운): 100, 'hello', true, ' ' (띄어쓰기도 문자로 취급해서 true)

console.log("hello" || "world"); // hello
console.log(90 || 30); // 90
console.log(null || "world"); // world
console.log(undefined || "hello"); // hello
console.log(0 || 100); // 100
console.log("" || "guest"); // guest

// let userName = "체리핑";
// let userName = "";
// let userName = null;
let userName = undefined;
let userAge = 8;
console.log(userName || "놀아핑");
console.log(userAge || "나이 미상");

// 논리곱(AND) : 피연산자 둘 다 true일 경우 true가 됨
// 둘 중 하나라도 false일 경우 false가 됨
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // flase
console.log(false && false); // false

// 앞의 값이 참이면 뒤의 값을 반환
// 앞의 값이 거짓이면 앞의 값을 반환

id = null; // type은 object
// console.log("글자 수", id.length); // type이 string일때만 length를 쓸 수 있음
console.log("글자 수", id && id.length);
console.log("글자 수", id?.length);

})();
