const express = require('express')
const router = express.Router();
const User = require('../models/userModel')

router.post("/register" , (req , res) =>{ 
    const {name , email ,phone ,  password } = req.body
    const newUser = new User ({name  , email ,phone ,  password })

    try {
        newUser.save()
        res.send('User Registered Successfully !')
    }catch (error) {
        console.log(error);
        return res.status(400).json({message: error });
    }
})


router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try{
    const user = await User.find({email, password})
   
    if(user.length > 0){
        
        const currentUser = {
            name: user[0].name,
            email: user[0].email,
            isAdmin: user[0].isAdmin,
            phone: user[0].phone,
            _id: user[0]._id,
            isDelivaryAdmin: user[0].isDelivaryAdmin,
        }
        res.send(currentUser)
    }
    else{
        return res.status(400).json({message: "user login failed"})
    }
 }catch(e){
        return res.status(400).json({message: "something went wrong"});
    }
})

router.get("/getallusers", (req, res) => {
    User.find({}, (err, docs) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(docs)
        }
    })
})

router.post("/deleteuser", async (req, res) => {
    const userid = req.body.userid

    try {
        await User.findOneAndDelete({ _id: userid })
        res.send('User Deleted Successfully')
    } catch (error) {
        return res.status(400).json({ message: 'Something went wrong' + error })
    }
})


module.exports = router