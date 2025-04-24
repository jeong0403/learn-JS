// ex02-23.js 복사

// 함수에 메모이제이션 기능 추가
Function.prototype.memo = function(key){ // this = isPrime (호출하려는게 this임)
  // 캐시를 위한 코드
  // 외부에서 접근할 필요가 없을 때 _(언더 바) 사용함 (= 궁금해하지마~)
  this._cache = this._cache || {}; // 각 함수마다 고유한 캐시 저장소
  if(this._cache[key] !== undefined) { // nudefiend가 아니다 -> key에 대해서 계산이 끝나고 캐시된 경우
    return this._cache[key]; // undefined가 아닐 때 return해라
  } else{ // else{} 생략해도 되지만, 명확하게 보여주려고 적음!
    return this._cache[key] = this(key); // 재귀적 호출, 캐시 저장 (isPrime 함수를 호출해서 결과를 받은 후 캐시에 저장)
  }
};

// 지정한 수가 소수인지 여부를 반환
// var 쓰면 동일한 변수 여러 번 써도 상관 없으니까 사용함
const isPrime = function(num){

  // 소수(약수가 1과 자기 자신 뿐) 판별 코드
  let prime = true;

  // i < num 보다 효율 좋음 ( 0 1 2 3 4 5 6 7 8 9 돈다고 쳤을 때 아래 / 2하면 반만큼만 돌면 되니깐 효율 좋을 수 밖에)
  // i < num / 2; 보다 효율 좋음
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
};

const sayHello = function (name) {
  return "Hello" + name;
}

console.log(sayHello('안캐시핑'));
console.log(sayHello.memo('캐시핑')); // 처음 캐시핑은 cache 있는지 확인해서 없으면 만들지만, 두 번째 캐시핑은 cache가 이미 되어 있기 때문에 그대로 호출함
console.log(sayHello.memo('캐시핑'));



console.time('소요시간');
console.log('3 -> ', isPrime(3));
console.log('4 -> ', isPrime(4));
console.log('5 -> ', isPrime(5));
console.log('6 -> ', isPrime(6));
console.log('7 -> ', isPrime(7));
console.log('8 -> ', isPrime(8));
console.log('9 -> ', isPrime(9));
console.log('1000000007 -> ', isPrime.memo(1000000007));
console.log('1000000007 -> ', isPrime.memo(1000000007));
console.log('1000000007 -> ', isPrime.memo(1000000007));
console.timeEnd('소요시간');



  