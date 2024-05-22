const mongoose = require("mongoose")


async function connectDB(){
    try{
        await mongoose.connect(`mongodb+srv://sadeed:sadeed0786@cluster0.iujxt2e.mongodb.net/`)
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB