const cors = require("cors");
const express = require("express");

const db = require('./db')
const app = express();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get('/' , (req , res) =>{
    res.send("Server Working");
})

app.listen(port, () => `Server running on port  `);

const agriProductsRoute = require ('./routes/agriProductsRoute.js')
const userRoute = require ('./routes/userRoute.js')
const ordersRoute = require('./routes/ordersRoute.js')

app.use('/api/agriproducts/' , agriProductsRoute);
app.use('/api/users/' , userRoute);
app.use('/api/orders/' , ordersRoute)

