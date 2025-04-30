(() => {
/*
반환값이 있는 함수
*/


add(); // 110
add(); // 110

add100(10); // 110
add100(20); // 120

Sum(10, 20); // 30
Sum(30, 40); // 70

// 10 + 100의 결과를 출력하는 함수 (add)
function add(){
  console.log(10 + 100);
}

// 강사님 코드
function add(){
  const n1 = 10;
  const n2 = 100;
  const result = n1 + n2;
  console.log(result);
}

// 전달 받은 숫자와 100의 합계를 출력하는 함수 (add100)
function add100(number){
  console.log(number + 100);
}

// 강사님 코드
function add100(n1){
  const n2 = 100;
  const result = n1 + n2;
  console.log(result);
}

// 전달 받은 두 숫자의 합계를 출력하는 함수 (sum)
function Sum(number1, number2){
  console.log(number1 + number2);
}

// 강사님 코드
function Sum(n1, n2){
  const result = n1 + n2;
  console.log(result);
}


// 전달 받은 두 숫자의 합계를 반환하는 함수 (getSum)
function getSum(n1, n2){
  const result = n1 + n2;
  return result; // return 함수 뒤에 값을 적어주면 반환한다
  console.log(); // return 바로 뒤에 적으면 영원히 실행 되지 않는 코드가 됨
}

let returnVal = getSum(40, 50);
console.log(getSum(40, 50)); // 같은 코드
// console.log(returnVal); // 같은 코드
})();
