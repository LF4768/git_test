 // Add or Remove items

const people = ["john", "jack", "johnny", "jacob", "josh", "joker", "jaggy", "jackson"];

people.push("jasmine"); // arr.push(...items) – adds items to the end
people.pop(); //arr.pop() – extracts an item from the end
people.shift(); //arr.shift() – extracts an item from the beginning,
people.unshift("jikh"); //arr.unshift(...items) – adds items to the beginning.
console.log(people);

people.splice(1, 1, "jasmine") // arr.splice(start[, deleteCount, elem1, ..., elemN]) - It modifies arr starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed elements.
console.log(people);    // One of the only methods to return the original array and not a new modified one

people.splice(0, 1)    // can be used to remove elements only
console.log(people);   
people.splice(0, 0, "jikh", "jack") // can be used to add elements only
console.log(people);

people.splice(-1, 1) // negative index represents starting from the last index
console.log(people);

const slicedPeople = people.slice(0,3) // arr.slice([start], [end]) - It returns a new array copying to it all items from index start to end (not including end). Both start and end can be negative, in that case position from array end is assumed.
console.log(slicedPeople);  // It’s similar to a string method str.slice, but instead of substrings it makes subarrays.
const nonSlicedPeople = people.slice();
console.log(nonSlicedPeople); // We can also call it without arguments: arr.slice() creates a copy of arr. That’s often used to obtain a copy for further transformations that should not affect the original array.

// Combining Arrays

const guys =  ["adam", "arson", "argon", "arjun", "adarsh", 'aman', "alexander"]
const combinedHomies = people.concat(guys); // arr.concat(arg1, arg2...)  It accepts any number of arguments – either arrays or values. The result is a new array containing items from arr, then arg1, arg2 etc.
console.log(combinedHomies);    // If an argument argN is an array, then all its elements are copied. Otherwise, the argument itself is copied.

const valueCombine = people.concat(["cam", "chris"], 5, 6) //creates a new array from people and ["cam", "chris"] then adds the values 5 and 6 to the array
console.log(valueCombine);

let obj = {
    name1: "sam",
    name2: "skakespear",
}

const objectCombine = people.concat(obj); //Normally, it only copies elements from arrays. Other objects, even if they look like arrays, are added as a whole
console.log(objectCombine);

let objConcateble = {
    0: "dylan",
    1: "drake",
    [Symbol.isConcatSpreadable]: true,
    length: 2,
}

const objConcatebleCombine = people.concat(objConcateble); // …But if an array-like object has a special Symbol.isConcatSpreadable property, then it’s treated as an array by concat: its elements are added instead:
console.log(objConcatebleCombine);

// To Run a Function On Every Element Of An Array

const indexCall = people.forEach((name, index) => {     // arr.forEach(function(item, index, array) {
                                                             // ... do something with item
                                                        // });
    console.log(`${name} has the index ${index}`)   // The arr.forEach method allows to run a function for every element of the array.
}); // The result of the function (if it returns any) is thrown away and ignored.

// Searching In An Array

const indexPosition = people.indexOf("josh"); // arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found
const impossibleIndexPosition = people.indexOf("luffy") // if value is not in array, returns -1 
console.log(indexPosition);               //Please note that indexOf uses the strict equality === for comparison. So, if we look for false,
console.log(impossibleIndexPosition);    // it finds exactly false and not the zero.

const includeValue = people.includes("jacob"); //arr.includes(item, from) – looks for item starting from index from, returns true if found.
console.log(includeValue);

const repeatitiveArray = ["bread", "jam", "bread", "butter", "bread", "toast"];
const lastIndex = repeatitiveArray.lastIndexOf("bread");    //  The method arr.lastIndexOf is the same as indexOf, but looks for from right to left.
console.log(lastIndex); // returns -1 if value not in array

const NaNArray = [NaN]; // A minor, but noteworthy feature of includes is that it correctly handles NaN, unlike indexOf
console.log(NaNArray.indexOf(NaN)); // -1 (wrong, should be 0)
console.log(NaNArray.includes(NaN)); // true (correct)
// That’s because includes was added to JavaScript much later and uses the more up to date comparison algorithm internally.

// Finding Value/Index In An Array

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "John"}
  ];
  

