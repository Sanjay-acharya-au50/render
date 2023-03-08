
const mongoose = require("mongoose");

const Programs = new mongoose.Schema({
    icon : String,
    title : String,
    description : String,
    add : String,
})

module.exports = Programs;