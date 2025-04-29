// 유니언 타입(union type)

(()=>{
  function logString(msg: string) { // string 타입의 msg라는 매개변수를 필요로 한다
    console.log(msg);
  }
  function logNumber(msg: number) { // number 타입의 msg라는 매개변수를 필요로 한다
    console.log(msg);
  }

  // 숫자를 받아서 콘솔에 출력하는 함수
  logString('hello');
  logNumber(123);

  // 위 아래 코드 중 1개 쓰면 됨
  // 유니언 타입
  // | 연산자(or)로 여러 타입을 지정
  function log(msg: string | number | boolean){
    console.log(msg);
  }

  log('hello');
  log(123);
})();