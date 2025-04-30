(() => {
/*
비교 연산자 >, >=, <, <=, ==, !=, ===, !==
true/false 값으로 판단
*/

var a = 5;
var b = 10;
var c = "5";
var d = 5;

// > (크다)
console.log(a > b); // 5 > 10 = false

// < (작다)
console.log(a < b); // 5 < 10 = true

// >= (크거나 같다)
console.log(a >= d); // 5 >= 5 = true

// <= (작거나 같다)
console.log(a <= d); // 5 <= 5 = true

//문자열 비교
console.log(a == c); // 동등, 5 == '5' = true (동등연산자는 형변환(type 변환)이 가능)
console.log(a === c); // 일치, 5 === '5' = false (number === string)

console.log("ch05" > "ch01"); // true 사전순으로 오름차순 비교 (5가 1보다 크냐?)
console.log("ch12" > "ch2"); // flase 사전순으로 오름차순 비교 (ch1 - ch2 비교를 먼저 함)
// ch05, ch12, ch2, ch01 오름차순 정렬 순서
// ch01, ch05, ch12, ch2

})();
