const router = require("express").Router()
const userController = require("./UsersController.js")
const reviewController = require("./ReviewControllers")


router.post("/signup",userController.postOneUser)
router.post("/signin",userController.findOneUser)

router.post("/create", reviewController.postReview)
router.get("/reviews", reviewController.getAllReviews)



module.exports= router