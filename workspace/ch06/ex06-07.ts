// 타입 별칭으로 객체의 타입 선언

(()=>{
  // 타입 별칭 생성
  type User = {
    // name: string;
    name?: string; // ? 붙이면 옵셔널이 됨 -> name이 있어도 되고 없어도 된다는 의미 => name? = string | undefined 상태
    age: number;
  }

  const u1: User = {
    name: 'haru',
    age: 5
  };
  const u2: User = {
    name: 'namu',
    age: 8
  };

  // u2.name?(옵셔널 체이닝) 추가해야 undefined 값에 대한 오류가 발생하지 않음.
  // u2.name 값을 주석처리하면 undefined 값임
  // 주석이 아닐 때 namu -> NAMU로 출력함
  // console.log(u1.age, u2.name && u2.name.toUpperCase()); 이걸 줄인게 아래 코드
  console.log(u1.age, u2.name?.toUpperCase());
})();