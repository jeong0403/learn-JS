// ex02-23.js 복사

(() => {
  // 지정한 수가 소수인지 여부를 반환
  let isPrime = (function (num) {
    // 소수(약수가 1과 자기 자신 뿐) 판별 코드
    let prime = true;

    // i < num 보다 효율 좋음 ( 0 1 2 3 4 5 6 7 8 9 돈다고 쳤을 때 아래 / 2하면 반만큼만 돌면 되니깐 효율 좋을 수 밖에)
    // i < num / 2; 보다 효율 좋음
    // i <= Math.sqrt(num);가 효율 더 좋음
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        prime = false;
        break;
      }
    }

    return prime;
  }).memoize(); // 함수에 괄호로 감싸서 momoize 붙이거나 아래처럼 따로 쓰거나

  // isPrime 함수에 메모이제이션 기능 추가
  // isPrime = isPrime.memoize();

  console.time("소요시간");
  console.log("3 -> ", isPrime(3));
  console.log("4 -> ", isPrime(4));
  console.log("5 -> ", isPrime(5));
  console.log("6 -> ", isPrime(6));
  console.log("7 -> ", isPrime(7));
  console.log("8 -> ", isPrime(8));
  console.log("9 -> ", isPrime(9));
  console.log("110 -> ", isPrime(110));
  console.log("1000000007 -> ", isPrime(1000000007));
  console.log("1000000007 -> ", isPrime(1000000007));
  console.log("1000000007 -> ", isPrime(1000000007));
  console.timeEnd("소요시간");
})();
