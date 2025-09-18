const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const passwordConfirmInput = document.getElementById("password-confirm-input");
const registrationButton = document.getElementById("registration-button");
const errorText = document.getElementById("registration-error");

registrationButton.addEventListener("click", () => {
  let email = emailInput.value;
  let valid = true;

  // email kukac ellenörzés
  if (!email.includes("@")) {
    emailInput.style.borderColor = "red";
    errorText.innerText = "Nincs @ az email címbe";
    errorText.style.display = "block";
    valid = false;
  } else {
    emailInput.style.borderColor = null;
    errorText.style.display = "none";
  }

  // email pont ellenőrzés
  if (!email.includes(".")) {
    emailInput.style.borderColor = "red";
    errorText.innerText = "Az e-mail cím nem tartalmaz pontot";
    errorText.style.display = "block";
    valid = false;
  } else {
    emailInput.style.borderColor = null;
    errorText.style.display = "none";
  }

  // email TLD ellenőrzés
  let tld = email.split(".").at(-1);
  if (tld.length < 2 || tld.length > 3) {
    emailInput.style.borderColor = "red";
    errorText.innerText =
      "Az e-mail cím utolsó pontja után csak 2, vagy 3 karkater állhat";
    valid = false;
  } else {
    emailInput.style.borderColor = null;
    errorText.style.display = "none";
  }

  // jelszó ugyan az-e
  if (passwordInput.value != passwordConfirmInput.value) {
    passwordInput.style.borderColor = "red";
    passwordConfirmInput.style.borderColor = "red";
    errorText.innerText = "A két jelszó nem egyezik";
    valid = false;
  } else {
    passwordInput.style.borderColor = null;
    passwordConfirmInput.style.borderColor = null;
    errorText.style.display = "none";
  }

  if (valid) {
    window.alert("Sikeres bejelentkezés");
  }
});
