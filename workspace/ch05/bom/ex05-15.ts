const ua = document.querySelector('#user-agent');
const lang = document.querySelector('#language');
const platform = document.querySelector('#platform');
const isOnline = document.querySelector('#online-status');

/*
window는 브라우저 환경에서 전역 객체(global object)이며,
대부분의 전역 속성이나 메서드는 window.를 붙이든 안 붙이든 동일하게 동작한다.
*/

if(ua) {
  ua.textContent = window.navigator.userAgent;
}
if(lang) {
  lang.textContent = navigator.language;
}
if(platform) {
  platform.textContent = (navigator as any).userAgentData.platform;
}
if(isOnline) {
  isOnline.textContent = navigator.onLine ? "온라인" : "오프라인";
}

console.log(navigator);