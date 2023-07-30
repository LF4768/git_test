console.log("jigglyPuff is better than Clefairy");
let message = 'wigglyTuff is better than Audino';
message = 'Fax no Printer';
let wiggly = message;
console.log(wiggly);

const theTruth = 'whatever it is, shall pass';

let name = 'john';
let admin = name;
alert(admin);

let a = 100, b = 25, c = 2, d = 2;
let increment = d++;
let preIncrement = ++d;
console.log(increment);
console.log(preIncrement);
console.log(3 * increment); //takes old value due to post increment
console.log(3 * preIncrement);
let y = a + b * c;
let x = a % d;
let z = c ** d;
let v = Math.pow(c, d); // Same func. as **
let n = c * a / b;
console.log(y);
console.log(x);
console.log(z);
console.log(v);
console.log(n);

let g = 999999999999999; //integer number correct till 15 only
let h = 9999999999999999; // decimal number correct till 17 only
console.log(g);
console.log(h);


let l = 0.1 + 0.2;
let j = (0.1 * 10 + 0.2 * 10) / 10;
console.log(l);
console.log(j);

let stringOne = "30";
let stringTwo = "40";
let resultString = stringOne + stringTwo;
let resultCross = stringOne + b;
let resultAdd = stringOne + stringTwo;
let resultSubstract = stringOne - stringTwo;
let resultDivide = stringOne / stringTwo;
let resultMultiply = stringOne * stringTwo;
console.log(resultString);
console.log(resultCross); // number and a string concatenate none the less
console.log(resultDivide, resultMultiply, resultSubstract, resultAdd); //js converts strings to numbers for numeric operations



let u = "The result is" + a + b;
console.log(u); //As the system goes left to right, the string comes first and rest is concatenate

let resultMultiple = a + b + stringOne;
console.log(resultMultiple); //The integers are added but concatenated with the string


let q = 200 / "jigglyPuff";
let stillWorks = 200 / stringTwo;
console.log(q); //When using a non numeric string, the result is NaN
console.log(stillWorks); //But numeric strings are converted to number by js
console.log(isNaN(q)); //to check if the solution is NaN or not, gives result true
let notANumber = NaN;
let answer = notANumber * a;
let answerString = notANumber + stringTwo;
console.log(answer);
console.log(answerString);
console.log(typeof NaN); //Gives the result as number
let txt = "";
while (d != Infinity) {
    d = d * d;
    txt = txt + d + "\n"
};
console.log(txt);
let divideByZero = 2 / 0;
let minusDivideByZero = -2 / 0;
console.log(divideByZero);
console.log(minusDivideByZero);
console.log(typeof Infinity);

let hexadecimal = 0xFF; //due to 0x considered as hexadecimal
console.log("0xFF= " + hexadecimal);
//let a=100;
let objectOne = new Number(a); //new converts the number to object, do not do this generally
let objectTwo = new Number(100);
console.log(typeof objectOne);
console.log(typeof (a));

console.log(a == objectOne);
console.log(a === objectOne); // number and number object not same
console.log(objectOne == objectTwo);
console.log(objectOne === objectTwo); //two number objects can never be compared

let lotsOfDecimals = 1.3425342752634;
let roundOff = lotsOfDecimals.toFixed(3); //rounds off the number to the specified number of decimal places
console.log(roundOff);

console.log(Number(stringOne) + 42); //Number changes the string function to number

// x += 3 means x = x + 3
// x -= 3 means x = x - 3
// x *= 3 means x = x * 3
// x /= 3 means x = x / 3

console.log(100 != a); // exclamatory(!) sign represents 'not' in js
console.log(25 == b);
console.log(25 >= 23);
console.log(30 <= 23);

console.log(-true, +false); //plus acts as unary instead of binary and converts non-numeric value into  numeric value
console.log(Number(stringOne) + Number(stringTwo));
console.log(+stringOne + +stringTwo);  //in short unary +/- does the same thing as Number(...) and convert the string to number
//Unary +/- also have higher precedence than binary +

let one = two = three = 68 + 1 //this chain is read from RIGHT to LEFT
console.log(one, two, three);