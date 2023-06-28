const express = require("express")
const app = express()
const cors =require("cors")
app.use(express.json())

app.use(cors({
    origin:"*"
}))

const userRouter = require("./router.js")

app.use("/user", userRouter)

app.listen(4000,()=>{
    console.log("server is running on port 4000")
})