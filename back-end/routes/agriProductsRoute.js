const express = require('express')
const router = express.Router();
const AgriProduct = require('../models/agriProductModel')

// router.get("getallagriproducts" , async(req , res) => {
//     try {
//         const agriProducts = await AgriProduct.find({})
//         res.send(agriProducts)
//     } catch (error) {
//         return res.status(400).json({message:error});
//     }
// });

router.get("/getallagriproducts" , (req , res) =>{
    AgriProduct.find({} , (err , docs) => {
        if(err) {
            console.log(err);
        }
        else{
            res.send(docs)
        }
    })
})


module.exports = router ;