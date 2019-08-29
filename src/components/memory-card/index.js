function createCard(){
  const $memoryCard = `
    <article class="memory-card" onClick="handleClick()">
      <img
        src="img/icon-collabcode.svg"
        alt="icon-js"
        class="icon"
      />
    </article>
  `;

  return $memoryCard;
}

function createCardFront(){
  const $memoryCard = `
    <article class="memory-card -front" onClick="handleClick()">
      <img
        src="img/icon-js.png"
        alt="icon-js"
        class="icon"
      />
    </article>
  `;
  return $memoryCard;
}

function handleClick(){
  console.log("Ae");
}