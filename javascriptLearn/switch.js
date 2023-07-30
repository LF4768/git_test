
// let browser = prompt("What browser are you using");
// if (browser == "Edge") {
//     alert("You've got the Edge!");
// } else if (browser == 'Chrome' || browser == "Firefox" || browser == "Safari" || browser == "Opera") {
//     alert("Okay we support these browers too!");
// } else {
//     alert("We hope this page looks ok!");
// };


let a = +prompt('a?', ''); //plus converts the string to a number

switch (a) {
    case 0: alert(0); // '0' does not work as switch commmand has strict equality and the input has number class
        break;

    case 1: alert(1);
        break;

    case 2:
    case 3:
        alert('2, 3');
        break;
}