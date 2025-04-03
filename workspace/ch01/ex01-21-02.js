/*
for문
*/

/*

*
**
***
****
*****

*/
const lines = 5;

for (let i = 0; i < lines; i++){
  let star = '';
  for (let j = 0; j <= i; j++){
  star += '*';
  }
  console.log(star);
}
/*

*****
****
***
**
*

*/
for (let i = 0; i >= 1; i--){
  let star = '';
  for(let k = 0; k < i; k++){
  star += '❤️ ';
  }
  console.log(star);
}

/*
    *
   **
  ***
 ****
*****

*/
for (let i = 0; i < lines; i++){
  let space = '';
  let star = '';
  for (let j = 0; j < lines-i-1; j++){ // i와 space가 반비례 해야 해서 빼는 것
  space += ' ';
  }
  for (let j = 0; j <= i; j++){
  star += '*';
  }
  console.log(space + star);
}
