// Arrays are data structures that can store multiple values in a single variable
// Arrays are very useful for organizing and manipulating large amounts of data

// **SYNTAX**
// const array_name = [item1, item2, ...];      


const cars = ["Saab", "Volvo", "BMW"];
const vehicles = [              
    "Car",          
    "Bike",                 // Spaces and Line Breaks are not important
    "Active"        
];
console.log(cars);
console.log(vehicles);

const names = [];
names[0] = "Ram";       //These numbers between the square brackets are known as Index numbers or respective Array Indexes
names[1] = "Sham";      // Arrays length start from 0
names[2] = "Mohit";     // Elements can be later added to the Arrays
names[5] = "Rohan";     // Leaving numbers in between creates undefined "holes" which are represented as empty but the element still takes its place & the value is stored in the specified position
console.log(names);

// Alternate method to form an array
let genders = new Array("Male", "Female", "Attack Helicopter"); // Do not use this on a general basis
console.log(genders);

let myGender = genders[0];              // Array elements can be accessed in this way 

names[0] = "Aaryan";            //This statement is used to overwrite the value in the array of the respective index number
console.log(names);         //As the code is read from top to bottom and replacement of value creates a different array instead of modifying the original one
                            //the original Array gives its correct value before replacement

genders = genders.toString();  //This is used to convert the array into a string
console.log(genders);          //After conversion the values are seperated by commas
console.log(typeof cars);  // Arrays are a special type and return "object", but are best called as Arrays

// DIFFERENCE BETWEEN ARRAYS AND OBJECTS

const name = {firstName : "Smith", lastName : "Rowe", age : 40}     //example of an object

console.log(name.firstName);    //Object uses names to access its "members"
console.log(names[0])           //Array uses their indexes(numbers) to access its "elements"

// JavaScript variables can be objects. Arrays are "special kinds of objects".
// Because of this, you can have variables of different types in the same Array.
// **You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array**

//  **PROPERTIES OF ARRAYS**

const fruits = ["Apple", "Banana", "Orange", "Mango"]

let length = fruits.length; // The length property returns the length of an array(The number of array elements)
console.log(length);        // The length property is always one more than the highest array index.
let firstFruit = fruits[0];      // Used to access the first array element
console.log(firstFruit);
let last  = fruits[fruits.length - 1];  //Used to access the last array element
console.log(last);

