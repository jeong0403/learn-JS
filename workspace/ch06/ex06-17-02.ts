// echo 함수 - 제네릭 함수
// ex06-17.ts 복사

(()=>{
  // T가 아닌 아무 문자나 사용 가능하지만 관례적으로 Type의 첫 글자인 T를 사용
  function echo<T>(msg: T): T {
/* function echo<T, R>(msg: T, msg2: V): [T, V] {
    return [msg, msg2];
  } 
  console.log(echo<string, number>('hello'));
  
  */
    return msg;
  }

  console.log(echo<string>('hello'));
  console.log(echo<number>(100));
  console.log(echo<boolean>(true));  
 
  // 꺽쇠 없이 적으면 타입스크립트가 알아서 타입 추론(Type inference)을 한다!
  // 단, 특별히 타입을 지정하고 싶을 때는 꺽쇠를 꼭 써야한다. (타입스크립트가 추론을 제대로 못할 때도 꺽쇠 명시하기)
  // console.log(echo('hello')); // T는 string이구나!
  // console.log(echo(100)); // T는 number구나!
  // console.log(echo(true)); // T는 boolean이구나!

})();
