const express = require('express')
const router = express.Router();
const User =require('../model/User');
const { model } = require('mongoose');

router.post('/createuser' , async(req,res)=>{
    try {
        await User.create({

            // you can use this for the api check and after hitig the end point data will be saved in the collection
            // name:"ajju is here",
            // location:"dklajldjla",
            // email:"ajaysdlfal",
            // password:"ajlkdofjao"

            name:req.body.name,
            password:req.body.password,
            location:req.body.location,
            email:req.body.email
        })
        res.json(
            
            {success:true})
        
    } catch (error) {
        console.log("error in the Create User page in Routes page")
        console.log(error)
        res.json({success:false}) 
               
    }
})

module.exports= router;