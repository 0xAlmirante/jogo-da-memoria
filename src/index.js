const $root = document.querySelector("#root");
const $memoryCardFront = document.createElement("article");
const $iconJS = `
  <img
    src="img/icon-js.png"
    alt="icon-js"
    class="icon"
  />
`;
const maxCards = 9;

$memoryCardFront.classList.add("memory-card", "-front");
$root.insertBefore($memoryCardFront, null);
$memoryCardFront.insertAdjacentHTML("afterbegin", $iconJS);

// Desafio
for(let i = 0; i < maxCards; i++){
  const $memoryCard = document.createElement("article");
  const $iconCollab = `
  <img 
    src='img/icon-collabcode.svg'
    alt='Mascote CollabCode'
    class='icon'
  />
`;
  $memoryCard.classList.add("memory-card");
  $root.insertBefore($memoryCard, null);
  $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
}