const express= require('express')
const path = require('path')
const exprshbs= require('express-handlebars')
const logger= require('./middleware/logger')

const app = express();
const port=process.env.port||8000
// Intitialzed an middleware
app.use(logger)

app.engine('handlebars', exprshbs.engine()); 
app.set('view engine', 'handlebars');
//body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended:false})) 

//Home page route
app.get('/',(req,res)=>{
    res.render('home')
})

app.use('/api/members',require('./routes/api/members'))
// app.get('/',(req,res)=>{//this recieves a get request and gives necessary responses.
//     // res.send('<h1>HELLO WORLD</h1>')//this can send anything like file or message or json etc.
//     res.sendFile(path.join(__dirname,'index.html'))
// })
app.use(express.static(path.join(__dirname,'static')))// so this can be used for creating static webpages as it can handle mutliple 
// webpages without creating routes for every single one of them.


app.listen(port,()=>{console.log('server started',port);
})
// this is the basic example of using express.