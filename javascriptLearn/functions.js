function jikh() {  //this is known as  a custom function
    console.log("jikh is better");
};

jikh();

const truth = "Ikh is better than jikh"
const correction = truth.replace("Ikh", "Wikh") //the values given to function in parenthesis are called parameters or arguments or attributes
console.log(correction);

function hello(name = "chris") { //provided the option to take optional parameters and change value in parenthesis if necessary
    console.log(`Hello ${name}!`);
}

hello(); //gives back chris by default
hello("Ari"); //gives back Ari
