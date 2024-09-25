const person={
    name:'arun',
    age:33
}
//exports method is used to export the modules neccesary functions.

module.exports=person;//this is used to export a single function.

// module.exports={
//     fun1,
//     fun2,
//     fun3,
// }
// so this is a way to export multiple fucntions as a object. This can be accesed using the require function.
 
exports.add=(a,b) => a+b; // This is also a way to export fucntions. This will be exported as Anonymous fucntions.
