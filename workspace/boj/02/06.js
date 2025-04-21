/*
제목: 오븐 시계
설명: 범위가 더 넓은 시간 계산 문제
제출: https://www.acmicpc.net/submit/2525

문제
KOI 전자에서는 건강에 좋고 맛있는 훈제오리구이 요리를 간편하게 만드는 인공지능 오븐을 개발하려고 한다. 
인공지능 오븐을 사용하는 방법은 적당한 양의 오리 훈제 재료를 인공지능 오븐에 넣으면 된다. 
그러면 인공지능 오븐은 오븐구이가 끝나는 시간을 분 단위로 자동적으로 계산한다.

또한, KOI 전자의 인공지능 오븐 앞면에는 사용자에게 훈제오리구이 요리가 끝나는 시각을 알려 주는 디지털 시계가 있다.

훈제오리구이를 시작하는 시각과 오븐구이를 하는 데 필요한 시간이 분단위로 주어졌을 때, 오븐구이가 끝나는 시각을 계산하는 프로그램을 작성하시오.

입력
첫째 줄에는 현재 시각이 나온다. 현재 시각은 시 A (0 ≤ A ≤ 23) 와 분 B (0 ≤ B ≤ 59)가 정수로 빈칸을 사이에 두고 순서대로 주어진다. 
두 번째 줄에는 요리하는 데 필요한 시간 C (0 ≤ C ≤ 1,000)가 분 단위로 주어진다.

출력
첫째 줄에 종료되는 시각의 시와 분을 공백을 사이에 두고 출력한다. 
(단, 시는 0부터 23까지의 정수, 분은 0부터 59까지의 정수이다. 디지털 시계는 23시 59분에서 1분이 지나면 0시 0분이 된다.)

예제 입력 1
14 30
20
예제 출력 1
14 50

예제 입력 2
17 40
80
예제 출력 2
19 0

예제 입력 3
23 48
25
예제 출력 3
0 13
*/

/* 문제 풀기 전 정리
요점 : 현재 시각과 끝나는 시각을 바탕으로 요리가 끝나는 시간 구하기
규칙 : 14 30 + 20 -> 14 50 시, 분 + 20
17 40 + 80 -> 19 0 시 + 2, 분 0 (분 - 40)
23 48 + 25 -> 0 13 시 + 1, 분 + 25 
현재 시간의 분 + c 이 60이상이면, 시 + 1... 시 +2 ... 시 + 3...
현재 시간의 분 + c 가 60 미만이면, 시는 그대로이고 분+c가 된다.
최대로 추가할 수 있는 시간 : + 166시간 4분

입력
첫째 줄에는 현재 시각이 나온다. 현재 시각은 시 A (0 ≤ A ≤ 23) 와 분 B (0 ≤ B ≤ 59)가 정수로 빈칸을 사이에 두고 순서대로 주어진다. 
두 번째 줄에는 요리하는 데 필요한 시간 C (0 ≤ C ≤ 1,000)가 분 단위로 주어진다.

출력
첫째 줄에 종료되는 시각의 시와 분을 공백을 사이에 두고 출력한다. 
(단, 시는 0부터 23까지의 정수, 분은 0부터 59까지의 정수이다. 디지털 시계는 23시 59분에서 1분이 지나면 0시 0분이 된다.) */

/* 산술 방식
// const fs = require("fs");
// const input = fs.readFileSync(0).toString().trim().split("\n");

// let now = input[0].split(" ");

// let a = parseInt(now[0]);
// let b = parseInt(now[1]);
// let c = parseInt(input[1]);

// let h = 0;
// let m = 0;

// h = a;
// m = b + c;

// h = a + Math.floor(m / 60);
// m = m % 60;
// h = h % 24;

// console.log(h, m);
*/

/* 
// 간략하게 계산 + 대입
// 먼저 m 계산
let m = b + c;
let h = a + Math.floor(m / 60);

// 계산된 m 기반으로 h 계산
m = m % 60;
h = h % 24;
console.log(h, m);
*/

/* 기존 코드
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const now = input[0].split(" ");

const a = parseInt(now[0]);
const b = parseInt(now[1]);
const c = parseInt(input[1]);

let h = a;
let m = b + c;

if (m >= 60) {
    h = h + Math.floor(m / 60);
    m = m % 60;
}

if (h >= 24) {
    h = h % 24;
}

console.log(h, m);
*/

/* 계산 과정
14 30
20
14 30 + 20
a b
c
a b + c -> h m
h=a;
m=b+c;

17 40
80
17 40 + 80
17 120
a b + c
a 120 / 60
a Math.floor(b+c/60)
a+Math.floor(b+c/60) 0
h = a+Math.floor(b+C/60)
m = b+c % 60

h = a+Math.floor(m/60)
m = m % 60

23 48
25
23 48 + 25
23 73
23 60 + 13
23 + 1 13
h = h % 24 m = b+c % 60
m = m % 60
*/

// 바뀐 코드
function main(){
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  const h = data[0][0];
  const m = data[0][1];
  const c = data[1][0];

  let totalMin = (h * 60 + m + c) % (60 * 24); // 시간을 분으로 환산 + 원래 있던 분 누적 + 요리 필요 시간(분) % (60 * 24) -> 24시간 넘을 때 나머지 연산?
  
  // if(totalMin >= 60 * 24) {
  //   totalMin -= 60 * 24;
  // }
  
  const result = {
    h: Math.floor(totalMin / 60), // Math.floor(소수 버려) 전체 분 / 60
    m: totalMin % 60
  };
  console.log(result.h, result.m);
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
  for (let i = 0; i < arr.length; i++) {
    const row = arr[i]; // '23 48', '25' for문 2번 도는 상황이고 length = 2임
    const rowArr = row.split(' '); // ['23', 48'], ['25']
    for (let k = 0; k < rowArr.length; k++){ // 나눈 각 데이터 항목에 대해 반복
      rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]); 
    }
    result.push(rowArr); // 변환된 데이터를 결과 배열에 추가
  }
  return result; // 완성된 2차원 배열 반환
}