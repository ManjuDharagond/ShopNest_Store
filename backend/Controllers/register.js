const User = require('../Models/userSchema');
const bcrypt = require('bcrypt');


exports.registerAccount = async(req,res)=>{
    
    try{
        const{name,email,password} = req.body;
        console.log(req.body);
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: 'Email already exists'});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password:hashedPassword
        });

        await user.save();
        res.status(201).json({message: 'User registered successfully'});
    } catch(error){
        console.log(error);
        res.status(500).json({message: 'Internal server error'});
    }
    };


    exports.getRegisterAccount = (req,res)=>{
        res.send({
            message: "Get method"
        })
    }