/*
카운터 예제
*/

let count = 0;
const myObj = { // myObj 객체에서 visit 메서드를 호출하면 count를 증가시킨다.
  count: 0,
  visit: function(){
    // 방문자를 한 명 증가시킨다.
    // this 대신에 my0bj를 쓰면, 변수명에 의해 계속 바꿔야 하는 불편함이 생긴다. 따라서 변수명이 아니라, this로 나(= 해당 메서드를 호출한 객체)를 참조하는 것으로 바꾼다.
    this.count++; // this = myObj
    var visit2 = function(){
      this.count++; // this = window
    };
    visit2(); // 일반 함수 호출 방식
  },
};

myObj.visit(); // this = myObj --> 메서드(.visit) 앞에 있는 객체(myObj)가 this다.
myObj.visit();
console.log('방문자 수:', myObj.count); // 2
console.log('방문자 수2:', count); // 0


//myObj 변수명을 전부 바꾼다면..? myObj로 적힌 부분 모두 바꿔야 한다. 
// 내가 만든 객체가 변수명에 의해 좌지우지 된다는 건 유지보수성이 좋지 않다는 것.
// 그럼 객체 내부의 메서드를 정의할 때, 자기 자신을 참조하는 게 맞지! => visit 메서드 내부를 수정한다.
// myObj.count++; -> this로 바꿔준다!