let text = "<ul>";
for (let i = 0; i < length; i++) {                      // Looping of an Array using for loop
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.querySelector("p").innerHTML = text;           //placing the text variable which contains the <li> tags inside the <p> element of html file
                                                        //.html keyword is used to place the data in the html file as its element instead of seperate text



//let text = "<ul>";                                                        
fruits.forEach(myFunction);         // ().forEach is used to run the function/operation for every element of the array seperately
text += "</ul>";

document.querySelector("p").innerHTML = text;  

function myFunction(value) {
  text += "<li>" + value + "</li>";
}

// array.forEach((item) => {
//    push every element into the new array
//    UNLESS it is included in the function arguments
//    so we create a new array with every item, except those that should be removed
//   if (!args.includes(item)) {
//     newArray.push(item);
//   }

// **METHODS TO ADD ELEMENTS TO ARRAY**

// METHOD 1:
fruits.push("Kiwi");       // .push() method is the easiest way to add an element to the array
console.log(fruits);

// METHOD 2:
fruits[fruits.length] = "Dragonfruit";      //Length property is used to add dragonfruit to the array
console.log(fruits);

// Many programming languages support arrays with named indexes.
// Arrays with named indexes are called ASSOCIATIVE ARRAYS (or hashes).
// JavaScript does not support arrays with named indexes.
// In JavaScript, arrays always use numbered indexes.  

// WARNING!!
// if named indexes are used, js will redefine the array into an object.
// the answers to the array methods and properties will produce incorrect results

const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
console.log(person.length);     // Will return 0
console.log(person[0]);         // Will return undefined

// **ARRAYS V/S OBJECTS, WHEN TO USE WHICH
// JavaScript does not support associative arrays.
// You should use objects when you want the element names to be strings (text).
// You should use arrays when you want the element names to be numbers.

// DIFFERENCE BETWEEN [] METHOD AND new Array METHOD FOR CREATING AN ARRAY

let score = [40, 30];
console.log(score);         
                                        //These 2(score and total) give the same result
let total = new Array(40, 30);
console.log(total);


let points = [40];
console.log(points);        // Creates an array with 40 as the single element at 0 position

let marks = new Array(40);
console.log(marks);         // Creates an array with 40 as the length filles with undefined holes(empty)

// **HOW TO CHECK IF VARIABLE IS ARRAY OR NOT**

console.log(typeof fruits);                 // This returns "object" which does not determine if its an array

// METHOD 1
console.log(Array.isArray(fruits));         // Used to check if the variable is an Array or not ( introduced in ECMAScript 5)

// METHOD 2
console.log(fruits instanceof Array);       // The instanceof operator returns true if an object is created by a given constructor(Array)

// **METHODS OF ARRAY**

let join = fruits.join(" * ");        //converts the array into string like toString func but we specify the seperator instead of the comma
console.log(join)

let removeLastElement = cars.pop();      //.pop() function is used to remove the last element of the array (cannot specify which element)
console.log(cars);

let removeFirstElement = names.shift();  //.shift() function is used to remove the first element of the array and shift the other elements to a lower indexes
console.log(names);

let addFirstElement = names.unshift("Akhilesh");    //.unshift("") function is used to add an element to the index 0 of an array and move the other elements back by 1(to a higher index)
console.log(names);

delete names[2];    //delete is used to remove elements from the array 
console.log(names); // !!!BUT USING DELETE LEAVES UNDEFINED HOLES IN THE ARRAY, SO .POP() AND .SHIFT() ARE BETTER!!!

const vegetables = ["Potato", "Raddish", "Capsicum"]

let thingsToEat = fruits.concat(vegetables);    // .concat() function creates a new array by merging existing arrays
console.log(thingsToEat);                       // concatenating the arrays does not change the original arrays, it returns a new array

const bikes = ["Splendor", "Yamaha", "Bullet"];

const machinery = vehicles.concat(cars, bikes); // multiple arrays can be concatenated into 1 array
console.log(machinery);

const sweet = fruits.concat("Honey", "Sugar");   //.concat() can also take strings as arguments for the array
console.log(sweet);

const newArr = [[1,2], [3,4], [5,6]];     //creates an Array with sub - Arrays of 2 elements each
console.log(newArr);
console.log(newArr[0][1])   //[Sub - Array position][Element position] is used to get the element from the sub Array

const flatNewArr = newArr.flat();        // Flattening an array is the process of reducing the dimensionality of an array.
console.log(flatNewArr);                 // The flat() method creates a new array with sub-array elements concatenated to a specified depth.
// .flat() Sub - arrays ko khatam karta hai

fruits.splice(3, 0, "Lemon", "Strawberry");   // .splice(index position, elements to be removed, newElement1, newElement2...)
console.log(fruits);      // .splice() function is used to add new elements to the array

fruits.splice(3, 3, "Blueberry", "Pineapple");  // 3 elements from the consecutive indexes (3,4,5) have been removed and replaced by the 2 new elements and shifting
console.log(fruits);

fruits.splice(3,1) //.splice() can be used to remove specific elements without leaving holes
console.log(fruits);

const slice = fruits.slice(2);    //.slice(startingPosition) is used to slice out a piece of the original array into a new array
console.log(slice);     //.slice() creates a new array and does remove any element from the original array

const multiSlice = fruits.slice(2,4) //.slice(startingPosition, Upto !!!BUT EXCLUDING THE LAST!!!) is used to slice an muliple elements from an array into a new array
console.log(multiSlice); // NOTE: the array is not sliced upto the index of the second argument but 1 before it

// document.getElementById("demo").innerHTML = fruits;   JS by default convert the array into a string on the html page

// ** DESTRUCTURING AN ARRAY **

// Destructuring in JavaScript is a simplified method of extracting multiple properties from an array by taking the structure
// and deconstructing it down into its own constituent parts through assignments by using a syntax that looks similar to array literals.

//Array elements ko number index ke alawa aur ek naam dena

// SYNTAX
const [number1, number2, number3] = ["John", 'Jake', "Justin"]
console.log(number1);

// NOTE: CANNOT USE NUMBERS FOR DECONSTRUCTING AS THEY CANNOT BE VARABLE NAMES

// Destructuring has made extracting data from an array very simple and readable. 
// Imagine trying to extract data from a nested array with 5 or 6 levels. That would be very tedious. 
// You use an array literal on the left-hand side of the assignment.

const householdItems = ["Table", "Chair", "Fan"];
const [a, b, c] = householdItems;
console.log(a, b, c);

//It takes each variable on the array literal on the left-hand side and maps it to the same element at the same index in the array.

// Variable ko bnana(declaration) aur usse array ke element ke saath jodna(assignment) ko alag alag kar sakte hain

let gender1, gender2;
[gender1, gender2] = ["Male", "Female"];
console.log(gender1, gender2);

//if number of destructuring variables > array elememnts, then the unmapped varibles return undefined

const houseHoldItems = ["Table", "Chair", "Fan", "Rug"];
const [f, g, h, i, j] = householdItems;

console.log(h); // Output: Fan
console.log(i); // Output: Rug
console.log(j); // Output: undefined

// if number of destructuring variables < array elements, the elements to be mapped are just left off, there are no errors

const animes = ["One Piece", "AOT", "HunterXHunter", "DBZ"];
const [x, y, z] = animes;
console.log(z) // Output: "HunterXHunter"

// DESTRUCTURING RETURNED ARRAYS

//Destructuring makes working with a function that returns an array as a value more precise. It works for all iterables.

function runners() {
  return ["Sandra", "Ola", "Chi"];
}

const [l, m, n] = runners();

console.log(l); // Output: Sandra
console.log(m); // Output: Ola
console.log(n); // Output: Chi

// DEFAULT VALUE

//Destructuring allows a default value to be assigned to a variable if no value or undefined is passed. It is like providing a fallback when nothing is found.

let p, q;
[p = 40, q = 4] = [];
console.log(p); // Output: 40
console.log(q); // Output: 4

[p = 40, q = 4] = [1, 23];
console.log(p); // Output: 1
console.log(q); // Output: 23

// SPECIAL: Default values can also refer to other variables including the one in the same array literal.

const [firstPerson = "Cotlin", secondPerson = firstPerson] = [];
console.log(firstPerson); // Output: Cotlin
console.log(secondPerson); // Output: Cotlin

const [firstGuy = "Cotlin", secondGuy = firstGuy] = ["Koku"];
console.log(firstGuy); // Output: Koku
console.log(secondGuy); // Output: Koku

const [firstPlayer = "Cotlin", secondPlayer = first] = ["Koku", "Lydia"];
console.log(firstPlayer); // Output: Koku
console.log(secondPlayer); // Output: Lydia

// Ignoring some values

//Destructuring lets you map a variable to the elements you are interested in. You can ignore or skip the other elements in the array by using trailing commas.

let one, two;
[one, , two] = ["child", "kid", "kiddo"]    //The value of kid is not mapped and ignored
console.log(one, two)

// THE REST AND SPREAD OPERATOR

// REST SYNTAX: If the (…) operator appear on the left-hand side in destructuring then it is a REST PARAMETER.
//A Rest parameter is used to map all the remaining elements in the array that have not been mapped to the rest variable itself. 
// It is like gathering what is left behind. 
// NOTE: The Rest variable must always be the last otherwise a SyntaxError is thrown.

const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
const [first, , third, ...others] = planets;

console.log(first); // Output: Mercury
console.log(third); // Output: Earth
console.log(others); // Output: ["Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]

// SPREAD SYNTAX: If the (…) operator appears on the right-hand in destructuring then it is a SPREAD SYNTAX.
// It takes all the other elements in the array which have no variable mapped to them and then maps it to the rest variable.

const otherPlanets = ["Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
const [firstPlanet, secondPlanet, ...rest] = ["Mercury", "Venus", ...otherPlanets];

console.log(firstPlanet); // Output: Mercury
console.log(secondPlanet); // Output: Venus
console.log(rest); // Output: ["Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]

// When you have more variables on the left-hand side, it maps the single elements in the array equally to the variables.

const planetsOfSolarSystem = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

const [pehla, doosra, ...baaki] = ["Sun", ...planetsOfSolarSystem];

console.log(pehla); // Output: Sun
console.log(doosra); // Output: Mercury
console.log(baaki); // Output: ["Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]

// Interchanging or Swapping Values [IMPORTANT]
// One destructuring expression can be used in swapping the values of two variables

let s, t;
[s, t] = ["Male", "Female"];
[s, t] = [t, s];

console.log(s); // Output: Female
console.log(t); // Output: Male

// Nested Array Destruction

// You can also do nested destructuring with arrays. 
// The corresponding item must be an array in order to use a nested destructuring array literal to assign items in it to local variables.

const numbers = [8, [1, 2, 3], 10, 12];
const [r, [d, e, v]] = numbers;

console.log(r); // Output: 8
console.log(d); // Output: 1
console.log(e); // Output: 2

// Multiple Array Destructuring

// You can destructure an array more than once in the same code snippet.

const places = ["first", "second", "third", "fourth"];
const [u, ab, , w] = [bc, ...restItems] = places;

console.log(u); // Output: first
console.log(w); // Output: fourth
console.log(bc); // Output: first
console.log(restItems); // Output: ["second", "third", "fourth"]

