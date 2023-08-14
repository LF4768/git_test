// THE FOR...OF LOOP
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {           // The basic tool for looping through a collection is the for...of loop
  console.log(cat);
}
// Meaning of the statement "const cat of cats"
// 1) given the collection in cats, get the first item in the collection
// 2) assign it to the variable cat and run the code between the curly braces
// 3) Get the next item and repeat (2) untill you've reached the end of the collection

// 2 SPECIALIZED LOOPS

// (1) map(.): used to do something to each item in the collection and create a new collection containing the changed items

function toUpper(string) {                     // Here we pass a function into cats.map(), and map() calls the function once for each item in the array, passing in the item. 
    return string.toUpperCase();              // It then adds the return value from each function call to a new array, and finally returns the new array. 
}                                            // In this case the function we provide converts the item to uppercase, so the resulting array contains all our cats in uppercase

const upperCats = cats.map(toUpper);
console.log(upperCats);

// (2) filter(.): used to test each item in the collection, and create a new collection containing only items that match.

function lcat(cat) {
    return cat.startsWith("L");
}

const filteredCats = cats.filter(lcat);         // with filter(.) the function we pass returns a boolean, if its  true the item is included into the next array
console.log(filteredCats);

const filtered = cats.filter((cat) => cat.startsWith("L"));         // function expression(arrow);
console.log(filtered);

// **FOR LOOP**
// Used to run the same code over and over again

// SYNTAX

// for (initializer; condition; final-expression) {
//       code to run
// }

// An initializer — this is usually a variable set to a number, which is incremented to count the number of times the loop has run.
//  It is also sometimes referred to as a counter variable.

// A condition — this defines when the loop should stop looping. 
// This is generally an expression featuring a comparison operator, a test to see if the exit condition has been met.

// A final-expression — this is always evaluated (or run) each time the loop has gone through a full iteration. 
// It usually serves to increment (or in some cases decrement) the counter variable, to bring it closer to the point where the condition is no longer true.

function calculate() {
    for (let i = 1; i < 11; i++) {
      const newResult = `${i} x ${i} = ${i * i}`;
      console.log(newResult);
    }
  }
calculate();

//let i = 1: the counter variable, i, starts at 1. 
//Note that we have to use let for the counter, because we're reassigning it each time we go round the loop.

//i < 11: keep going round the loop for as long as i is smaller than 11.

//i++: add one to i each time round the loop.

for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);                           // FOR loop can also be used to look through a collection
}

// Why you shouldnt use FOR loop for collection
// (1) you might start i at 1, forgetting that the first array index is zero, not 1.
// (2) you might stop at i <= cats.length, forgetting that the last array index is at length - 1.

// Sometimes a FOR loop is necessary to look through a collection

let myFavoriteCats = "My cats are called ";

for (const cat of cats) {
  myFavoriteCats += `${cat}, `;
}

console.log(myFavoriteCats);        //The final result of this for..of loop is not well formed, this is where FOR loop is better

let MyFavoriteCats = "My cats are called ";

for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    // We are at the end of the array
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }
}

console.log(myFavoriteCats); 

// EXAMPLE OF EXITING THE LOOP WITH BREAK

const contacts = [
    "Chris:2232322",
    "Sarah:3453456",
    "Bill:7654322",
    "Mary:9998769",
    "Dianne:9384975",
  ];
  const para = document.getElementById("demo");
  const input = document.querySelector("input");
  const btn = document.getElementById("searchButton");
  
  btn.addEventListener("click", () => {
    const searchName = input.value.toLowerCase();       //We store the value entered into the text input in a variable called searchName
    input.value = "";
    input.focus();
    para.textContent = "";
    for (const contact of contacts) {
      const splitContact = contact.split(":");      //Inside the loop, we first split the current contact at the colon character,and store the resulting two values in an array called splitContact
      if (splitContact[0].toLowerCase() === searchName) {       
        para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;  //we enter a string into the paragraph to report what the contact's number is, and use break to end the loop.
        break;      //Here the loop is exited if the contact is found
      }
    }
    if (para.textContent === "") {
      para.textContent = "Contact not found.";
    }
  });

// EXAMPLE OF SKIPPING ITERATIONS THE LOOP WITH CONTINUE

const paragraph = document.getElementById("output");
const userInput = document.getElementById("number");
const butn = document.getElementById("generateButton");

butn.addEventListener("click", () => {
  paragraph.textContent = "Output: ";
  const num = userInput.value;
  userInput.value = "";
  input.focus();
  for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);          //Math.sqrt(.) is used to find the square root
    if (Math.floor(sqRoot) !== sqRoot) {
      continue;
    }
    paragraph.textContent += `${i} `;
  }
});

// WHILE AND DO...WHILE LOOP

// SYNTAX FOR WHILE LOOP

// initializer            In this loop, the initializer(counter variable) and final-expression are kept outside the brackets 
// while (condition) {    
//    code to run

//   final-expression
// }

const games = ["Ghost of Tsushima", "Red Dead Redemption 2", "God of War(2018)", "Elden Ring"];

let favouriteGames = "My favourite games are ";

let i = 0;
while (i < games.length) {
  if (i === games.length - 1) {
    favouriteGames += `and ${games[i]}.`;
  } else {
    favouriteGames += `${games[i]}, `;
  }
  i++
}
console.log(favouriteGames)

// SYNTAX FOR DO...WHILE lOOP

// initializer
// do {
//    code to run

//   final-expression
// } while (condition)

// DIFFERENCE BETWEEN WHILE/FOR LOOP AND DO..WHILE LOOP

// DO...WHILE: In DO..WHILE loop, the condition comes after the code has run, due to this in this loop, the code runs atleast once and the condition is checked afterwards
// WHILE/FOR: In WHILE/FOR loop, the condition comes before the code, due to this is the condtion is not met the code may never execute even once 

const socialMediaApps = ["Twitter", "Telegram", "Reddit"];
socialMediaApps[0] = "X";

let myFavouriteSocialMediaApps  = "My Favourite Social Media Apps Are ";

let I = 0;

do {
  if (I === socialMediaApps.length - 1) {
      myFavouriteSocialMediaApps += `and ${socialMediaApps[I]}.`;    
  } else {
    myFavouriteSocialMediaApps += `${socialMediaApps[I]}, `;
  }


  I++;
} while (I < socialMediaApps.length)

console.log(myFavouriteSocialMediaApps);

// WARNING: With while and do...while — as with all loops — you must make sure that the initializer is incremented or, depending on the case, decremented, 
// so the condition eventually becomes false. 
// If not, the loop will go on forever, and either the browser will force it to stop, or it will crash. This is called an INFINTE LOOP.

// WHICH LOOP TO USE AND WHEN

// FOR...OF LOOP: If you're iterating through an array or some other object that supports it,
// and don't need access to the index position of each item, then for...of is the best choice. It's easier to read and there's less to go wrong.

//For other uses, for, while, and do...while loops are largely interchangeable. 
//They can all be used to solve the same problems, 
//and which one you use will largely depend on your personal preference — which one you find easiest to remember or most intuitive.
 //We would recommend for, at least to begin with, as it is probably the easiest for remembering everything