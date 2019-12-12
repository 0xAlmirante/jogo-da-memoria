const formLogin = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-login{
        padding: 0 35px 30px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module._children = () => {
    const $labelUsername = labelForm.render("Username ou e-mail");
    const $labelPassword = labelForm.render("Password");

    const $userInput = inputForm.render("text", "example@email.com");
    const $passwordInput = inputForm.render("password", "Your password");
    const $submitButton = validationButton.render("Login");
    const $forgetPassword = actionLink.render("Forget Password?");

    return `
      ${$labelUsername}
      ${$userInput}
      ${$labelPassword}
      ${$passwordInput}
      ${$forgetPassword}
      ${$submitButton}
    `
  };

  module.render = () => {
    module._style();
    return `<form class="form-login" action="" method="POST"> ${module._children()}</form>`;
  }

  return {
    render: module.render
  }
})();