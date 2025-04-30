(() => {
/*
객체의 속성 관리
*/

const foo = {
  name: '푸푸핑',
  mainJob: 'magician',
};

// 객체 프로퍼티 읽기
// 정의 되지 않은 값을 넣으면 (foo.subjob) -> undefined가 출력 된다
console.log(foo.name, foo['mainJob'], foo.subjob);

// 객체 프로퍼티 갱신
// mainJob을 새롭게 할당하면 'fairy'라고 나옴.
foo.mainJob = 'fairy';
console.log(foo.name, foo['mainJob'], foo.subjob);

// 객체 프로퍼티 동적 생성
// 새로운 속성인 subjob을 추가
foo.subjob = 'celeb';
console.log(foo.name, foo['mainJob'], foo.subjob);

// 객체 프로퍼티 삭제
delete foo.mainJob;
console.log(foo.name, foo['mainJob'], foo.subjob);

// 객체의 모든 프로퍼티 읽기
for (let prop in foo) { // 1) prop = 'name', 2) prop = 'subJob'
  // console.log(prop);
  console.log(prop, foo[prop]);
  // console.log(foo.prop); 이렇게 작성하면 foo 안에 있는 prop라는 속성을 찾으려고 하기 때문에 undefined가 나옴!
  // console.log(foo[prop]); 변수로 정의된 속성의 값을 읽고 싶다면 대괄호 사용해야 함!
}
})();
