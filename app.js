let display = document.querySelector(".result");
let hasDecimal = false;

function appendToDisplay(value) {
    if (value === "*" || value === "/" || value === "+" || value === "-") {
        display.value = display.value.replace(/\+|\-|\*|\//g, '') + value;
    }
    else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "";
    hasDecimal = false;
}

function addDecimal() {
    if (!hasDecimal) {
        display.value += ".";
        hasDecimal = true;
    }
}

function backspace() {
    let exp = display.value;
    display.value = exp.substring(0, exp.length - 1);
    hasDecimal = false;
}

function calculate() {
    let calculation = display.value.replace(/\s/g, '');
    let pattern = /(\d+\.?\d*)([\+\-\*\/])(\d+\.?\d*)/;
    let match = pattern.exec(calculation);

    while (match) {
        let leftOperand = parseFloat(match[1]);
        let operator = match[2];
        let rightOperand = parseFloat(match[3]);
        let result = 0;
        switch (operator) {
            case "+":
                result = leftOperand + rightOperand;
                break;
            case "-":
                result = leftOperand - rightOperand;
                break;
            case "*":
                result = leftOperand * rightOperand;
                break;
            case "/":
                result = leftOperand / rightOperand;
                break;
        }
        calculation = calculation.replace(match[0], result);
        match = pattern.exec(calculation);
    }
    display.value = parseFloat(calculation).toFixed(6);
}

document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (/\d|\.|\+|\-|\*|\//.test(key)) {
        event.preventDefault();
        appendToDisplay(key);
    }
    if (key === "Enter") {
        event.preventDefault();
        calculate();
    }
    if (key === "Backspace") {
        event.preventDefault();
        display.value = display.value.slice(0, -1);
    }
});
