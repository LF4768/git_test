import "./styles.css"

import {showHome} from "./home.js"
import {showMenu} from "./menu.js"
import {showAbout} from "./about.js"
import {render} from "./domRemoval.js"

const homeButton = document.querySelector(".homeButton");
const menuButton = document.querySelector(".menuButton");
const aboutButton = document.querySelector(".aboutButton");

showHome();


homeButton.addEventListener("click", () => {
    render();
    showHome();
});
menuButton.addEventListener("click", () => {
    render();
    showMenu();
});
aboutButton.addEventListener("click", () => {
    render();
    showAbout();
});