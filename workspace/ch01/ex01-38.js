/*
전역 변수와 지역 변수
*/

/**
 * 지정한 두 수의 최대값을 반환한다.
 * @param {number} n1
 * @param {number} n2
 * @returns {number} - 최대값
 */

function max(n1, n2) {
  // TODO hoisting 단원
  // 변수 선언할 때, let은 함수 선언시 블록 단위의 스코프를 가짐! 블록 밖으로 못 나감 {}에서 다 갇힘 => const도 마찬가지
  // var는 함수의 중괄호까지는 블록 단위로 봄
  if (n1 > n2) {
    // result = n1;과 같이 적으면 result가 전역 변수가 되어서 바깥에서도 접근이 가능함 (좋지 않은 코드!)
    var result = n1;
  } else {
    var result = n2;
  }
  return result;
}
console.log(max(10, 20)); // 20
console.log(max(200, 30)); // 200

// console.log(result); // var result라고 작성하면 지역 변수로 바껴서 바깥에서 result를 출력할 수 없음 -> error

//---------- 다른 코드
function max(n1, n2) {
  return Math.max(n1, n2);
}

console.log(max(10, 20));
console.log(max(200, 30));