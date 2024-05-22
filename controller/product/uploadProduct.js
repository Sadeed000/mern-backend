const uploadProductPermission = require("../../helpers/permission")
const productModel = require("../../models/productModel")

async function UploadProductController(req,res){
    const { productName ,brandName, category , productImage ,description ,price } = req.body

    try{
        if(!productName){
            throw new Error("please write product name")
        }
        if(!productImage){
            throw new Error("please upload a image")
        }
        // const sessionUserId = req.userId

        // if(!uploadProductPermission(sessionUserId)){
        //     throw new Error("Permission denied")
        // }
    
        const uploadProduct = new productModel(req.body)
        const saveProduct = await uploadProduct.save()
    //   console.log(saveProduct)
        res.status(201).json({
            uploadProduct,
            // productName:req.body.productName,
            // brandName:req.body.brandName,
            // category:req.body.category,
            // productImage:req.body.productImage,
            // description:req.body.description,    
            // price:req.body.price,
            message : "Product upload successfully",
            error : false,
            success : true,
            data : saveProduct
        })
    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = UploadProductController