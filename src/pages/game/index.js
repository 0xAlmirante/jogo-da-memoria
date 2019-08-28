const maxCards = 9;
const $card = document.querySelectorAll(".memory-card");

createCardFront();
for(let i = 0; i < maxCards; i++){
  createCard();
}

$card.forEach(handleCards);