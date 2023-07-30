// if (These parenthesis contain the condition) {
//     /* code if condition is true */
// }
// else if (condition) {
//     /* code if the first condition is wrong but this one is true */
// }
// else {
//     /* code if none of the above statements work */
// }

// if (condition) {
//     /* code  */
// }
//NOTE:
// if no else statement is given, the if statement code between curly braces will work irrespective of the condition being true or not

let shoppingDone = false;
let childAllowance;

if (shoppingDone === true) {
    childAllowance = 10;
} else {
    childAllowance = 5;
}
console.log(childAllowance);

let solo = "yolo";
if (solo) { //as it is the variable only with actual string value, this is always considered true
    console.log("If you go solo you gotta yolo");
} else {
    console.log("No solo no yolo");
}


// switch (expression) {
//     case choice1:
//       run this code
//       break; If the previous choice matches the expression/value, the browser stops executing the code block here, and moves on to any code that appears below the switch statement.

//     case choice2:
//       run this code instead
//       break;

//     // include as many cases as you like

//     default:
//       actually, just run this code
//       works if no above statement works
//   }

//FOR EXAMPLE:


const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
    const choice = select.value;

    switch (choice) {
        case "sunny":
            para.textContent =
                "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
            break;
        case "rainy":
            para.textContent =
                "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
            break;
        case "snowing":
            para.textContent =
                "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
            break;
        case "overcast":
            para.textContent =
                "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
            break;
        default:
            para.textContent = "";
    }
}

let accessAllowed;
let age = prompt("What is your age?")
if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}  //code used to ask the users age and check if hes egligible for using the site
