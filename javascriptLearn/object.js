// An object can be created with figure brackets {…} with an optional list of properties. 
// A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

// Creating an empty object

let user = new Object(); // "object constructor" syntax'
let otherUser = {}; // "object literal" syntax

// Usually, the figure brackets {...} are used. That declaration is called an object literal.

let playerInfo = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
  };

// A property has a key (also known as “name” or “identifier”) before the colon ":" and a value to the right of it.

// Calling the key of an object

console.log(playerInfo.name, playerInfo.age);

// Adding a value to the object

playerInfo.isAdmin = true;

// Removing a value from the object

delete playerInfo.age;

// Using multiword property

let object1 = {
    name: "John",
    age: 30,
    "likes birds": true  // multiword property name must be quoted
};

// The last property in the list may end with a comma:

let object2 = {
    name: "John",
    age: 30,
}

// That is called a “trailing” or “hanging” comma. Makes it easier to add/remove/move around properties, because all lines become alike.

// Use of SQUARE BRACKETS

// For multiword properties, the dot access doesn’t work:

// this would give a syntax error
// object1.likes birds = true

// The dot requires the key to be a valid variable identifier. 
// That implies: contains no spaces, doesn’t start with a digit and doesn’t include special characters ($ and _ are allowed).

// There’s an alternative “square bracket notation” that works with any string:

let multiwordTest = {};

// set
multiwordTest["likes birds"] = true;

// get
console.log(multiwordTest["likes birds"]); // true

// delete
delete multiwordTest["likes birds"];

// Square brackets also provide a way to obtain the property name as the result of any expression, 
// as opposed to a literal string – like from a variable as follows:

let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;

// Here, the variable key may be calculated at run-time or depend on the user input. 
// And then we use it to access the property. That gives us a great deal of flexibility.

let person = {
    name: "John",
    age: 30
  };
  
  let info = prompt("What do you want to know about the user?", "name");
  
  // access by variable
 console.log(person[info]);; // John (if enter "name")

// This cannot be done with dot notation

let ask = "name";
console.log(person.ask); // undefined

// COMPUTED PROPERTIES

// We can use square brackets in an object literal, when creating an object. That’s called computed properties.

let fruit = prompt("Which fruit to buy", "apple");

let bag = {
    [fruit]: 5,
};
console.log(bag.apple);

// The meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit.
// So, if a visitor enters "apple", bag will become {apple: 5}.

// alternate way to write the following code

// let fruit1 = prompt("Which fruit to buy", "apple");
// let bag1 = {};
// bag[fruit] = 5;

let fruit2 = 'apple';
let bag2 = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};

// Square brackets are much more powerful than dot notation. They allow any property names and variables. But they are also more cumbersome to write.
// So most of the time, when property names are known and simple, the dot is used. And if we need something more complex, then we switch to square brackets.

// Property Value Shorthand

// In real code, we often use existing variables as values for property names.

function makeUser(name, age) {
    return {
      name: name,
      age: age,
      // ...other properties
    };
  }
  
  let person2 = makeUser("John", 30);
console.log(person2.name);; // John

// In the example above, properties have the same names as variables. The use-case of making a property from a variable is so common, 
// that there’s a special property value shorthand to make it shorter.

// Instead of name:name we can just write name, like this:

// function makeUser(name, age) {
//     return {
//       name, // same as name: name
//       age,  // same as age: age
//       // ...
//     };
//   }

// We can use both normal properties and shorthands in the same object:

// Property Name Limitations

// As we already know, a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.

// But for an object property, there’s no such restriction:

// these properties are all right
let obj = {
    for: 1,
    let: 2,
    return: 3
};
  
console.log(obj.for + obj.let + obj.return);;  // 6

// Other types are automatically converted to strings.
// For instance, a number 0 becomes a string "0" when used as a property key:

let obj1 = {
    0: "test" // same as "0": "test"
};
  
  // both alerts access the same property (the number 0 is converted to string "0")
console.log( obj1["0"] );; // test
console.log( obj1[0]);; // test (same property)

// There’s a minor gotcha with a special property named __proto__. We can’t set it to a non-object value:

let obj3 = {};
obj3.__proto__ = 5; // assign a number
console.log(obj3.__proto__);; // [object Object] - the value is an object, didn't work as intended

// As we see from the code, the assignment to a primitive 5 is ignored.

// "in" Operator

// A notable feature of objects in JavaScript, compared to many other languages, 
// is that it’s possible to access any property. There will be no error if the property doesn’t exist!

// Reading a non-existing property just returns undefined. So we can easily test whether the property exists:

console.log(user.noSuchProperty === undefined); ; // true means "no such property"

// There’s also a special operator "in" for that.

