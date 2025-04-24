const sum = function(x, y){
  return x + y;

}
console.log(sum(10, 20));

//curry도 partial도 모두 클로저 때문에 가능한 기능임

// lodash의 curry 함수를 사용해서 sum을 커링
const currySum = _.curry(sum); // sum을 커링한 currySum 만들어짐
console.log(currySum(10), (20), (30));

// lodash의 partial 함수를 사용해서 부분 적용 함수 생성
// 기존 함수를 바꾸지 말고, 자주 호출하면 해당 부분을 하나의 함수로 만들어서 생성
const sum100 = _.partial(sum, 100); // 미리 보내고 싶은 값을 100으로 지정함 (고정된 매개변수의 형태)
console.log(sum100(10));
console.log(sum100(20));