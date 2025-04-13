let verb = ["eat", "throw", "catch", "cut"];
let color = ["red", "blue", "green", "yellow", "purple"];
let fruit = ["apple", "banna", "pear", "coconut", "orange", "cherry"];
let arr = [verb, color, fruit];

arr = [
  ["eat", "throw", "catch", "cut"],
  ["red", "blue", "green", "yellow", "purple"],
  ["apple", "banna", "pear", "coconut", "orange", "cherry"],
];

// eat banana
// throw coconut
// catch cherry

console.log(arr[0][0], arr[2][1]);
console.log(arr[0][1], arr[2][3]);
console.log(arr[0][2], arr[2][5]);

/* 같은 자리가 arr에서 어떤 요소일까?
console.log(verb[0], fruit[1]);
console.log(verb[1], fruit[3]);
console.log(verb[2], fruit[5]);
*/

console.log("------------");

for (let i = 0; i < 3; i++) {
  console.log(arr[0][i], arr[2][i * 2 + 1]);
}

console.log(arr[1][0][0]); // 'red' -> r 출력
console.log(arr[2][4][4]); // 'orange' -> g 출력


// eat blue pear
// throw green coconut
// catch yellow orange
// cut purple cherry

// console.log(arr[0][0], arr[1][1], arr[2][2]);
// console.log(arr[0][1], arr[1][2], arr[2][3]);
// console.log(arr[0][2], arr[1][3], arr[2][4]);
// console.log(arr[0][3], arr[1][4], arr[2][5]);

// console.log("---------------");

// for (let i = 0; i <= 3; i++) {
//   console.log(arr[0][i], arr[1][i + 1], arr[2][i + 2]);
// }

// for (let i = 0; i <= 3; i++) {
//   let k = i + 1;
//   let x = i + 2;
//   console.log(arr[0][i], arr[1][k], arr[2][x]);
// }

// yellow
// console.log(arr[1][3]);

// // purple coconut
// console.log(`${arr[1][4]} ${arr[2][3]}`);
// console.log(arr[1][4] + " " + arr[2][3]);
// console.log(arr[1][4], arr[2][3]);

// // cut apple
// console.log(arr[0][3], arr[2][0]);
// console.log(arr[0][3] + " " + arr[2][0]);
// console.log(`${arr[0][3]} ${arr[2][0]}`);

// // throw green coconut
// console.log(arr[0][1], arr[1][2], arr[2][3]);

// throw and catch blue apple
// console.log(arr[0][1] + " and " + arr[0][2] + " " + arr[1][1] + " " + arr[2][0]);

// eat red apple
// throw blue banana
// catch green pear
// 규칙 찾기
// console.log(arr[0][0], arr[1][0], arr[2][0]);
// console.log(arr[0][1], arr[1][1], arr[2][1]);
// console.log(arr[0][2], arr[1][2], arr[2][2]);
// 반복문으로 바꾸기
// 어디가 바뀌고 어디가 바뀌지 않는지 알아야 함 (규칙 파악하기)
// for (let i = 0; i < 3; i++) {
//   console.log(arr[0][i], arr[1][i], arr[2][i]); // 바뀌는 자리를 문자 바꾸기
// }


// // green yellow
// console.log(`${color[2]} ${color[3]}`);
// console.log(color[2] + " " + color[3]);

// console.log(color[2]);
// console.log(color[3]);


// blue yellow
// red
// console.log(color[1] + " " + color[3]);
// console.log(color[0]);

// console.log(color[1] + " " + color[3] + "\n" + color[0]);


