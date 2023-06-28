const mongoose = require("mongoose")
const db = require("./connection")
const userSchema = new mongoose.Schema({email : String, password: String })


const Users = mongoose.model("Users", userSchema)

module.exports = Users
