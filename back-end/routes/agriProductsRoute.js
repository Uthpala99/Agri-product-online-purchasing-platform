const express = require('express')
const router = express.Router();
const AgriProduct = require('../models/agriProductModel')


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

router.post('/addagriproduct' ,   async (req, res) => {

    const agriProduct = req.body.agriProduct

    try {
        const newAgriProduct = new AgriProduct ({
            pname : agriProduct.pname,
            image : agriProduct.image,
            prices : agriProduct.prices,
            category : agriProduct.category,
            description : agriProduct.description
        })
        await newAgriProduct.save()
        res.send('New Agri Product Added Successfully')
    } catch (error) {
        return res.status(400).json({message: 'Something went wrong' + error });
    }
    });

module.exports = router ;