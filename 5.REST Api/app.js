const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv=require('dotenv')

dotenv.config({})

const app = express();

app.get('/', (req, res) => {
   res.send("hey it's me ajay shakya")
    
});console.log(process.env.db_string)

try{
    const conn= mongoose.connect(process.env.db_string
        
   )
    // console.log(conn)
console.log("connented to mongodb")

}
catch(error){
    console.log(error)
    console.log("not connected to mongodb" )
}


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())


// Schema
const productSchema = new mongoose.Schema({
    name:String,
    description:String,
    price:Number
})

//model

const Product = new mongoose.model("Product",productSchema)


//create product
app.post("/api/v1/product/new",async(req,res)=>{
    const product =await Product.create(req.body);

    res.status(200).json({
        success:true,
        product
    })
})

app.get("/api/v1/product/new",async(req,res)=>{
    try {
    const product = await Product.create(req.body);
    res.send("ajju is heres")

    res.status(200).json({
        success: true,
        // product
    });
} catch (error) {
    console.log(error);
    res.status(500).json({
        success: false,
        error: "Internal Server Error"
    });
}

})




//thunderclient work

// {
//     "name":"azzay ",
//      "description":"he is a brilleint coder",
//      "price":99
//  }




app.listen(4500,()=>{
    console.log("server is running")
})
