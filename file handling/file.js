const fs = require('fs');
// fs is a package in js that helps to manage and handle I/O operations on files.
// Js doesnt allow file i/o operations directly so node.js made a package which can do the same.

// --------------------------------------------------------
fs.writeFileSync('./lang.txt','hey there how are u \n hi')  //this is  a synchronous fucntion .
//So this is used to create a file and add text to it, overrides the text in that file if the file already exist.

fs.writeFile('./lang.txt','hey there how are u \n hi this is async',(err)=>{})// this is a Asychronous function.
// This does the same as of the above function but expects a callback(), which catches any error if occurs.

// --------------------------------------------------------

const result =fs.readFileSync('./lang.txt','utf-8')// this is a sycnhronous function 
console.log(result);
// this fucntion  takes the file name and the type of encoding as the arguments adn returns the value after reading the file.

fs.readFile('./lang.txt','utf-8',(err,result)=>{
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
})//this is a Asynchronous()
// this does the same as of the above but doesn't return anything but expects a callback() which takes 1st arg as error and 2nd as 
// the result of the function.

// ---------------------------------------------------------

fs.appendFileSync('./lang.txt','\n this is  a appended data')// this is a sycnhronous function 
//this appends the given string data to the mentioned file.

fs.appendFile('./lang.txt','\n this is  a appended data in async()',(err)=>{})//this is a Asynchronous()
// same as the above , takes one more argument which is a callback().

// ------------------------------------------------------


// Now there are other fucntions like 
fs.mkdir('new dir',(err)=>{})
fs.mkdirSync('new dir')
// both this functions helps to make a new directory
fs.copyFile('./lang.txt','./copy.txt')
fs.copyFileSync()
// both this functions helps to copy a file
