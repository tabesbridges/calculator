// Global variables
const display = document.querySelector('#display');
let displayValue = display.innerHTML;

// Functions for doing basic arithmetic
function addNums(num1, num2) {
    return num1 + num2;
}

function subtractNums(num1, num2) {
    return num1 - num2;
}

function multiplyNums(num1, num2) {
    return num1 * num2;
}

function divideNums(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    if (operator = "add") {
        return addNums(num1, num2);
    } else if (operator = "subtract") {
        return subtractNums(num1, num2);
    } else if (operator = "multiply") {
        return multiplyNums(num1, num2);
    } else if (operator = "divide") {
        return divideNums(num1, num2);
    }
}

// Functions for interacting with the DOM
function updateDisplay(newValue) {
    display.innerHTML = newValue;
}