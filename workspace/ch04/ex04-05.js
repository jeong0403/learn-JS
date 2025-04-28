// ex02-23.js 복사

// js/mylib.js 파일에 memo 정의됨
// 지정한 수가 소수인지 여부를 반환
// var 쓰면 동일한 변수 여러 번 써도 상관 없으니까 사용함
const isPrime = function(num){

  // 소수(약수가 1과 자기 자신 뿐) 판별 코드
  let prime = true;

  // i < num 보다 효율 좋음 ( 0 1 2 3 4 5 6 7 8 9 돈다고 쳤을 때 아래 / 2하면 반만큼만 돌면 되니깐 효율 좋을 수 밖에)
  // i < num / 2; 보다 효율 좋음
  for(let i=2; i < num; i++){
    if(num % i === 0){
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
console.log('7 -> ', isPrime.memo(7));
console.log('8 -> ', isPrime(8));
console.log('9 -> ', isPrime(9));
console.log('1000000007 -> ', isPrime.memo(1000000007));
console.log('1000000007 -> ', isPrime.memo(1000000007));
console.log('1000000007 -> ', isPrime.memo(1000000007));
console.timeEnd('소요시간');



  