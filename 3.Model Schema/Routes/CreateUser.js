const express = require('express')
const router = express.Router();
const User =require('../Models/User');
const { model } = require('mongoose');

router.post('/createuser' , async(req,res)=>{
    try {
        await User.create({
            name:"ajju is here",
            location:"dklajldjla",
            email:"ajaysdlfal",
            password:"ajlkdofjao"
        })
        res.json({success:true})
        
    } catch (error) {
        console.log("error in the Create User page in Routes page")
        console.log(error)
        res.json({success:false}) 
               
    }
})

module.exports= router;