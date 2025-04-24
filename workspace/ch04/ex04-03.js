function sum(a, b, c){
  return a + b + c;
}
console.log(sum(10, 20, 30));

// console.log(currySum(10)(20)(30)); // 화살표 함수로 적은 곳이 호이스팅 안 되기 때문에 오류 나서 주석으로 막음

// 함수 선언문 형태 -> 전체 호이스팅 됨 (함수 정의하는 이 부분이 console.log 호출 부분보다 위로 올라오기 때문에 에러나지 않음)
// function currySum(a){ // 함수가 함수를 반환하는 형태 '자바스크립트 함수는 일급 객체'
//   return function(b){
//     return function(c){
//       return a + b + c;
//     };
//   };
// };

// 함수 표현식은 변수 선언만 호이스팅됨
// 실제 함수 값은 실행 시점에 할당되므로,
// conosle.log 호출하고 출력하는 행위를 표현식 보다 아래에 둬야 에러가 나지 않음
let currySum = function(a){
  return function(b){
    return function(c){
      return a + b + c; // 내부 함부에서 외부 변수 a와 b와 c를 가져와서 쓰고 있다! = 클로저
    };
  };
};

currySum = a => b => c => a + b + c; // 화살표함수 버전 (위 함수 표현식과 동일한 기능)
// 주의: 화살표 함수도 표현식이기 때문에, 선언 이전에 호출하면 에러 발생!

console.log(currySum(10)(20)(30)); // 60 