// 비동기 함수 - Promise 사용
// 비동기 함수를 사용하는 함수도 비동기 함수가 됨
// 비동기 함수의 작업이 완료된 후 실행할 코드가 있으면 Promise 사용
// ex08-07-03.ts 복사

(()=>{
  function f1(){ // 비동기 함수 (비동기 함수를 호출하면 자연스럽게 비동기 함수가 됨)
    return new Promise<string>((resolve, reject) => { // Promise를 생성해서 return해
      console.log('\t\t3. f1 호출됨.');
      const delay = Math.floor(Math.random() * 1000 * 10);
      console.log(`\t\t4. ${delay}ms 동안 작업중...`);
  
      setTimeout(() => { // 정확히는 얘가 비동기 함수
        console.log('\t\t f1 작업 완료.', delay); // 클로저 (delay 참조하는 상태)
        resolve('f1 작업 결과!!!');
      }, delay);
  
      console.log('\t\t5. f1 리턴됨.');
    });
  }

  function test(){ // 비동기 함수 (비동기 함수를 호출하면 자연스럽게 비동기 함수가 됨)
    console.log('\t2. test 호출됨.');
    f1().then((result) => {
      console.log('\t8. f1 작업 완료된 후에 호출.', result);
    });
    console.log('\t6. test 리턴됨');
  }

  console.log('1. 작업 시작.');
  test();
  console.log('7. 작업 종료.');
})();