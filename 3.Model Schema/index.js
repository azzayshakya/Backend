const express = require('express');
const ConnectDb = require('./db');
const { json } = require('body-parser');

const app = express();
const port = 4000;

ConnectDb();

app.get('/', (req, res) => {
    res.send("hi there")
});
app.use('/api',require('./Routes/CreateUser'))
app.use(json);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`);
});





// // app.get("/api/v1/login", (req, res) => {
// //     // res.sendFile(path.join(__dirname + "/index.html"));

// //     res.json({
// //        name:"akdsjfj",
// //        email:"dkfha",
// //        password:"khjsaifhidhu"
// //     });
// // });



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
