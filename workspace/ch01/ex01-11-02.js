/*
[비교 연산자 실습]

다음 값들을 비교한 결과를 예측하고 실제 결과와 비교해보세요.
예측한 결과를 주석으로 작성하고, console.log()를 통해 실제 결과를 확인해보세요.

문제1. 다음 비교 연산의 결과는 true일까요? false일까요?
*/

// 1-1. '3' === 3
// 예측:
console.log("1-1:", "3" === 3); // false (타입이 다르므로 false)

// 1-2. '3' == 3
// 예측:
console.log("1-2:", "3" == 3); // true (자동 형변환으로 인해 true)

// 1-3. 0 === false
// 예측:
console.log("1-3:", 0 === false); // false (number와 bulean 타입이 다르므로 false)

// 1-4. 0 == false
// 예측:
console.log("1-4:", 0 == false); // true (type은 다르지만, 동등연산자는 형변환이 가능하다. false:0, true:1 자동 형변환으로 인해 true)
console.log("1-4-2:", "1" == true); // true (type을 변환하고 일치연산자를 하는 원리 1 === 1)

// 1-5. '' == false
// 예측:
console.log("1-5:", "" == false); // true (빈 값이 0이고 false도 0, 자동 형변환으로 인해 true)

/*
문제2. 크기 비교
age1과 age2를 비교하여 age1이 더 나이가 많으면 true, 아니면 false를 출력하세요.
*/
let age1 = "20";
let age2 = 19;
// 결과:
console.log("문제2:", age1 > age2); // true (string과 number를 비교하는데, 비교연산자에서도 자동으로 형변환이 일어남)

/*
문제3. 문자열 비교
str1과 str2를 비교하여 str1이 사전순으로 더 앞에 있으면 true, 아니면 false를 출력하세요.
*/
let star1 = "apple";
let star2 = "banana";
// 결과:
console.log("문제3:", star1 < star2); // true (사전순으로 apple이 banana보다 앞에 있음)

/*
문제4. null과 undefined 비교
다음 비교 연산의 결과를 예측해보세요.
*/

// 4-1. null === undefined
// 예측:
var emptyVal; // undefined 타입, 값도 undefined
var nullVal = null; // object 타입, 값은 null
console.log("4-1:", emptyVal === nullVal); // false (타입이 다르므로 false)

// 4-2. null == undefined
// 예측:
console.log("4-2:", emptyVal == null); // true (느슨한 비교에서는 true)
console.log("4-2:", emptyVal == undefined); // true (느슨한 비교에서는 true)

/*
문제5. 응용
다음 변수들을 비교하여 가장 큰 수를 찾으세요.
*/
let num1 = "9";
let num2 = 10;
let num3 = 11;
let num4 = "12";
// 가장 큰 수:
// num1 = +num1;
// num1 = Number(num1);
// num1 = parseInt(num1);
// num2 = parseInt(num2);
// num3 = parseInt(num3);
// num4 = parseInt(num4);
let maxNum = Math.max(Number(num1), num2, num3, Number(num4));
console.log("가장 큰 수:", maxNum); // 12
