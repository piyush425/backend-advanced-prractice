const express = require('express')

//const upload= require("..//middlewares/file-upload");
const { body, validationResult } = require('express-validator');
const product = require('../model/Product.model');
const Product = require('../model/Product.model');

const router = express.Router();


router.post("",
    body("first_name").isLength({ min: 3 })
       .withMessage("first name should be atleast 2 character "),
    body("last_name").isLength({ min: 3 })
        .withMessage("last name should be atleast 2 character "),
    body("email").notEmpty()
        .withMessage("email is required"),
    body("email").isEmail()
        .withMessage("email is not valid"),
    body("pincode")
        .isLength({ min: 6 ,max:6})
        .withMessage("pincode is wqrong"),
    body("pincode").notEmpty()
        .withMessage("pincode required"),
    body("age")
        .custom((value) => {
            if (value>100) throw new Error("age not accepted");
            return true;
        }),
    body("gender")
        .custom((value) => {
            if (value!="male" &&  value!="female" && value!="other") throw new Error("gender not accepted");
            return true;
        }),
    
    
    
    
    
    
    async (req, res) => {
        //console.log(body("name"));
     
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const product = await Product.create(req.body);
    return res.status(201).send(product);
});



module.exports = router;