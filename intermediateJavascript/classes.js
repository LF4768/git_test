let obj = {
    name: "John",
    surname: "Smith",
    year: 2024,
    dateOfBirth: 1994,


    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    get age() {
        return this.year - this.dateOfBirth;
    }, 

};

console.log(obj.fullName)
console.log(obj.age)

// obj.fullName = "jacob dunkins";   this gives an error because it does not have a setter

let obj2 = {
    name: "John",
    surname: "Smith",
    year: 2024,
    dateOfBirth: 1994,


    get fullName() {
        return `${this.name} ${this.surname}`;
    },


    set fullName(value) {
        [this.name,this.surname] = value.split(" ");
    }
}


obj2.fullName = "David Goggins"; // "virtual" property full name

console.log(obj2.name)
console.log(obj2.surname)



// defineProperty method


let objWritable = {};

Object.defineProperty(objWritable, "id", {
    value: 10,
    writable: true
})
Object.defineProperty(objWritable, "name", {
    value: "Josh",
    writable: false
})

console.log(objWritable);

objWritable.id = 20;
objWritable.name = "Allan";

console.log(objWritable);



let objEnumerable = {};

Object.defineProperty(objEnumerable, "id", {
    value: 10,
    enumerable: true
})
Object.defineProperty(objEnumerable, "age", {
    value: 25,
    enumerable: false
})

console.log(objEnumerable)

for(let key in objEnumerable) {
    console.log(key); // Does not show age
}


let objConfigurable = {};

Object.defineProperty(objConfigurable, "id", {
    value: 10,
    configurable: true
})
Object.defineProperty(objConfigurable, "hobbie", {
    value: "games",
    configurable: false
})

console.log(objConfigurable)

delete objConfigurable.id;
delete objConfigurable.hobbie;

console.log(objConfigurable)   // games does not get deleted


let obj3 = {
    name: "Nikolas",
    surname: "Jackson"
}

Object.defineProperty(obj3, "fullName", {
    get() {
        return `${this.name} ${this.surname}`
    },
    set(value) {
        [this.name, this.surname] = value.split(" ")
    }
})

// NOTE: defineProperty CAN HAVE EITHER GET/SET OR VALUE/WRITABLE  NOT BOTH

console.log(obj3.fullName)
obj3.fullName = "Bruno Fernandes"
console.log(obj3.fullName)
for(let key in obj3) {
    console.log(key);
}

let user = {
    get name() {
        return this._name;   // properties with underscrore(_) are considered internal by the coding world and are not called directly from outside
    },

    set name(value) {
        if(value.length < 4) {
            console.log("length of name is too short, need at least 4 characters")
            return;
        }
        this._name = value;
    }
};

user.name = "Jay";
console.log(user.name);



function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    })
}

let jason = new User("jason", new Date(1995,7,23));

console.log(jason.birthday)
console.log(jason.age);


class Test {
    constructor(name) {
        this.name = name;
    }
    // no commas used between methods
    sayHi() {
        console.log(this.name);
    }
}

// Test();  Does not work without new keyword

let tester = new Test("Aaron");
tester.sayHi();

console.log(typeof Test); // function?

console.log(Test == Test.prototype.constructor);
console.log(Test.prototype.sayHi);
console.log(Object.getOwnPropertyNames(Test.prototype))


class Check {
    constructor() {};
}

console.log(Check)  //shows as class

// NOTE: Class by default puts enumerable flag as false

let Expression = class {
    sayHi() {
        console.log("Hi")
    }
}

let ExpressionName = class MyClass {
    sayHi() {
        console.log(MyClass);
    }
};

new ExpressionName().sayHi();
// console.log(MyClass); error: not defined

// Classes can also be made dynamically

function makeClass(phrase) {
    return class  {
        sayHi() {
            console.log(phrase);
        }
    };
}

let functionClass = makeClass("Hi, How are you?");

new functionClass().sayHi();


// Getter and Setter Code Using Class

class GetterSetter {

    constructor(name) {
        // invokes the setter
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
        console.log("Name is too short.");
        return;
        }
        this._name = value;
    }

}

let getterSetter = new GetterSetter("John");
console.log(getterSetter.name); // John

getterSetter = new GetterSetter(""); // Name is too short.



class Field {
    name = "Ramsey";

    sayHi() {
        console.log(`Hi ${this.name}`);
    }
}

let field = new Field;

field.sayHi()
console.log(Field.prototype.name)


class Button {
    constructor(value) {
      this.value = value;
    }
  
    click() {
      console.log(this.value);
    }
  }
  
let button = new Button("hello");
  
setTimeout(button.click, 500); // undefined

class ButtonCorrect {
    constructor(value) {
      this.value = value;
    }
    click = () => {
      console.log(this.value);
    }
  }
  
let buttonCorrect = new ButtonCorrect("hello");
  
setTimeout(buttonCorrect.click, 1000); // hello

class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
    *getSides() {
      yield this.height;
      yield this.width;
      yield this.height;
      yield this.width;
    }
}
  
