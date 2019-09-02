const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

const $memoryCard = createCard(
  {
    cardClass: "",
    src: "img/icon-collabcode.svg",
    alt: "Icone do Gueio (Mascote da CollabCode)"
  }
);

const $memoryCardJS = createCard(
  {
    cardClass: "-front",
    src: "img/icon-js.png",
    alt: "Icone de um livro de JavaScript"
  }
);

const $memoryCardC = createCard(
  {
    cardClass: "-front",
    src: "img/icon-c.png",
    alt: "Icone de um livro de C++"
  }
);

const $memoryCardPHP = createCard(
  {
    cardClass: "-front",
    src: "img/icon-php.png",
    alt: "Icone de um livro de PHP"
  }
);

const $memoryCardJAVA = createCard(
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