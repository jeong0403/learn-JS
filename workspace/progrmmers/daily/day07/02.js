/*
분류: 반복문
문제: 배열 만들기 2
url: https://school.programmers.co.kr/learn/courses/30/lessons/181921?language=javascript

문제 설명
정수 l과 r이 주어졌을 때, 
l 이상 r이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진 모든 정수를 
오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.

제한사항
1 ≤ l ≤ r ≤ 1,000,000

입출력 예
l	r	result
5	555	[5, 50, 55, 500, 505, 550, 555]
10	20	[-1]

입출력 예 설명
입출력 예 #1
5 이상 555 이하의 0과 5로만 이루어진 정수는 
작은 수부터 5, 50, 55, 500, 505, 550, 555가 있습니다. 
따라서 [5, 50, 55, 500, 505, 550, 555]를 return 합니다.

입출력 예 #2
10 이상 20 이하이면서 0과 5로만 이루어진 정수는 없습니다. 
따라서 [-1]을 return 합니다.
*/

// 정렬 함수 --- 비교 함수 값이 양수냐 음수냐에 따라 정렬이 바뀜
// 양수면 둘의 순서를 바꿔(= 내림차순 b - a)
// a - b = 오름차순
// answer.sort((a, b) => b - a);

function solution(l, r) {
  var answer = [];

  for(let i = l; i <= r; i++){
    // number 타입을 string으로 변환
    const numStr = i.toString();
    let isOnly = true;

    if([...numStr].every(digit => digit === '0' || digit === '5')){
      answer.push(i);
    }

    // for(let k = 0; k < numStr.length; k++) {
    //   if(numStr[k] !== '0' && numStr[k] !== '5') {
    //     isOnly = false;
    //     break;
    //   }
    // }
    // if(isOnly) {
    //   answer.push(i);
    // }
  }
  return answer.length > 0 ? answer : [-1];
}

console.log(solution(5, 555)); // [5, 50, 55, 500, 505, 550, 555]
console.log(solution(10, 20)); // [-1]