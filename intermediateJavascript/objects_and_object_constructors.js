function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return this.title + " by " +  this.author + ", " + this.pages + " pages" +  ", " + this.read
    };
}

const book1 = new Book("English Literature", "Mridula", "150", "not read yet");
const book2 = new Book("Hello World!", "Odin", "200", "read");
const book3 = new Book("Reddit 101", "Steve", "500", "not read yet");


console.log(book3.info())

console.log(Object.getPrototypeOf(book1) === Book.prototype);
console.log(Object.getPrototypeOf(book1))
console.log(Object.getPrototypeOf(book2))
console.log(Object.getPrototypeOf(book1) === Object.getPrototypeOf(book2))   

Book.prototype.name = function() {
    return "Hello My Name is !!"
};

console.log(book1.name());
console.log(book2.name());
console.log(book3.name());

console.log(book1.__proto__ === Book.prototype);     // DONT DO THIS, .__proto__ is another way of writing getPrototypeOf but is deprecated
                                                     // In legacy code, [[Prototype]] is another way of writing .__proto__

console.log(Object.getPrototypeOf(Book.prototype) === Object.prototype);
console.log(book1.valueOf());

console.log(book1.hasOwnProperty("valueOf"));
console.log(Object.prototype.hasOwnProperty("valueOf"));
console.log(Object.prototype.hasOwnProperty("hasOwnProperty"));
console.log(Object.getPrototypeOf(Object.prototype));

function notebook(title) {
    this.title = title;
}
notebook.prototype.sayTitle = function() {
    return "Hi, My title is " + `${this.title}`;
}

Book.prototype.getPages = function() {
    return "The Total Number Of Pages Are " + `${this.pages}`
}

console.log(Object.getPrototypeOf(Book.prototype))

Object.setPrototypeOf(Book.prototype, notebook.prototype)  // 1st Argument Inherits And The Second Arguments is the one it inherits from
console.log(Object.getPrototypeOf(Book.prototype))

console.log(book1.sayTitle());
console.log(book2.getPages());

// Player.prototype = Person.prototype; Does Not Work because it will set Player.prototype to directly refer to Person.prototype (i.e. not a copy),
//                                      which could cause problems if you want to edit something in the future. Consider one more example:

function Person(name) {
    this.name = name;
  }
  
  Person.prototype.sayName = function() {
    console.log(`Hello, I'm ${this.name}!`);
  };
  
  function Player(name, marker) {
    this.name = name;
    this.marker = marker;
  }
  
  // Don't do this!
  // Use Object.setPrototypeOf(Player.prototype, Person.prototype)
  Player.prototype = Person.prototype;
  
  function Enemy(name) {
    this.name = name;
    this.marker = '^';
  }
  
  // Not again!
  // Use Object.setPrototypeOf(Enemy.prototype, Person.prototype)
  Enemy.prototype = Person.prototype;
  
  Enemy.prototype.sayName = function() {
    console.log('HAHAHAHAHAHA');
  };
  
  const carl = new Player('carl', 'X');
  carl.sayName(); // Uh oh! this logs "HAHAHAHAHAHA" because we edited the sayName function!


function Data(name, age, section) {
  this.name = name;
  this.age = age;
  this.section = section;
  this.sectionDetail = function() {
    console.log(this.name + " is from section " + this.section);
  }
}

Data.prototype.ageInYears = function() {
  console.log(this.name + "'s" + " age is " + this.age);
}

const ryan = new Data("Ryan", "22", "A");
ryan.sectionDetail();
ryan.ageInYears();

function Data2(placeOfBirth) {
  this.placeOfBirth = placeOfBirth;
}

Data2.prototype.birthPlace = function() {
  console.log("This child's place of birth is " + this.placeOfBirth);
}

const harry = new Data2("New York")

harry.birthPlace();

Object.setPrototypeOf(Data.prototype, Data2.prototype);
console.log(Object.getPrototypeOf(Data.prototype));

ryan.birthPlace();

console.log(Object.prototype.isPrototypeOf(Data));
console.log(Data instanceof Object);  // We can use the instanceof operator to test whether the prototype property of a constructor appears anywhere within an object’s prototype chain.

function Hero(name, level) {
  this.name = name;
  this.level = level;
}

let hero1 = new Hero("Lucifer", 1)
console.log(hero1);

Hero.prototype.greet = function() {
  return `${this.name} says hello!`;
}

console.log(hero1.greet());

// Initialize Warrior constructor
function Warrior(name, level, weapon) {
  // Chain constructor with call
  Hero.call(this, name, level);

  // Add a new property
  this.weapon = weapon;
}

// Initialize Healer constructor
function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}

Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
}

Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
}

hero1 = new Warrior("Lucifer", 1, "Axe");
let hero2 = new Healer("Joohee", 3, "Regenation");

console.log(hero1);
console.log(hero1.attack());
console.log(hero2.heal());

//  hero1.greet();   Uncaught TypeError: hero1.greet is not a function

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

console.log(hero1.greet());  

const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will return "Mary Doe"
console.log(person.fullName.call(person2));

const people = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const people1 = {
  firstName:"John",
  lastName: "Doe"
}

console.log(person.fullName.call(person1, "Oslo", "Norway"));

console.log(Object.keys(book2));
for(let prop in book1) {
  let isOwn = book1.hasOwnProperty(prop);

  if (isOwn) {
    console.log(`Our: ${prop}`); // Our: jumps
  } else {
    console.log(`Inherited: ${prop}`); // Inherited: eats
  }
}