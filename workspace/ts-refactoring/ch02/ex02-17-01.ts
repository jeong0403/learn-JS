(() => {
/*
카운터 예제
*/

var count = 0; // 전역 변수를 위해서 var로 적음
const myObj = { // myObj 객체에서 visit 메서드를 호출하면 count를 증가시킨다.
  count: 0,
  visit: function(){
    // 방문자를 한 명 증가시킨다.
    this.count++; // this = myObj
    const that = this; // that = this = myObj
    const visit2 = function(){
      that.count++; // that = myObj
    };
    visit2(); // 일반 함수 호출 방식
  },
};

myObj.visit(); // this = myObj --> 메서드(.visit) 앞에 있는 객체(myObj)가 this다.
myObj.visit();
console.log('방문자 수:', myObj.count); // 2
console.log('방문자 수2:', count); // 0
})();
