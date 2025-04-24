console.log(Math.min(10, 100)); // 10
console.log(Math.min(200, 100, 50, 60, 80, 30)); //30
console.log(Math.min(100, 20, 60, 50, 70)); // 20

// 지정한 배열의 요소 중 최소값을 반환
function smallest(nums) {
  // return Math.min.apply(this, nums);
  // let min = nums[0];
  // for(let i = 1; i < nums.length; i++){
  //   const num = nums[i];
  //   if(num < min) {
  //     min = num;
  //   }
  // }

  // const min = Math.min(nums[0], nums[1], nums[2], ...); 이렇게 할 수 없으니 apply 사용하는 것
  // const min = Math.min.apply(this, nums); // Math.min은 인자값을 낱개로 보내고 -> apply는 배열로 넘긴다.
  const min = Math.min(...nums); // 묶인 배열을 낱개로 풀어주는 역할을 한다. = 전개 구문 (Spread syntax)
  return min;
}



console.log(smallest([10, 100])); // 10
console.log(smallest([200, 100, 50, 60, 80, 30])); //30
console.log(smallest([100, 20, 60, 50, 70])); // 20
