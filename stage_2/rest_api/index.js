const express = require('express')
const users = require('./MOCK_DATA.json')
const fs = require('fs')
const app= express();

//middlewares
app.use(express.urlencoded({extended:false}))// this is used to make understand express
// which type of data is comming.


//Routes
app.get('/api/users',(req,res)=>{
    return res.json(users)
})

app.get('/api/users/:id',(req,res)=>{
    const userId = req.params.id;
    users.filter((user)=>{
        if (user.id==userId){
            return res.json(user)
        }
    })
    return  res.json({msg:"user not found"});
})

app.route('/api/users/:id')
.get((req,res)=>{
    const userId = req.params.id;
    users.filter((user)=>{
        if (user.id==userId){
            return res.json(user)
        }
    })
    return  res.json({msg:"user not found"});
})
.put((req,res)=>{
    const editUser=req.body;
    console.log(editUser);
    users.forEach((user)=>{
        if (user.id==editUser.id) {
            user=editUser;
            fs.writeFile('./stage_2/rest_api/MOCK_DATA.json',JSON.stringify(users),()=>{
                return res.json({msg:`employee edited id:${user.id}`})
            })
        }
    })
    return res.json({msg:'user Not found'});
})
.delete((req,res)=>{
    const delid=req.params.id;
    let newusers =users.filter((user)=>{
        user.id!=delid
    })
    console.log('users',newusers);
    
    fs.writeFile('./stage_2/rest_api/MOCK_DATA.json',JSON.stringify(newusers),()=>{
        return res.json({msg:`employee deleted`})
    })
    return res.json({msg:'user Not found'});
})

app.post('/api/users',(req,res)=>{
    const newUser=req.body;
    newUser.id=users.length+1;
    users.push(newUser)
    fs.writeFile('./stage_2/rest_api/MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        return res.json({msg:`employee added id:${users.length}`})
    })
})

//hosted server
app.listen(8000,()=>{
    console.log('server started');
})