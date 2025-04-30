// 내장 객체 - JSON

(()=>{

  // 원본 객체
  const haru = { name: '하루', age: 5 };
  console.log(typeof haru, haru);

  // JSON 문자열로 변환
  const jsonString = JSON.stringify(haru);
  console.log(typeof jsonString, jsonString); // strin {"name": "하루", "age":5}

  // JSON 문자열을 객체로 변환
  const parseHaru = JSON.parse(jsonString);
  console.log(typeof parseHaru, parseHaru); // object {name: '하루', age: 5}

})();


