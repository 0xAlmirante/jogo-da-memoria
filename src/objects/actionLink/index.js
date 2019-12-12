const actionLink = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .action-link{
        font-size: 14px;
        opacity: 0.73;
        color: #3a4042;
        text-decoration: none;
        float: right;
        margin-top: 40px;
        margin-bottom: 60px;

      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = content => {
    module._style();
    return `<a href="" class="action-link"> ${content} </a>`;
  };

  return {
    render: module.render
  }
})();