(() => {
/*
switch문을 사용하여 점수를 출력하세요.
*/

const score = 100;

// 67 -> 6.7 -> 6
// 36.6 -> 3.66 ->3
// 99/10 -> parseInt(9.9) -> 9
switch (parseInt(score / 10)) {
  // case 10:
  // console.log("A");
  // break; switch case문을 작성할 때, 동일한 case를 실행할 땐 연속 되게 적으면 됨
  case 10:
  case 9:
    console.log("A");
    break;
  case 8:
    console.log("B");
    break;
  case 7:
    console.log("C");
    break;
  case 6:
    console.log("D");
    break;
  default:
    caches.log("F");
}

})();
