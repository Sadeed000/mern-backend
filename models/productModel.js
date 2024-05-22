const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productName : {
        type: String,
        required: true,
      },

    
    brandName : {
        type: String,
        required: true,
      },
    category : {
        type: String,
        required: true,
      },
    productImage : {
      type: Array, // Define as an array
      items: {
          type: String // Each item in the array should be a string
      },
  },
    description : {
        type: String,
        required: true,
      },
    price : {
        type: Number,
        required: true,
      },
    sellingPrice : {
        type: Number,
        required: true,
      },
},{
    timestamps : true
})


const productModel = mongoose.model("product",productSchema)

module.exports = productModel