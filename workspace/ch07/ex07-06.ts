// 내장 객체 - Object

(()=>{
  
  const haru = { name: '하루', age: 5 };

  // keys, values, entries
  console.log(Object.keys(haru)); // ['name', 'age']
  console.log(Object.values(haru)); // ['하루', 5]
  console.log(Object.entries(haru)); // [['name', '하루'], ['age', 5]]

  // fromEntries
  const newUser = Object.fromEntries([['name', '나무'], ['age', 8]]);
  console.log(newUser); // { name: '나무', age: 8 }

  const haru2 = haru;
  haru.age++;
  console.log(haru.age, haru2.age); // 6 6

  // assign(주로 객체 복사할 때 사용)
  const haru3 = Object.assign({}, haru);
  haru.age++;
  console.log(haru.age, haru3.age); // 7 6

  // 주소 말고 알맹이 통째로 가져와서 복사하는 깊은 복사 방식 쓰고 싶을 때
  // 스프레드 문법의 형태. 펼쳐진 속성을 다시 압축한다. -> 전개 구문
  // haru 객체의 모든 속성을 새로운 객체로 얕게 복사하고 breed 속성을 덮어 씀
  const haru4 = { ...haru, breed: '이탈리안 그레이 하운드' };
  haru.age++;
  console.log(haru.age, haru4.age); // 8 7

})();

