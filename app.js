const result = document.querySelector('.result');
let hasDecimal = false;

function getResult(value) {
    if (value == '=') {
        result.value = eval(result.value);
    } else {
        result.value += value;
        hasDecimal = false;
    }
}

function clearResult() {
    result.value = '';
    hasDecimal = false;
}

function backspace() {
    let exp = result.value;
    result.value = exp.substring(0, exp.length - 1);
}

function addNum(num) {
    if (result.value == '') {
        result.value = num;
    } else {
        result.value += num;
    }
}

function addDecimal() {
    if (!hasDecimal) {
        result.value += ".";
        hasDecimal = true;
    }
}
