(function (){
  const $root = document.querySelector("#root");

  const $cardsWrapper = createCardsWrapper();
  const createMemoryCard = memoryCard.create();

  const $pointBar = pointBar.create();
  const $gameButton = gameButton.render();

  const $memoryCardJS = createMemoryCard(
    {
      src: "img/icon-js.png",
      alt: "Icone de um livro de JavaScript"
    }
  );
  const $memoryCardC = createMemoryCard(
    {
      src: "img/icon-c.png",
      alt: "Icone de um livro de C++"
    }
  );
  const $memoryCardPHP = createMemoryCard(
    {
      src: "img/icon-php.png",
      alt: "Icone de um livro de PHP"
    }
  );
  const $memoryCardJAVA = createMemoryCard(
    {
      src: "img/icon-java.png",
      alt: "Icone de um livro de Java"
    }
  );

  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJAVA);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPHP);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPHP);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJAVA);

  $root.insertAdjacentHTML("afterbegin", $pointBar);
  $root.insertAdjacentHTML("afterend", $gameButton);
  $root.insertAdjacentElement("beforeend", $cardsWrapper);

})();