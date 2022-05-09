const { response } = require('express');
const express = require('express')
const  { v4 : uuidv4 } = require ('uuid');
const router = express.Router();
const Order = require('../models/orderModel.js')
const stripe = require ("stripe")("sk_test_51KxR3MIC2E0K0mYH7XuWbVGrOFTa07dhEUzM3wcc6mVl9uq42snqgtbICMcvUCgGETikIhRImdATij24EY8FIdV000DtK1vRg7")

router.post("/placeorder" , async(req , res) =>{ 
    const {token , subtotal , currentUser , cartItems  } = req.body

    try {
        const customer = await stripe.customers.create({
            email : token.email,
            source : token.id
        })
        const payment = await stripe.charges.create({
            amount : subtotal * 100,
            currency : 'lkr',
            customer : customer.id,
            receipt_email : token.email
        } , {
            idempotencyKey : uuidv4()
        })

        if(payment){
            res.send('Payment Done')
        } else{
            res.send('Payment Failed')
        }
    }catch (error) {
        return res.status(400).json({message: 'Something went wrong' + error });
    }
})

module.exports = router