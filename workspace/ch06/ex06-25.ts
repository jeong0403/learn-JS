// 타입 가드 - typeof 연산자, instanceof 연산자

(()=>{
  console.log(typeof 10); // number
  console.log(typeof 'hello'); // string
  console.log(typeof true); // boolean
  console.log(typeof new Function()); // function
  console.log(typeof function(){}); // function
  console.log(typeof undefined); // undefined
  console.log(typeof BigInt(Number.MAX_VALUE+100)); // bigint
  console.log(typeof Symbol('hello'));
  console.log(typeof null); // object
  console.log(typeof {}); // object
  console.log(typeof new Date()); // object
  console.log(typeof new RegExp('')); // object
  console.log(typeof new Array()); // object
  console.log(typeof []); // object

  // msg의 타입에 따라서 다른 코드를 실행하는 함수
  function print(msg: string | number | string[] | Date){
    // FIXME string 타입이거나 배열일 경우 msg의 길이를 출력하세요.
    if (typeof msg === 'string' || msg instanceof Array){ // typeof msg === 'object'를 적으면 string[]과 Date가 object라 걸려버림 그래서 instanceof로 정확하게 하는 게 좋다
      console.log(msg.length);
    }

    // FIXME number 타입일 경우 소수점 2자리까지 출력하세요.
    if (typeof msg === 'number') {
      console.log(msg.toFixed(2));
    }
  }

  print(['hello', 'world']);
  print('hello');
  print(123.456);
})();