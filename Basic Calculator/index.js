function input() {
    const val = document.querySelector('#input').value;
}
var result = 0
number1 = parseInt(document.getElementById("num1").value)
number2 = parseInt(document.getElementById("num2").value)

function add() {
    result = number1 + number2
    document.getElementById("result").textContent += result
    return result
}

function subtract() {
    result = number1 - number2
    document.getElementById("result").textContent += result
}

function multiply() {
    result = number1 * number2
    document.getElementById("result").textContent += result
}

function divide() {
    result = number1 / number2
    document.getElementById("result").textContent += result
}