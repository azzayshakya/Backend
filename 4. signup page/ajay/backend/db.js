const mongoose = require('mongoose');
const ConnectDb=async ()=>{
    try{
        const conn=await mongoose.connect(process.env.DB_STRING)


        // const conn = await mongoose.connect("mongodb://127.0.0.1:27017/RestApi");
        // for local system
       console.log("connented")
    }



    catch(error){
        console.log(error)
        console.log(" Your mongoDB is not connected")
    }
}

module.exports=ConnectDb;
