// 변수의 타입 추론

(()=>{
  // 기본 데이터 타입의 변수 타입을 추론에 의지(권장)
  // 객체는 타입을 명확하게 적는 게 좋지만, 기본 데이터 타입은 추론에 맡기는게 좋다.
  // 만약 객체도 한 번 쓰고 말거면 타입 추론 맡기는 게 낫긴 함.
  // const age: number = 20; 이런 식으로 적는 것 보다는 효율적이잖아~ 맡겨!
  let name = '이일구'; // string으로 타입 추론
  // name = 219; // string인데 왜 number 넣어?

  const age = 20; // number로 타입 추론

  let name2; // any로 타입 추론
  name2 = '이일구';
  name2 = 219;

  console.log(name, age, name2);
})();
