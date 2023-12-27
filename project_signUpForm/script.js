const body = document.querySelector("body");
const password = document.querySelector("#password");
const para = document.querySelector(".password-match")
const confirmPassword = document.getElementById("confirm-password");
const button = document.querySelector("button");

button.addEventListener("click", () => console.log(password.value));
button.addEventListener("click", () => console.log(confirmPassword.value));

confirmPassword.addEventListener("keyup", ()=> {
    if (password.value !== confirmPassword.value) {
        password.setAttribute("class", "error");
        confirmPassword.setAttribute("class", "error");
        para.setAttribute("class", "password-match")
    } else if (password.value === confirmPassword.value) {
        password.removeAttribute("class")
        confirmPassword.removeAttribute("class")
        para.setAttribute("class", "correct")
    }
});

password.addEventListener("keyup", ()=> {
    if (password.value !== confirmPassword.value) {
        password.setAttribute("class", "error");
        confirmPassword.setAttribute("class", "error");
        para.setAttribute("class", "password-match")
    } else if (password.value === confirmPassword.value) {
        password.removeAttribute("class")
        confirmPassword.removeAttribute("class")
        para.setAttribute("class", "correct")
    }
});