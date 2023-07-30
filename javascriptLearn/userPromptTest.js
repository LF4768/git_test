let info = window.prompt("Who's There?");
if (info === "Admin") {
    let password = window.prompt("Password?");
    if (password === "TheMaster") {
        alert("Welcome!");
    }
    else if (password === "" || password === null) {
        alert("Canceled");
    }
    else {
        alert("Wrong Password");
    }

}

else if (info === "" || info === null) {
    alert("Canceled");
}

else {
    alert("I don't know you");
}
