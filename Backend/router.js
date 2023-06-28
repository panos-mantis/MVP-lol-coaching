const router = require("express").Router()
const userController = require("./controllers")


router.post("/signup",userController.postOneUser)
router.post("/login",userController.findOneUser)



module.exports= router