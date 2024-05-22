const userModel = require("../../models/userModel")

async function userDetailsController(req,res){
    try{
        console.log("userId",req.user)
        const user = await userModel.findById(req.user)

        res.status(200).json({
            data : user,
            error : false,
            success : true,
            message : "User details"
        })

        console.log("user",user)

    }catch(err){

        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })

    }
}

module.exports = userDetailsController