function createLayer(){
  const $layer = document.createElement("div");

  $layer.classList.add("lock-layer");

  const $head = document.querySelector("head");
  const $style = document.createElement("style");
  $style.textContent = `
    .lock-layer{
      background-color: #3a4042;
      width: 100vw;
      height: 100vh;
      opacity: 0.7;
      position: absolute;
      z-index: 1;
      transition: height 1s ease-in-out;
    }

    .lock-layer.-off{
      height: 0;
    }
  `;

  $head.insertBefore($style, null);

  return $layer;
}