// if (These parenthesis contain the condition) {
//     /* code if condition is true */
// } else if (condition) {
//     /* code if the first condition is wrong but this one is true */
// else {
//     /* code if none of the above statements work */
// }

// if (condition) {
//     /* code  */
// }
//NOTE:
// if no else statement is given, the if statement code between curly braces will work irrespective of the condition being true or not

let shoppingDone = true;
let childAllowance;

if (shoppingDone == true) {
    childAllowance = 10;
} else {
    childAllowance = 5;
}
console.log(childAllowance);

let solo = "yolo";
if (solo) { //as it is the variable only with actual string value, this is always considered true
    console.log("If you go solo you gotta yolo");
} else {
    console.log("No solo no yolo");
}


// switch (expression) {
//     case choice1:
//       run this code
//       break; If the previous choice matches the expression/value, the browser stops executing the code block here, and moves on to any code that appears below the switch statement.

//     case choice2:
//       run this code instead
//       break;

//     // include as many cases as you like

//     default:
//       actually, just run this code
//       works if no above statement works
//   }

//FOR EXAMPLE:


const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
    const choice = select.value;

    switch (choice) {
        case "sunny":
            para.textContent =
                "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
            break;
        case "rainy":
            para.textContent =
                "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
            break;
        case "snowing":                                                                                                                                                                                                                                                                                                                                                                         
            para.textContent =
                "The snow is coming down, it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
            break;
        case "overcast":
            para.textContent =
                "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
            break;
        default:
            para.textContent = "";
    }
}

// let accessAllowed;
// let age = prompt("What is your age?")
// if (age > 18) {
//     accessAllowed = true;
// } else {
//     accessAllowed = false;
//}  code used to ask the users age and check if hes egligible for using the site

// **ARGUMENTS**

// arguments is an array-like object accessible inside functions that contains the values of the arguments passed to that function.

function func1(a , b, c) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}

func1(2, 5, 15)

// The arguments object is a local variable available within all non-arrow functions. 
// You can refer to a function's arguments inside that function by using its arguments object.
// It has entries for each argument the function was called with, with the first entry's index at 0.


// The arguments object is useful for functions called with more arguments than they are formally declared to accept, called variadic functions,
//  such as Math.min(). This example function accepts any number of string arguments and returns the longest one:

function longestString() {
    let longest = "";
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i].length > longest.length) {
        longest = arguments[i];
      }
    }
    console.log(longest);
    console.log(arguments.length);
}

longestString("hello", "hi", "bye", "world", "sharda")

// functions without rest, default or destructed parameters "CAN" update their value of the argument within them with the index

function func(a) {
    arguments[0] = 99; // updating arguments[0] also updates a
    console.log(a);
  }
  func(10); // 99
  
  function func2(a) {
    a = 99; // updating a also updates arguments[0]
    console.log(arguments[0]);
  }
  func2(10); // 99
  
// functions without rest, default or destructed parameters "CANNOT" update their value of the argument within them with the index

function funcWithDefault(a = 55) {
    arguments[0] = 99; // updating arguments[0] does not also update a
    console.log(a);
  }
  funcWithDefault(10); // 10
  
  function funcWithDefault2(a = 55) {
    a = 99; // updating a does not also update arguments[0]
    console.log(arguments[0]);
  }
  funcWithDefault2(10); // 10
  
  // An untracked default parameter
  function funcWithDefault3(a = 55) {
    console.log(arguments[0]);
    console.log(arguments.length);
  }
  funcWithDefault3(); // undefined; 0

// NOTE: JAISE ARRAY SPECIAL TYPE OF OBJECT HAI WAISE HI ARGUMENTS  ARRAY - LIKE OBJECTS HAIN
// ARGUMENTS KE PASS "length" PROPERTY HAI ARRAY JAISE AUR USKA INDEX BHI ZERO(0) SE HAI
// JYADATAR KAAM SIDHA ARGUMENTS KO USE KARKE HI HO JATA HAI
// PAR ARGUMENT MAI ARRAY WAALE BUILT IN FUNCTIONS NHI HAIN, JAISE "forEach()" or "map()"
// PAR TUM ARGUMENT KO EK ARRAY ME BADAL SAKTE HO :

// (1) Using Slice()
// const args = Array.prototype.slice.call(arguments);

// (2) Using Array.from()
// const args = Array.from(arguments);

// (3) Using the Spread Syntax(...)
//const args = [...arguments];

// **PROPERTIES OF ARGUMENTS**  

// arguments.callee: Jo function iss argument ko execute kar raha hai usko reference karna, strict mode me nhi chalta hai

// arguments.length: total number of arguments passed dekhne ke liye

// arguments[@@iterator]: Returns a new Array iterator object that contains the values for each index in arguments.

function myConcat(separator) {
    const args = Array.prototype.slice.call(arguments, 1);      // slice kiya taaki pehli argument jo seperator hai woh answer me na aaye
     console.log(args.join(separator));
     console.log(arguments.length);         // total arguments ki length btata hai including the seperator argument
     console.log(args.length)       // seperator argument toh exclude krke length btata hai kyunki slice hua hai
  }

 myConcat(", ", "red", "orange", "blue");       // Pehli argument jo index 0 pe hai woh seperator hai


myConcat("; ", "elephant", "giraffe", "lion", "cheetah");

myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");

let answer = "";

