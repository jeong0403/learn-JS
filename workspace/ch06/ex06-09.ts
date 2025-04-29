// 인터페이스로 객체의 타입 선언
// ex06-07.ts 복사

(()=>{
  // 인터페이스 생성
  // type User = {
  interface User {
    name: string;
    age: number;
    // getAge(): number; // 메서드 정의 (class 정의할 때 배움)
  };

  const u1: User = {
    name: 'haru',
    age: 5
  };
  const u2: User = {
    name: 'namu',
    age: 8
  };

  
  console.log(u1.age, u2.name?.toUpperCase());
})();