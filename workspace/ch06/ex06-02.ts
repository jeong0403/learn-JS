// 기본 타입
// Type 적을 때 대소문자 구분하니깐 주의!
(()=>{

  let str: string = 'hello';
  let age: number = 9;
  let done: boolean = true;
  // done = 'false'; // 컴파일 에러

  let nullVal: null = null;
  let emptyVal: undefined; // 선언만 하고 초기화 하지 않은 변수는 undefined 값임

  let todo: object = {title: 'TypeScript 공부', done: false};
  let todoList: Array<string> = ['JavaScript', 'TypeScript'];
  let todoList2: string[] = ['React', 'Next.js'];

  // tuple: 길이가 고정되고 각 요소의 타입이 정의된 타입
  let items: [string, number] = ['타스핑', 10];

  let userName: any = '이일구'; // 모든 타입을 다 허용한다! (any를 사용하면 tsc가 타입 체크를 하지 않음)
  userName = 219;

  // unknown: 값을 지정할 때는 아무 타입의 값이나 저장이 가능하지만 사용할 때 추가적인 타입 체크 코드를 요구
  let userName2: unknown = 'TSping';
  userName2 = 540;

  // console.log(userName.toUpperCase()); // toUpperCase -> 대문자로 변환

  // 타입 가드 -> 타입을 작은 범위로 축소해주는 문법
  if(typeof userName2 === 'string') {
    console.log(userName2.toUpperCase()); // 타입 가드 체크에 의해서 userName2는 더 이상 unknown이 아니라 string으로 바뀜
  }
})();