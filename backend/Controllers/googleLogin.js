const User = require('../Models/userSchema');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secretkey = process.env.JWT_SECRET;


exports.login = async(req,res)=>{
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 12;
    let passwordGen = "";
    for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      passwordGen += chars.substring(randomNumber, randomNumber +1);
     }
     const password = passwordGen;
    
    try{
        const{email,name} = req.body;
        const user = await User.findOne({email});
       

        if(user){
            console.log("user exists");
            const token = jwt.sign({email:user.email, userId: user._id}, secretkey);       
            res.status(200).json({data:{token,user}, message:"Login successful"});
        }else{
            console.log("user doesn't exists");
            const  newUser = new User({
                name,
                email,
                password:password
            });
            await newUser.save();    
            const token = await jwt.sign({email:user.email, userId: user._id}, 'secretKeyChangeThisLater');       
            res.status(200).json({data:{token,user}, message:"Login successful"});
        }
    } catch(error){
        console.log(error);
        res.status(500).json({message: 'Internal server error'});
    }
    };
