require('dotenv').config()

const express = require("express");


const cors = require("cors");

const app = express();



app.use(express.json());

app.use(cors());

const port = process.env.PORT 

const products = require("./products")


app.get("/", (req, res) => res.send("Hello World!"));

app.get("/products",(req,res)=>{
    res.send(products)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
