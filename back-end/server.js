const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const AgriProduct = require('./models/agriProductModel.js')


require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({
//  extended: true
//}));

const agriProductsRoute = require ('./routes/agriProductsRoute.js')

app.use('/api/agriproducts/' , agriProductsRoute);

app.get("/" , (req , res) => {
    res.send("Server working " + PORT );
});



const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

const connction = mongoose.connection;
connction.once("open", () =>{
    console.log("Mongodb Connection success");
})
app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`);
})

// app.get("/getagriproducts" , (req , res) =>{
//     AgriProduct.find({} , (err , docs) => {
//         if(err) {
//             console.log(err);
//         }
//         else{
//             res.send(docs)
//         }
//     })
// })
