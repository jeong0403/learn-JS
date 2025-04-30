(() => {
// count 속성과 ride(), getCount() 메서드 작성

/*
   * closure -> 내부 메커니즘
     - 외부함수의(outer) 지역변수를(innerVal)
       외부함수의 실행이 완료된 후 내부함수의 호출로 참조하는 현상 또는 내부함수
     - closure가 만들어지는 조건
       1. 함수 내부에서 함수를 생성(중첩함수, 내부함수)
       2. 내부함수가 외부함수의 지역변수를 참조
   */

const Counter = function(){
  let count = 0; // 지역 변수
  this.getCount = function(){ // count가 클로저 --> 가비지 컬렉션 대상에서 제외됨 (참조 유지. 메모리에 살아 있음)
    return count;
  };
  this.ride = function(){
    if(count < 40){ // count가 클로저: 내부 함수가 외부 함수 (Counter)의 지역 변수 count에 접근함 --> 가비지 컬렉션 대상에서 제외됨
      count++;
    } else{
      console.log('정원이 초과되었습니다!');
    }
  };
};

const c = new Counter();
c.ride();
c.ride();

// for(let i = 0; i < 40; i++) {
//   c.ride(); // 내부 count가 올라감
// }

// 이 코드는 현재 의미 없음
c.count += 40; // count는 Counter 함수 내부의 지역변수라 영향을 줄 수 없다.

console.log('전체 탑승자', c.getCount()); // 2
})();
