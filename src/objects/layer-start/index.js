const layerStart = (function() {
  const module = {};

  module.handleClick = ($component) => {
    $component.remove();
  };

  module.render = (content) => {
    const $lockLayer = createLayer.render();
    const $gameButton = gameButton.render(content);

    return `
      <div class="layer-start" onClick="layerStart.handleClick(this)">
        ${$lockLayer}
        ${$gameButton}
      </div>
    `
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  }
})();