// 🔹 배열 예제
const arr = [10, 20, 30];

console.log("✅ 배열 + for...of (값 중심 순회)");
for (let value of arr) {
  console.log("값:", value);
}

console.log("\n⚠️ 배열 + for...in (인덱스 중심 순회)");
for (let index in arr) {
  console.log("인덱스:", index);        // 문자열 "0", "1", "2"
  console.log("값:", arr[index]);
}

// 🔹 객체 예제
const obj = {
  name: "호정",
  age: 25,
};

console.log("\n✅ 객체 + for...in (속성명 순회)");
for (let key in obj) {
  console.log("속성명:", key);        // "name", "age"
  console.log("값:", obj[key]);       // "호정", 25
}

// ❌ 객체에 for...of 사용하면 오류 발생
// console.log("\n❌ 객체 + for...of (오류 발생!)");
// for (let item of obj) {
//   console.log(item); // TypeError: obj is not iterable
// }
