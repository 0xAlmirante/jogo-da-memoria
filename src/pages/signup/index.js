(function() {
    const $root = document.querySelector("#root");

    const $loginButton = flatButton.render("Log in");
    const $signUpButton = flatButton.render("Sign Up", true);

    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signUpButton)
})();