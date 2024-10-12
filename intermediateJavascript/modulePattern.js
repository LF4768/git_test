const testFunction = (function() {
    const sayHello = () => console.log("Hello");
    const name = (name) => console.log(`Hello ${name}`);
    return{sayHello, name}
})();

testFunction.sayHello()
testFunction.name("Jikh")

const Formatter = (function() {
    let timesRun = 0;
  
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
    const setTimesRun = () => { 
      log("Setting times run");
      ++timesRun;
}
  
  const makeUppercase = (text) => {
      log("Making uppercase");
      setTimesRun();
      return text.toUpperCase();
};
  
    return {
      makeUppercase,
      timesRun,
}
})();

console.log(Formatter.makeUppercase("ajsdhfl"))
console.log(Formatter.timesRun)
Formatter.timesRun = 5
console.log(Formatter.timesRun)

const Formater = (function() {
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
    const timesRun = [];
  
    const makeUppercase = (text) => {
      log("Making uppercase");
      timesRun.push(null);
      return text.toUpperCase();
    };
  
    return {
      makeUppercase,
      timesRun,
    }
})();
  
console.log(Formater.makeUppercase("tomek"));
console.log(Formater.makeUppercase("tomek"));
console.log(Formater.makeUppercase("tomek"));
console.log(Formater.timesRun.length);

