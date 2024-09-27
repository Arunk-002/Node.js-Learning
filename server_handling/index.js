const http = require('http');
const fs = require('fs')
// Http is the module  that helps create and manage a new server in Node.js


const Server = http.createServer((req,res)=>{ // createserver() helps create a new server , takes in 2 args request and resonse objects.
        // the callback() passed is a request handler which takes in two args req and res objects.
    console.log('new req recieved');
    res.end('hello from server'); // When a req is made it is ended with a response 'hello from server'.
    
})
Server.listen(8001,()=>{console.log(' Basic Server started !');// .listen() is used to host the server in a given port. Takes the 
    // portNo as the argument. We can also pass a callback() as another argument to handle whether the port has initiated or not.
})

// so this is the basic syntax of creating and listening it to a  port.

// ---------------------------------------------------------------------------


const myServer = http.createServer((req,res)=>{ 
    console.log(req.socket.remoteAddress); //so this is the req obj and has all the details about the request made and its properties
    // the above code gets the the ip addres of the request url.
    fs.appendFile('./server_handling/log.txt',`${Date.now()},${req.url} : new user logged \n`,(err,data)=>{
        //this creates a log file which keeps track of all the req that are made and time when they are made and the path on which 
        // they are made.
        switch (req.url) {// This switch case handles what to display under each paths.
            case '/':
                res.end('Home Page'); 
                break;
            case '/about':
                res.end('Hi Iam Arun'); 
                break;
            default:
                res.end('404'); 
                break;
        }
    })
    
})
myServer.listen(8000,()=>{console.log('Server started !');
})