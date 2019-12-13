const eyeCollab = (function(){
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .eye-collab{
        width: 23px;
        opacity: 0.3;
        cursor: pointer;
      }

      .eye-collab.-active{
        opacity: 1;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.handleClick = $eye => {
    const $input = document.querySelectorAll(".input-form");
    $eye.classList.toggle("-active");
    if($eye.classList.contains("-active")){
      $input[1].type = 'text';
    } else {
      $input[1].type = 'password';
    }
  };

  module.render = () => {
    module._style();
    return `
      <figure class="eye-collab" onClick="eyeCollab.handleClick(this)">
        <img class="" src="./img/eye.svg">
      </figure>
    `
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  }
})();