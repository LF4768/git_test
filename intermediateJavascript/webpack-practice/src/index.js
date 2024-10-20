import "./styles.css"       // side - effect import

import clefairyImage from "./clefairy.png";

const image = document.createElement("img");
image.src = clefairyImage;

document.body.append(image);

import {greeting} from "./greeting.js";
console.log(greeting);