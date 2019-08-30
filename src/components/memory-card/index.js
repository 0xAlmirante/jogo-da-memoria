let cardClass = "";

const createCard = cardClass => {
  if(cardClass == "memory-card"){
    const $memoryCard = `
      <article class="${cardClass}" onClick="handleClick()">
        <img
          src="img/icon-collabcode.svg"
          alt="icon-js"
          class="icon"
        />
      </article>
    `;

    return $memoryCard;
  } else {
    const $memoryCard = `
      <article class="${cardClass}" onClick="handleClick()">
        <img
          src="img/icon-js.png"
          alt="icon-js"
          class="icon"
        />
      </article>
    `;
    return $memoryCard;
  }
}

function handleClick(){
  console.log("Ae");
}