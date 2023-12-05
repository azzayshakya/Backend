const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


// d,nklsd
require('dotenv').config();

const app = express();
const port = 4000;
const mongoDB =require("./db")
mongoDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 



app.get('/', (req, res) => {
    res.send("hey ajay");
});

app.use('/api',require("./Routes/CreateUser"))

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname + "/index.html"));   
// });
// app.get("/api/v1/login", (req, res) => {
//     // res.sendFile(path.join(__dirname + "/index.html"));
//     res.json({
//        name:"akdsjfj",
//        email:"dkfha",
//        password:"khjsaifhidhu"
//     });
// });



// app.post('/api/v1/register', (req, res) => {
//     const username = req.body.name;
//     const useremail = req.body.email;
//     const userpassword = req.body.password;

   
//     res.json({
//         success: true,
//         name: username,
//         email: useremail,
//         password: userpassword,
//     });
// });

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something went wrong!');
// });

app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`);
});
