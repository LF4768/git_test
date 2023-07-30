const string = "The revolution will not be televised.";
console.log(string); // unterminated string literal means the quotes have started but never ended 

let singleQuote = 'Jiggly Puff';
let doubleQuote = "Wiggly Tuff"; //very little difference between single and double quotes
console.log(singleQuote);
console.log(doubleQuote);
let singleDouble = 'What is a "jakh"';
let doubleSingle = "I'm what they call jakh"; //you can only use quotes different than the outer ones, is same quotes are used there is an error
console.log(singleDouble);
console.log(doubleSingle);

let singleSingle = ' I\'m what they call jakh'; //backslash is used to escape characters so that they are recoginized as text
console.log(singleSingle);

const greeting = `Nalekvi, ${singleQuote}`; //backtics (`) are used to concatenate strings and the variable's value is put 
//in with the syntax ${}
console.log(greeting);

const dialogue1 = `${doubleQuote} ${singleDouble}`;
const dialogue2 = `${singleQuote} ${doubleSingle}`;
console.log(dialogue1);
console.log(dialogue2);

const button = document.querySelector("button");

function greet() {
    const name = prompt("What is your name?"); //prompt is used to ask the user to answer a question via dialog box
    alert(`Hello ${name}, nice to see you!`); //this answer is stored in "name" and alert is used to return the string as another popup
}
button.addEventListener("click", greet);

const GREET = "Hello";
const user = "John"
console.log(GREET + ", " + user) //+ can also be used to concatenate(unary)

console.log(typeof Number(user)); // Number(.) used to convert anything to number format
let marks = 18.67;
let total = 20;
console.log(typeof total.toString()); //(variable).toString() used to convert anything to string format
let opinion = `I really like the design of
 ${singleQuote}, i gave it a ${((marks / total) * 100).toFixed(3)}%` //breaking a line in quotes also breaks the line in the console
console.log(opinion);

let opinionBreak = `I really like the design of \n${singleQuote}, i gave it a ${((marks / total) * 100).toFixed(3)}%`
console.log(opinionBreak); // \n is known as the line break character and is used to break lines

let sampleText = "ABCDE&GHIJ ${}NOPQRSTUVWX()";
let length = sampleText.length; //(.).length property returns the length of a string
console.log(length) //spaces are included in the length\

//methods to extract part of a string
let slice = sampleText.slice(5, 13); //(.).slice(startPosition,endPosition) returns part of the string from start postion till end.
console.log(slice);  //*The postions in JS start from 0, so the second postion is considered as 1*
let sliceImpossible = sampleText.slice(15, 3); //returns empty string
console.log(sliceImpossible);
let sliceNoEnd = sampleText.slice(5); //No end position gives the string from start position till the end.
console.log(sliceNoEnd);
let sliceNegative = sampleText.slice(-20); //negative parameters count from the end 
console.log(sliceNegative);
let sliceEndNegative = sampleText.slice(-22, -14);
console.log(sliceEndNegative);
let sliceImpossibleNegative = sampleText.slice(-15, -22); //returns empty string
console.log(sliceImpossibleNegative);

let substring = sampleText.substring(-2, 13); //substring is similar to slice
console.log(substring); //the difference is that the start and end values less than 0 are treated as 0 in substring
//it basically accepts only whole numbers and makes the non whole numbers 0

let substr = sampleText.substr(5, 8); //substr is similar to slice
console.log(substr) //the difference is that the second parameter specifies the length to be extracted
//if length not specified the whole string is returned from starting point
let substrNegative = sampleText.substr(-7); //negative value starts from the back
console.log(substrNegative)

let statement = "ikhli is better than jakhli";
let correctStatement = statement.replace("ikhli", "wakhli"); // (.).replace("Word to be replaced","Word to be replaced by")
console.log(statement); //.replace does not change the string but returns a new string
console.log(correctStatement); //.replace only replaces the first match
//By Default, .replace is case sensitive property
let correctStatementInsensitive = statement.replace(/IKHLI/i, "Wakhli"); // /i flag is used to find the word to replace case insensitive
console.log(correctStatementInsensitive); //with flag /i do not use quotes for the word to be replaced but use with the word to replace it with
let multiWrongStatement = "Ikhli is better than jakhli and Ikhli is better than ramden";
let multiCorrectStatement = multiWrongStatement.replace(/Ikhli/g, "Wakhli"); // /g flag is called global match 
console.log(multiCorrectStatement); // /g is used to replace all the matches of the word instead of 1
let text = "I love cats. Cats are very easy to love. Cats are very popular."
text = text.replaceAll("Cats", "Dogs"); // (.).replaceAll("." , ".") allows you to specify a regular expression instead of a string to be replaced
text = text.replaceAll("cats", "dogs");
console.log(text); //for regular expression still gotta use /g even with .replaceAll

