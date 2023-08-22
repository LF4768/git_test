const div = document.querySelector("#grid")
const reset = document.querySelector("#reset");
const generateNew = document.querySelector("#generateNew");
const para = document.querySelector("#disclaimer");

generateNew.addEventListener("click", numberOfSquares);

let squares ;

function numberOfSquares() {
    squares = prompt("Total number of squares [Max = 100]", 50)    

    if ( squares > 100) {
        para.textContent = "please choose a number lower than 100";
    } else {
    for (let i = 1; i <= squares; i++) {
        const box = document.createElement("div")
        div.appendChild(box);
        box.setAttribute("id", "box" + i);
        const border = document.querySelector("#box" + i);
        border.setAttribute("style", "border: solid 1px; height: 25px; width: 25px;");
        border.addEventListener("mouseover", () => {
            border.setAttribute("style", "border: solid 1px; height: 25px; width: 25px; background-color: red;")
        })
    }

reset.addEventListener("click", () => {
    for (let i = 1; i <= squares; i++) {
        const border = document.querySelector("#box" + i);
        border.removeAttribute("style", "background-color: red;")
        border.setAttribute("style", "border: solid 1px; height: 25px; width: 25px;");
        }
    })

}
}

