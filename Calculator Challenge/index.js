let num1 = 10
let num2 = 20

document.getElementById("num1-el").textContent += num1
document.getElementById("num2-el").textContent += num2

function add() {
    let result = num1 + num2
    document.getElementById("result-el").textContent = "Sum: " + result
}

function subtract() {
    let result = num1 - num2
    document.getElementById("result-el").textContent = "Subtraction: " + result
}

function multiply() {
    let result = num1 * num2
    document.getElementById("result-el").textContent = "Multiplication: " + result
}

function divide() {
    let result = num1 / num2
    document.getElementById("result-el").textContent = "Divison: " + result
}