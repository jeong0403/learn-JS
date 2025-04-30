// 내장 객체 Array - forEach(), map()

(()=>{
  const arr = [10, 20, 30];

  // FIXME arr의 각 요소를 제곱하여 새로운 배열을 생성하는 코드를 작성하세요.(for문)
  let newArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] ** 2); // newArr에 push해라 arr의 인덱스 값을 제곱해서
  }
  console.log('for문', newArr);

  // FIXME arr의 각 요소를 제곱하여 새로운 배열을 생성하는 코드를 작성하세요.(forEach)
  newArr = [];
  arr.forEach((elem) => { // forEach문에서 break는 의미가 없음! 무조건 다 호출함 (제어 불가)
    newArr.push(elem ** 2);
  });
  console.log('forEach', newArr); // [100, 400, 900]

  // FIXME arr의 각 요소를 제곱하여 새로운 배열을 생성하는 코드를 작성하세요.(map)
  newArr = arr.map((elem) => { // 콜백함수가 리턴한 값을 모아서 최종적으로 배열하는 것이 바로 map
    return elem ** 2;
  })

  // 콜백함수가 호출되는 상황
  newArr = arr.map(elem => elem ** 2);

  console.log('map', newArr); // [100, 400, 900]
  
})();


