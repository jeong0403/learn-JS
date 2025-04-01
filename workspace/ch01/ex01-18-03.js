/*
if-else if문을 이용하여 사용자와 로그인 상태를 출력하세요.

*/

const isLogin = true; // 로그인 상태
const isUser = false; // 사용자
const isSeller = true; // 판매자
const isAdmin = false; // 관리자

/* 
로그인 상태
사용자
사용자 로그인 상태 */

// isLogin이 true이면 "로그인 상태" 출력하고 그렇지 않으면 "로그아웃 상태" 출력
if (isLogin) {
  console.log("로그인 상태");
} else {
  console.log("로그아웃 상태");
}

// isUser가 true이면 "사용자" 출력하고 그렇지 않으면 "판매자" 출력하고 이것도 아니면 "관리자" 출력
if (isUser) {
  console.log("사용자");
} else if (isSeller) {
  console.log("판매자");
} else {
  console.log("관리자");
}

if (isLogin) {
  // 로그인
  if (isUser) {
    console.log("사용자 로그인 상태");
  } else if (isSeller) {
    console.log("판매자 로그인 상태");
  } else {
    console.log("관리자 로그인 상태");
  }
} else {
  // 로그아웃
  if (isUser) {
    console.log("사용자 로그아웃 상태");
  } else if (isSeller) {
    console.log("판매자 로그아웃 상태");
  } else {
    console.log("관리자 로그아웃 상태");
  }
}
