/*
제목: 두 수 비교하기
설명: 두 수를 비교한 결과를 출력하는 문제
제출: https://www.acmicpc.net/submit/1330

문제
두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.

입력
첫째 줄에 A와 B가 주어진다. A와 B는 공백 한 칸으로 구분되어져 있다.

출력
첫째 줄에 다음 세 가지 중 하나를 출력한다.

A가 B보다 큰 경우에는 '>'를 출력한다.
A가 B보다 작은 경우에는 '<'를 출력한다.
A와 B가 같은 경우에는 '=='를 출력한다.

제한
-10,000 ≤ A, B ≤ 10,000

예제 입력 1
1 2
예제 출력 1
<

예제 입력 2
10 2
예제 출력 2
>

예제 입력 3
5 5
예제 출력 3
==
*/

// 삼항 연산자 풀이 방식
// const fs = require("fs");
// const inPut = fs.readFileSync(0).toString().trim().split(" ");

// const a = parseInt(inPut[0]);
// const b = parseInt(inPut[1]);
// // const result = a > b ? ">" : "<";
// const result = a > b ? ">" : (a < b ? "<" : "==");
// console.log(result);

// 조건문 사용하기 (기존 코드)
// const fs = require("fs");
// const inPut = fs.readFileSync(0).toString().trim().split(" ");

// const a = parseInt(inPut[0]);
// const b = parseInt(inPut[1]);

// if (a > b) {
//   console.log('>');
// } else if (a < b) {
//   console.log('<');
// } else {
//   console.log('==');
// }

// 바꾼 코드
function main(){
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  if (data.a < data.b){
    console.log('<');
  } else if (data.a > data.b){
    console.log('>');
  } else {
    console.log('==');
  }
}
main();

/**
 * 표준 입력장치(콘솔)에서 한 줄로 입력된 두 건의 데이터를 읽어서 숫자로 변환한 후
 * 객체에 a, b 속성으로 저장하여 반환한다.
 * @returns {object} a , b 속성에 입력값이 저장된 객체
 */
function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString().trim().split(" ");

  const result = new Object();

  result.a = parseInt(fileData[0]); // result.a = 10
  result.b = parseInt(fileData[1]); // result.b = 20

  return result; // return 함수에 값을 1개 밖에 못 적음!
}