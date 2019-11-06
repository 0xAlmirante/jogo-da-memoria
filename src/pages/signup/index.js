(function() {
    const $root = document.querySelector("#root");

    const $loginButton = flatButton.render("Log in");
    const $signUpButton = flatButton.render("Sign Up", true);
    const $iconCollabCode = iconCollabCode.render();
    const $titleForm = titleForm.render("Welcome!");
    const $logoWrapper = logoWrapper.render($iconCollabCode, $titleForm);

    const $labelUsername = labelForm.render("Username");
    const $labelEmail = labelForm.render("E-mail");
    const $labelPassword = labelForm.render("Password");
    const $labelPasswordConfirm = labelForm.render("Confirm Password");

    const $userInput = inputForm.render("text", "Name-example");
    const $emailInput = inputForm.render("email", "example@email.com");
    const $passwordInput = inputForm.render("password", "Your password");
    const $confirmPasswordInput = inputForm.render("password", "Confirm your password");

    const $submitButton = validationButton.render("Submit");


    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signUpButton);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);

    // Username
    $root.insertAdjacentHTML("beforeend", $labelUsername);
    $root.insertAdjacentHTML("beforeend", $userInput);

    // Email 
    $root.insertAdjacentHTML("beforeend", $labelEmail);
    $root.insertAdjacentHTML("beforeend", $emailInput);

    // Password
    $root.insertAdjacentHTML("beforeend", $labelPassword);
    $root.insertAdjacentHTML("beforeend", $passwordInput);

    // Confirm Password
    $root.insertAdjacentHTML("beforeend", $labelPasswordConfirm);
    $root.insertAdjacentHTML("beforeend", $confirmPasswordInput);

    $root.insertAdjacentHTML("beforeend", $submitButton);
})();