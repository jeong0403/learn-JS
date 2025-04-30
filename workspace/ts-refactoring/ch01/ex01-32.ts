(() => {
/*
매개변수를 가진 함수 - 도어락

올바른 비밀번호가 입력되면 문이 열린다.
잘못된 비밀번호가 입력되면 경보음이 울린다.
=> 일치하면 문 열어
=> 틀리면 경보음
*/

function doorLock(password = ''){
  const pwd = 1234;
  const subPassword = password.slice(-pwd.length); // pwd 길이로 변수 가져오면 됨
  if (password === pwd) {
    console.log('문이 열립니다.');
  } else {
    console.log('삐! 삐! 삐! 삐! 삐! 삐!');
  }
}

doorLock('111111');
doorLock('3242351234');
doorLock(); // 함수에서 매개 변수 자리에 정의 되어있지만 인자 값이 없기 때문에 undefined 상태! 강형 언어에서는 error가 남. 약형 언어인 JS에서는 error는 생기진 않으나 if문의 else로 출력 되긴 함.


})();
