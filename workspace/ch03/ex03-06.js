/*
* 클래스 정의와 상속
* ex03-05.js 복사
*/

/**
 * 고등학교 성적관리 생성자 함수(총점과 평균 계산)
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 */

class HighSchool {
constructor(kor, eng){
  this.kor = kor;
  this.eng = eng;
}
sum(){
  return this.kor + this.eng;
}
avg(){
  // 소수 첫째 자리에서 반올림한다.
  return Math.round(this.sum() / 2);
}
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
// function College(kor, eng) {
//   HighSchool.call(this, kor, eng);
// }

class College extends HighSchool{
  /* constructor(kor, eng, math) { // 속성을 더 추가하려면 constructor 안에 넣어야 함
  super(kor, eng);
  this.math = math; // math는 College에서 따로 추가
} */
  constructor(kor, eng){
    // HighSchool.call(this, kor, eng);
    super(kor, eng); // 부모의 생성자 호출(HighSchool)의 생성자 호출
  }
  // 기존에 있던 속성 가지고 할거면 생략 가능.
  // constructor()를 생략할 경우 자동으로 추가 되기 때문에 오류가 발생하지 않음.
  // constructor(...args){
  //   super(...args);
  // }

  grade(){
    let level = 'F';
    const avg = this.avg()
    if(avg >= 90 ){
      level = 'A';
    } else if(avg >= 80){
      level = 'B';
    } else if(avg >= 70){
      level = 'C';
    } else if(avg >= 60){
      level = 'D';
    }
  
    return level;
  };
}


/* inherite 대신 extends 쓰면 됨
inherite(HighSchool, College); // 부모는 HighSchool, 자식은 College

// College가 HighSchool을 상속 받는다.
function inherite(Parent, Child){
// const F = new Function();
// F.prototype = Parent.prototype;
// Child.prototype = new F();

// 자바스크립트 내장 함수
// Object.create(): 지정한 prototype 객체를 참조하는 인스턴스를 생성
Child.prototype = Object.create(Parent.prototype); // Parent의 prototype을 참조하는 인스턴스 생성
Child.prototype.constructor = Child;
};

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
*/

const c1 = new College(80, 99);
console.log(c1.sum()); // 179
console.log(c1.avg()); // 89.5
console.log(c1.grade()); // B

console.log(College.prototype);