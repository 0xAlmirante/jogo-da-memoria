const startButton = (function(){
  const module = {};

  module._style = () => { 
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .start-button{
        height: 80px;
        width: 80px;
        background-color: #3a4042;
        border: none;
        border-radius: 50%;
        color: #fff;
        cursor: pointer;
        position: fixed;
        top: 90%; left: 50%;
        transform: translateX(-50%) translateY(-30%);
      }

      .start-button:hover{
        opacity: 0.8;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.create = () => {
    module._style();
    return `
      <button class="start-button"> Start </button>
    `;
  };

  return {
    create: module.create
  };
})();