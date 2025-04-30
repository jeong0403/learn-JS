(() => {
/*
* 함수 호출 방법 2 - 메서드
  - this는 메서드를 정의한 객체
  - 화살표 함수는 함수 내부에 arguments나 this가 생성되지 않고 상위 컨텍스트의 arguments, this를 사용하게 됨 
*/

// window.name = 'global'; // window, 브라우저가 가지고 있는 전역 객체
// global.name = 'global'; // global, Node.js가 가지고 있는 전역 객체
globalThis.name = 'global'; // 브라우저는 window, Node.js는 global 객체

// 함수는 자신과 가장 가까운 곳에 변수가 없으면 상위 Scope로 찾아감
const getPingName = () => {
  return this.name; // 상위 Scope의 this를 찾는다. 여기서 this는 window 객체
};
// const getPingName = () => this.name; // 화살표 함수 축약해 본 것

const baro = new Object();
baro.name = '바로핑';
baro.age = 9;
baro.getName = getPingName; // getPingName 함수 '참조'

const rara = {
  name: '라라핑',
  age: 8,
  getName: getPingName // getPingName 함수 '참조'
};

const hachu = {
  name: '하츄핑',
  age: 7,
  getName: function(){
    return hachu.name;
  }
};

// 함수 호출하는 방법 1 - 일반 함수로 호출 -> 함수명()
console.log(getPingName()); // 일반 함수로 호출하면 여기서 this는 window 객체

// 함수 호출하는 방법 2 - 메서드로 호출(this는 메서드를 정의한 객체)
console.log(baro.age, baro.getName()); // getName()의 this는 baro
console.log(rara.age, rara.getName()); // getName()의 this는 rara
console.log(hachu.age, hachu.getName()); // getName()의 this는 hachu
})();
