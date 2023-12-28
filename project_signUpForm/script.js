const body = document.querySelector("body");
const password = document.querySelector("#password");
const para = document.querySelector(".password-match")
const confirmPassword = document.getElementById("confirm-password");
const button = document.querySelector("button");

confirmPassword.addEventListener("keyup", ()=> {
    if (password.value !== confirmPassword.value) {
        password.setAttribute("class", "error");
        confirmPassword.setAttribute("class", "error");
        para.setAttribute("class", "password-match")
        button.setAttribute("disabled", "")
    } else if (password.value === confirmPassword.value) {
        password.removeAttribute("class")
        confirmPassword.removeAttribute("class")
        para.setAttribute("class", "correct")
        button.removeAttribute("disabled", "")
    }
});

password.addEventListener("keyup", ()=> {
    if (password.value !== confirmPassword.value) {
        password.setAttribute("class", "error");
        confirmPassword.setAttribute("class", "error");
        para.setAttribute("class", "password-match")
        button.setAttribute("disabled", "")
    } else if (password.value === confirmPassword.value) {
        password.removeAttribute("class")
        confirmPassword.removeAttribute("class")
        para.setAttribute("class", "correct")
        button.removeAttribute("disabled", "")
    }
});