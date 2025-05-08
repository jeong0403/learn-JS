// Geolocation API
// Geolocation API를 사용하려면, navigation에 있는 geolocation 속성으로 찾는다.

// KAKAO 타입미제공이므로 추가로 해줄 필요가 있음
// 전역으로 사용하는 타입 선언 -> 반드시 "모듈" 파일 안에서만 사용할 수 있다는 제한이 있다. (모듈 파일: import 또는 export가 있는 파일 안에 있다는 말)
declare global { // 모듈로 만들어주기 export 빈 객체 하나 추가 필요함 (하단에 추가했음)
  interface Window { // Type은 항상 대문자로 적기 -> window error
    kakao: any
  }
}

interface Position {
  lat: number;
  lng: number;
  accuracy: number;
}

const btn = document.querySelector("button");

btn?.addEventListener("click", find);

function find() {
  // 실패 고려하지 않고 성공했을 때 반환할 함수를 콜백 함수로 작성
  navigator.geolocation.getCurrentPosition((currentPosition) => {
    console.log(currentPosition);
    const position: Position = {
      lat: currentPosition.coords.latitude, // 위도
      lng: currentPosition.coords.longitude, // 경도
      accuracy: currentPosition.coords.accuracy // 위경도 오차(m)
    };
    showPosition(position);
  }, () => {}, { // 실패 시 아무 처리 없음
    enableHighAccuracy: true // Geolocation API에서 더 정밀한 위치 정보를 요청 (정확도↑, 배터리 사용량↑, 위치 수신 속도 느릴 수 있음 -> 보통 false가 기본값으로 반대가 됨)
  });
}

const myPosition = document.querySelector('#my-position');
function showPosition(position: Position) {
  if(myPosition) {
    myPosition.textContent = `위도: ${position.lat}, 경도: ${position.lng}, 오차: (${position.accuracy.toFixed()}m)`;
  }
  panTo(position);
  showMarker(position);
  showAccuracy(position);
}

// 지도 확대 & 축소, 마커, 원 -> kakao 제공 코드
const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
const options = { //지도를 생성할 때 필요한 기본 옵션
    center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
    level: 7 //지도의 레벨(확대, 축소 정도)
};

const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

function panTo(position: Position) {
  // 이동할 위도 경도 위치를 생성합니다 
  var moveLatLon = new window.kakao.maps.LatLng(position.lat, position.lng);
  
  // 지도 중심을 부드럽게 이동시킵니다
  // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
  map.panTo(moveLatLon);            
}

function showMarker(position: Position) {
  // 지도를 클릭한 위치에 표출할 마커입니다
  var marker = new window.kakao.maps.Marker({
    // 지도 중심좌표에 마커를 생성합니다
    position: new window.kakao.maps.LatLng(position.lat, position.lng),
  });
  // 지도에 마커를 표시합니다
  marker.setMap(map);
}

function showAccuracy(position: Position){
  // 지도에 표시할 원을 생성합니다
  var circle = new window.kakao.maps.Circle({
    center : new window.kakao.maps.LatLng(position.lat, position.lng),  // 원의 중심좌표 입니다 
    radius: position.accuracy, // 미터 단위의 원의 반지름입니다 
    strokeWeight: 5, // 선의 두께입니다 
    strokeColor: '#75B8FA', // 선의 색깔입니다
    strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
    strokeStyle: 'dashed', // 선의 스타일 입니다
    fillColor: '#CFE7FF', // 채우기 색깔입니다
    fillOpacity: 0.7  // 채우기 불투명도 입니다   
  }); 

  // 지도에 원을 표시합니다 
  circle.setMap(map); 
}

export {} // export {}는 아무것도 내보내지 않지만, TypeScript에게 "이 파일은 모듈입니다"라고 알려주는 역할을 한다.