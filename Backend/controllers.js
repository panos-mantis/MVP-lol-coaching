const {Users} = require("./modules/UsersModules.js")
const bcrypt = require('bcrypt');

let postOneUser = async(req,res)=>{
    let checkUser = await Users.findOne({email:req.body.email})
    if(!checkUser){
        bcrypt.genSalt(5, function(err, salt) {
            bcrypt.hash(req.body.password, salt , async(err, hash)=> {
                console.log(hash)
                let userToPost = new Users ({email : req.body.email , password:hash})
                const postedUser=await Users.create(userToPost)
                res.send({msg:"You signed up "})
            });
        });
    }else{
        res.send({msg:"This email is already in use"})
    }
    
}



let findOneUser = async (req,res)=>{
    /* let userToFind = {email:req.body.email, password:req.body.password} */
    const foundUser = await Users.findOne({email:req.body.email})
    if(!foundUser){
        res.send({msg:"User does not exist. Try signing up first "})
    }else{
        bcrypt.compare(req.body.password, foundUser.password , async(err, result) =>{
            if(result){
                res.send({msg:"Success you log in !" , user:foundUser})
            }else{
                res.send({msg:"Wrong password"})
            }
        });
        
    }
}


module.exports = {postOneUser,findOneUser}

