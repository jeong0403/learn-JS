/*
분류: 출력
문제: 문자열 섞기
url: https://school.programmers.co.kr/learn/courses/30/lessons/181942?language=javascript

문제 설명
길이가 같은 두 문자열 str1과 str2가 주어집니다.
두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.

제한사항
1 ≤ str1의 길이 = str2의 길이 ≤ 10
str1과 str2는 알파벳 소문자로 이루어진 문자열입니다.

입출력 예
str1	str2	result
"aaaaa"	"bbbbb"	"ababababab"
*/

function solution(str1, str2) {
  var answer = "";
  for (let i = 0; i < str1.length; i++) {
    answer += str1[i] + str2[i]; // i = 0 -> 'ab', i=1 -> 'ababa', i=2 -> 'ababab', i=3 -> 'abababab', i=4 -> 'ababababab'
  }
  return answer;
}

console.log(solution("aaaaa", "bbbbb") === "ababababab");
console.log(solution("hello", "world") === "hweolrllod");
