let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    document.getElementById("save-el").textContent += countStr
    countEl.textContent = 0
    count = 0
}