/* 
while문 사용
첫 날 쌀을 한 톨 받습니다.
둘째 날 쌀을 두 톨 받습니다.
셋째 날 쌀을 네 톨 받습니다.
매일 전 날의 두 배가 되는 쌀알을 받아서 모으면 며칠을 모아야 쌀알을 천만 개 모을 수 있을까?
*/

let day = 0; // 날짜
let count = 1; // 받을 쌀알 수
let sum = 0; // 누적된 쌀알 수

while (sum < 10_000_000) {
  day++;
  sum += count;
  count = count * 2;
}

console.log(
  `${day}일 동안 받았더니 쌀알이 ${sum}개 되었다. 내일은 ${count}개 받을 수 있겠군.`
);

// 30일 동안 몇 개의 쌀알을 모을 수 있는가?
day = 0; // 날짜
count = 1; // 받을 쌀알 수
sum = 0; // 누적된 쌀알 수

while (day < 30) {
  day++;
  sum += count;
  count = count * 2;
}
console.log(
  `${day}일 동안 받았더니 쌀알이 ${sum}개 되었다. 내일은 ${count}개 받을 수 있겠군.`
);
