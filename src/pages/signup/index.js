(function() {
    const $root = document.querySelector("#root");

    const $loginButton = flatButton.render("Log in");
    const $signUpButton = flatButton.render("Sign Up", true);
    const $iconCollabCode = iconCollabCode.render();
    const $titleForm = titleForm.render("Welcome!");
    const $logoWrapper = logoWrapper.render($iconCollabCode, $titleForm);
    const $formSignup = formSignup.render();

    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signUpButton);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);


    $root.insertAdjacentHTML("beforeend", $formSignup);
})();