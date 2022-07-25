let playerDetails = {
    name: "Ashutosh",
    chips: 200
}

let firstcard = randomCard()
let secondcard = randomCard()
let cards = [firstcard, secondcard]
let hasBlackjack = false
let isAlive = false
let message = ""
let sum = firstcard + secondcard

function startGame() {
    isAlive = true
    renderGame()
}

function renderGame() {
    if (isAlive === true) {
        if (sum <= 20) {
            message = "Do you want to draw a new card?"
        } else if (sum === 21) {
            message = "You got a Blackjack!"
            document.getElementById("player-el").textContent = playerDetails.name + " : $" + playerDetails.chips
            hasBlackjack = true
        } else {
            message = "You have busted!"
            isAlive = false
        }
        document.getElementById("message-el").textContent = message
        document.getElementById("sum-el").textContent = "Sum: " + sum
        document.getElementById("card-el").textContent = "Cards: "
        for (let i = 0; i < cards.length; i += 1) {
            document.getElementById("card-el").textContent += cards[i] + " "
        }
    }
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {

        let card = randomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

function randomCard() {
    let randomcard = Math.floor(Math.random() * 13) + 1
    if (randomcard === 1) {
        return 11
    } else if (randomcard > 10) {
        return 10
    }
    return randomcard
}