let user = users.find(item => item.id == 1);                  // let result = arr.find(function(item, index, array) {
                                                                  // if true is returned, item is returned and iteration is stopped
                                                                  // for falsy scenario returns undefined
                                                              // });

                                                              // The function is called for elements of the array, one after another:
                                                              // item is the element.
                                                              // index is its index.
                                                              // array is the array itself.
                                                              // If it returns true, the search is stopped, the item is returned. 
                                                              // If nothing found, undefined is returned.
console.log(user.name); // John

console.log(users.findIndex(user => user.name == 'John')); // The arr.findIndex method has the same syntax, but returns the index where the element was found instead of the element itself. The value of -1 is returned if nothing is found.

console.log(users.findLastIndex(user => user.name == 'John')); // The arr.findLastIndex method is like findIndex, but searches from right to left, similar to lastIndexOf.

// Extracting/Filtering Multiple Values Of An Array According To Condition

let someUsers = users.filter(item => item.id < 3);  // let results = arr.filter(function(item, index, array) {
                                                         // if true item is pushed to results and the iteration continues
                                                         // returns empty array if nothing found
                                                    // });

console.log(someUsers); // The syntax is similar to find, but filter returns an array of all matching elements

// Transforming/Reordering An Array

const lengths = people.map((item) => item.length);  // The arr.map method is one of the most useful and often used.
                                                    //  It calls the function for each element of the array and returns the array of results.
                                                    // let result = arr.map(function(item, index, array) {
                                                          // returns the new value instead of item
                                                    // });
console.log(lengths);

const mapIndexes = combinedHomies.map((value) => value.toLocaleUpperCase());
console.log(mapIndexes);

const sortArray = [1, 2, 15];   
sortArray.sort();   // The call to arr.sort() sorts the array in place, changing its element order. It also returns the sorted array, but the returned value is usually ignored, as arr itself is modified.
                    // One of the only methods to return the original array and not a new modified one
console.log(sortArray); // The items are sorted as strings by default.
// Literally, all elements are converted to strings for comparisons. For strings, lexicographic ordering is applied and indeed "2" > "15".

// khud ke conditions se compare krane ke liye function dena padega

function compareNumeric(a, b) {
    if(a > b) return 1
    if (a == b) return 0
    if (a < b) return -1
}

const numericArray = [1, 5, 12, 36, 24, ];
numericArray.sort(compareNumeric);
console.log(numericArray);

[1, -2, 15, 2, 0, 8].sort(function(a, b) {      // By the way, if we ever want to know which elements are compared – nothing prevents from alerting them
    console.log( a + " <> " + b );  // The algorithm may compare an element with multiple others in the process, but it tries to make as few comparisons as possible.
    return a - b;
});

let arr = [ 1, 30, 2, 15 ];

arr.sort(function(a, b) { return a - b; }); // Actually, a comparison function is only required to return a positive number to say “greater” and a negative number to say “less”.

console.log(arr); // 1, 2, 15

// arr.sort( (a, b) => a - b ); using arrow function

let countries = ['Österreich', 'Andorra', 'Vietnam'];

console.log(countries.sort((a,b) => a > b ? 1 : -1));   // Remember strings comparison algorithm? It compares letters by their codes by default.
console.log(countries.sort((a, b) => a.localeCompare(b))); // For many alphabets, it’s better to use str.localeCompare method to correctly sort letters, such as Ö.
//WHY?

const letters = "AOVÖ"
console.log(letters.charCodeAt(0));
console.log(letters.charCodeAt(1));
console.log(letters.charCodeAt(2));
console.log(letters.charCodeAt(3));

// Reversing the String

combinedHomies.reverse();   // One of the only methods to return the original array and not a new modified one
console.log(combinedHomies);

// Spliting values according to a specific "delimiter" and converting into array

//Here’s the situation from real life. We are writing a messaging app, and the person enters the comma-delimited list of receivers: Bilbo, Gandalf, Nazgul.
// But for us an array of names would be much more comfortable than a single string. How to get it?

let names = 'Bilbo, Gandalf, Nazgul';
let splitArr = names.split(', ');   // The str.split(delim) method does exactly that. It splits the string into an array by the given delimiter delim.
console.log(splitArr);

let limitedSplit = 'Bilbo, Gandalf, Nazgul, Saruman'.split(",", 2); // The split method has an optional second numeric argument – a limit on the array length. If it is provided, then the extra elements are ignored. In practice it is rarely used though:
console.log(limitedSplit);