let subject = "     Hello World!      "
let upperCase = subject.toUpperCase(); //used to convert the string to upper case
let lowerCase = subject.toLowerCase(); //used to convert the string to lower case
console.log(upperCase);
console.log(lowerCase);

let text1 = "Hello";
let text2 = "World!";
let resultConcat = text1.concat(" ", "Damn", " ", text2); // (.).concat is used instead of the plus operator
let resultPlus = text1 + " " + text2;
console.log(resultConcat);
console.log(resultPlus);

console.log('NOTE: Every string method returns a new string, it cannot modify the original string')
//Sachi me note hai yaad rakhna

let subjectTrim = subject.trim(); // (.).trim() used to remove the whitespaces
console.log(subjectTrim);
let subjectTrimStart = subject.trimStart(); // (.).trimStart() Only removes the whitespaces in the start of the string
let subjectTrimEnd = subject.trimEnd(); // (.).trimEnd() Only removes the whitespaces at the end of the string
console.log(subjectTrimStart);
console.log(subjectTrimEnd);

//Padding

let padding = "9";
let padStart = padding.padStart(2, "6"); //(.).padStart(The total length to reach,"the value") is used to write the same thing until the specified total length is reached
let padEnd = padding.padEnd(3, "Hello");  //(.).padStart(The total length to reach,"the value") is used to write the same thing until the specified total length is reached
//as length is reached before, full hello is not returned
console.log(padStart); // padStart writes the value before the given string
console.log(padEnd); //padEnd writes the value after the given string

//padStart/End is a string method only

let testNumber = 10;
let paddingNumber = testNumber.toString(); //the number has to be converted to string before padding
let numberedPadding = paddingNumber.padStart(5, "7");
console.log(numberedPadding);


//Extracting String Characters

let char = sampleText.charAt(3); //(.).charAt(postion) is used to extract the character at the specified position
console.log(char);
let charCode = sampleText.charCodeAt(3); //(.).charCodeAt(position) returns the UTF-8 unicode of the specified character
console.log(charCode); //integer between 0 and 65535
let propertyAccess = sampleText[3]; // (.)[position] is known as syntax for property access and returns the character at specified postion
//But it is unpredictable and should not be used over charAt
//it makes strings look like Array(which they are not)
//if no character is found, [] returns undefined while charAt() returns an empty string
console.log(propertyAccess);

sampleText[0] = "A"; //Property Access is read only, this does not give any error but does not work

let arrayText = "a1,a2,a3,a4,a5,a6";
let array = arrayText.split(","); //(.).split(".") is used to convert string into array, here the string is split on every comma
let arrayEmpty = arrayText.split();
let arrayQuotes = arrayText.split("");
console.log(arrayEmpty); //returns a whole string in index [0] only
console.log(arrayQuotes); //returns an array of every single character
console.log(array[1]); // [.] used to return specific array only
let arrayTest = arrayText.split("a");
console.log(array[4]);

//Comparisons

console.log(5 > 3);  //numbers have straight forward comparison
console.log("z" > "a"); //If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second.
console.log("Glow" > "Glee"); //Otherwise, if both strings’ first characters are the same, compare the rest of the  characters the same way.
console.log("Bee" > "Be"); //If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.
console.log("A" > "a"); // small a has a greater unicode index than capital A
let uniCode = "aA";
console.log(uniCode.charCodeAt(0)); //small a has code value 97
console.log(uniCode.charCodeAt(1)); //capital a has code value 65
console.log("2" > 1) //for every comparison JS converts value to numbers
console.log("01" == 1);
console.log(true == 1); //every value converted to numbers and number for true is 1
console.log(false != 0); //value for false is 0

