(() => {
/*
매개변수를 가진 함수
*/

// 함수명 sayHello
// 옆 괄호는 매개변수 (=함수 호출할 때 넘겨주는 변수)
function sayHello(pingName){ 
  console.log('Hello ' + pingName);
}

// 함수 호출
sayHello('하츄핑'); // 괄호 안에 있는 건 인자 값. 호출하면 매개변수에 인자 값 넘김!
sayHello('깡총핑');
sayHello('초롱핑');
})();
