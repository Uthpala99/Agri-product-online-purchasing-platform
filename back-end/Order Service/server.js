const cors = require("cors");
const express = require("express");

const db = require('./db')
const app = express();

const port = process.env.PORT || 8001;

app.use(cors());
app.use(express.json());

app.get('/' , (req , res) =>{
    res.send("Server Working");
})

app.listen(port, () => `Server running on port  `);


const ordersRoute = require('./routes/ordersRoute.js')

app.use('/api/orders/' , ordersRoute)

