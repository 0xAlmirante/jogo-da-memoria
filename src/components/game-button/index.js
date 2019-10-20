const gameButton = (function(){
  const module = {};

  module._style = () => { 
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .game-button{
        height: 80px;
        width: 80px;
        border: 3px solid #fffcee;
        border-radius: 50%;
        position: absolute;
        left: 50%; bottom: 20px;
        transform: translateX(-50%);
        background-color: #2ed573;
        color: #fffcee;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 0.8em;
        cursor: pointer;
        box-shadow: 0px 4px 8px #3a4042;
      }

      .game-button:hover{
        opacity: 0.8;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render  = () => {
    module._style();
    return `
      <button class="game-button"> Start </button>
    `;
  };

  return {
    render: module.render
  };
})();