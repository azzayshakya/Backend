const mongoose = require('mongoose');


const ConnectDb = async () => {
    try {
       
        const conn = await mongoose.connect(process.env.DB_STRING);      
        console.log("Connected to MongoDB");
        }
        
        catch (error) {       
        console.log("Error:", error);
        console.log("Not connected to MongoDB");
    };
}
module.exports = ConnectDb;