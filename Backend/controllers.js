const Users = require("./modules/modules.js")

let postOneUser = async(req,res)=>{
    let userToPost = {email : req.body.email, password:req.body.pass}
    const postedUser=await Users.create(userToPost)
    res.send({msg:"You signed up " , user:postedUser})
}



let findOneUser = async (req,res)=>{
    let userToFind = {email:req.body.email, password:req.body.password}
    const found = await Users.findOne({email:req.body.email, password:req.body.password})
    if(!found){
        req.send({msg:"User does not exist. Try signing up first "})
    }else{
        req.send({msg:"Success you log in !"})
    }
}


module.exports = {postOneUser,findOneUser}

