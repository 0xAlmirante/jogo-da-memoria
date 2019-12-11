const formSignup = (function(){
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-signup{
        padding: 0 35px 30px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module._children = () => {
    const $labelUsername = labelForm.render("Username");
    const $labelEmail = labelForm.render("E-mail");
    const $labelPassword = labelForm.render("Password");
    const $labelPasswordConfirm = labelForm.render("Confirm Password");

    const $userInput = inputForm.render("text", "Name-example");
    const $emailInput = inputForm.render("email", "example@email.com");
    const $passwordInput = inputForm.render("password", "Your password");
    const $confirmPasswordInput = inputForm.render("password", "Confirm your password");

    const $submitButton = validationButton.render("Submit");

    return `
      ${$labelUsername}
      ${$userInput}
      ${$labelEmail}
      ${$emailInput}
      ${$labelPassword}
      ${$passwordInput}
      ${$labelPasswordConfirm}
      ${$confirmPasswordInput}
      ${$submitButton}
    `
  };

  module.render = () => {
    module._style();
    return `<form class="form-signup" action="" method="POST"> ${module._children()}</form>`;
  }

  return {
    render: module.render
  }
})();