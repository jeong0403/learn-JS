/*
증감 연산자 a++, a--, ++a, --a
*/

var count = 0; // 0으로 초기화
console.log(count); // 0

count = count + 1; // 0 + 1 = 1
count += 1; // 1 + 1 = 2
count++; // 2 + 1 = 3

console.log(count);

console.log(count++); // 3
console.log(++count); // 5

// var sum = count++ + 10; // 5 + 10 = 15
count++; // 6
var sum = count + 10; // 6 + 10 = 16

console.log(sum); // 15

sum = ++count + 10; // 7 + 10 = 17
console.log(sum); // 17
