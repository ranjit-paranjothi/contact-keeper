const express = require("express");
const {check, validationResult} = require('express-validator/check');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const router = express.Router();
const User = require("../models/User");

router.post("/", [
    check("name", "Please add a name").not().isEmpty(),
    check("email", "please include a valid email").isEmail(),
    check("password", "please enter a password with 6 or more characters").isLength({min:6})
], async (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const {name, email, password} = req.body;

    try{
        let user = await User.findOne({email});

        if(user){
            res.status(400).json({msg: "user already exists"});
        }

        user = new User({name,email,password});

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
            user:{
                id:user.id
            }
        }
        jwt.sign(payload, config.get("jwtSecret"),{
            expiresIn:360000
        },(err, token)=>{
            if(err) throw err;
            res.json({token});
        });

    }catch(err){
        res.send("err:: "+err);
    }

    
});

module.exports = router