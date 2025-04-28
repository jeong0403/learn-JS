/*
* 프로토타입 체인을 이용한 상속 기능 구현(중계 함수 추가)
* ex03-04.js 복사
*/

/**
 * 고등학교 성적관리 생성자 함수(총점과 평균 계산)
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 */
function HighSchool(kor, eng){
  this.kor = kor; // 생성자 함수 초기화. 전달 받은 점수를 생성자 함수의 속성에 저장
  this.eng = eng;
}
HighSchool.prototype.sum = function(){
  return this.kor + this.eng;
}
HighSchool.prototype.avg = function(){
  // 소수 첫째 자리에서 반올림한다.
  return Math.round(this.sum() / 2);
}

const s1 = new HighSchool(100, 91);
console.log(s1.sum());
console.log(s1.avg());

/**
 * 대학교 성적관리 생성자 함수(총점, 평균과 학점 계산)
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 */
// function College(kor, eng){
//   this.kor = kor;
//   this.eng = eng;
// }
// 부모가 만든 생성자 함수를 자식이 사용하고 싶을 때 작성함 (위랑 같은 코드인데 한 번 더 작성하지 않고 상속으로 만들기 위해서임.)
function College(kor, eng) {
  HighSchool.call(this, kor, eng);
}

mylib.inherite(HighSchool, College); // 부모는 HighSchool, 자식은 College
/*mylib.js에 추가함
// // College가 HighSchool을 상속 받는다.
// function inherite(Parent, Child){
// // const F = new Function();
// // F.prototype = Parent.prototype;
// // Child.prototype = new F();

// // 자바스크립트 내장 함수
// // Object.create(): 지정한 prototype 객체를 참조하는 인스턴스를 생성
// Child.prototype = Object.create(Parent.prototype); // Parent의 prototype을 참조하는 인스턴스 생성
// Child.prototype.constructor = Child;
// };
*/

College.prototype.grade = function(){
  let level = 'F';
  const avg = this.avg();
  if (avg >= 90) {
    level = 'A';
  } else if (avg >= 80) {
    level = 'B';
  } else if (avg >= 70) {
    level = 'C';
  } else if (avg >= 60) {
    level = 'D';
  }
  return level;
};

const c1 = new College(80, 99);
console.log(c1.sum()); // 179
console.log(c1.avg()); // 89.5
console.log(c1.grade()); // B

console.log(College.prototype);