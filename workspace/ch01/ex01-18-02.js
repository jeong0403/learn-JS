/*
if-else if문을 사용하여 학점을 출력하세요.
*/

const score = 100;

if (score >= 90 && score <= 100) {
  //score 90 이상 100 이하이면 "A" 출력
  console.log("A");
} else if (score >= 80) {
  //score 80 이상 90 미만이면 "B" 출력
  console.log("B");
} else if (score >= 70) {
  //score 70 이상 80 미만이면 "C" 출력
  console.log("C");
} else if (score >= 60) {
  //score 60 이상 70 미만이면 "D" 출력
  console.log("D");
} else {
  //score 60 미만이면 "F" 출력
  console.log("F");
}
