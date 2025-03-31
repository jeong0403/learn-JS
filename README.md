# 멋쟁이 사자처럼 Front-End BootCamp 13기: 자바스크립트 프로그래밍
* 예제 테스트(GitHub Page): <https://febc-13.github.io/JS/workspace-ins>

# 개발 환경 구축
## 프로그램 설치
- 본인의 OS에 맞는 버전 다운로드 후 설치
  - Nodejs 설치 <https://nodejs.org/en/download/>
  - Visual Studio Code 설치 <https://code.visualstudio.com/download>
  - Git 설치 <https://git-scm.com/downloads>
  - API 클라이언트 설치
    - Postman <https://www.postman.com/downloads>
    - Bruno <https://www.usebruno.com/downloads>
    
# 실습 준비
## Github 저장소 복사
1. 자바스크립트 실습 Github 저장소
    * `https://github.com/FEBC-13/JS.git`
2. 터미널 프로그램 실행 후 개발 수업에 사용할 폴더 생성 후 이동
    * 예시
    ```sh
    mkdir febc13
    cd febc13
    ```
3. 자바스크립트 수업에 사용할 폴더 생성 후 이동
    ```sh
    mkdir 01_js
    cd 01_js
    ```
4. 실습 저장소를 로컬에 clone
    ```sh
    git clone https://github.com/FEBC-13/JS.git
    ```

## 실습 저장소의 변경사항 동기화
* github 저장소의 변경사항을 가져올 때
    ```sh
    git pull origin main
    ```
* 충돌 발생시 임시로 필요한 코드만 복사
    * 현재 폴더 하위에 sample/02 폴더만 복사하는 예시
    ```sh
    npx degit https://github.com/FEBC-13/JS/sample/02 sample/02 
    ```

## Visual Studio Code 설정
1. VSCode 실행
2. 프로젝트 선택
    * File > Open Folder... > febc13/01.js/JS 선택
3. File > Preferences > Settings
	* "Files: Auto Save": onFocusChange
	* "Editor: Font Size": 각자 맞춰서 조절
	* "Editor: Tab Size": 2
	* "Editor: Detect Indentation": 체크 해제
	* Workspace 탭 > "Files: Readonly Include"
      - Readonly Include가 보이지 않을 경우 VSCode를 최신 버전(1.79 이상)으로 업데이트
      - Add Pattern > `PPT/**` 입력한 후 OK 선택
      - Add Pattern > `workspace-ins/**` 입력한 후 OK 선택
      - Add Pattern > `sample/**` 입력한 후 OK 선택

## sample 폴더 복사
* sample/01/workspace 폴더를 복사해서 프로젝트 루트에 붙여넣기
* 완성된 강사의 코드는 **workspace-ins** 폴더에서 확인할 수 있음

## 웹 서버 구동
1. VSCode의 터미널로 이동
    * VSCode 하단의 TERMINAL이 보이지 않으면 View > Terminal
2. Live Server 구동
    ```sh
    npx live-server workspace
    ```
3. 접속
    * <http://127.0.0.1:8080>
    * <http://localhost:8080>

## 실습 테스트
* 각 예제 클릭해서 테스트
  - .js: Javascript 문법 관련 실습은 브라우저 개발자 도구 > 콘솔 탭에서 결과 확인
  - .html: DOM, Ajax 관련 실습은 새로운 화면으로 이동 후 테스트

# 팁
* VSCode에서 소스코드 비교
  - 비교할 두개의 파일을 VSCode에서 오픈(예시, student.js, ins.js)
  - student.js 파일이 활성화 되어있는 상태에서
  - View > Command Palette (단축키 F1) > File: Compare Active File With... 선택
  - 비교할 대상 파일 선택(ins.js)
  - student.js <-> ins.js 파일의 차이점 쉽게 확인 가능

# 수업 진도
## 1주차 - 2일, 2025.03.27(목) ~ 2025.03.28(금)

