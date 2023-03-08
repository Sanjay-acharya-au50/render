
const mongoose = require("mongoose");

const placementPartners = new mongoose.Schema({
    company : String,
    location : String,
    description : String,
    add : String,
})

module.exports = placementPartners;