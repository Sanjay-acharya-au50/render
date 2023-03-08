
const express = require("express");

const app = express();

const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const NewRegSt = new mongoose.Schema({
    email : String,
    phone : String,
    query : String,
})



// app.listen(5005, ()=>{
//     console.log("db server : 5005");
// })
module.exports = NewRegSt;