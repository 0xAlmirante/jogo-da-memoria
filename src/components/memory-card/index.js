const createCard = ({cardClass ,src, alt}) => `
  <article class="memory-card ${cardClass}" onClick="handleClick()">
    <img
      src="${src}"
      alt="${alt}"
      class="icon"
    />
  </article>
`;

const  handleClick = () => console.log("Ae");