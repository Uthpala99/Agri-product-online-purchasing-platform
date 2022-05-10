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
            const newOrder = new Order ({
                name : currentUser.name ,
                email : currentUser.email , 
                userid : currentUser._id ,
                orderItems : cartItems ,
                orderAmount : subtotal ,
                shippingAddress : {
                    street : token.card.address_line1,
                    city : token.card.address_city ,
                    country : token.card.address_country,
                    pincode : token.card.address_zip
                },
                trasactionId : payment.source.id,
            })

            newOrder.save()
            res.send('Order placed successfully ')
        } else{
            res.send('Payment Failed')
        }
    }catch (error) {
        return res.status(400).json({message: 'Something went wrong' + error });
    }
})

router.post("/getuserorders" , async (req , res) => {
    const {userid} = req.body

    try {
        const orders = await Order.find({userid : userid}).sort({_id : -1})
        res.send(orders)
    } catch (error) {
        return res.status(400).json({message : 'Something went wrong' + error})
    }
})

module.exports = router