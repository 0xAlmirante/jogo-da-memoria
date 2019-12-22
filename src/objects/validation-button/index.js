const validationButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .validation-button{
        width: 100%;
        height: 48px;
        border-radius: 24px;
        background-color: #f25a70;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
      }

      .input-form + .validation-button{
        margin-top: 45px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.handleClick = (event, path) => {
    event.preventDefault();

    location.hash = `#/${path}`;
    location.reload();
  };

  module.render = ({content = "", path = ""}) => {
    module._style();
    return `<input type="submit"
                   value="${content}"
                   class="validation-button"
                   onClick="validationButton.handleClick(event, '${path}')"
            >`
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  }
})();