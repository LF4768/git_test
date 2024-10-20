import greeting, {farewell} from "./esm2.js";
console.log(greeting)
console.log(farewell)


import {x as y, sayHi} from "./esm2.js";
console.log(y);
sayHi();

import {thirdWheel} from "./esm2.js";
console.log(thirdWheel)

import {test, graph} from "./esm2.js"

console.log(test);

graph.options = {
    color: "black",
    thickness: "5"
}

graph.draw();
console.log(graph.options)

import * as holyGrail from "./esm2.js";

console.log(holyGrail.statement + holyGrail.answer)