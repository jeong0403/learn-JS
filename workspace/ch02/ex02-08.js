/*
  함수 생성 2 (표현식)
*/
var f = function getFactorial(n){
  let result = 0;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
}


// 표현식 방식의 함수 선언(기명함수 사용예)
var f = function factorial(n) {
  if (n === 1) return 1;
  // 5 * 4 * 3 * 2 * 1
  return n * factorial(n - 1);
};

console.log(f(5));
// console.log(factorial(5)); // 함수명을 통한 접근은 함수 내부에서만 가능함.(재귀 함수) error 발생함

// 로또 1등 당첨 확률은?
// 45!/(45-6)!*6!)
console.log('로또 1등 당첨 확률은 1/' + f(45)/(f(45-6)*f(6)));

/*
  5!
  = 5 * 4 * 3 * 2 * 1
  = 5 * 4!
  = 5 * 4 * 3!
  = 5 * 4 * 3 * 2!
  = 5 * 4 * 3 * 2 * 1!
  
  n!
  = n * (n-1)!
*/
