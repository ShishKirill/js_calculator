const result = document.querySelector('.result');

function getResult(value) {
    if (value == '=') {
        result.value = eval(result.value);
    } else {
        result.value += value;
    }
}

function clearResult() {
    result.value = '';
}

function backspace() {
    let exp = result.value;
    result.value = exp.substring(0, exp.length - 1);
}

function calculate() {
    let input = document.getElementById("finalResult").value;
    let values = input.split(/[\+\-\*\/]/);
    let operators = input.match(/[\+\-\*\/]/g);
  }
  

let finalResult = Number(values[0]);

for (let i = 0; i < operators.length; i++) {
    let nextValue = Number(values[i + 1]);
    if (operators[i] === "*") {
        finalResult *= nextValue;
    } else if (operators[i] === "/") {
        finalResult /= nextValue;
    } else if (operators[i] === "+") {
        finalResult += nextValue;
    } else if (operators[i] === "-") {
        finalResult -= nextValue;
    }
}

document.getElementById("result").value = finalResult;

