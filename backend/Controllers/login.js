const express = require('express');
const login = express.Router();
const User = require('../Models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretkey = process.env.JWT_SECRET;



exports.tryLogin = async(req,res) =>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        console.log(user);
        if(!user){
            console.log("inside");
            return res.status(401).json({message:"Invalid email or password"});
        }
        
        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if(!isPasswordValid){
            return res.status(401).json({message:"Invalid email or password"});
        }


        //Generate JWT token

        // const token = jwt.sign({email:user.email, userId: user._id}, 'secretKeyChangeThisLater', {expiresIn:'1h'});
        const token = jwt.sign({email:user.email, userId: user._id}, secretkey);
        
        res.status(200).json({data:{token,user}, message:"Login successful"});

    }catch(error){
        res.status(500).json({message: "Internal server error"});
    }
}




