const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onSubmit);

function onSubmit(evn) {
  evn.preventDefault();

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
    alert("Усі поля повинні бути заповнені");
    return;
  }

  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };
  console.log(formData);
  loginForm.reset();
}
