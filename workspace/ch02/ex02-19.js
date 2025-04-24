/*
* 함수 호출 방법 2 - 메서드
  - this는 메서드를 정의한 객체
*/
/*
globalThis.name = 'global'; // 브라우저는 window, Node.js는 global 객체

const getPingName = function (){
  return this.name;
};

// 객체 생성 방식으로 작성
const baro = new Object();
baro.name = '바로핑';
baro.age = 9;
baro.getName = getPingName;

// 객체 리터럴 방식으로 작성
const rara = {
  name: '라라핑',
  age: 8,
  getName: getPingName
};
*/

// 객체를 추가할 때마다 일일이 작성해야 할까..? 너무 불편한데? 그럼 '객체를 생성해서 반환하는 함수' 만들어볼까?
// const copyPing = {
//   name: '복사핑',
//   age: 12,
//   getName: getPingName
// };

// 객체를 생성해서 반환하는 함수 (생성자 함수로 정의된 함수)
function Ping(name, age){
  // const obj = {};

  // new를 통해서 생성한 객체인가?를 확인하는 instanceof (객체가 어떤 생성자로부터 만들어졌는지 확인하는 연산자)
  // new를 빼먹고 생성자 함수를 만들어도 자동으로 만들어줄게!
  // 아래 코드가 없을 땐, console.log(Ping()); // undefined 값이었으나 new 생성자 함수를 통해 만든 객체로 바뀐다.
  // if(!(this instanceof Ping)){ // this가 Ping 생성자 함수로부터 만들어진게 맞는지 확인
  //   return new Ping(name, age);
  // }

  // obj가 this임. 생성자 함수 내부에 this에 해당하는 빈 객체(obj)인 this가 넘어온다.
  this.age = age; // 직접 값을 obj.age = 12; 적지 않고 값 호출해서 사용함
  this.name = name; // 직접 값을 obj.name = '카피핑'; 적지 않고 값 호출해서 사용함
  this.getName = function(){
    return this.name; // getName의 this = copyPing
  };
}

// 생성자 함수(위의 코드 = 붕어빵 틀) 내에서 속성과 메서드만 만들어두면(위의 this.age = age;처럼) new(붕어빵)를 통해서 객체를 생성할 수 있다.
// new의 동작 -- 생성자 함수를 실행해서 객체를 만드는 과정
// 1. 빈 객체를 가리키는 this 생성
// 2. this를 생성자 함수에 전달
// 3. 생성자 함수가 아무것도 리턴하지 않는다면 this를 자동으로 리턴
// 생성자 함수 첫 글자는 대문자로 씀
const baro = new Ping('바로핑', 9); // 생성자 함수 Ping에 전달되는 인자값(=매개변수 값)
const rara = new Ping('라라핑', 8);
const copyPing = new Ping('카피핑', 12);

baro.age++; // 10
baro.name = '응애핑'; // name 속성 수정
baro.height = 120; // 새 속성 추가

// console.log(Ping()); // undefined
// console.log(new Ping()); // 생성자 함수 형태

// 함수 호출하는 방법 2 - 메서드로 호출(this는 메서드를 정의한 객체)
console.log(baro.age, baro.getName(), baro.height); // getName()의 this는 baro
console.log(rara.age, rara.getName()); // getName()의 this는 rara
console.log(copyPing.age, copyPing.getName()); // getName()의 this는 copyPing