const square = new Rectangle(10, 10); 

console.log(square.area); // 100
console.log([...square.getSides()]); // [10, 10, 10, 10]


class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    static displayName = "Point";
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.hypot(dx, dy);
    }
}
  
const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance; // undefined
p2.displayName; // undefined
p2.distance; // undefined

console.log(Point.displayName); // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755


class FourSidedPolynomial {
    #height = 0;  // #  represents private
    #width;
    constructor(height, width) {
      this.#height = height;
      this.#width = width;
    }
}

class Vehicle {
    constructor(name) {
        this.name = name;
    }

    description() {
        console.log(`${this.name} is a good choice for a vehicle.`)
    }
}

class Brand extends Vehicle {
    constructor(name) {
        super(name);
    }
    
    description() {
        console.log(`${this.name} is the best brand in town.`)
    }
}

let suzuki = new Brand("Volvo");
suzuki.description();

let truck = new Vehicle("Truck");
truck.description();

class Cat {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Lion extends Cat {
    speak() {
      super.speak();
      console.log(`${this.name} roars.`);
    }
}

const l = new Lion("Fuzzy");
l.speak();
// Fuzzy makes a noise.
// Fuzzy roars.

function Animal() {}

Animal.prototype.speak = function () {
  return this;
};

Animal.eat = function () {
  return this;
};

const animal = new Animal();
const speak = animal.speak;
speak(); // global object (in non–strict mode)

const eat = Animal.eat;
eat(); // global object (in non-strict mode)

const date = new Date("January 19, 1975 23:15:30");
console.log(date.getDate() + " - " + date.getMonth() +" - " + date.getFullYear())

class DateFormatter extends Date {
    getFormattedDate() {
    const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
    ];
    return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
}
}

console.log(new DateFormatter('August 19, 1975 23:15:30').getFormattedDate());
// Expected output: "19-Aug-1975"


function OldStyleClass() {
    this.someProperty = 1;
}

OldStyleClass.prototype.randomShit = function() {};

class ChildClass extends OldStyleClass {}

class ModernClass {
    someProperty = 1;
    someMethod() {}
}

class AnotherChildClass extends ModernClass {}

function invalidClass() {};

invalidClass.prototype = 3;

// class invalidExtends extends invalidClass {}     // Uncaught TypeError: Class extends value does not have valid prototype property 3


class Parent {};
class Child extends Parent {};

console.log(Object.getPrototypeOf(Child) === Parent)
console.log(Object.getPrototypeOf(Child.prototype) === Parent.prototype)


class SomeClass extends class {                             // Anonymous class looknin ahh way of writing
    constructor() {
        console.log("Base Class");
    }
} {
    constructor() {
        super();
        console.log("Derived Class");
    }
}

new SomeClass;  

// Another (Easier to understand) Way of writing the SomeClass Code

class Anonymous {
    constructor() {
        console.log("Base Class")
    }
}

class SomeClass2 extends Anonymous {
    constructor() {
        super();
        console.log("Derived Class")
    }
}

new SomeClass2


class returnTest {
    constructor() {
        return 1;
    }
}

console.log(new returnTest())       // Does not return 1

class returnTestChild extends returnTest {
    constructor() {
        super();
        return 1;
    }
}


// console.log(new returnTestChild())     //Uncaught TypeError: Derived constructors may only return object or undefined

