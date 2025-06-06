// 비동기 함수 - await 사용
// 비동기 함수의 작업이 완료된 후 실행할 코드가 있으면 async/await 사용
// ex08-09.ts 복사

   // 비동기 함수 Promise 작성 방식
   function p1(){ // Promise
    return new Promise((resolve, reject) => {
      resolve('p1 결과');
    });
  }
  async function a1(){ // async를 붙이면 비동기 함수더라도 동기 함수처럼 개발 가능
    return 'a1 결과';
  }

  function p2(){
    return new Promise((resolve, reject) => {
      reject('p2 에러');
    });
  }
  async function a2(){
    throw 'a2 에러';
  }

  // 함수 내에서는 async를 붙여야 await을 쓸 수 있다
  async function test(){
    try {
      const a1Result = await a1();
      console.log(a1Result);
  
      const p1Result = await p1();
      console.log(p1Result);
  
      const a2Result = await a2();
      console.log(a2Result);
      
      const p2Result = await p2();
      console.log(p2Result);
    } catch(err) {
      console.log('실패', err);
    }
  }

  console.log('1. 작업 시작.');
  test();
  console.log('2. 작업 종료. 이 메세지가 f1 작업 완료 보다 먼저 나오면 비동기로 호출된다는 의미');

  // 모듈 내에서는 탑 레벨에서 await 사용 가능(ES2022)
  const a1Result = await a1();
  console.log(a1Result);

  export {} // 빈 export를 추가해서 TS에게 모듈로 인식 시킴 -> 모듈이라 에러 없이 바로 위 await 키워드 사용 가능