function list(type) {
    let html = `<${type}l><li>`;       // type is the only formal argument which will have "o" or "u" as value
    const args = Array.prototype.slice.call(arguments, 1);
    html += args.join("</li><li>");
    html += `</li></${type}l>`; // end list
    console.log(html);
    console.log(typeof arguments);  // Array jaise "object" return karta hai
  }

list("u", "One", "Two", "Three");



// **Array.from Method**

// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
// Array like object jaise arguments se array bnana

// SYNTAX
// Array.from(arrayLike)
// Array.from(arrayLike, mapFn)
// Array.from(arrayLike, mapFn, thisArg)

// PARAMETERS
// arraylike: array - like object/iterable  jise array me convert karna hai(arguments)
// mapFn(optional): function jo array ke har element pe chalega. orginal array ki har value iss function se jayegi aur phir iski return value ka array banega, isme yeh 2 arguements chalti hain

// (1) element: the current element being processed in the array
// (2) index: the index of the current element being processed in the array

//thisArg(optional): value to use as "this" when executing mapFn

// ** USES ** 

console.log(Array.from("foo"));

function f() {
     console.log(Array.from(arguments));
  }
  
  f(1, 2, 3);
  
console.log(Array.from([1, 2, 3], (x) => x + x));

// **SPREAD SYNTAX(...)**   [IMPORTANT HAI]

// The spread (...) syntax allows an iterable, such as an array or string,
// to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. 
// In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.

// Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements,
// while rest syntax collects multiple elements and "condenses" them into a single element.

// SYNTAX
// Function arguments ----->   myFunction(a, ...iterableObj, b)
// array literals ----->    [1, ...iterableObj, '4', 'five', 6]
// object literals ----->   { ...obj, key: 'value' }

// Sirf array jaise iterable objects ko hi spread kar sakte hain ek aur array ya function arguments me, 
// Saare plain objects jinme "Symbol.iterator" method nhi hota woh iterable nhi hain unko spread nhi kar sakte

// const obj = { key1: "value1" };
// const array = [...obj];  TypeError: obj is not iterable

// Par tum array ko objects me spread kar sakte ho 

const array = [1, 2, 3];
const obj = { ...array }; // {0: 1, 1: 2, 2: 3}
console.log(obj);

//When using spread syntax for function calls, be aware of the possibility of exceeding the JavaScript engine's argument length limit.

// ** USES ** 

//(1) Replacing "apply()"

function myFunction(x, y, z) {}
const args = [0, 1, 2];
myFunction.apply(null, args);

// Using Spread Syntax

function MyFunction(x, y, z) {}
const argues = [0, 1, 2];
MyFunction(...args);

//Any argument in the argument list can use spread syntax, and the spread syntax can be used multiple times.

function myFunction(v, w, x, y, z) {}
const arguements = [0, 1];
myFunction(-1, ...args, 2, ...[3]);

//(2) Apply for a new operator

// When calling a constructor with new, it's not possible to directly use an array and apply(),
//  because apply() calls the target function instead of constructing it, which means, among other things,
//   that new.target will be undefined. However, an array can be easily used with new thanks to spread syntax:

const dateFields = [1970, 0, 1]; // 1 Jan 1970
const d = new Date(...dateFields);

//(3) Spead in array literals

const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];
//  ["head", "shoulders", "knees", "and", "toes"]

// Just like spread for argument lists, ... can be used anywhere in the array literal, and may be used more than once.

//(4) Copy an Array

const arr = [1, 2, 3];
const arr_2 = [...arr]; // like arr.slice()

arr_2.push(4);
//  arr2 becomes [1, 2, 3, 4]
//  arr remains unaffected

//(5) Better way to concatenate strings

let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

// Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);

// Using Spread Syntax

let arrr1 = [0, 1, 2];
const arrr2 = [3, 4, 5];

arrr1 = [...arrr1, ...arrr2];
// arrr1 is now [0, 1, 2, 3, 4, 5]

//(6) spread in object literals

const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
// { foo: "baz", x: 42, y: 13 }

// NOTE: object.assign() se object ko mutate(overwrite) kar sakte hain par spread se nhi

const object1 = { foo: "bar", x: 42 };
Object.assign(object1, { x: 1337 });
console.log(object1); // { foo: "bar", x: 1337 }

//In addition, Object.assign() triggers setters on the target object, whereas spread syntax does not.

const objectAssign = Object.assign(
    {
      set ffoo(val) {
        console.log(val);
      },
    },
    { ffoo: 1 },
  );
  // Logs "1"; objectAssign.foo is still the original setter
  
  const spread = {
    set fooo(val) {
      console.log(val);
    },
    ...{ fooo: 1 },
  };
// Nothing is logged; spread.foo is 1

//You cannot naively re-implement the Object.assign() function through a single spreading:

const objt1 = { foo: "bar", x: 42 };
const objt2 = { foo: "baz", y: 13 };
const merge = (...objects) => ({ ...objects });

const mergedObjt1 = merge(obj1, obj2);
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

const mergedObjt2 = merge({}, obj1, obj2);
// { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }

// In the above example, the spread syntax does not work as one might expect: it spreads an array of arguments into the object literal, 
// due to the rest parameter. Here is an implementation of merge using the spread syntax, whose behavior is similar to Object.assign(), 
// except that it doesn't trigger setters, nor mutates any object:

const objct1 = { foo: "bar", x: 42 };
const objct2 = { foo: "baz", y: 13 };
const mergee = (...objects) =>
  objects.reduce((acc, cur) => ({ ...acc, ...cur }));

const mergedObj1 = mergee(objct1, objct2);
// { foo: 'baz', x: 42, y: 13 }