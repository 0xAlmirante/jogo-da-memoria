function createCard(){
  const $memoryCard = document.createElement("article");
  const $iconCollab = `
    <img 
      src='img/icon-collabcode.svg'
      alt='Mascote CollabCode'
      class='icon'
    />
  `;
  
  $memoryCard.classList.add("memory-card");
  $wrapCards.insertBefore($memoryCard, null);
  
  $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
}

function createCardFront(){
  const $memoryCardFront = document.createElement("article");
  const $iconJS = `
    <img
      src="img/icon-js.png"
      alt="icon-js"
      class="icon"
    />
  `;
  
  $memoryCardFront.classList.add("memory-card", "-front");
  $wrapCards.insertBefore($memoryCardFront, null);
  $memoryCardFront.insertAdjacentHTML("afterbegin", $iconJS);
}