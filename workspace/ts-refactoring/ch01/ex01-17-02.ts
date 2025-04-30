(() => {
/*
if-else문을 사용하여 학점을 출력하세요.
*/

const score = 100;

if (score >= 90 && score <= 100) {
  console.log("A");
} else {
  // 90 미만
  if (score >= 80) {
    console.log("B");
  } else {
    // 80 미만
    if (score >= 70) {
      console.log("C");
    } else {
      // 70 미만
      if (score >= 60) {
        console.log("D");
      } else {
        // 60 미만
        console.log("F");
      }
    }
  }
}

})();
