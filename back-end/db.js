const mongoose = require("mongoose");

var  mongoURL = 'mongodb+srv://dbUser:dbUserPassword@cluster0.kg6ct.mongodb.net/DS_Assignment' ;

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

var db = mongoose.connection;

db.on('connected', () =>{
    console.log("Mongodb Connection success");
})

db.on('error ', () =>{
    console.log("Mongodb Connection failed");
})

module.exports = mongoose


