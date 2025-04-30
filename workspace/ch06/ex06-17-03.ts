// echo 함수 - 제네릭 타입 제약
// ex06-17-02.ts 복사

(()=>{
  // extends를 추가하면 타입 제약이 가능하다.
  function echo<T extends string | number>(msg: T): T {
    return msg;
  }

  console.log(echo<string>('hello'));
  console.log(echo<number>(100));
  // console.log(echo<boolean>(true)); // 타입 에러

  const str = echo<string>('hello'); // echo에 커서 올리면 string 타입이라고 뜸
  const num = echo<number>(123.456); // echo에 커서 올리면 number 타입이라고 뜸

  console.log(str.toUpperCase(), num.toFixed(2));

  // length 속성이 있는 타입만 허용 (실제 값들은 length가 number 타입이라 length: string으로는 문법적으로 가능은 하지만만 쓸 이유가 없음)
  // 문자열(string), 배열(Array), 함수(Function) 모두 length: number를 갖는다.
  function echo2<T extends { length: number }>(msg: T): T {
    return msg;
  }

  // echo2<number>(100); // number는 length 속성이 없음 -> 에러
  const str2 = echo2<string>('hello');
  const num2 = echo2<number[]>([10, 20]);

  console.log(str2.length, num2.length);
})();

