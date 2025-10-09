const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const passwordConfirmInput = document.getElementById("password-confirm-input");
const registrationButton = document.getElementById("registration-button");
const errorText = document.getElementById("registration-error");

/**
 * Regisztráció gomb eseménykezelő
 */
registrationButton.addEventListener("click", () => {
  let email = emailInput.value.trim();
  let valid = true;

  let emailIncorrect = false;

  // email kukac ellenörzés
  if (!email.includes("@")) {
    emailInput.style.borderColor = "red";
    errorText.innerText = "Nincs @ az email címbe";
    emailIncorrect = true;
    valid = false;
  }

  // email pont ellenőrzés
  if (!email.includes(".")) {
    emailInput.style.borderColor = "red";
    errorText.innerText = "Az e-mail cím nem tartalmaz pontot";
    emailIncorrect = true;
    valid = false;
  }

  // email TLD ellenőrzés
  let tld = email.split(".").at(-1);
  if (tld.length < 2 || tld.length > 3) {
    emailInput.style.borderColor = "red";
    errorText.innerText =
      "Az e-mail cím utolsó pontja után csak 2, vagy 3 karkater állhat";
    emailIncorrect = true;
    valid = false;
  }

  // ha nincs hiba emailben
  if (!emailIncorrect) {
    emailInput.style.borderColor = null;
  }

  // jelszo van e
  if (passwordInput.value == "") {
    passwordInput.style.borderColor = "red";
    errorText.innerText = "Írja be a jelszót";
    valid = false;
  }

  if (passwordConfirmInput.value == "") {
    passwordConfirmInput.style.borderColor = "red";
    errorText.innerText = "Írja be a jelszó ismétlését";
    valid = false;
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
  }

  if (valid) {
    errorText.style.display = "none";
    window.alert("Sikeres bejelentkezés");
  } else {
    errorText.style.display = "block";
  }
});
