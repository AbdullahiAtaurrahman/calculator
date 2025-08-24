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

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            if (b === 0) {
                return "Error: Division by zero";
            } else {
                return divide(a, b);
            }
        default:
            return null;
    }
    
}

const result = document.querySelector(".display");
const btns = document.querySelectorAll("button");

result.textContent = "0";

btns.forEach(btn => {
    btn.addEventListener('click', ()=>{

        result.textContent += btn.innerText;
        console.log(btn.innerText);
        
    })
})
