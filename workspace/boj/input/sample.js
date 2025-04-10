function main(){
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  
}
main();

/*
23 48
25

리턴값
[
  [23, 48]
  [25]
]
*/

/**
 * 표준 입력장치(콘솔)에서 여러 줄로 입력된 줄당 여러 건의 데이터를 읽어서 숫자로 변환한 후
 * 배열로 저장하여 반환한다.
 * @returns {[]} 2차원 배열
 */
function getData() {
  const fs = require("fs");
  // '23 48\n25\n'와 같은 모양을 쪼갠다
  const fileData = fs.readFileSync(0).toString();
  // ['23 48', '25']
  const arr = fileData.trim().split("\n"); // 줄 단위로 먼저 자른다.

  const result = []; // 리턴할 2차원 배열
  for (let i = 0; i < arr.length; i++) {
    const row = arr[i]; // '23 48', '25' for문 2번 도는 상황이고 length = 2임
    const rowArr = row.split(' '); // ['23', 48'], ['25']
    for (let k = 0; k < rowArr.length; k++){
      rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]);
    }
    result.push(rowArr);
  }
  return result;
}