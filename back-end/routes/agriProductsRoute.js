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
            name : agriProduct.name,
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

router.post("/getagriproductbyid" , async(req , res) =>{
    const agriproductid = req.body.agriproductid 
    try {
        const agriProduct = await AgriProduct.findOne({_id : agriproductid})
        res.send(agriProduct)
    } catch (error) {
        return res.status(400).json({message : 'Something went wrong' +error})
    }
})


router.post("/editagriproduct" , async (req , res) =>{
    const editedagriProduct = req.body.editedagriProduct

    try {
        const agriProduct = await  AgriProduct.findOne({_id : editedagriProduct._id})

        agriProduct.name =editedagriProduct.name,
        agriProduct.image =editedagriProduct.image,
        agriProduct.prices =editedagriProduct.prices,
        agriProduct.category =editedagriProduct.category,
        agriProduct.description =editedagriProduct.description

        await agriProduct.save()

        res.send('Agri Product Details Edited Successfully')
    } catch (error) {
        return res.status(400).json({message :'Something went wrong'+ error })
    }
})

router.post("/deleteagriproduct" , async (req , res) =>{
    const agriproductid = req.body.agriproductid

    try {
        await AgriProduct.findOneAndDelete({_id : agriproductid})
        res.send('Agri Product Deleted Successfully')
    } catch (error) {
        return res.status(400).json({message :'Something went wrong'+ error })
    }
})

module.exports = router ;