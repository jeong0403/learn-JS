/**
 * 국어, 영어, 수학 점수를 받아서 총점과 평균을 계산할 수 있는 객체를 생성
 * @param {number} kor 국어 점수
 * @param {mumber} eng 영어 점수
 * @param {number} math 수학 점수
 */

// 함수에 정의한 매개변수도 지역변수임 (kor, eng, math)
const Score = function (kor, eng, math) {
  // this = {}; new 객체 생성했을 때 빈 객체 생성 됨
  // return this;
  // sum과 avg 메서드를 만들지지 않으면 undefined 상태임
  this.kor = kor;
  this.eng = eng;
  this.math = math;
  
  this.sum = function () { // return 값을 정하지 않은 상태면 undefined 출력 됨
    // kor + eng + math가 왜 함수 return이 자연스럽게 될까?
    // 본래 지역변수인 매개변수가 return된 후라면 쌓여있던 메모리는 삭제 되어야 함.
    // TODO Closure 단원. 실행이 완료된 함수의 지역변수가(함수에 선언한 매개변수 의미함) 여전히 참조 가능한 상태로 유지되는 현상이 발생--> 이게 바로 클로저?!
    // return kor + eng + math; // 이미 매개변수 자리에 들어간 인자값이 고정적으로 되어 있기 때문에 this.를 붙여야 함. 그래야 아래 +10을 올린 값으로 바뀜.
    return this.kor + this.eng + this.math; // baro 혹은 rara의 국어 점수로 바꾸려면 자기 자신의 점수를 참조해야 하니까 this를 꼭 붙여야 10점 올린 점수가 적용된다.
  };
  this.avg = function () {
    return this.sum() / 3; // 생성자 함수의 sum을 생성한 것이므로 this를 꼭 붙여야 함
  };
};

// 바로핑은 점수가 각각 100, 90, 80이다.
// 라라핑은 점수가 각각 90, 80, 60이다.
const baro = new Score(100, 90, 80);
const rara = new Score(90, 80, 60);

// 두 사람의 총점과 평균을 출력하시오.
console.log(baro.sum(), baro.avg()); // 270 90
console.log(rara.sum(), rara.avg()); // 230 76.666666

// 수학 점수를 10점 올린 후 총점과 평균을 출력하시오.
baro.math += 10;
rara.math += 10;

console.log(baro);

console.log(baro.sum(), baro.avg()); // 280 93.333333
console.log(rara.sum(), rara.avg()); // 240 80
