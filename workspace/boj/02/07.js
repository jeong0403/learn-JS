/*
제목: 주사위 세개
설명: 조건에 따라 상금을 계산하는 문제
제출: https://www.acmicpc.net/submit/2480

문제
1에서부터 6까지의 눈을 가진 3개의 주사위를 던져서 다음과 같은 규칙에 따라 상금을 받는 게임이 있다.

같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다.
같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다.
모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.

예를 들어, 3개의 눈 3, 3, 6이 주어지면 상금은 1,000+3×100으로 계산되어 1,300원을 받게 된다. 
또 3개의 눈이 2, 2, 2로 주어지면 10,000+2×1,000 으로 계산되어 12,000원을 받게 된다. 
3개의 눈이 6, 2, 5로 주어지면 그중 가장 큰 값이 6이므로 6×100으로 계산되어 600원을 상금으로 받게 된다.

3개 주사위의 나온 눈이 주어질 때, 상금을 계산하는 프로그램을 작성 하시오.

입력
첫째 줄에 3개의 눈이 빈칸을 사이에 두고 각각 주어진다.

출력
첫째 줄에 게임의 상금을 출력 한다.

예제 입력 1
3 3 6
예제 출력 1
1300

예제 입력 2
2 2 2
예제 출력 2
12000

예제 입력 3
6 2 5
예제 출력 3
600
*/

/* 기존 코드
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);

if (a === b && b === c) {
  console.log(10000 + a*1000);
} else if (a === b || a === c){
  console.log(1000 + a*100);
} else if (b === c){
  console.log(1000 + b*100);
} else {
  console.log(Math.max(a, b, c) * 100);
}
*/

// 바꾼 코드
function main(){
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  //  console.log(data); // [ [ 6, 2, 5 ] ]
  const n1 = data[0][0];
  const n2 = data[0][1];
  const n3 = data[0][2];

  let point = 0;
  // if (n1 === n2 === n3) {} // 이렇게 적으면 n1 === n2는 true가 나와서 true === n3를 묻는 꼴
  if (n1 === n2 && n2 === n3) {
    point = 10000 + n1 * 1000;
  } else if (n1 === n2 || n2 === n3) {
    point = 1000 + n2 * 100;
  } else if (n1 === n3) {
    point = 1000 + n1 * 100;
  } else {
    point = Math.max(n1, n2, n3) * 100;
  }

  console.log(point);
}
main();

/**
 * 표준 입력장치(콘솔)에서 여러 줄로 입력된 줄당 여러 건의 데이터를 읽어서 숫자로 변환한 후
 * 배열로 저장하여 반환한다.
 * @returns {[]} 2차원 배열
 */
function getData() {
  const fs = require("fs");
  // '23 48\n25\n'와 같은 모양을 쪼갠다
  const fileData = fs.readFileSync(0).toString();
  // ['23 48', '25']
  const arr = fileData.trim().split("\n"); // 줄 단위로 먼저 자른다.
  const result = []; // 리턴할 2차원 배열
  // for (let i = 0; i < arr.length; i++) {
  //   const row = arr[i]; // '23 48', '25' for문 2번 도는 상황이고 length = 2임
  //   const rowArr = row.split(' '); // ['23', 48'], ['25']
  //   for (let k = 0; k < rowArr.length; k++){
  //     rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]);
  //   }
  //   result.push(rowArr);
  // }

  for (let row of arr) { // '23 48', '25'
    const rowArr = row.split(' '); // ['23', 48'], ['25']
      for (let k = 0; k < rowArr.length; k++){
      rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]);
    }
    result.push(rowArr);
  }

  return result;
}