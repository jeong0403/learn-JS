// 드롭다운 리스트 생성 - 제네릭 인터페이스와 함수
// ex06-18-04.ts 복사

(()=>{
  interface DropdownItem<T extends string | number> {
    value: string | number;
    selected?: boolean; 
  }

  const cityList: DropdownItem<string>[] = [
    { value: "Seoul", selected: false },
    { value: "busan" },
    { value: "GwangJu", selected: true },
  ];

  // 우편번호 리스트라고 가정
  const zipcodeList: DropdownItem<number>[] = [
    { value: 12345, selected: false },
    { value: 34567, selected: true },
    { value: 56789 },
  ];

  // DropdownItem을 어떤 타입으로 받을건데? 정하지 않으면 error 발생함
  // 여기선 유니언 타입으로 string과 number로 타입 제한함
  // 암시적으로 쓴다고 list: any 이렇게 쓰지마라!
  // function createDropdownList(list: DropdownItem<string | number>[]) { // 간단하게 작성한 기존 방식
  function createDropdownList<T extends string | number>(list: DropdownItem<T>[]) { // 복잡하게 TS 작성한 방법
    let value;
    let options = "";

    for (let item of list) {
      value = item.value;
      options += `<option selected="${item.selected ? "selected" : ""}">${ typeof value === "string" ? value.toUpperCase() : value }</option>\n`; 
    }

    return `<select>\n${options}</select>`;
  }
  
   // 간단하게 작성한 기존 방식의 console.log 찍을 때
  // console.log(createDropdownList(cityList));
  // console.log(createDropdownList(zipcodeList));

  // 복잡하게 TS 작성한 방법의 console.log 찍을 때
  console.log(createDropdownList<string>(cityList)); // <string>생략해도 추론하기 때문에 여기선 생략해도 됨
  console.log(createDropdownList<number>(zipcodeList));
})();
