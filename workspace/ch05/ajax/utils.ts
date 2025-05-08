/*
appendImages() 함수가 Cat[] 타입을 매개변수로 받기 때문에,
그 타입을 정의한 types.ts에서 Cat을 import한다.
 */
import { type Cat } from "./types.js";

export function appendImages(images: Cat[]){  // images 배열을 사용하려면 타입 정보가 필요 -> 그래서 위에 import에 type 작성함
  const catList = document.querySelector('#cat-list'); // ul 요소 찾아서 고양이 이미지당 li 하나씩 추가하게 만들거야

  images.forEach((item) => { 
    const li = document.createElement('li'); // <li>
    const img = document.createElement('img'); // <img>
    img.src = item.url; // <img src="...">
    img.height = 200; // <img src="..." height="200">
    li.appendChild(img); // <li><img src="..." height="200"></li>
    catList?.appendChild(li); // <ul id="cat-list"><li><img src="..." height="200"></li></ul>
  });
}