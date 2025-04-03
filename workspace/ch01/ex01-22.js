/*
반복문 - break, continue
*/

// n ~ m까지의 정수 중에서 가장 작은 짝수를 찾아서 출력하세요.

const n = 1;
const m = 10;

for (let i = n; i <= m; i++){
  if (i % 2 === 0){
  console.log(`가장 작은 짝수: ${i}`);
  break; // 자신과 가까운 반복문이나 switch를 빠져나가는게 break. if문에는 해당 없음
  }
}


// n ~ m까지 홀수만 출력하세요.

for (let i = n; i <= m; i++){
  if (i % 2 === 1){
  console.log('홀수', i);
  }
}

// n ~ m까지 홀수와 짝수를 구분해서 출력하세요.

for (let i = n; i <= m; i++){
  if (i % 2 === 1){
  console.log('홀수', i);
  continue; // 이번 횟수의 남은 코드를 실행하지 말고, 바로 증감식으로 간다!
  }

  console.log('짝수', i);
  // 굉장히 많고
  // 복잡한
  // 코드가
  // 있을 수 있다.
  // 이 경우는 else로 if문에 이어서 하지 않는다.
}