let a = 0;
let b = "0";
console.log(Boolean(a));
console.log(Boolean(b)); //Boolean uses other rules for true or false
console.log(a == b); //equality checks converts variables into numeric convension, so true

console.log(0 == false); //in numeric convention the false is converted to 0, so true statement
console.log(0 === false); //strict equality that checks the types of the variables as well, so false
console.log(null == undefined); //they are equal only in sense of ==, not any other value
console.log(null === undefined); //only equal for ==
console.log(null > 0, null < 0); //Comparisons convert null to a 0
console.log(null >= 0, null <= 0) //as null is converted to 0, true
console.log(null == 0); //but in equality there's a rule, null and undefined are equal to each other and nothing else
console.log(undefined > 0); //for comparisons, undefined is converted to NaN and returns false for all comparisons
console.log(undefined < 0);
console.log(undefined == 0); //undefined only equals to null
console.log("2" > "12"); //unicode index of character 2 is greater than first character 1
let deaded = "21"
console.log(deaded.charCodeAt(0));
console.log(deaded.charCodeAt(1));

console.log(true || true); // double || represents the OR logical operator
console.log(true || false); // The true and false are converted into boolean
console.log(false || true); // Value for true is 1 and for false is 0
console.log(false || false);

if (1 || 0) { //works the same as true || false
    console.log("Jikh is better"); //the if statement is the usual use of the OR operator
};

let hour = 13;
if (hour <= 12 || hour >= 13) {
    console.log("Wikh is better");
};
let isWeekend = true;

if (hour <= 10 || hour > 14 || isWeekend) {
    console.log("Ikh is deaded");
}

console.log(1 || 0); // OR evaluates operands from left to right and converts them into boolean, if the result is true(1), it returns the original value
console.log(null || 1); // Null is not a truthy value but 1 is, so the 2nd value is the first truthy value
console.log(null || 0 || 1); // 1 is the first truthy value
console.log(undefined || null || 0); // When all are falsey values, the last value is returned in its original form

let firstName = "";
let lastName = "";
let nickName = "The Pirate Hunter";
console.log(firstName || lastName || nickName || "Anonymous"); //nickName is the first truthy value
console.log(firstName || lastName || "Anonymous" || nickName); // As the operator checks left to right, Anonymous string is the first truthy value
console.log(true || alert(false)); // True is the first truthy value so the false is not alerted


let minute = 45;
let day = "Tuesday";

if (minute == 45 && day == "Tuesday") { // The AND operator(&&) only works when all the conditions are met
    console.log("Its tuesday and the time is 45 minutes past 12")
}
console.log(1 && 0); // The AND operator evaluates the operands from left to right and looks  for the first falsey statement and returns it(opposite to OR)
console.log(1 && 5); // if all are truthy, AND returns the last value
console.log(null && 5); // If the first operand is falsely, the rest are ignored and the operator returns the first value
console.log(false && "Who gives a shit");

// NOTE:
// AND operator has more precendence than OR operator
// So a code like {a && b || c && d} is simply {(a && b) || (c && d)}
// DO NOT use AND || OR operator(see what i did there) instead of if statement

console.log(!true); // The NOT operator(!) returns the inverse value
console.log(!0)

console.log(!!"Non - empty string"); // The first ! converts the value to boolean and then reverses it, the second ! inverses the boolean value and returns the value - boolean reverse value
console.log(!!null);
console.log(Boolean("Non - empty string")) // does the same thing as double !!

//NOTE:
// The NOT operator(!) has the highest precedence

console.log(alert(1) || 2 || 3); // GOTTA BE CAREFUL HERE
//alert works and shows 1 but in itself returns undefined, so the operator goes to 2 and stops there

console.log(alert(1) && alert(2)); // GOTTA BE CAREFUL HERE 
//alert works and shows 1 but shows undefined in the console log as its the first falsey value

console.log(2 || null && 3 || 4) //The AND operator has higher precedence, as both are truthy it returns 3, the OR operator is not checked

let age = 40;
if (age <= 90 && age >= 14) {
    console.log("The Age is between 14 and 90");
};

let sampleAge = 93;
if (!(sampleAge <= 90 && sampleAge >= 14)) {
    console.log("Age is not between 14 and 90");
};


