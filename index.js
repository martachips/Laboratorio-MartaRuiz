const form = document.getElementById("form");
const name = document.querySelector("#name-input-group input");
const nameError = document.querySelector("#name-input-group + span.text-error");
const email = document.querySelector("#email-input-group input");
const emailError = document.querySelector(
  "#email-input-group + span.text-error"
);
const password = document.querySelector("#password-input-group input");
const passwordError = document.querySelector(
  "#password-input-group + span.text-error"
);
const confirmPassword = document.querySelector(
  "#confirm-password-input-group input"
);
const confirmPasswordError = document.querySelector(
  "#confirm-password-input-group + span.text-error"
);

const requiredFieldText = "Rellene este campo";
const maxCharsText = "No debe tener más de 8 caracteres";

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const validName = validateName();
  const validEmail = validateEmail();
  const validPassword = validatePassword();
  const validConfirmPassword = validateConfirmPassword();

  if (validName && validEmail && validPassword && validConfirmPassword) {
    alert("La inscripción ha sido correcta");
  }
});

name.addEventListener("input", function () {
  name.className = "";
  nameError.textContent = "";
});

email.addEventListener("input", function () {
  email.className = "";
  emailError.textContent = "";
});

password.addEventListener("input", function () {
  password.className = "";
  passwordError.textContent = "";
});

confirmPassword.addEventListener("input", function () {
  confirmPassword.className = "";
  confirmPasswordError.textContent = "";
});

function validateName() {
  if (name.validity.valueMissing) {
    nameError.textContent = requiredFieldText;
    name.className = "input-invalid";
    return false;
  } else if (/\d/.test(name.value)) {
    nameError.textContent = "Nombre inválido";
    name.className = "input-invalid";
    return false;
  }
  nameError.textContent = "";
  name.className = "input-valid";
  return true;
}

function validateEmail() {
  if (email.validity.valueMissing) {
    emailError.textContent = requiredFieldText;
    email.className = "input-invalid";
    return false;
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Email inválido";
    email.className = "input-invalid";
    return false;
  }
  emailError.textContent = "";
  email.className = "input-valid";
  return true;
}

function validatePassword() {
  if (password.validity.valueMissing) {
    passwordError.textContent = requiredFieldText;
    password.className = "input-invalid";
    return false;
  } else if (password.value.length > 8) {
    passwordError.textContent = maxCharsText;
    password.className = "input-invalid";
    return false;
  }
  passwordError.textContent = "";
  password.className = "input-valid";
  return true;
}

function validateConfirmPassword() {
  if (confirmPassword.validity.valueMissing) {
    confirmPasswordError.textContent = requiredFieldText;
    confirmPassword.className = "input-invalid";
    return false;
  } else if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = "Las contraseñas no coinciden";
    confirmPassword.className = "input-invalid";
    return false;
  }
  confirmPasswordError.textContent = "";
  confirmPassword.className = "input-valid";
  return true;
}