const petAnimal = {
    speak() {
        console.log(`${this.name} makes a noise.`)
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

Object.setPrototypeOf(Dog.prototype, petAnimal);        // Inheriting a regular ass object

const dog = new Dog("Daisy");
dog.speak();

class ClassWithPrivateField {
    #privateField;
  
    constructor() {
//      delete this.#privateField; // Syntax error
//      this.#undeclaredField = 42; // Syntax error
    }
  }
  
  const instance = new ClassWithPrivateField();
//   instance.#privateField; // Syntax error

class C {
    #x;
    static getX(obj) {
        return obj.#x;
    }
}

class B {
    #x;
}

let c = new C();
console.log(c)      // #x : undefined

let b = new B();

//console.log(C.getX({}))  // TypeError: Cannot read private member #x from an object whose class did not declare it
// console.log(C.getX(b))  // TypeError: Cannot read private member #x from an object whose class did not declare it

class inOperator {
    #x;

    constructor(x) {
        this.#x = x;
    }
    static getX(obj) {
        if(#x in obj) return obj.#x;

        return "Obj must be an instance in C";
    }
}

let inOperatorObject = new inOperator(10); 


console.log(inOperator.getX(new inOperator("Hello")));
console.log(inOperator.getX(new inOperator(0.195)));
console.log(inOperator.getX(new inOperator(new Date())));
console.log(inOperator.getX(inOperatorObject))
console.log(inOperator.getX(b))


class ClassWithPrivateFieldTheReturn {
    #privateField;
    constructor() {
        this.#privateField = 42;
    }
}
class Subclass extends ClassWithPrivateFieldTheReturn {
    #subPrivateField;

    constructor() {
        super();
        this.#subPrivateField = 23;
    }
}
console.log(new Subclass()); // In some dev tools, it shows Subclass {#privateField: 42, #subPrivateField: 23}

class Stamper extends class {
    constructor(obj) {
        return obj;
    }   
} {
    #stamp = 42;
    static getStamp(obj) {
        return obj.#stamp
    }
}

const objStamper = {};

new Stamper(objStamper)

console.log(objStamper)
console.log(Stamper.getStamp(objStamper))
console.log(objStamper instanceof Stamper)

new Stamper(obj); // Error: Initializing an object twice is an error with private fields

// This Stamper thing is not advisible to do

class ClassWithPrivateStaticField {
    static #privateStaticField = 50;
    static publicStaticMethod() {
        return ClassWithPrivateStaticField.#privateStaticField;
    }
}
console.log(ClassWithPrivateStaticField.publicStaticMethod()); // 42

class ClassWithPrivateMethod {
    #privateMethod() {
        return 100;
    }

    publicMethod() {
        return this.#privateMethod();
    }
}

class ClassWithStaticPrivateMethod {
    static #privateMethod() {
        return 100;
    }

    publicMethod() {
        return ClassWithStaticPrivateMethod.#privateMethod();
    }
}

const objectWithPrivateMethod = new ClassWithPrivateMethod();
console.log(objectWithPrivateMethod.publicMethod())


const objectWithStaticPrivateMethod = new ClassWithStaticPrivateMethod();
console.log(objectWithStaticPrivateMethod.publicMethod())




class ClassWithPrivateAccessor {
    #message;
    get #decoratedMessage() {
        return `🎬${this.#message}🛑`;
    }
    set #decoratedMessage(msg) {
        this.#message = msg;
    }
    constructor() {
        this.#decoratedMessage = "hello world";
        console.log(this.#decoratedMessage);
    }
}

new ClassWithPrivateAccessor(); 



class PrivateConstructor {
    static #isInternalConstructing = false;

    constructor() {
        if (!PrivateConstructor.#isInternalConstructing) {
        throw new TypeError("PrivateConstructor is not constructable");
        }
        PrivateConstructor.#isInternalConstructing = false;
        // More initialization logic
    }

    static create() {
        PrivateConstructor.#isInternalConstructing = true;
        const instance = new PrivateConstructor();
        return instance;
    }          
}

// new PrivateConstructor(); // TypeError: PrivateConstructor is not constructable
PrivateConstructor.create(); // PrivateConstructor {}



// What is Static and uses!!!!


// Static Properties are used when you dont want to replicate data

class ClassWithStaticField {
    static id = 5;
    getId() {
        console.log(ClassWithStaticField.id);
    }
}

const instanceWithStaticField  = new ClassWithStaticField;
instanceWithStaticField.getId();

class ClassWithStaticFields {
    static staticField;
    static staticFieldWithInitializer = "static field";
}

class SubClassWithStaticField extends ClassWithStaticFields {
    static subStaticField = "subclass field";
}

console.log(Object.hasOwn(ClassWithStaticFields, "staticField"))
console.log(ClassWithStaticFields.staticField)
console.log(ClassWithStaticFields.staticFieldWithInitializer)
console.log(SubClassWithStaticField.staticFieldWithInitializer)
console.log(SubClassWithStaticField.subStaticField)


class ClassHavingStaticField {
    static baseStaticField = "base static field"
    static anotherBaseStaticField = this.baseStaticField;

    static baseStaticMethod() {
        return "base Static Method Output";
    }
}

class SubClassHavingStaticField extends ClassHavingStaticField {
    static baseStaticField = "child static field";
    static subStaticField = super.baseStaticMethod();
}

console.log(ClassHavingStaticField.anotherBaseStaticField);
console.log(SubClassHavingStaticField.anotherBaseStaticField)
console.log(SubClassHavingStaticField.subStaticField)

class Triple {
    static customName = "Tripler"
    static description = "I Triple Any Number You Provide"

    static calculate(n = 1) {
        return n*3;
    }
}

class SquaredTriple extends Triple {
    static longDescription
    static description = "I Square The Triple Of Any Number You Provide";
    static calculate(n) {
        return super.calculate(n) * super.calculate(n);
    }
}

console.log(Triple.description)
console.log(Triple.calculate())
console.log(Triple.calculate(5))


const tp = new Triple;

console.log(SquaredTriple.calculate(3)) // not affected by above instance creation
console.log(SquaredTriple.description)
console.log(SquaredTriple.longDescription)
console.log(SquaredTriple.customName)

// console.log(tp.calculate(4))   // because calculate is a static method


class StaticMethodCall {
    constructor() {
      console.log(StaticMethodCall.staticProperty); // 'static property'
      console.log(this.constructor.staticProperty); // 'static property'
      console.log(StaticMethodCall.staticMethod()); // 'static method has been called.'
      console.log(this.constructor.staticMethod()); // 'static method has been called.'
    }
    static staticProperty = "static property";
    static staticMethod() {
        return "static method has been called.";
    }
}

new StaticMethodCall;