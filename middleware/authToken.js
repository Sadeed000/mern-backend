const JWT = require('jsonwebtoken')


async function authToken(req,res,next){
    try {

        const token = req?.cookies?.token || req?.headers?.authorization

        console.log("token",token)
        if(!token){
            return res.status(200).json({
                message : "Please Login...!",
                error : true,
                success : false
            })
        }


        const decode = JWT.verify(
          req?.headers?.authorization || token,
          process.env.TOKEN_SECRET_KEY
        );
        req.user = decode;
        next();
      console.log(decode)
      }catch(err){
        res.status(400).json({
            message : err.message || err,
            data : [],
            error : true,
            success : false
        })
    }
}


module.exports = authToken