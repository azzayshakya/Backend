const mongoose = require('mongoose');


const ConnectDb = async () => {
    try {
       
        const conn = await mongoose.connect("mongodb+srv://ajayshakya:ajayajay@cluster0.3rgz1au.mongodb.net/ModelSchema?retryWrites=true&w=majority");      
        console.log("Connected to MongoDB");
        }
        
        catch (error) {       
        console.log("Error:", error);
        console.log("Not connected to MongoDB");
    };
}
module.exports = ConnectDb;