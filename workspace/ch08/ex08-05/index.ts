// import 구문은 보통 모듈의 최상단에 정의

// Named Import
// import { plus, minus } from './math.js';
import { plus as add, type Member, minus } from './math.js'; // 정적인 import 방식

// Default Import
import MyMath from './math.js';

// Mixed Import (권장하지 않음 -> 헷갈리니깐 Named나 Default 써라)
import YorMath, { plus } from './math.js'

plus(1, 2);
minus(2, 3);

MyMath.plus(3, 4);
MyMath.minus(4, 5);
MyMath.multiply(5, 6);

add(7, 8);

YorMath.multiply(9, 10);

const haru: Member = {
  name: '하루',
  age: 5
};
console.log(haru);

if(MyMath.minus(5, 6) < 0) {
  // Dynamic Import -> 동적으로 import 하는 방식
  // ES2015 Promise 문법
  // then을 붙여 콜백 함수를 사용하는 방법
  import('./math.js').then((dynamicMath) => {
    dynamicMath.plus(7, 8);
  });

  // ES2017 async/await 문법
  // import 앞에 await 키워드 붙여서 return 받아서 사용하는 방법
  const dynamicMath2 = await import('./math.js');
  dynamicMath2.minus(8, 9);
}