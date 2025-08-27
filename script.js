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
  if (b === 0) {
    return "Error: Division by zero";
  } else {
    return a / b;
  }
}

function performOperation(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
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

    if (char == "-" || char == "+" || char == "*" || char == "/") {
      if (char == "-" && (i === 0 || tokens.length % 2 === 0)) {
        currentNumber += char;
      } else {
        if (currentNumber !== "") {
          tokens.push(currentNumber);
          currentNumber = "";
        }
        tokens.push(char);
      }
    } else {
      currentNumber += char;
    }
  }

  if (currentNumber !== "") {
    tokens.push(currentNumber);
  }

  if (tokens.length == 1) {
    return parseFloat(tokens[0]);
  }

  let foundMultiplyOrDivide = true;
  while (foundMultiplyOrDivide) {
    foundMultiplyOrDivide = false;

    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i] == "*" || tokens[i] == "/") {
        const leftNumber = parseFloat(tokens[i - 1]);
        const operator = tokens[i];
        const rightNumber = parseFloat(tokens[i + 1]);

        const result = performOperation(operator, leftNumber, rightNumber);

        tokens.splice(i - 1, 3, result.toString());

        foundMultiplyOrDivide = true;
        break;
      }
    }
  }

  let foundAddOrSubtract = true;
  while (foundAddOrSubtract) {
    foundAddOrSubtract = false;

    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i] == "+" || tokens[i] == "-") {
        const leftNumber = parseFloat(tokens[i - 1]);
        const operator = tokens[i];
        const rightNumber = parseFloat(tokens[i + 1]);

        const result = performOperation(operator, leftNumber, rightNumber);

        tokens.splice(i - 1, 3, result.toString());

        foundAddOrSubtract = true;
        break;
      }
    }
  }
  return parseFloat(tokens[0]);
}

function updateDisplay() {
  display.textContent = currentInput;
}

function clearDisplay() {
  currentInput = "0";
  shouldResetDisplay = false;
  updateDisplay();
}

function deleteLast() {
  if (currentInput.length > 1) {
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput = "0";
  }
  updateDisplay();
}

function appendToDisplay(value) {
  if (shouldResetDisplay) {
    currentInput = "0";
    shouldResetDisplay = false;
  }

  if (currentInput === "0" && value !== ".") {
    currentInput = value;
  } else if (value === "." && currentInput.includes(".")) {
    return;
  } else {
    currentInput += value;
  }

  updateDisplay();
}

function calculate() {
  try {
    const result = evaluateExpressions(currentInput);

    if (!isFinite(result)) {
      currentInput = "Error";
    } else {
      // Round to avoid floating point precision issues
      currentInput = parseFloat(result.toPrecision(12)).toString();
    }

    shouldResetDisplay = true;
    updateDisplay();
  } catch (error) {
    currentInput = "Error";
    shouldResetDisplay = true;
    updateDisplay();
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (key >= "0" && key <= "9") {
    appendToDisplay(key);
  } else if (key === "+" || key === "-") {
    appendToDisplay(key);
  } else if (key === "*") {
    appendToDisplay("*");
  } else if (key === "/") {
    event.preventDefault(); // Prevent default browser search
    appendToDisplay("/");
  } else if (key === ".") {
    appendToDisplay(".");
  } else if (key === "Enter" || key === "=") {
    calculate();
  } else if (key === "Escape" || key === "c" || key === "C") {
    clearDisplay();
  } else if (key === "Backspace") {
    deleteLast();
  }
});
