// 선택적 파라미터(optional parameter)

(()=>{
  function user(name: string, age?: number) { // 함수의 타입을 지정하지 않으면 default가 any임
    console.log(name, age);
  }

  user('하루', 5);
  user('용쌤'); // age?로 선택적 파라미터 적용했기 때문에, age 값이 넘기지 않아도 되는 상태이므로 용쌤 undefined로 출력된다. 대신 ?가 없으면 error가 발생함

})();