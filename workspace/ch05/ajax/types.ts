/*
interface: 객체가 가져야 할 속성과 그 타입을 미리 정의한 틀
'고양이 이미지 객체는 이런 속성들을 갖는다'를 명시한 코드이다.
*/

export interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
}
