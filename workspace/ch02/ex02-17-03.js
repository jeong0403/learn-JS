let count = 0;
const myObj = { // myObj 객체에서 visit 메서드를 호출하면 count를 증가시킨다.
  count: 0,
  visit: function(){
    // 방문자를 한 명 증가시킨다.
    this.count++; // this = myObj
    var visit2 = () => { // 화살표 함수 사용시 this가 생성 되지 않아서 -> 상위 스코프의 this 사용
      this.count++; // this = myObj
    };
    visit2(); // 일반 함수 호출 방식
  },
};

myObj.visit(); // this = myObj --> 메서드(.visit) 앞에 있는 객체(myObj)가 this다.
myObj.visit();
console.log('방문자 수:', myObj.count); // 2