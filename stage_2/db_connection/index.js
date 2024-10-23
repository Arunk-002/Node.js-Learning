const express= require('express')
const mongose= require('mongoose')

const app=express();

//body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended:false})) 


//connection
mongose.connect('mongodb://localhost:27017/users_db_try')
.then(()=>{
    console.log('mongo connected');
}).catch((err)=>{
    console.log(`error,${err}`);
})

app.get('/',(req,res)=>{
    res.send('Home')
})
//Schema 
const userSchema= new mongose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})

app.post('/',async (req,res)=>{
    const newMember={
        name:req.body.name,
        email:req.body.email
    }
    console.log(newMember);
    
    if (!newMember) {
        return res.status(400).json({msg:'please include name and email'})
    }
    const ress = await User.create({
        name:newMember.name,
        email:newMember.email
    })
    console.log('user',ress);
    return res.json({msg:'sucess'})
})
//modal
const User= mongose.model('User',userSchema)

app.listen(8000,()=>{console.log('server started');
})