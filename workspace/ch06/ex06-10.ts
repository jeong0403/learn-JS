// 인터페이스 사용 - 변수, 함수의 매개변수, 리턴타입
// ex06-09.ts 복사

(() => {
  // 인터페이스 생성
  // type User = {
  interface User {
    name: string;
    age: number;
  }

  // 인터페이스를 객체의 타입으로 지정
  const u1: User = {
    name: "haru",
    age: 5,
  };
  const u2: User = {
    name: "namu",
    age: 8,
  };
  console.log(u1.age, u2.name.toUpperCase());

  // 함수의 리턴 타입으로 인터페이스 지정
  // :User 말고 object라고 써도 되긴 함
  const createUser = function (name: string, age: number): User {
    // User 객체를 만들어서 반환하는 상황
    return { name, age }; // name: name, age: age로 속성명과 매개변수명이 동일하면 속성값 생략 가능

   /* return {name, age};와 같음
    const user = {
      name: name, // a: name 이런 식으로 적으면 안 됨. a, b로 정의한적이 없기 때문
      age: age, // b: age
    }; 
    return user;
    */
  };
  const u3: User = createUser("유저핑", 9);
  console.log(u3.name, u3.age); // :User대신에 Object라고 쓸 경우, 모든 object에 name을 속성 값을 갖고 있는게 아니기 때문에 u3.했을 때 속성이 자동완성 안 됨

  // 함수의 매개변수의 타입으로 인터페이스 지정
  // user(왼쪽: 변수명): User(오른쪽: 인터페이스명)
  function getAge(user: User): number {
    return user.age;
  }
  console.log(getAge(u1));
  console.log(getAge(u2));
})();
