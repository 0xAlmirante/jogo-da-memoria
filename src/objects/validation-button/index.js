const validationButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .validation-button{
        width: 300px;
        height: 48px;
        border-radius: 24px;
        background-color: #f25a70;
        color: #fff;
        font-size: 18px;
        font-weight: bold;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = content => {
    module._style();
    return `<button class="validation-button"> ${content} </button>`
  };

  return {
    render: module.render
  }
})();