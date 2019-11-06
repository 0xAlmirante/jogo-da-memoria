const inputForm = (function() {

  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .input-form{
        display: block;
        width: 100%;
        border-bottom: 1px rgba(58, 64, 66, 0.5) solid;
        color: #3a4042;
        font-size: 18px;
        font-weight: bold;
        padding-bottom: 12px;
        padding-top: 12px;
      }

      .input-form::placeholder{
        opacity: 1;
        font-size: 18px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = content => {
    module._style();
    return `
      <input type="${content}" class="input-form" placeholder="example@email.com"></input>
    `;
  };

  return {
    render: module.render
  }
})();