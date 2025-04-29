// 인터페이스 상속
// 부모 인터페이스가 갖고 있는 속성을 자식 인터페이스가 상속 받는다.

(()=>{
  // 할일 등록시 사용
  interface TodoRegist {
    title: string;
    content: string;
  }

  // 할일 상세 조회시 사용
  interface TodoInfo extends TodoRegist { // 상속 작성해준 상황
    // title: string; // 부모가 가지고 있는 속성을 굳이 적을 필요가 없다. 왜? 상속 받으면 되니깐!
    // content: string;
    id: number;
    done: boolean;
  }

  const todo1: TodoRegist = {
    title: '할일1',
    content: '내용1',
  };

  console.log('등록', todo1);

  const todo2: TodoInfo = {
    id: 1,
    title: '할일1',
    content: '내용1',
    done: false,
  };

  console.log('할일 상세 조회', todo2);
})();