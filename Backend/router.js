const router = require("express").Router()
const userController = require("./controllers")


router.post("/signup",userController.postOneUser)
router.post("/signin",userController.findOneUser)



module.exports= router