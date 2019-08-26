const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $icon = `
  <img 
    src='img/icon-collabcode.svg'
    alt='Mascote CollabCode'
    class='icon'
  />
`;

$memoryCard.classList.add("memory-card");


$root.insertBefore($memoryCard, null);

$memoryCard.insertAdjacentHTML("afterbegin", $icon);


// Parte frontal do card
const $memoryCardFront = document.createElement("article");
const $iconFront = `
  <img
    src="img/icon-js.png"
    alt="icon-js"
    class="icon"
  />
`
$memoryCardFront.classList.add("memory-card", "-front");

$root.insertBefore($memoryCardFront, $memoryCard);

$memoryCardFront.insertAdjacentHTML("afterbegin", $iconFront);