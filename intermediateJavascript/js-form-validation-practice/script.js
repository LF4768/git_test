const email = document.getElementById("mail");
const emailError = document.querySelector("#email-error");
const country = document.getElementById("country");
const countryError = document.getElementById("country-error");
const postalCode = document.getElementById("postal-code");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirmation");
const passwordConfirmError = document.getElementById("password-confirm-error");
const form = document.querySelector("form");

function confirmPasswords() {
    if (password.value !== passwordConfirm.value) {
        passwordConfirmError.textContent = "the passwords dont match";
        passwordConfirm.setCustomValidity("the passwords dont match");
    } else {
        passwordConfirm.setCustomValidity("");
    }
    if (passwordConfirm.validity.valueMissing) {
        passwordConfirmError.textContent = "please fill this field";
    }
    passwordConfirmError.className = "error active";
}

passwordConfirm.addEventListener("input", (event) => {
    confirmPasswords();
    if (passwordConfirm.validity.valid) {
        passwordConfirmError.textContent = "";
        passwordConfirmError.className = "error";
    }
});

// form.addEventListener("submit", (event) => {
//     if (!email.validity.valid) {
//         emailChecker();
//     }
//     event.preventDefault();
// });

// function emailChecker() {
//     if (email.validity.valueMissing) {
//         emailError.textContent = "Cant be empty";
//     } else if (email.validity.typeMismatch) {
//         emailError.textContent = "Please enter a valid email address";
//     }
//     emailError.className = "error active";
// }

// email.addEventListener("input", () => {
//     if (email.validity.valid) {
//         emailError.textContent = "";
//         emailError.className = "error";
//     } else {
//         emailChecker();
//     }
// });

// function countryChecker() {
//     if (country.validity.valueMissing) {
//         countryError.textContent = "Cant be empty";
//     }
//     countryError.className = "error active";
// }

// country.addEventListener("input", () => {
//     if (country.validity.valid) {
//         countryError.textContent = "";
//         countryError.className = "error";
//     } else {
//         countryChecker();
//     }
// });
