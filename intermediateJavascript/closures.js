function firstName(firstName) {
    const first = firstName;
    return function halleluya (secondName) {
        const second = secondName;
        return first + second
    }
}

const moses = firstName("Sergio");
console.log(moses("Ramos"))

function createUser (name) {
    const discordName = "@" + name;
  
    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => reputation++;
  
    return { name, discordName, getReputation, giveReputation };
  }
  
  const josh = createUser("josh");
  josh.giveReputation();
  josh.giveReputation();
  josh.giveReputation();
  
  console.log({
    discordName: josh.discordName,
    reputation: josh.getReputation()
  });
  // logs { discordName: "@josh", reputation: 2 }

function createPlayer(name,level) {
    const{getReputation, giveReputation} = createUser(name)

    const increaseLevel = () => level++;
    return {getReputation, giveReputation, increaseLevel, level};
}

const harry = createPlayer("Harry", "4");
harry.increaseLevel();
harry.increaseLevel();
harry.giveReputation();



const first = "Hello" // const and let are globally scoped but not attached to window object
let second = "World"
var age = 24   // var attaches age to the window object which is globally scoped
console.log(window.age, window.first)   // logs 24 and undefined

sayHi = function() {
    console.log("Hello People!");       // attached to window object(let and const are the only exceptions)
};


randomNumber = 100

function test() {
    randomNumber = 200
    console.log(randomNumber) // logs 200 because 100 is shadowed/overwritted
}


function isCool(name) {
    let cool;
    if (1 === 1) {
      const cool = true;
}
    console.log(cool); // logs undefined and not true
    return cool;
}



const chocolate = "5-star"

function favouriteChocolate() {
    console.log(chocolate);
}

function newChocolate() {
    const chocolate = "milkyBar";
    favouriteChocolate(); //logs 5-star because scope works from where the function is defined and not from where it runs
}



function outer() {
    const outerVar = "Hey, I am the Outer Var"
    function inner() {
        const innerVar = "Hey, I am the Inner Var"
        console.log(outerVar)
        console.log(innerVar)
    }
    return inner;
}

const innerFn = outer();
innerFn()

function createGreeting(greeting = "") {
    const myGreet = greeting.toUpperCase();
    
    return function(name) {
        return `${myGreet} ${name}`
    }
}

const hi = createGreeting("hi")
const goodMorning = createGreeting("Good Morining")
console.log(goodMorning("Angela"))


function createGame(gameName) {
    let score = 0;
    
    return function win() {
        score++;
        return `Your name ${gameName} score is ${score}`
    }
}

const hockeyGame = createGame("hockey");
console.log(hockeyGame())

const footballGame = createGame("football")
console.log(footballGame())
console.log(footballGame())


const target = { a: 4, b: 5 };
const source = { b: 3, c: 10 };
const returnedTarget =  Object.assign(target, source); //Object.assign(target, source1, source2, ....)
console.log(target)
console.log(returnedTarget == target);

function createPlayer (name, level) {
    const user = createUser(name);
  
    const increaseLevel = () => level++;
    return Object.assign({}, user, { increaseLevel });
}