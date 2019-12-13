(function(){
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Log in", true);
  const $signupButton = flatButton.render("Sign Up");
  const $iconCollabCode = iconCollabCode.render();
  const $titleForm = titleForm.render("Hello!");
  const $logoWrapper = logoWrapper.render($iconCollabCode, $titleForm);
  const $eyeCollab = eyeCollab.render();

  const $formLogin = formLogin.render();

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $eyeCollab)

  $root.insertAdjacentHTML("beforeend", $formLogin);
  
})();