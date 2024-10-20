// A File can have multiple named exports but only one default export
export default "Hello, Odinite";
export const farewell =  "Bye Breathren";

// Does not need line interpretation

export {x};
const x = 1;

export function sayHi() {
    console.log("You can export a function as well")
}

// You can also relay exports

export {thirdWheel} from "./esm3.js"

const foo = Math.PI + Math.SQRT2;

const graph = {
    options: {
        color: "white",
        thickness: "2px"
    },
    draw() {
        console.log("I am inside the graph object");
    }
}

export {foo as test, graph};

const statement = "1 + 1 = ";
const answer = 2;

export {statement, answer};