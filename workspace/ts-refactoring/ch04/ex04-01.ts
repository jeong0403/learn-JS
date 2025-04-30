(() => {
const topLevel = '최상위 변수';

function outer(){
  const innerVal = 'outer의 지역변수'; // 자유변수 (외부 함수가 실행이 완료된 후에 데이터에서 사라져야 하는데 사라지지 않고 여전히 참조 가능한 형태로 남아있는 것)
  console.log(topLevel); // 하위 Scope에서 접근 가능 --> 함수 스코프 내에서 topLevel 못찾으니까 상위 스코프로 이동
  console.log(innerVal); // 지역변수는 선언한 함수내에서만 접근 가능
  
  /*
   * closure -> 내부 메커니즘
     - 외부함수의(outer) 지역변수를(innerVal)
       외부함수의 실행이 완료된 후 내부함수의 호출로 참조하는 현상 또는 내부함수
     - closure가 만들어지는 조건
       1. 함수 내부에서 함수를 생성(중첩함수, 내부함수)
       2. 내부함수가 외부함수의 지역변수를 참조 (->fn이 외부함수 innerVal을 참조)
   */
  const fn = function(){
    console.log(innerVal);
  };
  return fn; // 고차함수 : 함수가 함수를 return 하는 형태 -> innerFn실행 값이라고 하고 싶으면 innerFn();으로 써야 함.
}

const returnFn = outer(); // outer() 호출 함수는 객체다 자체로 호출할 수 있는 기능이 있다.
console.log(topLevel); // 같은 Scope 내에서 접근 가능
// console.log(innerVal); // 지역변수는 선언한 함수내에서만 접근 가능 --> innerVal이 outer()함수 내부에 갇혀 있어서 출력할 수 없음
// outer 함수 내부에 return innerVal; 한다고 해서 바깥에서 변수 가져오려고 해도 가져올 수 없음. 반환 값이 없다는 의미. 리턴 값을 받아주는 변수가 외부에 선언 되어 있어야 가져올 수 있음..
returnFn();
// outer의 지역변수인 innerVal이 선언 되고 중간에 사용 되고, returnFn에 outer()가 호출 되어 return 값이 담긴 상태라 returnFn();을 했을 때 fn 함수 내의 innerVal이 출력이 가능한 것임. 
})();
