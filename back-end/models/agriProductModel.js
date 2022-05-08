const mongoose = require("mongoose");

const agriProductSchema = mongoose.Schema ({

    name :{type : String , require },
    varients : [] ,
    prices : [] ,
    category : {type : String , require } ,
    image : {type : String , require } ,
    description : {type : String , require } 

} , {
    timestamps : true ,
})

const agriProductModel = mongoose.model('agriproducts' , agriProductSchema) 

module.exports = agriProductModel