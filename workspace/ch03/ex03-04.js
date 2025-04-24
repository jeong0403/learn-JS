/*
* 프로토타입 체인을 이용한 상속 기능 구현
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

function College(kor, eng){
  this.kor = kor;
  this.eng = eng;
}
// College가 HighSchool을 상속 받는다.
// College의 prototype은 원래 다른 빈 객체였음 그 prototype을 new HighSchool로 갈아탄다는 의미
College.prototype = new HighSchool(); // 자식의 프로토타입을 부모의 인스턴스로 교체한다.
College.prototype.constructor = College; // 자식의 프로토타입이 가리키는 생성자 함수를 생성자 함수 본인으로 바꾼다.
// College의 prototye의 constructor는 newHighSchool()을 가리키는 상태인데 이것을 다시 맞팔하듯이 College로 바꾼다.

// College.prototype.sum = function(){
//   return this.kor + this.eng;
// };
// College.prototype.avg = function(){
//   return this.sum() / 2;
// };
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