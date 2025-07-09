const email = document.querySelector("#mail");
const form = document.querySelector("form");
const emailError = document.querySelector("#mail + span.error");
let flag = 0;
const fs = document.querySelector("#file");

function checkFileSize() {
  const files = fs.files;
  if (files.length > 0) {
    if (files[0].size > 75 * 1000) {
      fs.setCustomValidity("selected file is greater than 75kb");
      fs.reportValidity();
      flag = 1;
      return;
    } else {
      flag = 0;
    }
  }
  fs.setCustomValidity("");
}

// window.onload = () => {
//   document.querySelector("#file").onchange = checkFileSize;
// };

fs.addEventListener("input", checkFileSize);

form.addEventListener("submit", (event) => {
  if (flag) {
    checkFileSize();
    event.preventDefault();
  }
});

// function showError() {
//   if (email.validity.valueMissing) {
//     emailError.textContent = "This field is required";
//   } else if (email.validity.typeMismatch) {
//     emailError.textContent = "Please enter valid email containing @";
//   } else if (email.validity.tooShort) {
//     emailError.textContent = `Email should be atleast ${email.minLength} long, while yours is ${email.value.length}`;
//   }
//   emailError.classList.add("active");
// }

// email.addEventListener("input", () => {
//   if (email.validity.valid) {
//     emailError.textContent = "";
//     emailError.className = "error";
//   } else {
//     showError();
//   }
// });

// form.addEventListener("submit", (event) => {
//   if (!email.validity.valid) {
//     showError();
//     event.preventDefault();
//   }
// });
