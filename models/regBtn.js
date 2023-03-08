
const mongoose = require("mongoose");

const RegBtn = new mongoose.Schema({
    title : String,
    button : String,
})

module.exports = RegBtn;