// 내장 객체 - Date

(()=>{
  // 오늘 날짜
  const today = new Date();
  console.log(today);

  console.log(today.getFullYear()); // 4자리 년도
  console.log(today.getMonth()+1); // 월(0부터 시작)
  console.log(today.getDate()); // 일
  console.log(today.getDay()); // 요일 (0: 일요일 ~ 6: 토요일)
  console.log(today.getHours()); // 시
  console.log(today.getMinutes()); // 분
  console.log(today.getSeconds()); // 초

  console.log(today.getTime()); // 1745991325180 1970년 1월 1일 00:00:00부터 현재까지의 밀리초
})();