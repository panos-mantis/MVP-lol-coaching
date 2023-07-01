const mongoose = require("mongoose")
const db = require("./connection")

const reviewSchema = new mongoose.Schema({email : String, number:Number, text:String })

const Reviews = mongoose.model("Reviews", reviewSchema)

module.exports = Reviews