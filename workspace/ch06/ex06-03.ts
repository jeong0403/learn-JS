// 함수에 타입 지정

(()=>{
  function getCount(count: number): string {
    // return count; // 타입 에러
    return 'Count: ' + count;
  }

  // let result = getCount('20'); // getCount를 number를 받아야 하는데 string으로 받았기 때문에 타입 에러
  let result/* :string */ = getCount(20); // getCount의 type을 담기 때문에 result에 type을 붙이지 않아도 된다.

  console.log(result);
})();