const buttons = document.querySelectorAll("button");
const functions = document.querySelectorAll(".function");
const clear = document.querySelector("#clear");
const signChange = document.querySelector("#signChange");
const percentage = document.querySelector("#percentage");
const divide = document.querySelector("#divide");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const multiply = document.querySelector("#multiply");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const substract = document.querySelector("#substract");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const add = document.querySelector("#add");
const zero = document.querySelector("#zero");
const point = document.querySelector("#point");
const equal = document.querySelector("#equal");

const display = document.querySelector("#display")
const para = document.createElement("p")


let all = "";
let value = "";
let numbers = [];
let operators = [];
let flag = 0;

clear.addEventListener("click", () => {
    value = 0
    numbers = []
    operators = []
});
signChange.addEventListener("click", () => {    
    flag = 0;
    const para = document.createElement("p");
    let lengthToBeRemoved = value.length;
    console.log(value.length);
    value = -1 * value
    para.setAttribute("style", "font-size: 25px; display: flex; justify-content: right; align-items:center;");
    display.appendChild(para);
    clear.addEventListener("click", () =>  display.removeChild(para));
    equal.addEventListener("click", () => display.removeChild(para));
});


percentage.addEventListener("click", () => {
    flag = 0;
    const para = document.createElement("p");
    console.log(value)
    value = value / 100
    para.setAttribute("style", "font-size: 25px; display: flex; justify-content: right; align-items:center;");
    display.appendChild(para);
    clear.addEventListener("click", () =>  display.removeChild(para));
    equal.addEventListener("click", () => display.removeChild(para));
});


divide.addEventListener("click", () => {
    flag = 0;
    const para = document.createElement("p");
    para.textContent = "/";
    all += para.textContent;
    value += para.textContent;
    let slicedNumbers = value.slice(0,-1);
    numbers.push(slicedNumbers);
    let slicedOperators = value.slice(-1);
    operators.push(slicedOperators);
    value = "";
    para.setAttribute("style", "font-size: 25px; display: flex; justify-content: right; align-items:center;");
    display.appendChild(para);
    clear.addEventListener("click", () =>  display.removeChild(para));
    equal.addEventListener("click", () => display.removeChild(para));
});
seven.addEventListener("click", () => {
    const para = document.createElement("p");
    para.textContent = "7";
    all += para.textContent;
    value += para.textContent;
    para.setAttribute("style", "font-size: 25px; display: flex; justify-content: right; align-items:center;");
    display.appendChild(para);
    clear.addEventListener("click", () =>  display.removeChild(para));
    equal.addEventListener("click", () => display.removeChild(para));
});


eight.addEventListener("click", () => {
    const para = document.createElement("p");
    para.textContent = "8";
    all += para.textContent;
    value += para.textContent;
    para.setAttribute("style", "font-size: 25px; display: flex; justify-content: right; align-items:center;");
    display.appendChild(para);
    clear.addEventListener("click", () =>  display.removeChild(para));
    equal.addEventListener("click", () => display.removeChild(para));
});


nine.addEventListener("click", () => {
    const para = document.createElement("p");
    para.textContent = "9";
    all += para.textContent;
    value += para.textContent;
    para.setAttribute("style", "font-size: 25px; display: flex; justify-content: right; align-items:center;");
    display.appendChild(para);
    clear.addEventListener("click", () =>  display.removeChild(para));
    equal.addEventListener("click", () => display.removeChild(para));
});


multiply.addEventListener("click", () => {
    flag = 0;
    const para = document.createElement("p");
    para.textContent = "*";
    all += para.textContent;
    value += para.textContent;
    let slicedNumbers = value.slice(0,-1);
    numbers.push(slicedNumbers);
    let slicedOperators = value.slice(-1);
    operators.push(slicedOperators);
    value = "";
    para.setAttribute("style", "font-size: 25px; display: flex; justify-content: right; align-items:center;");
    display.appendChild(para);
    clear.addEventListener("click", () =>  display.removeChild(para));
    equal.addEventListener("click", () => display.removeChild(para));
});


four.addEventListener("click", () => {    
    const para = document.createElement("p");
    para.textContent = "4";
    all += para.textContent;
    value += para.textContent;
    para.setAttribute("style", "font-size: 25px; display: flex; justify-content: right; align-items:center;");
    display.appendChild(para);
    clear.addEventListener("click", () =>  display.removeChild(para));
    equal.addEventListener("click", () => display.removeChild(para));
});


five.addEventListener("click", () => {
    const para = document.createElement("p");
    para.textContent = "5";
    all += para.textContent;
    value += para.textContent;
    para.setAttribute("style", "font-size: 25px; display: flex; justify-content: right; align-items:center;");
    display.appendChild(para);
    clear.addEventListener("click", () =>  display.removeChild(para));
    equal.addEventListener("click", () => display.removeChild(para));
});


