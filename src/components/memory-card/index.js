const createCard = (card) => `
  <article class="memory-card ${card.cardClass}" onClick="handleClick()">
    <img
      src="${card.src}"
      alt="${card.alt}"
      class="icon"
    />
  </article>
`;

const  handleClick = () => console.log("Ae");