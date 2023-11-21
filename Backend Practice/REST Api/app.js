const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express();

// mongoose.connect("mongodb://localhost:27017/Sample",{useNewUrlParser:true,useUnifiedTopology:true}).then (()=>{
//     console.log("connected to mongodb")
// }).catch((err)=>{
//     console.log(err)
//     // console.log("ajay")
// })

z
try{
    const conn= mongoose.connect("mongodb+srv://ajayshakya:ajayajay@cluster0.3rgz1au.mongodb.net/?retryWrites=true&w=majority",
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




app.listen(4500,()=>{
    console.log("server is running")
})
