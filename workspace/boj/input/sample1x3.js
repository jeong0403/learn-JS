function main(){
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  console.log(data.a + data.b + data.c);
}
main();

/**
 * 표준 입력장치(콘솔)에서 한 줄로 입력된 세 건의 데이터를 읽어서 숫자로 변환한 후
 * 객체에 a, b, c 속성으로 저장하여 반환한다.
 * @returns {object} a , b, c 속성에 입력값이 저장된 객체
 */
function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString().trim().split(" ");

  const result = new Object();

  result.a = isNaN(fileData[0]) ? fileData[0] : Number(fileData[0]);
  result.b = isNaN(fileData[1]) ? fileData[1] : Number(fileData[1]); 
  result.c = isNaN(fileData[2]) ? fileData[2] : Number(fileData[2]);

  return result; // return 함수에 값을 1개 밖에 못 적음!
}