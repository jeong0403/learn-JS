// 인터페이스 사용 - 클래스의 타입 지정

(()=>{

  // 자바스크립트 클래스 선언
  /* class HighSchool {
    constructor(kor, eng) {
      this.kor = kor;
      this.eng = eng;
    }
    sum() {
      return this.kor + this.eng;
    }
    avg() {
      return this.sum() / 2;
    }
  } */

  // FIXME HighSchool 클래스가 구현해야 하는 Score 인터페이스 선언
  interface Score {
    // interface 규칙이라 type을 정의한 것
    kor: number;
    eng: number;
    sum(): number;
    avg(): number;
  }

  // FIXME 타입 스크립트 클래스 선언(인터페이스 지정)
  class HighSchool implements Score {
    kor: number; // class 밑에 속성의 타입을 먼저 정의해야 한다. (interface에서 가져다 쓰는게 아님)
    eng: number;
    constructor(kor: number, eng: number) {
      this.kor = kor;
      this.eng = eng;
    }
    sum(): number { // 타입 생략하거나 붙이거나 (보통은 생략을 추천함. 타입스크립트가 추론해주기 때문임)
      return this.kor + this.eng;
    }
    avg() { // 타입을 생략할 경우 타입 추론에 의해서 리턴 값을 파악하고 적절한 타입을 추론
      return this.sum() / 2;
    }
  }

  // 총점과 평균을 출력하는 함수
  function printScore(score: Score) {
    console.log(score.sum(), score.avg());
  }

  // : Score 생략 가능
  const haru: Score = new HighSchool(100, 90);
  printScore(haru);
})();