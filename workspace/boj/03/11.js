/*
제목: A+B - 5
설명: 0 0이 들어올 때까지 A+B를 출력하는 문제
제출: https://www.acmicpc.net/submit/10952

문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력
입력은 여러 개의 테스트 케이스로 이루어져 있다.
각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
입력의 마지막에는 0 두 개가 들어온다.

출력
각 테스트 케이스마다 A+B를 출력한다.

예제 입력 1
1 1
2 3
3 4
9 8
5 2
0 0

예제 출력 1
2
5
7
17
7
*/

// const fs = require("fs");
// const fileData = fs.readFileSync(0).toString().trim().split("\n");

// for (let i = 0; true; i++) {
//   const data = fileData[i].split(" ");  
//   const A = parseInt(data[0]); 
//   const B = parseInt(data[1]); 
//   // console.log(A, B);
//   if(A === 0 && B === 0) {
//     break;
//   }
//  console.log( A + B );
// }


function main() {
  const data = getData();
  // console.log(data); // [ [ 1, 1 ], [ 2, 3 ], [ 3, 4 ], [ 9, 8 ], [ 5, 2 ], [ 0, 0 ] ]
  for (let i = 0; i < data.length-1; i++) { // 마지막 [0, 0] 값이 필요가 없으니 length -1 해줌! 길이는 6이지만 i = 4 값까지만 필요함
    console.log(data[i][0] + data[i][1]);
  }
}
main();

function getData() {
  const arr = require("fs").readFileSync(0).toString().trim().split("\n");
  const result = [];
  for (let row of arr) {
    const rowArr = row.split(' ');
    for (let k = 0; k < rowArr.length; k++){
      rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]);
    }
    result.push(rowArr.length === 1 ? rowArr[0] : rowArr);
  }
  return result.length === 1 ? result[0] : result;
}