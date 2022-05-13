const mongoose = require("mongoose");

const agriProductSchema = mongoose.Schema ({

    name :{type : String , require },
    image : {type : String , require } ,
    prices : {type : String , require},
    category : {type : String , require } ,
    description : {type : String , require } 

} , {
    timestamps : true ,
})

module.exports = mongoose.model('agriproducts' , agriProductSchema) 