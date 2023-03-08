
const mongoose = require("mongoose");

const PlacedSt = new mongoose.Schema({
    name : String,
    description : String,
})

module.exports = PlacedSt;