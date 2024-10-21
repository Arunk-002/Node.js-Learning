const express= require('express')
const router = express.Router()
const members=require('../../Members')
// this route gets the specified member
router.get('/:name',(req,res)=>{
    let member=members.filter((element)=>{
        return element.firstName==req.params.name
    })
    console.log(member);
    if(member.length>0){
        res.json(member)
    }else{
        res.status(400).json({msg:`${req.params.name} does not exists`});
    }
})

router.get('/',(req,res)=>{// this route GET all members in the json format.
    res.json(members);
})

// create a member
router.post('/',(req,res)=>{
    const newMember={
        name:req.body.name,
        email:req.body.email
    }
    if (!newMember.name) {
        return res.status(400).json({msg:'please include name'})
    }
    members.push(newMember)
    res.send(members)
})

module.exports = router;
