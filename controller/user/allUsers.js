const userModel = require("../../models/userModel")

async function allUsers(req,res){
    try{
        const search = req.query.search || ""
        const role = req.query.role || ""
        const sort = req.query.sort || ""
        const page = req.query.page || 1
        const ITEM_PER_PAGE = 6;

  console.log(sort)

  console.log(sort)
  console.log(sort)
  const query = {
            name: { $regex: search, $options: "i" }
        }
        console.log("userid all Users",req.userId)


        if (role !== "All") {
            query.role = role
        }

        const count = await userModel.countDocuments(query);


        const skip = (page - 1) * ITEM_PER_PAGE  // 1 * 4 = 4
        const allUsers = await userModel.find(query)
        .sort({ createdAt: sort == "new" ? -1 : 1 })
        .limit(ITEM_PER_PAGE)
        .skip(skip);

        const pageCount = Math.ceil(count/ITEM_PER_PAGE);  // 8 /4 = 2

        
        res.json({
            Pagination:{
                count,pageCount
            },
            message : "All User ",
            data : allUsers,
            success : true,
            error : false
        })
    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = allUsers
