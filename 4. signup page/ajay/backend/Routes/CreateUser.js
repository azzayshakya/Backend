const express = require('express')
const router = express.Router();
const User =require('../model/User');
const { body, validationResult } = require('express-validator');
const { model } = require('mongoose');

router.post("/creatuser", [
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', 'Incorrect passoword').isLength({ min: 5 })] ,
  
    
    async (req, res) => {

    try {
        await User.create({
            name:req.body.name,
            password:req.body.password,
            location:req.body.location,
            email:req.body.email
        })
        res.json({success:true})
        
    } catch (error) {
        console.log("error in the Create User page in Routes page")
        console.log(error)
        res.json({success:false}) 
               
    }
})

module.exports= router;