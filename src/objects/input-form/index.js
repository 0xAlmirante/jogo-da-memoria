const inputForm = (function() {

  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .input-form{
        display: block;
        width: 340px;
        border: none;
        border-bottom: 1px rgba(58, 64, 66, 0.5) solid;
        margin-top: 12px;
        margin-left: 35px;
        margin-right: 35px;
        padding-bottom: 12px;
        color: #3a4042;
        font-size: 18px;
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