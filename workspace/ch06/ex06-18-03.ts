// 드롭다운 리스트 생성 - 타입스크립트
// ex06-18-02.js 복사

(()=>{
  interface City {
    value: string;
    selected?: boolean; // selected 자체가 선택 되지 않으면 false로 두면 되니까 옵셔널 파라미터 검
  }

  interface Zipcode {
    value: number;
    selected?: boolean;
  }

  const cityList: City[] = [
    { value: 'Seoul', selected: false },
    { value: 'busan' },
    { value: 'GwangJu', selected: true }, // 옵션 중 selected가 true면 선택된 상태를 의미함
    // { value: 56789 }, // 실수로 잘못 넣은 number 타입이라고 가정했기에 주석처리!
  ];

  // 우편번호 리스트라고 가정
  const zipcodeList: Zipcode[] = [
    { value: 12345, selected: false },
    { value: 34567, selected: true },
    { value: 56789 },
  ];

  // FIXME: 아래 출력 결과와 같이 출력 되도록 함수 작성
  function createDropdownList(list: (City | Zipcode)[]){ // 묶어서 쓰든지 풀어서 City[] | Zipcode[] 이렇게 작성하든지!
    let value;
    let options = '';
    
    for (let item of list){
      value = item.value;
    // selected = "" -> false로 인식
    // selected="selected" -> true로 인식
    // 아래 코드가 이 수업에서 중요한게 아님
    options += `<option selected="${item.selected?'selected':''}">${typeof value==='string'?value.toLowerCase():value}</option>\n`; // select 태그 내에 option 태그 나열하기 위해 누적
    }

    return `<select>\n${ options }</select>`;
  }

  /* 출력 결과
  <select>
  <option selected="">seoul</option>
  <option selected="">busan</option>
  <option selected="selected">gwangju</option>
  </select>
  */
  console.log(createDropdownList(cityList));

  /*
  <select>
  <option selected="">12345</option>
  <option selected="selected">34567</option>
  <option selected="">56789</option>
  </select>
  */
  console.log(createDropdownList(zipcodeList));
})();
