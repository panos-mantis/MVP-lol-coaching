const {Reviews} = require("./modules/ReviewModules.js")
const {Users} = require("./modules/UsersModules.js")

const jwt = require('jsonwebtoken');

const postReview = async(req,res)=>{
    if(!req.body.token){
        res.send({msg:"You are not logged in"})
        return
    }
    const payload= jwt.verify(req.body.token, "Than0s was right")
    const findUser= await Users.findOne({_id : payload.id})
    /* console.log(findUser) */

    if(!findUser){
        res.send({msg:"User doesn't exist"})
       return
    }
    const toPost= new Reviews ({email:req.body.email, number:req.body.number, text:req.body.text} )
    const toReturn = await Reviews.create(toPost)
    res.send({msg:"Review uploaded successfully"})
}

const getAllReviews = async(req,res)=>{
    /* console.log(req.body.token)
    if(!req.body.token){
        res.send({msg:"You are not logged in"})
        return
    }
    const payload= jwt.verify(req.body.token, "Than0s was right")
    const findUser= await Users.findOne({_id : payload.id})
    /* console.log(findUser) */
    /* if(!findUser){
        res.send({msg:"User doesn't exist"})
       return
    } */ 
    const allReviews= await Reviews.find()
    console.log(allReviews)
    /* const toReturn = await Reviews.create(toPost) */
    res.send({msg:"You got all the reviews", reviews:allReviews})
}

module.exports = {postReview , getAllReviews}