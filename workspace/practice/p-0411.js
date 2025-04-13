let a = 11;
let b = 5;

let calculater = {
  // x: 11,
  // y: 5,
  // sum: function () {
  //   console.log(`${this.x} + ${this.y} = ${this.x + this.y}`);
  // },
  // sum1: function (x, y) { // 위의 x, y와 다르다. 아예 다른 종류
  //   console.log(`${x} + ${y} = ${x + y}`);
  // },
  // opArr: ["+", "-", "*", "/", "%"],
  // funArr: [sumNum, subNum, mulNum, divNum, remNum],
  
  /*
  sum: function sumNum(x, y) {
    let num1 = 0;
    let num2 = 0;
    if (y !== undefined) {
      num1 = x;
      num2 = y;
    } else {
      num1 = this.untilResult;
      num2 = x;
    }
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    this.untilResult = num1 + num2;
  },
  */
  untilResult: 0,
  sum: function sumNum(x, y) {
    if (y !== undefined){
    console.log(`${x} + ${y} = ${x + y}`);
    // console.log(x, "+", y, "=", x + y);
    this.untilResult = x + y;
    } else {
      console.log(`${this.untilResult} + ${x} = ${this.untilResult + x}`);
      this.untilResult += x;
    }
  },
  sub: function subNum(x, y) {
    if (y !== undefined){
    console.log(`${x} - ${y} = ${x - y}`);
    this.untilResult = x - y;
  } else {
    console.log(`${this.untilResult} - ${x} = ${this.untilResult - x}`);
    this.untilResult -= x;
  }
  },
  mul: function mulNum(x, y) {
    if (y !== undefined){
    console.log(`${x} x ${y} = ${x * y}`);
    this.untilResult = x * y;
  } else {
    console.log(`${this.untilResult} * ${x} = ${this.untilResult * x}`);
    this.untilResult *= x;
  }
  },
  div: function divNum(x, y) {
    if (y !== undefined){
    console.log(`${x} / ${y} = ${Math.floor(x / y)}`);
    this.untilResult = Math.floor(x / y);
  } else {
    console.log(`${this.untilResult} / ${x} = ${Math.floor(this.untilResult / x)}`);
    this.untilResult = Math.floor(this.untilResult / x);
  }
  },
  rem: function remNum(x, y) {
    if (y !== undefined){
    console.log(`${x} % ${y} = ${x % y}`);
    this.untilResult = x % y;
  } else {
    console.log(`${this.untilResult} % ${x} = ${this.untilResult % x}`);
    this.untilResult %= x;
  }
  },
  // for (let i = 0; i < this.opArr.length; i++) { // this=calculater의 opArr의 길이
  //   if (this.opArr[i] === op) {
    //     this.funArr[i](x, y);
    //   }
    // }
    /*
  newsum: function (x) {
      console.log(`${this.untilResult} + ${x} = ${this.untilResult + x}`);
      this.untilResult += x;
  },
  newsub: function (x) {
      console.log(`${this.untilResult} - ${x} = ${this.untilResult - x}`);
      this.untilResult -= x;
  },
  newmul: function (x) {
      console.log(`${this.untilResult} * ${x} = ${this.untilResult * x}`);
      this.untilResult *= x;
  },
  newdiv: function (x) {
      console.log(`${this.untilResult} / ${x} = ${Math.floor(this.untilResult / x)}`);
      this.untilResult = Math.floor(this.untilResult / x);
  },
  newrem: function (x) {
      console.log(`${this.untilResult} % ${x} = ${this.untilResult % x}`);
      this.untilResult %= x;
  },
  */
  cal: function (op, x, y) {
    // if (y !== undefined) {
    if (op === "+") {
      this.sum(x, y);
    } else if (op === "-") {
      this.sub(x, y);
    } else if (op === "*") {
      this.mul(x, y);
    } else if (op === "/") {
      this.div(x, y);
    } else if (op === "%") {
      this.rem(x, y);
    }
  /* else {
    if (op === "+") {
      this.newsum(x);
    } else if (op === "-") {
      this.newsub(x);
    } else if (op === "*") {
      this.newmul(x);
    } else if (op === "/") {
      this.newdiv(x);
    } else if (op === "%") {
      this.newrem(x);
    }
  }
    */
  },
};
// calculater.sum();
// calculater.sum1(a, b);
// calculater.sum(a, b);
// calculater.sub(a, b);
// calculater.mul(a, b);
// calculater.div(a, b);
// calculater.rem(a, b);
// calculater.cal("+", a, b);

calculater.cal("+", 3, 7); // 3 + 7 = 10
calculater.cal("+", 2); // 10 + 2 = 12
calculater.cal("+", 5); // 12 + 5 = 17
calculater.cal("-", 11);
calculater.cal("*", 2);
calculater.cal("/", 3);
calculater.cal("+", 4);
calculater.cal("%", 6);




// 11 + 5 = 16
function sumNum(x, y) {
  // console.log(x + y); // 17
  console.log(`${x} + ${y} = ${x + y}`);
}

// sumNum(a, b);

// 11 - 5 = 6
function subNum(x, y) {
  console.log(`${x} - ${y} = ${x - y}`);
}

// subNum(a, b);

function mulNum(x, y) {
  console.log(`${x} * ${y} = ${x * y}`);
}

// mulNum(a, b);

function divNum(x, y) {
  console.log(`${x} / ${y} = ${Math.floor(x / y)}`);
}

// divNum(a, b);

function remNum(x, y) {
  console.log(`${x} % ${y} = ${Math.floor(x % y)}`);
}

// remNum(a, b);

