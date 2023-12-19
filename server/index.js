const express = require("express");

const app = express();

const mongoose = require("mongoose");

mongoose.set('strictQuery', true);
//define port
const PORT = 3002


//establish link to mongoDB Atlas Database

mongoose.connect("mongodb+srv://latashastvnsn:Ziamora12$@cluster0.zg9g9ek.mongodb.net/Hosptial").then(() => console.log("Connected To Database"))  

.then(()=>console.log("Backend Server Listening on PORT " + PORT))

.then(() =>{

    app.listen(PORT)

}).catch((err) => console.log(err));