let str = "tester";
console.log(str.split("")); // The call to split(s) with an empty s would split the string into an array of letters:

// Joining values according to a specific "glue" and coverting into string (opposite of str.split(delim))

const joinPeople = people.join("; "); // The call arr.join(glue) does the reverse to split. It creates a string of arr items joined by glue between them.
console.log(joinPeople);

// Reducing all the values of an array to one value. 
// When we need to iterate over an array – we can use forEach, for or for..of.
// When we need to iterate and return the data for each element – we can use map.
// The methods arr.reduce and arr.reduceRight also belong to that breed, but are a little bit more intricate. 
// They are used to calculate a single value based on the array.

// let value = arr.reduce(function(accumulator, item, index, array) {
    // ...
//  }, [initial]);

// The function is applied to all array elements one after another and “carries on” its result to the next call.

// accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
// item – is the current array item.
// index – is its position.
// array – is the array.

// As function is applied, the result of the previous function call is passed to the next one as the first argument.
// So, the first argument is essentially the accumulator that stores the combined result of all previous executions. And at the end it becomes the result of reduce.

let nums = [1, 2, 3, 4, 5];

let result = nums.reduce((sum, current) => sum + current, 0);
console.log(result); // 15

// On the first run, sum is the initial value (the last argument of reduce), equals 0, and current is the first array element, equals 1. So the function result is 1.
// On the second run, sum = 1, we add the second array element (2) to it and return.
// On the 3rd run, sum = 3 and we add one more element to it, and so on…


// removed initial value from reduce (no 0)
let resultWithoutInitial = nums.reduce((sum, current) => sum + current);
console.log(resultWithoutInitial); // 15
// WHY?

// The result is the same. That’s because if there’s no initial, then reduce takes the first element of the array as the initial value and starts the iteration from the 2nd element.
// But such use requires an extreme care. If the array is empty, then reduce call without initial value gives an error.

let emptyArr = [];

// Error: Reduce of empty array with no initial value
// if the initial value existed, reduce would return it for the empty arr.
// emptyArr.reduce((sum, current) => sum + current);

// The method arr.reduceRight does the same, but goes from right to left.

let resultStartFromRight = nums.reduceRight((sum, current) => sum + current, 0)
console.log(resultStartFromRight);

// How to find if its an array or not

console.log(Array.isArray(people));
console.log(Array.isArray({}));

// Use of "thisArg" Argument (rarely used)
// Almost all array methods that call functions – like find, filter, map, with a notable exception of sort, accept an optional additional parameter thisArg.

// arr.find(func, thisArg);
// arr.filter(func, thisArg);
// arr.map(func, thisArg);
// ...
// thisArg is the optional last argument

// The value of thisArg parameter becomes this for func.

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
      return user.age >= this.minAge && user.age < this.maxAge;
    }
};
  
let candidates = [
 {age: 16},
 {age: 20},
 {age: 23},
 {age: 30}
];
  
// find users, for who army.canJoin returns true
let soldiers = candidates.filter(army.canJoin, army);
  
console.log(soldiers.length); // 2
console.log(soldiers[0].age); // 20
console.log(soldiers[1].age); // 23

// If in the example above we used users.filter(army.canJoin), then army.canJoin would be called as a standalone function, with this=undefined, thus leading to an instant error.
// A call to users.filter(army.canJoin, army) can be replaced with users.filter(user => army.canJoin(user)), that does the same. The latter is used more often, as it’s a bit easier to understand for most people.

// Finding The First Truthy or Falsy Statement

// These methods behave sort of like || and && operators: 
// if fn returns a truthy value, arr.some() immediately returns true and stops iterating over the rest of items; 
// if fn returns a falsy value, arr.every() immediately returns false and stops iterating over the rest of items as well.

function arraysEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}
  
console.log(arraysEqual([1, 2], [1, 2])); // true

// THERE ARE SOME OTHER METHODS, BUT ARE VERY RARELY USED SO THEY SEARCH FOR THEM WHEN NECESSARY
// arr.fill(value, start, end) – fills the array with repeating value from index start to end.

// arr.copyWithin(target, start, end) – copies its elements from position start till position end into itself, at position target (overwrites existing).

// arr.flat(depth)/arr.flatMap(fn) create a new flat array from a multidimensional array.


function camelize(str) {
    return str
      .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

console.log(camelize("background-color"));