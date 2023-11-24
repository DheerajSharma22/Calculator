const result = document.querySelector(".result");
const buttons = document.querySelectorAll("button");
const backspace = document.querySelector(".backspace");
const backspaceImg = document.getElementById("backspace");

let str = "";
let hasOperator = false;

function handleResult() {
  result.textContent = str;
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      try {
        str = `${eval(str)}`;
        handleResult();
      } catch (error) {
        str = "";
        handleResult();
        alert("Invailid Expression...");
      }
    } else if (e.target.innerHTML === "C") {
      str = "";
      handleResult();
    } else if (e.target == backspace || e.target == backspaceImg) {
      if (str) {
        str = str.slice(0, -1);
        handleResult();
      }
    } else {
      str += e.target.innerHTML;
      handleResult();
    }
  });
});
