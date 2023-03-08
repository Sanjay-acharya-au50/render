const express = require("express");

const app = express();

const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
// reference <->
// mongoose.connect("mongodb://localhost:27017/fullstack_project", (err)=>{
//     if(err){
//         console.log("mongodb connection failed");
//     }else{
//         console.log("mongodb connection successfull");
//     }
// })

const mongoSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
})


app.listen(3000, ()=>{
    console.log("db server : 3000");
})

module.exports = mongoSchema;
