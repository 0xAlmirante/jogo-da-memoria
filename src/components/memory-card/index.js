let pontos = 0;
const memoryCard = () => {

  const $head =  document.querySelector("head");
  const $style = document.createElement("style");
  
  $style.textContent = `

    .memory-card{
      width: 150px;
      height: 150px;
      position: relative;
    }

    .memory-card .card{
      width: 100%;
      height: 100%;
      width: 150px;
      height: 150px;
      background-color: #f25a70;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      cursor: pointer;
      position: absolute;
    }

    .memory-card.-active .card,
    .memory-card.-hit .card{
      display: none;
    }

    .memory-card.-active .card.-front,
    .memory-card.-hit .card.-front {
      display: flex;
    }
  
    .memory-card .card:active{
      transform: scale(.9);
    }
  
    .memory-card .card.-front{
      background-color: #fff;
    }
  
    .memory-card .card > .icon{
      width: 100px;
      height: 100px;
    }
  
    .memory-card .card.-front > .icon{
      position: absolute;
      transform: translateY(-10px);
    }
  
    .memory-card .card.-front::before{
      content: "";
      width: 95px; 
      height: 95px;
      background-color: #d4d4d4;
      border-radius: 50%;
    }
  `
  $head.insertBefore($style, null);
  
  return ({src, alt}) => 
  `
    <div class="memory-card" onClick="handleClick(this)">
      <article class="card -front">
        <img
          src="${src}"
          alt="${alt}"
          class="icon"
        />
      </article>

      <article class="card">
        <img
          src="img/icon-collabcode.svg"
          alt="Icone do Gueio (Mascote da CollabCode)"
          class="icon"
        />
      </article>
    <div>
  `;
}



const handleClick = $card => {
  if(qtdActive < 2){
    $card.classList.add("-active");
  }

  if(qtdActive === 1){
    const $memoryCards = document.querySelectorAll(".memory-card.-active");

    if($memoryCards[0].querySelector(".-front .icon").getAttribute("src") === $memoryCards[1].querySelector(".-front .icon").getAttribute("src")){
      pontos++;
      $memoryCards.forEach(($memoryCard) => {
        $memoryCard.classList.add("-hit");
        $memoryCard.classList.remove("-active");
      });
      console.log("Pontos:", pontos);
    } else {
      setTimeout(() => {
        const $activeCards = document.querySelectorAll(".memory-card.-active");

        $activeCards.forEach(($memoryCard) => {
          $memoryCard.classList.remove("-active");
        });
        qtdActive = 0;
      }, 2000);

    }
  }
}