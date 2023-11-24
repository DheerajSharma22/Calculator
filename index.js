const result = document.querySelector(".result");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const dot = document.querySelector(".dot");
const clearBtn = document.querySelector(".clear");
const equalBtn = document.querySelector(".equals");
const operators = document.querySelectorAll(".op");
const backspace = document.querySelector(".backspace");
const backspaceImg = document.getElementById("backspace");

let str = "";
let hasOperator = false;

function handleResult() {
  result.textContent = str;
}

function calculateResult() {
  if (str.length < 3) alert("enter valid values");

  let firstDigit = 0;
  let secondDigit = 0;

  let i = 0;
  for (; i < str.length; i++) {
    if (str[i] === "+") {
      firstDigit = parseFloat(str.substring(0, i));
      secondDigit = parseFloat(str.substring(i + 1, str.length));
      let ans = firstDigit + secondDigit;

      if (i == str.length - 1) return;

      str = ans.toString();
      result.textContent = ans;
      hasOperator = false;
    }

    if (str[i] === "*") {
      firstDigit = parseFloat(str.substring(0, i));
      secondDigit = parseFloat(str.substring(i + 1, str.length));
      let ans = firstDigit * secondDigit;

      if (i == str.length - 1) return;

      str = ans.toString();
      hasOperator = false;
      result.textContent = ans;
    }

    if (str[i] === "/") {
      firstDigit = parseFloat(str.substring(0, i));
      secondDigit = parseFloat(str.substring(i + 1, str.length));

      let ans = firstDigit / secondDigit;

      if (i == str.length - 1) return;

      str = ans.toString();
      hasOperator = false;
      result.textContent = ans;
    }

    if (str[i] === "-") {
      firstDigit = parseFloat(str.substring(0, i));
      secondDigit = parseFloat(str.substring(i + 1, str.length));
      let ans = firstDigit - secondDigit;

      if (i == str.length - 1) return;

      str = ans.toString();
      hasOperator = false;
      result.textContent = ans;
    }
  }
}

// Handle clicks
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    switch (e.target) {
      case equalBtn:
        calculateResult();
        break;

      case clearBtn:
        str = "";
        result.textContent = 0;
        hasOperator = false;
        break;

      case backspace:
        if (str) {
          str = str.substring(0, str.length - 1);
          if (str.length === 0) {
            result.textContent = 0;
            break;
          }
          handleResult();
        }
        break;

      case backspaceImg:
        if (str) {
          str = str.substring(0, str.length - 1);
          if (str.length === 0) {
            result.textContent = 0;
            break;
          }
          handleResult();
        }
        break;

      case plus:
        if (str && isNaN(parseInt(str[str.length - 1]))) {
          str = `${str.slice(0, str.length - 1)}+`;
          handleResult();
        } else if (str && !hasOperator) {
          str += "+";
          hasOperator = true;
          handleResult();
        } else {
          calculateResult();
          str += "+";
          handleResult();
          hasOperator = true;
        }
        break;

      case minus:
        if (str && isNaN(parseInt(str[str.length - 1]))) {
          str = `${str.slice(0, str.length - 1)}-`;
          handleResult();
        } else if (str && !hasOperator) {
          str += "-";
          hasOperator = true;
          handleResult();
        } else {
          calculateResult();
          str += "-";
          handleResult();
          hasOperator = true;
        }
        break;

      case multiply:
        if (str && isNaN(parseInt(str[str.length - 1]))) {
          str = `${str.slice(0, str.length - 1)}*`;
          handleResult();
        } else if (str && !hasOperator) {
          str += "*";
          hasOperator = true;
          handleResult();
        } else {
          calculateResult();
          str += "*";
          handleResult();
          hasOperator = true;
        }
        break;

      case divide:
        if (str && isNaN(parseInt(str[str.length - 1]))) {
          str = `${str.slice(0, str.length - 1)}/`;
          handleResult();
        } else if (str && !hasOperator) {
          str += "/";
          hasOperator = true;
          handleResult();
        } else {
          calculateResult();
          str += "/";
          handleResult();
          hasOperator = true;
        }
        break;

      default:
        str += e.target.innerHTML;
        handleResult();
        break;
    }
  });
});
