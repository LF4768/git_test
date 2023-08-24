const div = document.querySelector("#grid")
const reset = document.querySelector("#reset");
const generateNew = document.querySelector("#generateNew");
const para = document.querySelector("#disclaimer");



let squares ;


for (let i = 0; i <= 100; i++) {
    const box = document.createElement("div")
    div.appendChild(box);
    box.setAttribute("id", "box" + i);
    const border = document.querySelector("#box" + i);
    border.setAttribute("style", "border: solid 1px; height: 25px; width: 25px;")
    border.addEventListener("mouseover", () => {
        border.setAttribute("style", "border: solid 1px; height: 25px; width: 25px; background-color: red;");
})}

reset.addEventListener("click",resetWhole)

    function resetWhole() {
    for (let i = 0; i <= 100; i++) {
        const border = document.querySelector("#box" + i);
        border.removeAttribute("style", "background-color: red;")
        border.setAttribute("style", "border: solid 1px; height: 25px; width: 25px;");
    }
};

generateNew.addEventListener("click", () => {
    reset.removeEventListener("click", resetWhole);
});

generateNew.addEventListener("click", newGrid);

function newGrid() {
    squares = prompt("Total number of squares [MAX = 100]", 50);


        if (squares > 100) {
        para.textContent = "Please Choose A Number Lower Than 100";
    } else {
        for (let i = 0; i <= squares ; i++) {
            const border = document.querySelector("#box" + i);
            border.setAttribute("style", "border: solid 1px; height: 25px; width: 25px;")
            border.addEventListener("mouseover", () => {
            border.setAttribute("style", "border: solid 1px; height: 25px; width: 25px; background-color: red;");
        });
            };
        };

    for(let i = 100; i > squares; i--) {
    const removeExtra = document.querySelector("#box" + i)
    removeExtra.removeAttribute("style", "border: solid 1px; height: 25px; width: 25px;")
    }

    reset.addEventListener("click", () => {
        for (let i = 0; i <= squares; i++) {
            const border = document.querySelector("#box" + i);
            border.removeAttribute("style", "background-color: red;")
            border.setAttribute("style", "border: solid 1px; height: 25px; width: 25px;");
        }
    })
    };

















// function test() {
//     squares = prompt("Total number of squares [MAX = 100]", 50)
//     if (squares > 100) {
//         para.textContent = "Please Choose A Number Lower Than 100";
//     } else {
//         for (let i = 0; i <= squares ; i++) {
//             const border = document.querySelector("#box" + i);
//             border.setAttribute("style", "border: solid 1px; height: 25px; width: 25px;")
//             // const removeExtra = document.querySelector("#box" + (100 - i))
//             // removeExtra.removeAttribute("style", "border: solid 1px; height: 25px; width: 25px;")
//             border.addEventListener("mouseover", () => {
//             border.setAttribute("style", "border: solid 1px; height: 25px; width: 25px; background-color: red;");
//         });
//             };
//         };

//         reset.addEventListener("click", () => {
//     for (let i = 0; i <= squares; i++) {
//         const border = document.querySelector("#box" + i);
//         border.removeAttribute("style", "background-color: red;")
//         border.setAttribute("style", "border: solid 1px; height: 25px; width: 25px;");
//         }
//     })
//     };



// function numberOfSquares() {
//     squares = prompt("Total number of squares [Max = 100]", 50)    

//     if ( squares > 100) {
//         para.textContent = "please choose a number lower than 100";
//     } else {
//     for (let i = 1; i <= squares; i++) {
//         const box = document.createElement("div")
//         div.appendChild(box);
//         box.setAttribute("class", "box" + i);
//         const border = document.querySelector(".box" + i);
//         border.setAttribute("style", "border: solid 1px; height: 25px; width: 25px;");
//         border.addEventListener("mouseover", () => {
//             border.setAttribute("style", "border: solid 1px; height: 25px; width: 25px; background-color: red;")
//         })
//     }

// reset.addEventListener("click", () => {
//     for (let i = 1; i <= squares; i++) {
//         const border = document.querySelector(".box" + i);
//         border.removeAttribute("style", "background-color: red;")
//         border.setAttribute("style", "border: solid 1px; height: 25px; width: 25px;");
//         }
//     })

// }
// }
