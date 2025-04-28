// 여러 함수에서 사용할 메모이제이션을 이 라이브러리에 모은다.

const mylib = {};

// isPrime(5); 메모이제이션 안 됨 -> 그냥 호출했을 때
// isPrime = isPrime.memoize(); // 메서드 호출해서 사용했을 때 반환하고 싶음
// isPrime(5); 메모이제이션 된 결과 반환
// 일급객체, this, arguments, apply, prototye, closure

Function.prototype.memoize = function(){
  const fn = this; // isPrime
  // 함수가 메모이제이션 기능이 추가된 함수를 반환한다.
  // 모든 함수에 전달되는 암묵적 매개변수에는 this, arguments가 있다. 
  // 매개변수 몇 개 넘어올지 모르니까 arguments 통째로 넘김. apply를 통해서 배열로 풀어서 전달하려고 함.
  // 내부 함수 fn이 밖의 지역변수 fn을 참조하고 있다 = 클로저
  // isPrime(5)를 호출했지만 메모이제이션 기능이 추가된 isPrime.memo(5)로 호출됨
  return function(){
    return fn.memo.apply(fn, arguments);
  };
};


// 함수에 메모이제이션 기능 추가
Function.prototype.memo = function(key){ // this = isPrime (호출하려는게 this임)
  // 캐시를 위한 코드
  // 외부에서 접근할 필요가 없을 때 _(언더 바) 사용함 (= 궁금해하지마~)
  this._cache = this._cache || {}; // 각 함수마다 고유한 캐시 저장소
  if(this._cache[key] !== undefined) { // nudefiend가 아니다 -> key에 대해서 계산이 끝나고 캐시된 경우
    return this._cache[key]; // undefined가 아닐 때 return해라
  } else{ // else{} 생략해도 되지만, 명확하게 보여주려고 적음!
    return this._cache[key] = this(key); // 재귀적 호출, 캐시 저장 (isPrime 함수를 호출해서 결과를 받은 후 캐시에 저장)
  }
};

// Child가 Parent를 상속 받는다.
mylib.inherite = function (Parent, Child){
  // const F = new Function();
  // F.prototype = Parent.prototype;
  // Child.prototype = new F();
  
  // 자바스크립트 내장 함수
  // Object.create(): 지정한 prototype 객체를 참조하는 인스턴스를 생성
  Child.prototype = Object.create(Parent.prototype); // Parent의 prototype을 참조하는 인스턴스 생성
  Child.prototype.constructor = Child;
  };