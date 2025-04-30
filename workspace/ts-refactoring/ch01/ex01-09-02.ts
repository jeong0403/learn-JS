(() => {
/* 
대입연산자 +=을 이용해서 1부터 10까지의 모든 수의 합계를 출력하세요. 

출력 결과:
55
*/

var sum = 0;

sum += 1; // sum = sum + 1 = 0 + 1 = 1
sum += 2; // sum = sum + 2 = 1 + 2 = 3
sum += 3; // sum = sum + 3 = 3 + 3 = 6
sum += 4; // sum = sum + 4 = 6 + 4 = 10
sum += 5; // sum = sum + 1 = 10 + 5 = 15
sum += 6; // sum = sum + 1 = 15 + 6 = 21
sum += 7; // sum = sum + 1 = 21 + 7 = 28
sum += 8; // sum = sum + 1 = 28 + 8 = 36
sum += 9; // sum = sum + 1 = 36 + 9 = 45
sum += 10; // sum = sum + 1 = 45 + 10 = 55

console.log(sum);

})();
