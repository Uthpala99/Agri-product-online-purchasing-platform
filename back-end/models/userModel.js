const mongoose = require("mongoose");

const userSchema = mongoose.Schema ({

    name :{type : String , require },
    email : {type : String , require } ,
    phone : {type : String , require } ,
    password : {type : String , require } ,
    isDelivaryAdmin : {type :Boolean , require , default:false},
    isAdmin : {type :Boolean , require , default:false}

} , {
    timestamps : true ,
})

module.exports = mongoose.model('user' , userSchema) 

 