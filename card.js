document.addEventListener('DOMContentLoaded', () => {

// var cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let score = 0; // Variabele om de score bij te houden

class MemoryCard{
    image;
    points;

    constructor(imgurl, points){
        this.image = imgurl;
        this.points = points;
    }

    makeCardHTML(){

        for (let index = 1; index <= 2; index++) {
            let element = document.createElement("div");
            element.className = "memory-card";
            element.setAttribute("data-framework", this.image);
            element.setAttribute("points", this.points);
    
            let front = document.createElement("img");
            front.className = "front";
            front.src = "Ultraball.png";
    
            let back = document.createElement("img");
            back.className = "back";
            back.src = this.image;
    
            element.appendChild(back);
            element.appendChild(front);
    
            document.getElementById("card-game").appendChild(
                element
            );
        }
    }
}

let memcards = [
    new MemoryCard("snorlax.png", 20),
    new MemoryCard("pikachu.png", 10),
    new MemoryCard("psyduck.png", 5)
]




function flipCard() {

    if (lockBoard || this === firstCard) return; // Voorkom dat er op dezelfde kaart geklikt wordt
    // console.log(this);
    this.classList.add('flip');


    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;

    checkForMatch(); // Roep de checkForMatch fucntie aan nadat beide kaarten zijn omgedraaid

}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework == secondCard.dataset.framework;

    if (isMatch){
        disableCards();
    }
    else{
        unFlipCards();
    }
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
    
    score += parseInt(firstCard.getAttribute("points")); // Verhoog de score met 10 bij een match
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


memcards.forEach(x => x.makeCardHTML());


let cards = document.querySelectorAll('.memory-card');
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