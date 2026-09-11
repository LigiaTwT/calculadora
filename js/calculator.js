const display = document.querySelector("#display");
const expression = document.querySelector("#expression");
const buttons = document.querySelectorAll(".calculator-button");

let currentInput = "0";
let previousInput = null;
let operator = null;
let shouldResetDisplay = false;


function updateDisplay() {
    display.textContent = currentInput;
}


function updateExpression() {
    if (previousInput !== null && operator !== null) {
        const visibleOperator = getVisibleOperator(operator);

        expression.textContent = `${previousInput} ${visibleOperator}`;
    } else {
        expression.textContent = "";
    }
}


function getVisibleOperator(operator) {
    switch (operator) {
        case "*":
            return "×";

        case "/":
            return "÷";

        case "-":
            return "−";

        case "+":
            return "+";

        default:
            return "";
    }
}


function inputNumber(number) {
    if (currentInput === "0" || shouldResetDisplay) {
        currentInput = number;
        shouldResetDisplay = false;
    } else {
        currentInput += number;
    }

    updateDisplay();
}


function inputDecimal() {
    if (shouldResetDisplay) {
        currentInput = "0";
        shouldResetDisplay = false;
    }

    if (!currentInput.includes(".")) {
        currentInput += ".";
    }

    updateDisplay();
}


function chooseOperator(nextOperator) {
    if (operator !== null && !shouldResetDisplay) {
        calculate();
    }

    previousInput = Number(currentInput);
    operator = nextOperator;
    shouldResetDisplay = true;

    updateExpression();
}


function calculate() {
    if (operator === null || previousInput === null) {
        return;
    }

    const currentValue = Number(currentInput);
    let result;

    switch (operator) {
        case "+":
            result = previousInput + currentValue;
            break;

        case "-":
            result = previousInput - currentValue;
            break;

        case "*":
            result = previousInput * currentValue;
            break;

        case "/":
            if (currentValue === 0) {
                currentInput = "Erro";
                previousInput = null;
                operator = null;
                shouldResetDisplay = true;

                expression.textContent = "";

                updateDisplay();

                return;
            }

            result = previousInput / currentValue;
            break;
    }

    expression.textContent = `${previousInput} ${getVisibleOperator(operator)} ${currentValue}`;

    currentInput = String(result);
    previousInput = null;
    operator = null;
    shouldResetDisplay = true;

    updateDisplay();
}


function clearCalculator() {
    currentInput = "0";
    previousInput = null;
    operator = null;
    shouldResetDisplay = false;

    expression.textContent = "";

    updateDisplay();
}


function backspace() {
    if (shouldResetDisplay || currentInput === "Erro") {
        return;
    }

    if (currentInput.length === 1) {
        currentInput = "0";
    } else {
        currentInput = currentInput.slice(0, -1);
    }

    updateDisplay();
}


function handleButtonClick(event) {
    const button = event.currentTarget;

    const action = button.dataset.action;
    const value = button.dataset.value;

    switch (action) {
        case "number":
            inputNumber(value);
            break;

        case "decimal":
            inputDecimal();
            break;

        case "operator":
            chooseOperator(value);
            break;

        case "equals":
            calculate();
            break;

        case "clear":
            clearCalculator();
            break;

        case "backspace":
            backspace();
            break;
    }
}


buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
});


updateDisplay();