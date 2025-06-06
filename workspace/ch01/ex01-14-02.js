/*
콘솔에서 입력한 값이 홀수인지 짝수인지 출력하는 코드를 작성하세요.

입력값 예시1:
15

출력값1:
15는 홀수 입니다.

입력값 예시2:
12

출력값2:
12는 짝수 입니다.
*/

const fs = require("fs");
const fileData = fs.readFileSync(0).toString();
console.log(fileData);

let num = Number(fileData);
let result = num % 2 === 0 ? "짝수" : "홀수";
console.log(`${num}은 ${result}입니다.`); // 백틱 사용