### 1일차(목)
#### 오전(3시간)
* [JS 레포지토리 README](https://github.com/FEBC-13/JS)
* 💻 개발환경 구성

#### 오후(5시간)
* 📜 자바스크립트란? ~ 자바스크립트 코드의 위치
  - 💻 [01-01 인라인 자바스크립트](./workspace-ins/ch01/ex01-01.html)

##### boj
* 백준 그룹 가입
  - https://www.acmicpc.net/group/23092
  - 💻 Hello World- [boj/01/01.js](./workspace-ins/boj/01/01.js)

### 2일차(금)
#### 오전(3시간)
* 📜 자바스크립트 코드의 위치
  - 💻 [01-02 외부 자바스크립트 파일 로드](./workspace-ins/ch01/ex01-02.html)
* 📜 명령문과 주석
  - 💻 [01-04 명령문과 주석](./workspace-ins/ch01/ex01-04.js)

#### 오후(3시간)
* 📜 변수
  - 💻 [01-05 변수 선언](./workspace-ins/ch01//ex01-05.js)
* 📜 원시 타입
  - 💻 [01-06 기본 데이터 타입 - Number, String, Boolean, undefined, null](./workspace-ins/ch01/ex01-06.js)
* 📜 산술 연산자
  - 💻 [01-08 산술 연산자 +, -, *, /, %, **](./workspace-ins/ch01/ex01-08.js)

##### boj
* 문제 풀이
  - 💻 A+B - [boj/01/02.js](./workspace-ins/boj/01/02.js)
  - 💻 곱셈 - [boj/01/10.js](./workspace-ins/boj/01/10.js)
* 문제 추천
  - 💻 A-B - [boj/01/03.js](./workspace-ins/boj/01/03.js)
  - 💻 A×B - [boj/01/04.js](./workspace-ins/boj/01/04.js)
  - 💻 A/B - [boj/01/05.js](./workspace-ins/boj/01/05.js)
  - 💻 사칙연산 - [boj/01/06.js](./workspace-ins/boj/01/06.js)
  - 💻 ??! - [boj/01/07.js](./workspace-ins/boj/01/07.js)
  - 💻 1998년생인 내가 태국에서는 2541년생?! - [boj/01/08.js](./workspace-ins/boj/01/08.js)
  - 💻 나머지 - [boj/01/09.js](./workspace-ins/boj/01/09.js)
  - 💻 곱셈 - [boj/01/10.js](./workspace-ins/boj/01/10.js)
  - 💻 꼬마 정민 - [boj/01/11.js](./workspace-ins/boj/11/02.js)
  - 💻 고양이 - [boj/01/12.js](./workspace-ins/boj/01/12.js)
  - 💻 개 - [boj/01/13.js](./workspace-ins/boj/01/13.js)

## 2주차 - 4일, 2025.03.31(월) ~ 2025.04.03(목)
### 3일차(월)
##### 오전(3시간)
* 📜 대입 연산자
  - 💻 [01-09 대입 연산자 =, +=, -=, *=, /=, %=, **=](./workspace-ins/ch01/ex01-09.js)
  - 💻 [01-09-02 대입 연산자 - 1부터 10까지의 모든 수의 합계](./workspace-ins/ch01/ex01-09-02.js)
* 📜 증감 연산자
  - 💻 [01-10 증감 연산자 a++, a--, ++a, --a](./workspace-ins/ch01/ex01-10.js)
  - 💻 [01-10-02 증감 연산자 - x, y 값 계산](./workspace-ins/ch01/ex01-10-02.js)
* 📜 비교 연산자
  - 💻 [01-11 비교 연산자 >, >=, <, <=, ==, !=, ===, !==](./workspace-ins/ch01/ex01-11.js)
  
##### 오후(3시간)
  - 💻 [01-11-02 비교 연산자 - 다음 값들을 비교한 결과를 예측](./workspace-ins/ch01/ex01-11-02.js)
* 📜 일치, 동등 연산자
* 📜 논리 연산자
  - 💻 [01-13 논리 연산자 &&, ||, !](./workspace-ins/ch01/ex01-13.js)
* 📜 삼항 연산자
  - 💻 [01-14 삼항 연산자 ?](./workspace-ins/ch01/ex01-14.js)
  - 💻 [01-14-02 삼항 연산자 - 홀수/짝수 판별(node 명령어로 실행)](./workspace-ins/ch01/ex01-14-02.js)
* 📜 연산자 우선순위
  - 💻 [01-15 연산자 우선순위](./workspace-ins/ch01/ex01-15.js)

##### boj
* 문제 풀이
* 문제 추천
  - 두 수 비교하기 - [boj/02/01.js](./workspace-ins/boj/02/01.js)


# 참고 사이트
## 자바스크립트 학습
* 모던 자바스크립트 튜토리얼: <https://ko.javascript.info>
* MDN 자바스크립트: <https://developer.mozilla.org/ko/docs/Web/JavaScript>

## 온라인 웹 개발 에디터(HTML, CSS, JS)
* CodePen: <https://codepen.io>
* Codesandbox: <https://codesandbox.io>
* Stackblitz: <https://stackblitz.com>

## 정규표현식 테스트
* <https://regexr.com>

## API Client
### Postman
* 홈페이지: <https://www.postman.com>
* 다운로드: <https://www.postman.com/downloads>
* 문서: <https://learning.postman.com/docs>

### Bruno
* 홈페이지: <https://www.usebruno.com>
* 다운로드: <https://www.usebruno.com/downloads>
* 문서: <https://docs.usebruno.com/introduction>