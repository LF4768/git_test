const body = document.querySelector("body");
const div = document.createElement("div");
body.appendChild(div);

const textDiv = document.createElement("div");
textDiv.setAttribute("id", "text");
textDiv.setAttribute("style", "height : 400px; display : flex; flex-direction : column; align-items: center; justify-content : space-between;")
div.appendChild(textDiv)

const h1 = document.createElement("h1");
h1.textContent = "I Can See What You're Doing!!"
h1.setAttribute("style", "font-weight : bold; color : white; font-size : 40px")
textDiv.appendChild(h1);

const h2 = document.createElement("h2");
h2.textContent = "Don't Believe Me?";
h2.setAttribute("style", "color: white; font-weight : bold; font-size: 35px")
textDiv.appendChild(h2);

const para = document.createElement("p");
para.textContent = "Press a Key In The Box Below!";
para.setAttribute("style", "font-weight : bold; font-size : 30px; color : white; padding-top: 3em")
textDiv.appendChild(para);

div.setAttribute("style", "height : 100vh; display : flex; flex-direction : column; align-items: center; justify-content : center")


body.setAttribute("style", "display : flex; flex-direction : column;  background-color: black");

const input = document.createElement("input");
div.appendChild(input); 

const pressPara = document.createElement("p");
pressPara.setAttribute("style", "font-weight : bold; color : white; font-size : 25px")

function keyPress(event) {
    pressPara.textContent = "You Pressed The " + `*${event.key}*` + " Key"
    console.log(event)
   
};

div.appendChild(pressPara);

input.addEventListener('keydown', keyPress);