/*
기본값 매개변수(Default parameters)
*/

// b가 전달되지 않은 경우에는 a만 반환
function sum(a, b) {
  return a + b;
}
// 값을 할당할 땐 맨 마지막 것이 남지만, 같은 함수를 여러 번 선언하면 호이스팅 단계에서 첫 번째만 가져다 쓰고 나머진 무시함
function sum(a, b) {
  if(b === undefined){
    return a;
  } else {
    return a + b;
  }
}

function sum (a, b) {
  b = b || 0;
  return a + b;
}

function sum (a, b = 0) { 
  return a + b;
}

function sum (a, b = function(){console.log('b가 undefined임')}) { // 쓰지는 않지만 이렇게도 가능함
  return a + b;
}

// console.log(sum(10, 20)); // 30
console.log(sum(50));
// console.log(typeof sum(50)); // NaN

