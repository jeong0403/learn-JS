let count = 0;
const myObj = { // myObj 객체에서 visit 메서드를 호출하면 count를 증가시킨다.
  count: 0,
  visit: function(){
    // 방문자를 한 명 증가시킨다.
    // this 대신에 my0bj를 쓰면, 변수명에 의해 계속 바꿔야 하는 불편함이 생긴다. 따라서 변수명이 아니라, this로 나(= 해당 메서드를 호출한 객체)를 참조하는 것으로 바꾼다.
    this.count++; // this = myObj
    var visit2 = function(){
      this.count++; // this = myObj
    };
    visit2.call(this); // call은 이미 만들어진 visit2 함수 내부를 수정하지 않고 this를 꺼낼 때 사용한다. visit2 내부의 this는 myObj
  },
};

myObj.visit(); // this = myObj --> 메서드(.visit) 앞에 있는 객체(myObj)가 this다.
myObj.visit();
console.log('방문자 수:', myObj.count); // 4