// Node.js is not a language or framework it is runtime enviornment built on top of the v8 engine.
//The main use of Node.js is to make server and manage requests.

// In this we follow the priciples that are same to as of modular programming  ie, we divide the whole program into individual modules to 
// enhance readablity and understanding of code.
// Since we split the code into different modules we want to access them in each files 
// we can do the above using export and require built in methods.

const person = require('./person');//require function imports the mentioned package or modules into a variable.

console.log(person.name);
