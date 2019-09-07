const memoryCard = () => {

  const $head =  document.querySelector("head");
  const $style = document.createElement("style");
  
  $style.textContent = `
    .memory-card{
      width: 150px;
      height: 150px;
      background-color: #f25a70;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      cursor: pointer;
    }
  
    .memory-card:active{
      transform: scale(.9);
    }
  
    .memory-card.-front{
      background-color: #fff;
    }
  
    .memory-card > .icon{
      width: 100px;
      height: 100px;
    }
  
    .memory-card.-front > .icon{
      position: absolute;
      transform: translateY(-10px);
    }
  
    .memory-card.-front::before{
      content: "";
      width: 95px; 
      height: 95px;
      background-color: #d4d4d4;
      border-radius: 50%;
    }
  `
  $head.insertBefore($style, null);
  
  return ({cardClass ,src, alt}) => 
  `
    <article class="memory-card ${cardClass}" onClick="handleClick(this)">
    <img
      src="${src}"
      alt="${alt}"
      class="icon"
    />
    </article>
  `;
}

const  handleClick = ($card) => {
  const $img = $card.children;
  $card.classList.toggle("-front");
  $img[0].setAttribute("src", "img/icon-collabcode.svg");
}

