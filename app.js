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
