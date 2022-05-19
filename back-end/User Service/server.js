const cors = require("cors");
const express = require("express");

const db = require('./db')
const app = express();

const port = process.env.PORT || 8002;

app.use(cors());
app.use(express.json());

app.get('/' , (req , res) =>{
    res.send("Server Working");
})

app.listen(port, () => `Server running on port  `);


const userRoute = require ('./routes/userRoute.js')

app.use('/api/users/' , userRoute);


