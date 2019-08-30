const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

const $memoryCard = createCard(
  "",
  "img/icon-collabcode.svg",
  "Icone do Gueio (Mascote da CollabCode)"
);

const $memoryCardFront = createCard(
  "-front",
  "img/icon-js.png",
  "Icone de um livro de JavaScript"
);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);

$root.insertAdjacentElement("beforeend", $cardsWrapper);