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
        if(delay < 900) {
          resolve('f1 작업 결과.' + delay);
        } else {
          reject('f1 작업 실패 사유.' + delay);
        }
      }, delay);
    });
  }

  function test(){ // 비동기 함수
    // f1().then(f1).then(f1).then(result => { // 첫 번째 f1에서 실패하면 바로 아래 catch로 넘어감
    //   console.log('세 개의 f1 작업이 모두 성공한 후에 호출.', result);
    // }).catch(reason => {
    //   console.log('셋 중 하나라도 작업이 실패했을 때 호출.', reason);
    // });

    // 여러 Promise 함수를 동시에 실행하고, 병렬로 그 결과를 합산해서 처리해야 하는 상황에선 아래와 같이 함수가 복잡해진다
    let successCount = 0;
    f1().then(result => { 
      successCount++;
      console.log('5. f1 작업이 모두 성공한 후에 호출.', result);
      if(successCount === 3) {
        console.log('3개 전체 성공.');
      }
    })
    f1().then(result => {
      successCount++;
      console.log('6. f1 작업이 모두 성공한 후에 호출.', result);
      if(successCount === 3) {
        console.log('3개 전체 성공.');
      }
    })
    f1().then(result => { 
      successCount++;
      console.log('7. f1 작업이 모두 성공한 후에 호출.', result);
      if(successCount === 3) {
        console.log('3개 전체 성공.');
      }
    })
  }

  console.log('1. 작업 시작.');
  test();
  console.log('7. 작업 종료.');
})();