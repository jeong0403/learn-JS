// 내장 객체 - Math

(()=>{

  // FIXME 주사위를 던져서 1부터 6까지의 숫자 중 하나를 랜덤으로 반환하는 함수
  function rollDice(): number {
    // Math.random()은 0.0 이상 1.0 미만의 난수를 반환합니다.  0<=x<1;
    // Math.random() * 6 0<=x<6;
    // Math.random() * 6 + 1 1<=x<7;
    // Math.floor()는 소수점 이하를 버리고 정수 부분만 반환합니다.
    return Math.floor(Math.random() * 6) + 1;
  }

  console.log(rollDice()); // 1부터 6까지의 숫자 중 하나 출력
  console.log(rollDice()); // 1부터 6까지의 숫자 중 하나 출력
  console.log(rollDice()); // 1부터 6까지의 숫자 중 하나 출력

  // 로또 번호 생성 함수 (1부터 45까지의 숫자 중 6개를 랜덤으로 반환)
  function generateLottoNumbers(): number[] {
    const numbers: number[] = [];
    while (numbers.length < 6) {
      const num = Math.floor(Math.random() * 45) + 1;
      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }
    return numbers.sort((a, b) => a - b);
  }

  console.log(generateLottoNumbers()); // 로또 번호 출력
})();