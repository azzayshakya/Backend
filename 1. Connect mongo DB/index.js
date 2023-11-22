const mongoose = require('mongoose');
const ConnectDb=async ()=>{
    try{
        const conn=await mongoose.connect("  type your string here",
        {useUnifiedTopology:true})


        // const conn = await mongoose.connect("mongodb://127.0.0.1:27017/RestApi");
        // for local system
       console.log("connented")
    }



    catch(error){
        console.log(error)
        console.log("not connected")
    }
}

module.exports=ConnectDb;



// in the main index file just call this function
// ConnectDb();
//npm install express mongoose