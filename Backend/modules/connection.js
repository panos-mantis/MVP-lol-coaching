const mongoose= require("mongoose")
const db = mongoose.connect("mongodb+srv://pngmantis:pngmantis@cluster0.otr3nqw.mongodb.net/mvpUsers?retryWrites=true&w=majority")

module.exports=db