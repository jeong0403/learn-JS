// 랜덤 고양이 이미지 가져오기 - Fetch API 사용
// ex05-12.ts 복사

import { type Cat } from "./types.js";
import { appendImages } from "./utils.js"; // 외부 파일(utils.ts)에 정의된 appendImages() 함수를 가져오고 있다.

const url = 'https://api.thecatapi.com/v1/images/search';

const btn = document.querySelector('button');

btn?.addEventListener('click', getImages); // ?앞의 값이 null이나 undefined가 아니면 .뒤의 addEventListener 실행 (btn에 ?붙이지 않으면 null 될 수 있다고 error 발생)

async function getImages() {
  try {
    // fetch를 통해 url로 GET 요청을 보냄 (비동기)
    const response = await fetch(url);
    console.log(response);
    // 응답 상태가 200번대라면 성공 처리 (ex. 200 OK, 201 Created 등)
    if (response.ok) {
      const data: Cat[] = await response.json(); // 응답 데이터를 JSON 형식으로 파싱 (비동기 처리 필요)
      appendImages(data); // 받아온 고양이 이미지 배열을 화면에 추가하는 함수 호출
    } else { // 응답은 받았지만 200번대가 아니라면 (ex. 404, 500 등) 직접 에러 메시지 출력
      console.log(response.status, '에러 발생');
    }

  } catch(err) { // fetch 자체가 네트워크 오류로 실패했을 때 (인터넷 연결 오류, 서버 다운 등)만 잡힘
    console.error('네트워크 에러 발생', err);
  }


  // 아래 코드가 위의 코드로 바뀜
  // // Ajax 프로그래밍 순서 (Ajax: 서버랑 페이지 새로고침 없이 통신하는 방법)
  // // 1. XMLHttpRequest 객체 생성
  // const xhr = new XMLHttpRequest();

  // // 2. 요청 준비(open)
  // // 요청시 gEt와 같이 대소문자는 구분하지 않지만, 표준 방식은 대문자로 적는 것
  // xhr.open('GET', url, true); // false 동기 방식, true 비동기 방식

  // // 4. 응답 데이터 처리
  // /* 화살표 함수로 함수 호출하는 형태
  // xhr.addEventListener("load", () => {  
  // })
  //  */
  // xhr.addEventListener('load', function() {
  //   // 여기서 this = xhr이고, xhr을 쓰면 클로저가 생기고 이 클로저가 많이 생기면 성능 저하 이슈 발생
  //   // 따라서 xhr 대신 this 씀 (굳이 클로저로 쓸 필요 없으면 this를 쓰는 게 나음)
  //   const result = this.responseText; // 서버로부터 결과를 받은 게 resposeText다.
  //   console.log(result);
  //   const data: Cat[] = JSON.parse(result); // data: Cat[]
  //   console.log(data);
  //   appendImages(data); //  Cat[] 타입의 배열을 넘겨줘야 함
  // });

  
  // // 3. 서버에 요청(send)
  // xhr.send();
};
