const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let isSecondNumber = false;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      clearCalculator();
      return;
    }

    if (value === "=") {
      calculate();
      return;
    }

    if (value === "+" || value === "-" || value === "*" || value === "/") {
      setOperator(value);
      return;
    }

    addNumber(value);
  });
});

function addNumber(number) {
  if (!isSecondNumber) {
    firstNumber += number;
    display.value = firstNumber;
  } else {
    secondNumber += number;
    display.value = secondNumber;
   }
}

function setOperator(op) {
  if (firstNumber === "") return;

  operator = op;
  isSecondNumber = true;
}

function calculate() {
  if (firstNumber === "" || secondNumber === "" || operator === "") return;

  let result;

  const num1 = Number(firstNumber);
  const num2 = Number(secondNumber);

  if (operator === "+") result = num1 + num2;
  if (operator === "-") result = num1 - num2;
  if (operator === "*") result = num1 * num2;
  if (operator === "/") result = num1 / num2;

  display.value = result;

  firstNumber = result.toString();
  secondNumber = "";
  operator = "";
  isSecondNumber = false;
}

function clearCalculator() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  isSecondNumber = false;
  display.value = "";
}
