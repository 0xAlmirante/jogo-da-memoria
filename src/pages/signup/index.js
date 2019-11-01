(function() {
    const $root = document.querySelector("#root");

    const $loginButton = flatButton.render("Log in");
    const $signUpButton = flatButton.render("Sign Up", true);
    const $iconCollabCode = iconCollabCode.render();
    const $titleForm = titleForm.render("Welcome!");
    const $logoWrapper = logoWrapper.render($iconCollabCode, $titleForm);
    const $labelForm = labelForm.render("E-mail");
    const $emailForm = inputForm.render("email");

    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signUpButton);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);
    $root.insertAdjacentHTML("beforeend", $labelForm);
    $root.insertAdjacentHTML("beforeend", $emailForm);
})();