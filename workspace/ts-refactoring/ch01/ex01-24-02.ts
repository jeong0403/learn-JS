(() => {
/*
국어, 영어, 수학 점수의 총점과 평균을 출력하는 프로그램
*/

// 객체로 만들기
const score = {
  kor: 100,
  eng: 90,
  math: 85,
  // sum: score.kor + score.eng + score.math, 기능이기 때문에 이렇게 적으면 오류 남
  // avg: score.sum / 3
  // sum이라는 메서드, avg라는 메서드
  sum : function(){ // 총점을 반환한다.
    // TODO this가 score임
    // 객체의 메서드가 자신의 속성을 접근할 때 this 사용
    // return score.kor + score.eng + score.math; 이것도 되지만 보통 자기 자신을 가리킬 땐 this를 씀!
    return this.kor + this.eng + this.math;
  },
  avg : function(){ // 평균을 반환한다.
    return this.sum() / 3;
  }
}

// console.log(this.kor, this.eng, this['math']);
// this는 호출하는 방식에 따라 바인딩할 객체가 바뀐다. 여기서 어떤 this를 의미하는지 모름!
// 따라서 메서드 내부에서 사용할 때 사용함!
console.log(score.kor, score.eng, score['math']);
console.log("총점:", score.sum());
console.log('평균:', score.avg());
})();
