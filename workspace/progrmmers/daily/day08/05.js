/*
분류: 문자열
문제: 문자열 여러 번 뒤집기
url: https://school.programmers.co.kr/learn/courses/30/lessons/181913?language=javascript

문제 설명
문자열 my_string과 이차원 정수 배열 queries가 매개변수로 주어집니다. 
queries의 원소는 [s, e] 형태로, my_string의 인덱스 s부터 인덱스 e까지를 뒤집으라는 의미입니다. 
my_string에 queries의 명령을 순서대로 처리한 후의 문자열을 return 하는 solution 함수를 작성해 주세요.

제한사항
my_string은 영소문자로만 이루어져 있습니다.
1 ≤ my_string의 길이 ≤ 1,000
queries의 원소는 [s, e]의 형태로 0 ≤ s ≤ e < my_string의 길이를 만족합니다.
1 ≤ queries의 길이 ≤ 1,000

입출력 예
my_string	queries	result
"rermgorpsam"	[[2, 3], [0, 7], [5, 9], [6, 10]]	"programmers"

입출력 예 설명
예제 1번의 my_string은 "rermgorpsam"이고 주어진 queries를 순서대로 처리하면 다음과 같습니다.

queries	my_string
        "rermgorpsam"
[2, 3]	"remrgorpsam"
[0, 7]	"progrmersam"
[5, 9]	"prograsremm"
[6, 10]	"programmers"

따라서 "programmers"를 return 합니다.
*/

// splice는 원본 데이터를 수정할 때 사용함
// slice는 배열의 지정한 범위를 복사해서 새 배열로 반환 (배열, 문자열 모두 가능)
// join은 쪼갠 배열을 합침
// reverse는 문자열 순서 뒤집는 배열 메서드
// reduce는 이전 값 함수를 리턴한 값을 다음 함수에 넘겨줌

function solution(my_string, queries) {
  // 초기값을 빈 값으로 설정하고 my_string으로 담지 않으면 rermgom,a,s,p,r과 같이 나옴(이전 값으로 작업을 함)
  var answer = my_string; 

  queries.forEach((elem) => {
    // const s = elem[0];
    // const e = elem[1];
    const [s, e] = elem; // 구조 분해 할당

    const first = answer.slice(0, s);
    const second = answer.slice(s, e + 1);
    const third = answer.slice(e + 1);
    // console.log(first, second, third);

    answer = first + second.split('').reverse().join('') + third;

    // const reversed = my_string.split('').slice(s, e + 1).reverse();
    // console.log(reversed);
  });

  // return queries.reduce((acc, [s, e]) => acc.slice(0, s) + acc.slice(s, e + 1).split('').reverse().join('') + acc.slice(e + 1), my_string);

  return answer;
}

console.log(solution("rermgorpsam", [[2, 3], [0, 7], [5, 9], [6, 10]])); // "programmers"