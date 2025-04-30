// 함수의 타입 추론

(()=>{
  // 매개변수의 타입을 지정하지 않으면 num은 암묵적으로 any 타입이 됨
  // tsconfig.json에서 noImplicitAny: true로 설정하면 암묵적 any 타입에 대해서 에러 발생
  // FIXME 매개변수의 타입을 지정해서 암묵적 any 타입이 되지 않도록 하세요.
  function add10(num: number) {
    return num + 10;
  }
  const result = add10(99.8756);
  console.log(result.toFixed(1));

  // 타입을 생략하고 기본값을 지정하면 기본값의 타입을 따라가도록 타입 추론하고 옵셔널 매개변수(?) 추가
  // 리턴 타입을 생략하면 리턴값의 타입을 따라가도록 타입 추론(number + 20 = number)
  // FIXME 매개변수의 기본값을 지정해서 암묵적 any 타입이 되지 않도록 하세요.
  function add20(num = 0) { // 매개변수에서 = 0이라고 적으면서 number라고 추론했기 때문에, return의 type을 number라고 명시하지 않아도 된다. 괄호 옆에 :number 적을 필요가 없다
    return num + 20;
  }
  const result2 = add20(100.12345);
  console.log(result2.toFixed(2));

})();