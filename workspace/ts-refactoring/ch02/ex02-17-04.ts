(() => {
/*
카운터 예제
Function.prototype.bind는 this를 지정하는 기능 뿐만 아니라 커링을 구현한 함수이기 때문에 인자값도 미리 전달이 가능
*/


var count = 0;
const myObj = { // myObj 객체에서 visit 메서드를 호출하면 count를 증가시킨다.
  count: 0,
  visit: function(){
    // 방문자를 한 명 증가시킨다.
    // this 대신에 my0bj를 쓰면, 변수명에 의해 계속 바꿔야 하는 불편함이 생긴다. 따라서 변수명이 아니라, this로 나(= 해당 메서드를 호출한 객체)를 참조하는 것으로 바꾼다.
    this.count++; // this = myObj
    var visitN = function(n){
      this.count++; // this = window
    };
    // visitN.call(this, 2); ->  이렇게 해도 되는데 매 번 할 때마다 이 코드를 호출해야 함
    visitN.call(this, 2); // count를 2명 증가
    visitN.call(this, 2); // count를 2명 증가

    // bind -> 결합한다는 의미
    // call과 apply처럼 this를 넘겨주기도 하지만, 인자값을 미리 넘겨주는 partial의 기능도 가지고 있음. (partial은 lodash라는 외부 어플리케이션을 써야 하지만 이건 그렇지 않다)
    const visit3 = visitN.bind(this, 3); // 첫 번째 인자로 this 넘기고 두 번째 인자로 준비한 인자 넣음
    visit3(); // count를 3명 증가
    visit3(); // count를 3명 증가
  },
};

myObj.visit(); // this = myObj --> 메서드(.visit) 앞에 있는 객체(myObj)가 this다.
myObj.visit();
console.log('방문자 수:', myObj.count); // 2
})();
