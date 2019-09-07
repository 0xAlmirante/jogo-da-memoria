const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

const createMemoryCard = memoryCard();

const $memoryCard = createMemoryCard(
  {
    cardClass: "",
    src: "img/icon-collabcode.svg",
    alt: "Icone do Gueio (Mascote da CollabCode)"
  }
);

const $memoryCardJS = createMemoryCard(
  {
    cardClass: "-front",
    src: "img/icon-js.png",
    alt: "Icone de um livro de JavaScript"
  }
);

const $memoryCardC = createMemoryCard(
  {
    cardClass: "-front",
    src: "img/icon-c.png",
    alt: "Icone de um livro de C++"
  }
);

const $memoryCardPHP = createMemoryCard(
  {
    cardClass: "-front",
    src: "img/icon-php.png",
    alt: "Icone de um livro de PHP"
  }
);

const $memoryCardJAVA = createMemoryCard(
  {
    cardClass: "-front",
    src: "img/icon-java.png",
    alt: "Icone de um livro de Java"
  }
);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPHP);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPHP);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJAVA);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJAVA);

$root.insertAdjacentElement("beforeend", $cardsWrapper);