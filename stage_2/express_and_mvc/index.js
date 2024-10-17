const express= require('express')
const path = require('path')
const members=require('./members')

const app = express();
const port=process.env.port||8000
// app.get('/',(req,res)=>{//this recieves a get request and gives necessary responses.
//     // res.send('<h1>HELLO WORLD</h1>')//this can send anything like file or message or json etc.
//     res.sendFile(path.join(__dirname,'index.html'))
// })
app.use(express.static(path.join(__dirname,'static')))// so this can be used for creating static webpages as it can handle mutliple 
// webpages without creating routes for every single one of them.

app.get('/api/members',(req,res)=>{// this route GET all members in the json format.
    res.json(members);
})

app.listen(port,()=>{console.log('server started',port);
})
// this is the basic example of using express.