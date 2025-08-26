const add = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
};
const multiply = (a, b) => {
    return a * b;
};
const divide = (a, b) => {
    return a / b;
};

let num1;
let num2;
let operator;

function operate(operator, num1, num2) {
    // a = Number(a);
    // b = Number(b);
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            if (num2 === 0) {
                return "Error: Division by zero";
            } else {
                return divide(num1, num2);
            }
        default:
            return null;
    }  
};

const display = document.querySelector('.display')
display.textContent = '0909'

console.log(display);


function updateDisplay() {
    return;
}

const equals = document.querySelector('.equal');

function performOperation() {
  

    if(equals){
        let result = operate(operator, num1, num2);
        display.textContent = result;
    }

}

function clearDisplay() {
    display.textContent = '0';
}

function clearLast() {

if(display.textContent.length >= 2)
    display.textContent = display.textContent.slice(0,-1)
console.log('hello');

}
