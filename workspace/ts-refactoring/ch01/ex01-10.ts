(() => {
/*
증감 연산자 a++, a--, ++a, --a
*/

var count = 0; // 0으로 초기화
console.log(count); // 0

count = count + 1; // 0 + 1 = 1
count += 1; // 1 + 1 = 2
count++; // 2 + 1 = 3

console.log(count);

console.log(count++); // count = 3으로 출력 후 증가해서 4
console.log(++count); // count = 4에서 증가한 것을 출력한다 5

// var sum = count++ + 10; // 5 + 10 = 15
// console.log(sum); // sum = 15, count는 후위형이라 증가해서 6인 상태
count++; // 6
var sum = count + 10; // 6 + 10 = 16
console.log(sum); // sum = 16

sum = ++count + 10; // 7 + 10 = 17 선위형이라 미리 증가하고 더함
console.log(sum); // 17

})();
