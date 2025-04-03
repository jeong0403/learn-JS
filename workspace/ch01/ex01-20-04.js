/* 
do-while

최소 한 번은 실행할 상황이 있다면, do를 사용함
잘 사용하지 않음

do {
  반복할 코드;
} while (조건);
*/

let i = 1;
let sum = 0;

do {
  sum += i;
  i++;
} while (i <= 10);

console.log(sum);
