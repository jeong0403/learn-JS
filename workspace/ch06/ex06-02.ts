// 기본 타입
// Type 적을 때 대소문자 구분하니깐 주의!
(()=>{

  let str: string = 'hello';
  let age: number = 9;
  let done: boolean = true;
  // done = false; // 컴파일 에러

  let nullVal: null = null;
  let emptyVal: undefined;

  let todo: object = {title: 'TypeScript 공부', done: false};
  let todoList: Array<string> = ['JavaScript', 'TypeScript'];
  let todoList2: string[] = ['React', 'Next.js'];

  // tuple: 길이가 고정되고 각 요소의 타입이 정의된 타입
  let items: [string, number] = ['타스핑', 10];

  let userName: any = '이일구'; // 모든 타입을 다 허용한다!
  userName = 219;

  let userName2: unknown = 'TSping';
  userName2 = 540;

  console.log(userName.toUpperCase()); // toUpperCase -> 대문자로 변환

  // console.log(userName2.toUpperCase());
})();