six.addEventListener("click", () => {
    const para = document.createElement("p");
    para.textContent = "6";
    all += para.textContent;
    value += para.textContent;
    para.setAttribute("style", "font-size: 25px; display: flex; justify-content: right; align-items:center;");
    display.appendChild(para);
    clear.addEventListener("click", () =>  display.removeChild(para));
    equal.addEventListener("click", () => display.removeChild(para));
});


substract.addEventListener("click", () => {
    flag = 0;
    const para = document.createElement("p");
    para.textContent = "-";
    all += para.textContent;
    value += para.textContent;
    let slicedNumbers = value.slice(0,-1);
    numbers.push(slicedNumbers);
    let slicedOperators = value.slice(-1);
    operators.push(slicedOperators);
    value = "";
    para.setAttribute("style", "font-size: 25px; display: flex; justify-content: right; align-items:center;");
    display.appendChild(para);
    clear.addEventListener("click", () =>  display.removeChild(para));
    equal.addEventListener("click", () => display.removeChild(para));
});


one.addEventListener("click", () => {
    const para = document.createElement("p");
    para.textContent = "1";
    all += para.textContent;
    value += para.textContent;
    para.setAttribute("style", "font-size: 25px; display: flex; justify-content: right; align-items:center;");
    display.appendChild(para);
    clear.addEventListener("click", () =>  display.removeChild(para));
    equal.addEventListener("click", () => display.removeChild(para));
});

two.addEventListener("click", () => {
    const para = document.createElement("p");
    para.textContent = "2";
    all += para.textContent;
    value += para.textContent;
    para.setAttribute("style", "font-size: 25px; display: flex; justify-content: right; align-items:center;");
    display.appendChild(para);
    clear.addEventListener("click", () =>  display.removeChild(para));
    equal.addEventListener("click", () => display.removeChild(para));
});


three.addEventListener("click", () => {
    const para = document.createElement("p");
    para.textContent = "3";
    all += para.textContent;
    value += para.textContent;
    para.setAttribute("style", "font-size: 25px; display: flex; justify-content: right; align-items:center;");
    display.appendChild(para);
    clear.addEventListener("click", () =>  display.removeChild(para));
    equal.addEventListener("click", () => display.removeChild(para));
});


add.addEventListener("click", () => {
    flag = 0;
    const para = document.createElement("p");
    para.textContent = "+";
    all += para.textContent;
    value += para.textContent;
    let slicedNumbers = value.slice(0,-1);
    numbers.push(slicedNumbers);
    let slicedOperators = value.slice(-1);
    operators.push(slicedOperators);
    value = "";
    para.setAttribute("style", "font-size: 25px; display: flex; justify-content: right; align-items:center;");
    display.appendChild(para);
    clear.addEventListener("click", () =>  display.removeChild(para));
    equal.addEventListener("click", () => display.removeChild(para));
});

point.addEventListener("click", () => {
    if (flag == 0) {
        flag = 1
    const para = document.createElement("p");
    para.textContent = ".";
    all += para.textContent;
    value += para.textContent;
    para.setAttribute("style", "font-size: 25px; display: flex; justify-content: right; align-items:center;");
    display.appendChild(para);
    clear.addEventListener("click", () =>  display.removeChild(para));
    equal.addEventListener("click", () => display.removeChild(para));
    } 
});


equal.addEventListener("click", () => {
    flag = 0;
    let slicedNumbers = value.toString().slice(0); 
    numbers.push(slicedNumbers);
    console.log(numbers)
    console.log(operators)
    let solution = numbers[0];

    for ( let i = 0; i < operators.length; i++) {
        function addNumbers(a) {
            a = numbers[i+1];
            solution = Number(solution) + Number(a)
            }
        function substractNumbers(a) {
            a = numbers[i+1];
            solution = Number(solution) - Number(a);
        }
        function multiplyNumbers(a) {
            a = numbers[i+1];
            solution = Number(solution) * Number(a);
        } 
        function divideNumbers(a) {
            a = numbers[i+1];
            solution = Number(solution) / Number(a);
        }   
            if(operators[i] == "/") {
                divideNumbers();
            } else if (operators[i] == "*") {
                multiplyNumbers();
            } else if(operators[i] == '-') {
                substractNumbers();
            } else if (operators[i] == '+') {
                addNumbers();
        } 
    }

    value = "";
    numbers = [];
    operators = [];
    para.textContent = Number(solution).toFixed(2);
    para.setAttribute("style", "font-size: 25px; display: flex; justify-content: right; align-items:center;");
    display.appendChild(para);
    clear.addEventListener("click", () => display.removeChild(para));
});


zero.addEventListener("click", () => {
    const para = document.createElement("p");
    para.textContent = "0";
    all += para.textContent;
    value += para.textContent;
    para.setAttribute("style", "font-size: 25px; display: flex; justify-content: right; align-items:center;");
    display.appendChild(para);
    clear.addEventListener("click", () =>  display.removeChild(para));
    equal.addEventListener("click", () => display.removeChild(para));
});
