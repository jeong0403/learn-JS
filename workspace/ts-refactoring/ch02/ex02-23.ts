(() => {
// 지정한 수가 소수인지 여부를 반환
// var 쓰면 동일한 변수 여러 번 써도 상관 없으니까 사용함
var isPrime = function(num){
  // 캐시를 위한 코드
  // 외부에서 접근할 필요가 없을 때 _(언더 바) 사용함 (= 궁금해하지마~)
  isPrime._cache = isPrime._cache || {};
  if(isPrime._cache[num] !== undefined) { // nudefiend가 아니다 -> num에 대해서 계산이 끝나고 캐시된 경우
    return isPrime._cache[num]; // undefined가 아닐 때 return해라
  }
  
  // 소수(약수가 1과 자기 자신 뿐) 판별 코드
  let prime = true;

  // i < num 보다 효율 좋음 ( 0 1 2 3 4 5 6 7 8 9 돈다고 쳤을 때 아래 / 2하면 반만큼만 돌면 되니깐 효율 좋을 수 밖에)
  // i < num / 2; 보다 효율 좋음
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }

  // 캐시를 위한 코드
  isPrime._cache[num] = prime; // isPrime._cache[5] = true;

  return prime;
};

console.time('소요시간');
console.log('3 -> ', isPrime(3));
console.log('4 -> ', isPrime(4));
console.log('5 -> ', isPrime(5));
console.log('6 -> ', isPrime(6));
console.log('7 -> ', isPrime(7));
console.log('8 -> ', isPrime(8));
console.log('9 -> ', isPrime(9));
console.log('110 -> ', isPrime(110));
console.log('1000000007 -> ', isPrime(1000000007));
console.log('1000000007 -> ', isPrime(1000000007));
console.log('1000000007 -> ', isPrime(1000000007));
console.timeEnd('소요시간');

})();
