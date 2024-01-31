const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let boardLocked = false;
let firstCard, secondCard;

let time = 120;
const countDownEl = document.getElementById ("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown () {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (minutes >= 0 && seconds >= 0) {
    seconds = seconds < 10 ? "0" + seconds: seconds;
    countDownEl.innerHTML = `${minutes}:${seconds}`;
    time --;
  }
}

const flipCard = e => {
  if (boardLocked) return;

  const target = e.target.parentElement;

  // Reflip card
  if (target === firstCard) {
    hasFlippedCard = false;
    target.classList.remove('flip');
    firstCard ='';
    return  
  };

  target.classList.add("flip");

  // console.log('FRAMEWORK OF CURREN CARD',target.dataset.framework);

  if (!hasFlippedCard) {
    
    // First Click
    hasFlippedCard = true;
    firstCard = target;
  } else {
    // Second Click
    hasFlippedCard = false;
    secondCard = target;

    // Check for match
    checkForMatch();
  }
}

const checkForMatch = () => {
  const isEqual = firstCard.dataset.framework === secondCard.dataset.framework;

// TERNARTNY OPERATOR
  isEqual ? disableCards() : unflipCards();
}

const disableCards = () => {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
}

const unflipCards = () => {
  boardLocked = true;

    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
    
      resetBoard()
    }, 1000)
}

const resetBoard = () => {
  hasFlippedCard = boardLocked = false;
  firstCard = secondCard = null;
}

cards.forEach(card => {
  // Add Event Listener to every car 
  card.addEventListener('click', flipCard);

  const randomIndex = Math.floor(Math.random() * cards.length);
  card.style.order = randomIndex;
})