const express = require('express')
const connect = require("./configs/db")

const productController=require("./controller/product.controller")

const app = express();
app.use(express.json());
app.use("/product", productController);



app.listen(2345, async () => {
    await connect();
    console.log("Listening on port 2345");
});