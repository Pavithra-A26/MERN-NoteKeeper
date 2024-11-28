const express = require('express');
const  User = require('../Models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

//register
router.post('/register',async(req,res) => {
    try{
        const {name,password,email} = req.body;
        const hashedpw = await bcrypt.hash(password,10);
        const user = new User({name,email,password:hashedpw});
        await user.save();

        res.status(201).json({
            message:"user registration successfull"
        })
    }
    catch(error){
        res.status(500).json({
            message:"error in registering user",error
        })
    }
});

//login

router.post('/login',async(req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({message:"no user found"});
        }
        const match = await bcrypt.compare(password, user.password);
        if(!match){
            return res.status(400).json({message:"Invalid credentials"});
        }
         
        const token = jwt.sign({id : user._id},process.env.SECRET,{expiresIn:'1h'});
        res.json({token});

    }
    catch(error){
        res.status(500).json({
            message:"error in login user",error
        })
    }
});


module.exports = router;
