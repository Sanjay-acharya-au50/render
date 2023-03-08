
const mongoose = require("mongoose");

const programHeading = new mongoose.Schema({
    title : String,
    test : String,
})

module.exports = programHeading;