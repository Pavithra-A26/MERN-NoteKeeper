const express = require('express');
const Note = require('../Models/Note.js');
const jwt = require('jsonwebtoken');
const router = express.Router();

const auth = (req,res,next) => {
    const token = req.header('Authorization');
    if(!token){
        return res.status(401).json({message: "Access denied"});
    }
    try{
        const verified = jwt.verify(token,process.env.SECRET);
        req.user=verified;
        next();
    }
    catch(error){
        res.status(500).json({
            message:"error in registering user",error
        })
    }
};

//get all notes
router.get('/',auth,async(req,res) => {
    try{
        const notes = await Note.find({user: req.user.id});
        res.json(notes);
    }
    catch(error){
        res.status(500).json({
            message:"error in registering user",error
        })
    }
});

//create notes
router.post('/',auth,async(req,res) => {
    const {title,content,category} = req.body;
    try{
        const notes = new Note({title,content,category,user:req.user.id});
        await notes.save();
        res.status(200).json(notes);
    }
    catch(error){
        res.status(500).json({
            message:"error in registering user",error
        })
    }
});

//update notes
router.put('/:id',auth,async(req,res) => {
    const {title,content,category} = req.body;
    try{
        const updatenote = new Note.findByIdAndUpdate(req.params.id,{title,content,category},{new:true});
        res.json(updatenote)
    }
    catch(error){
        res.status(500).json({
            message:"error in registering user",error
        })
    }
});

//delete notes
router.delete('/:id',auth,async(req,res) => {
    try{
        await Note.findByIdAndDelete(req.params.id);
        res.json({message:"Notes deleted"});
    }
    catch(error){
        res.status(500).json({
            message:"error in registering user",error
        })
    }
})


module.exports = router;