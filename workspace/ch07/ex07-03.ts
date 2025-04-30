// 주요 내장 함수 - clearTimeout
// ex07-02.ts 복사

(()=>{
  console.log('시작');

  // setInterval 지정된 시간에 작동하게 만드는 방식
  // 인터벌 사용하면 코드를 실행하는 시간을 직접 계산하지 않기 때문에 오차가 조금씩 발생하고, 그 오차가 누적 되어서 점점 느리게 나타남 (= 멋사 봇)
  const timerId = setInterval((a: number, b: number) => {
    console.log('3초 후에 실행됩니다.', a + b, new Date());
  }, 1000 * 3, 10, 20);

  console.log('종료');
  
  // timeout 작업 취소: clearTimeout
  // clearTimeout(timerId);
})();