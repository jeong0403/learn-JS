/*
for문을 이용해서 구구단 작성

출력 예시 :
3 x 1 = 3
3 x 2 = 6
...
3 x 9 = 27
*/

// 하나씩 증가하는 값 : i
const dan = 3;

for (let i = 1; i <= 9; i++) {
  console.log(dan + ' x ' + i + ' = ' + (dan * i));
  console.log(`${ dan } x ${ i } = ${dan * i }`); // 변수로 바꿀 부분을 ${}감싸면 됨

}

/* 
2단부터 9단까지 출력

출력 예시:
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
...
2 x 9 = 18

3 x 1 = 3
...
3 x 9 = 27

4 x 1 = 4
...

9 x 9 = 81
*/
 //겉 for문이 1번 실행될 때 안 for문이 9번 실행 됨
for (let dan = 2; dan <= 9; dan++){
  for (let i = 1; i <= 9; i++){
    console.log(`${dan} x ${i} = ${dan*i}`);
  }
  console.log('===========');
}

/* 2단부터 9단까지 출력

출력 예시:
2 x 1 = 2 3 x 1 = 3 4 x 1 = 4 ... 9 x 1 = 9
2 x 2 = 4 3 x 2 = 6 4 x 2 = 8 ... 9 x 2 = 18
...
2 x 9 = 18 3 x 9 = 27 4 x 9 = 36 ... 9 x 9 = 81
*/


for (let i = 1; i <= 9; i++){
  let gugu = "";
  for (let dan = 2; dan <= 9; dan++){
    gugu += `${dan} x ${i} = ${dan*i}`.padEnd(12);
  }
  console.log(gugu);
}