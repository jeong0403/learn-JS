// 제네릭 사용처

(()=>{
  // FIXME 타입 오류가 발생하지 않도록 필요한 곳에 타입을 지정하세요.
  // add 메서드로 item을 순차적으로 저장해 두었다가 getAll 메서드로 모두 조회하는 함수
  class List<T> {
    private items: T[] = []; // class 앞에 private을 붙이면 외부에서 접근 불가하고 내부에서만 접근 가능하다 (TS에서만 사용하는 문법이고 JS에서는 #private 형태로 쓰면 같은 원리)
    add(item: T) {
      this.items.push(item);
    }
    getAll(): T[] {
      return this.items;
    }
  }

  const numList = new List<number>(); // 생성자 함수 옆에 제너릭 타입을 작성
  numList.add(123.456);
  numList.add(789.123);
  console.log(numList.getAll());
  console.log(numList.getAll()[0].toFixed(2)); // 꺼낸 배열 중 인덱스 0번째 자리와 소수 두 번째 자리까지만 보고싶다

  const strList = new List<string>();
  strList.add('hello');
  strList.add('world');
  console.log(strList.getAll());
  console.log(strList.getAll()[1].toUpperCase());

})();