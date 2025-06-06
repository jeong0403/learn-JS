/*
제목: A+B - 8
설명: A+B를 바로 위 문제보다 아름답게 출력하는 문제
제출: https://www.acmicpc.net/submit/11022

문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 테스트 케이스의 개수 T가 주어진다.
각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력
각 테스트 케이스마다 "Case #x: A + B = C" 형식으로 출력한다. x는 테스트 케이스 번호이고 1부터 시작하며, C는 A+B이다.

예제 입력 1
5
1 1
2 3
3 4
9 8
5 2

예제 출력 1
Case #1: 1 + 1 = 2
Case #2: 2 + 3 = 5
Case #3: 3 + 4 = 7
Case #4: 9 + 8 = 17
Case #5: 5 + 2 = 7
*/

function main() {
  const data = getData();
  // console.log(data); // [ [ 5 ], [ 1, 1 ], [ 2, 3 ], [ 3, 4 ], [ 9, 8 ], [ 5, 2 ] ]
  // index[0]은 필요 없으니, [1]부터 돌자!

  for (let i = 1; i < data.length; i++) {
    const n1 = data[i][0];
    const n2 = data[i][1];
    const sum = n1 + n2;
    console.log(`Case #${i}: ${n1} + ${n2} = ${sum}`);
  }
}
main();

function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString();
  const arr = fileData.trim().split("\n");
  const result = [];
  for (let row of arr) {
    const rowArr = row.split(' ');
    for (let k = 0; k < rowArr.length; k++){
      rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]);
    }
    result.push(rowArr);
  }
  return result;
}