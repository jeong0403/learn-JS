// 주요 내장 함수 - setTimeout

(()=>{

  console.log('시작');

  // 함수를 넘기지 않고 실행할 코드를 넘겨도 된다. 문자열로 코드를 작성할 일은 잘 없긴 함
  // setTimeout('console.log((100)', 1000 * 3);
  const timerId = setTimeout((a: number, b: number) => {
    console.log('3초 후에 실행됩니다.', a + b);
  }, 1000 * 3, 10, 20); // 10은 a에 쓰일 값 20은 b에 쓰일 값 전달

  console.log('종료');
  
  // timeout 작업 취소: clearTimeout
  // 회원 가입하다가 취소한 경우, 구매하려다가 취소한 경우 -> '회원 가입 중이었는데 다시 진행하시겠어요? 결제를 이어서 하시겠어요?' 이런 걸 타이머 걸어두고 발송 하는 것
  clearTimeout(timerId);

})();


