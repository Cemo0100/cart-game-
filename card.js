document.addEventListener('DOMContentLoaded', () => {

var cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let score = 0; // Variabele om de score bij te houden

function flipCard() {

        if (lockBoard || this === firstCard) return; // Voorkom dat er op dezelfde kaart geklikt wordt

        this.classList.add('flip');


        if (!firstCard) {
            firstCard = this;
            return;
        }

        secondCard = this;

        checkForMatch(); // Roep de checkForMatch fucntie aan nadat beide kaarten zijn omgedraaid

    }

    cards.forEach(card => card.addEventListener('click', flipCard));

function checkForMatch() {
    let isMatch = firstCard.dataset.framework == secondCard.dataset.framework;

    isMatch ? disableCards() : unFlipCards();
}

function updateScore() {
    document.getElementById('score-board').textContent = `Score: ${score}`;
    
         if (score === 80) {
            setTimeout(() => {
                alert("Goed gedaan, je hebt alle pokémons gevonden!");
            }, 500);
        }
    }
    
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
   
    score += 10; // Verhoog de score met 10 bij een match
    updateScore();
    
    resetBoard();
}

function unFlipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
       

        resetBoard();
    }, 1500);
}

function resetBoard() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

// Shuffling cards through Immedialtely Invoked Function
(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 16);
        card.style.order = randomPos;
    });
})();

// Adding eventListener to all cards
cards.forEach(card => card.addEventListener('click', flipCard));

});
