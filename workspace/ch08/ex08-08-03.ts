// 비동기 함수 - Promise 사용
// 비동기 함수를 사용하는 함수도 비동기 함수가 됨
// 비동기 함수의 작업이 완료된 후 실행할 코드가 있으면 Promise 사용
// 에러 처리 추가
// 체인 방식으로 호출
// ex08-08-02.ts 복사

(()=>{
  function f1(){ // 비동기 함수 
    return new Promise<string>((resolve, reject) => { // Promise를 생성해서 return해
      const delay = Math.floor(Math.random() * 1000 * 1);
      console.log(`\t\t4. ${delay}ms 동안 작업중...`);

      setTimeout(() => { // 정확히는 얘가 비동기 함수
        if(delay < 500) {
          resolve('f1 작업 결과.' + delay);
        } else {
          reject('f1 작업 실패 사유.' + delay);
        }
      }, delay);
    });
  }

  function test(){ // 비동기 함수
    // then에 인자값 2개 전달하는 중
    f1().then(result => {
      console.log('8. 첫 번째 f1 작업 완료된 후에 호출.', result);
    }).then(f1).then(result => { // then이 Promise를 반환하고 그 결과를 다시 then에 넘기고?
      console.log('9. 두 번째 f1 작업 완료된 후에 호출.', result);
    }).then(f1).then(result => {
      console.log('10. 세 번째 f1 작업 완료된 후에 호출.', result);
    }).catch(reason => {
      console.log('첫 번째 또는 두 번째 또는 세 번째 작업이 실패한 후 호출', reason);
    }).finally(() => {
      console.log('f1의 성공/실패와 상관없이 항상 호출.');
    });
  }

  console.log('1. 작업 시작.');
  test();
  console.log('7. 작업 종료.');
})();