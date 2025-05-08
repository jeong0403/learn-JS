// 랜덤 고양이 이미지 가져오기 - axios 라이브러리
// ex05-13.ts 복사

// axios 타입 추가
// npm i @types/axios (vite나 번들러 이용한 경우면 이거 추가할 필요 없음)

import { type Cat } from "./types.js";
import { appendImages } from "./utils.js"; // 외부 파일(utils.ts)에 정의된 appendImages() 함수를 가져오고 있다.

const url = 'https://api.thecatapi.com/v1/images/search';

const btn = document.querySelector('button');

btn?.addEventListener('click', getImages); // ?앞의 값이 null이나 undefined가 아니면 .뒤의 addEventListener 실행 (btn에 ?붙이지 않으면 null 될 수 있다고 error 발생)

async function getImages() {
  try {
    const response = await axios.get<Cat[]>(url);
    const data = response.data;
    appendImages(data);
  } catch(err) { // 네트워크 오류
    console.error('네트워크 에러 발생', err);
  }
};