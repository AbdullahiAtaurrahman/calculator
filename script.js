let display = document.querySelector(".display");
let currentInput = "0";
let shouldResetDisplay = false;

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (num2 === 0) {
    return "Error: Division by zero";
  } else {
    return divide(num1, num2);
  }
}
function power(a, b) {
  return a ** b;
}
function remainder(a, b) {
  return a % b;
}

function performOperation(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "**":
      return power(num1, num2);
    case "%":
      return remainder(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      throw new Error("Unknown operator");
  }
}

function evaluateExpressions(expression) {
  const tokens = [];
  let currentNumber = "";

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    if (
      char == "-" ||
      char == "+" ||
      char == "*" ||
      char == "/" ||
      char == "*" ||
      char == "**" ||
      char == "%"
    ) {
      if (char == "-" && (i === 0 || tokens.length % 2 === 0)) {
        currentNumber += char;
      } else {
        if (currentNumber == "") {
          tokens.push(currentNumber);
          currentNumber = "";
        }
        tokens.push(char);
      }
    } else {
    }
  }
}

function updateDisplay(digit) {
  display.textContent = display.textContent.concat(digit);
}

function performOperation() {
  console.log("Done");
}

function clearDisplay() {
  display.textContent = "0";
}

function clearLast() {
  if (display.textContent.length > 1) {
    display.textContent = display.textContent.slice(0, -1);
  } else {
    display.textContent = "0";
  }
}
