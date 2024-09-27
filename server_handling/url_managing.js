const http = require('http');
const fs = require('fs');
// const url = require('url')

const myServer = http.createServer((req,res)=>{ 
    console.log(req.socket.remoteAddress); 
    fs.appendFile('./server_handling/log.txt',`${Date.now()},${req.url} :requsest made \n`,(err)=>{
        res.end('Home')
    })
    
})
myServer.listen(8000,()=>{console.log('Server started !');
})