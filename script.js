// Global variables
const display = document.querySelector('#display');
let displayValue = display.innerHTML;
let runningTotal = 0;



const operators = ['add', 'subtract', 'multiply', 'divide'];
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

// initialize "state" to the "clear" state; initialize "operator" to
// the empty state
let state = "clear"; // valid states: "clear", "freeInput", "needDigit"
let operator = ""; // valid states: "add", "subtract", "multiply", "divide", ""

// Functions for doing basic arithmetic
function addNums(num1, num2) {
    return customRound(parseInt(num1) + parseInt(num2));
}

function subtractNums(num1, num2) {
    return customRound(parseInt(num1) - parseInt(num2));
}

function multiplyNums(num1, num2) {
    return customRound(parseInt(num1) * parseInt(num2));
}

function divideNums(num1, num2) {
    return customRound(parseInt(num1) / parseInt(num2));
}

function customRound(num) {
    if (num.toFixed(11) - num != 0) {
        return num.toFixed(11);
    } else{
        return num;
    }
}

function operate(num1, num2, operator) {
    if (operator == "add") {
        return addNums(num1, num2);
    } else if (operator == "subtract") {
        return subtractNums(num1, num2);
    } else if (operator == "multiply") {
        return multiplyNums(num1, num2);
    } else if (operator == "divide") {
        return divideNums(num1, num2);
    }
}

function addDigitToDisplay(newDigit) {
    newValue = display.innerHTML * 10 + newDigit;
    display.innerHTML = newValue;
}

const buttons = document.querySelectorAll('button');

// Add event listeners to the buttons
for (const button of buttons) {
    button.addEventListener('click', (event) => {
        const buttonID = event.target.id;
        if (buttonID == "clr") {
            displayValue = 0;
            display.innerHTML = 0;
            runningTotal = 0;
            state = "clear";
        } else if (buttonID == "total" && state != "needDigit") {
            displayValue = display.innerHTML
            display.innerHTML = operate(runningTotal, displayValue, operator);
            runningTotal = display.innerHTML;
            displayValue = runningTotal;
            state = "freeInput";
            operator = "";
        } else if (operators.includes(buttonID)) {
            if (state != "needDigit") {
                if (operator == "") {
                    runningTotal = display.innerHTML;
                    operator = buttonID;
                    state = "needDigit";
                } else {
                    displayValue = display.innerHTML
                    display.innerHTML = operate(runningTotal, displayValue, operator);
                    runningTotal = display.innerHTML;
                    displayValue = runningTotal;
                    operator = buttonID;
                    state = "needDigit";
                }
            }
        } else if (digits.includes(buttonID)) {
            if (operator == "divide" && buttonID == "0" && state == "needDigit") {
                alert("Division by zero makes your browser cry!");
            } else if (state != "freeInput") {
                displayValue = display.innerHTML
                display.innerHTML = parseInt(buttonID);
                state = "freeInput";
            } else if (state == "freeInput") {
                displayValue = display.innerHTML
                addDigitToDisplay(parseInt(buttonID));
            }
        }
    }, false);
}
