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
let first = fruits[0];      // Used to access the first array element
console.log(first);
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