// SYNTAX
// "key" in "object"

let person3 = { name: "John", age: 30 };

console.log( "age" in person3); ; // true, user.age exists
console.log("blabla" in person3); ; // false, user.blabla doesn't exist

// Please note that on the left side of in there must be a property name. That’s usually a quoted string.
// If we omit quotes, that means a variable should contain the actual name to be tested. For instance:

let person4 = { age: 30 };

let key1 = "age";
console.log(key1 in person4);// true, property "age" exists

// Why does the in operator exist? Isn’t it enough to compare against undefined?

// Well, most of the time the comparison with undefined works fine. But there’s a special case when it fails, but "in" works correctly.

// It’s when an object property exists, but stores undefined:

let obj4 = {
    test: undefined
};
  
console.log(obj4.test); ; // it's undefined, so - no such property?

console.log("test" in obj4 );; // true, the property does exist!

// The "for...in" loop

// To walk over all keys of an object, there exists a special form of the loop: for..in. 
// This is a completely different thing from the for(;;) construct that we studied before.  for(let i = 0; i > something; i++)

// SYNTAX
// for (key in object) {
    // executes the body for each key among object properties
// }

let person5 = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in person5) {
    // keys
     console.log(key); ;  // name, age, isAdmin
    // values for the keys
    console.log(person5[key]); ; // John, 30, true
};

// Note that all “for” constructs allow us to declare the looping variable inside the loop, like let key here.
// Also, we could use another variable name here instead of key. For instance, "for (let prop in obj)" is also widely used.

// Ordered Like An Object

// The short answer is: “ordered in a special fashion”: 
// integer properties are sorted, others appear in creation order. The details follow.

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
  };
  
  for (let code in codes) {
    console.log(code);; // 1, 41, 44, 49
};

// The phone codes go in the ascending sorted order, because they are integers. So we see 1, 41, 44, 49.

// What are integer properties
// The “integer property” term here means a string that can be converted to-and-from an integer without a change.


// So, "49" is an integer property name, because when it’s transformed to an integer number and back, it’s still the same. But "+49" and "1.2" are not:

let person6 = {
    name: "John",
    surname: "Smith"
  };
  person6.age = 25; // add one more
  
  // non-integer properties are listed in the creation order
  for (let prop in person6) {
   console.log(prop); ; // name, surname, age
}

// So, to fix the issue with the phone codes, we can “cheat” by making the codes non-integer. Adding a plus "+" sign before each code is enough.

// let codes = {
//     "+49": "Germany",
//     "+41": "Switzerland",
//     "+44": "Great Britain",
//     // ..,
//     "+1": "USA"
//   };
  
//   for (let code in codes) {
//     alert( +code ); // 49, 41, 44, 1
//   }

let person7 = {};
person7["greeting"] = "Konichiwa"
person7.farewell = function() {
  console.log("Sayonara");
}

// One useful aspect of bracket notation is that it can be used to set not only member values dynamically, but member names too.

// const myDataName = nameInput.value;
// const myDataValue = nameValue.value;

const myDataName = "height"
const myDataValue = "1.75m"
let personRandom = {};
personRandom[myDataName] = myDataValue;

// Adding a property to an object using the method above isn't possible with dot notation, 
//  which can only accept a literal member name, not a variable value pointing to a name.


// const person = {
//   name: ["Bob", "Smith"],
//   age: 32,
//   bio() {
//     console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//   },
//   introduceSelf() {
//     console.log(`Hi! I'm ${this.name[0]}.`);
//   },
// };

// You are probably wondering what "this" is. 
// The this keyword refers to the current object the code is being written inside — so in this case this is equivalent to person.

//  So why not just write person instead?
// Well, when you only have to create a single object literal, it's not so useful. 
// But if you create more than one, this enables you to use the same method definition for every object you create.

const persn1 = {
  name: "Chris",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

const persn2 = {
  name: "Deepti",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

// Using Constructors

// bahut saare objects on its own kaise create honge?

// WAY 1

function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}

const salva = createPerson("Salva");
salva.name;
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = createPerson("Frankie");
frankie.name;
frankie.introduceSelf();
// "Hi! I'm Frankie."

// Chalega par yeh lamba tarika hai
// Constructor ko "new" keyword se call karke kaam jaldi ho jayega
// Ek Constructor ko call karne pe kya hoga?
// create a new object
// bind this to the new object, so you can refer to this in your constructor code
// run the code in the constructor
// return the new object.

// Constructors, by convention, start with a capital letter and are named for the type of object they create

function User(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}

const jikh = new User("Jikh");
jikh.name;
jikh.introduceSelf();

const wikh = new User("Wikh");
wikh.name;
wikh.introduceSelf();

