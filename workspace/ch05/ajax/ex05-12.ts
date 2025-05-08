// 랜덤 고양이 이미지 가져오기 - XMLHttpRequest 사용

import { type Cat } from "./types.js";
import { appendImages } from "./utils.js"; // 외부 파일(utils.ts)에 정의된 appendImages() 함수를 가져오고 있다.

const url = 'https://api.thecatapi.com/v1/images/search';

const btn = document.querySelector('button');

btn?.addEventListener('click', getImages); // ?앞의 값이 null이나 undefined가 아니면 .뒤의 addEventListener 실행 (btn에 ?붙이지 않으면 null 될 수 있다고 error 발생)

function getImages(): void{
  // Ajax 프로그래밍 순서 (Ajax: 서버랑 페이지 새로고침 없이 통신하는 방법)
  // 1. XMLHttpRequest 객체 생성
  const xhr = new XMLHttpRequest();

  // 2. 요청 준비(open)
  // 요청시 gEt와 같이 대소문자는 구분하지 않지만, 표준 방식은 대문자로 적는 것
  xhr.open('GET', url, true); // false 동기 방식, true 비동기 방식

  // 4. 응답 데이터 처리
  /* 화살표 함수로 함수 호출하는 형태
  xhr.addEventListener("load", () => {  
  })
   */
  xhr.addEventListener('load', function() {
    // 여기서 this = xhr이고, xhr을 쓰면 클로저가 생기고 이 클로저가 많이 생기면 성능 저하 이슈 발생
    // 따라서 xhr 대신 this 씀 (굳이 클로저로 쓸 필요 없으면 this를 쓰는 게 나음)
    const result = this.responseText; // 서버로부터 결과를 받은 게 resposeText다.
    console.log(result);
    const data: Cat[] = JSON.parse(result); // data: Cat[]
    console.log(data);
    appendImages(data); //  Cat[] 타입의 배열을 넘겨줘야 함
  });

  
  // 3. 서버에 요청(send)
  xhr.send();
};
