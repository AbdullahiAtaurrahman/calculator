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
  return b === 0 ? "Error" : a / b;
}

const display = document.getElementById("display");
let currentInput = "";

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value) {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

document.querySelector(".equal").addEventListener("click", () => {
  let operator;

  if (currentInput.includes("+")) operator = "+";
  else if (currentInput.includes("-")) operator = "-";
  else if (currentInput.includes("*")) operator = "*";
  else if (currentInput.includes("/")) operator = "/";

  if (!operator) return;

  const parts = currentInput.split(operator);
  const num1 = parseFloat(parts[0]);
  const num2 = parseFloat(parts[1]);

  let result;
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    default:
      result = "...";
  }

  display.value = result;
  currentInput = String(result);
});

document.querySelector(".clr").addEventListener("click", () => {
  currentInput = "";
  display.value = "";
});

document.querySelector(".del").addEventListener("click", () => {
  if (!currentInput) return;
  currentInput = currentInput.slice(0, -1);
  display.value = currentInput;
});
