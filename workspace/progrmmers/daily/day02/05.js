/*
분류: 
문제: 문자열 겹쳐쓰기
url: https://school.programmers.co.kr/learn/courses/30/lessons/181943?language=javascript

문제 설명
문자열 my_string, overwrite_string과 정수 s가 주어집니다. 
문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 
바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

제한사항
my_string와 overwrite_string은 숫자와 알파벳으로 이루어져 있습니다.
1 ≤ overwrite_string의 길이 ≤ my_string의 길이 ≤ 1,000
0 ≤ s ≤ my_string의 길이 - overwrite_string의 길이

입출력 예
my_string	overwrite_string	s	result
"He11oWor1d"	"lloWorl"	2	"HelloWorld"
"Program29b8UYP"	"merS123"	7	"ProgrammerS123"

입출력 예 설명
입출력 예 #1
예제 1번의 my_string에서 인덱스 2부터 overwrite_string의 길이만큼에 해당하는 부분은 "11oWor1"이고 이를 "lloWorl"로 바꾼 "HelloWorld"를 return 합니다.

입출력 예 #2
예제 2번의 my_string에서 인덱스 7부터 overwrite_string의 길이만큼에 해당하는 부분은 "29b8UYP"이고 이를 "merS123"로 바꾼 "ProgrammerS123"를 return 합니다.
*/

function solution(my_string, overwrite_string, s) {
  // cf01) my_string = 'He11oWor1d', overwrite_string = 'lloWorl', s = 2
  const firstWord = my_string.slice(0, s); // He 꺼내기 s번째 앞까지 꺼내서 자름
  const lastWord = my_string.slice(s + overwrite_string.length); // 두 번째 인자 설정하지 않으면 끝까지 뽑음
  var answer = firstWord + overwrite_string + lastWord;
  return answer;
}

// 프로그래머스에서 함수만 만들면 되기 때문에 아래 호출을 작성하지 않아도 통과 됨
// console.log(solution("He11oWor1d", "lloWorl", 2) === "HelloWorld");
// console.log(solution("Program29b8UYP", "merS123", 7) === "ProgrammerS123");
