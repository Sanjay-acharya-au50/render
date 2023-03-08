const express = require("express");

const app = express();

    app.get("/log",(req,res)=>{
        res.send("hello render")
    })

app.listen(2000, ()=>{
    console.log("server running");
})