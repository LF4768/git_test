import "./styles.css"

import {showHome} from "./home.js"
import {showMenu} from "./menu.js"
import {showAbout} from "./about.js"

const homeButton = document.querySelector(".homeButton");
const menuButton = document.querySelector(".menuButton");
const aboutButton = document.querySelector(".aboutButton");
homeButton.addEventListener("click", () => {showHome()});
menuButton.addEventListener("click", () => {showMenu()});
aboutButton.addEventListener("click", () => {showAbout()})