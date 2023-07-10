const Razorpay = require('razorpay');
require('dotenv').config();


const razorpayKey = process.env.REACT_APP_RAZORPAY_KEY;
const razorpaySecret = process.env.REACT_APP_RAZORPAY_SECRET;

var instance = new Razorpay({ key_id: razorpayKey , key_secret: razorpaySecret})

exports.createOrder = (req,res) =>{
    let {amount} = req.body;
    var options = {
        amount: amount*100,
        currency: "INR",
        receipt: "receipt#1"
    };

    instance.orders.create(options, function(err,order){
        if(err){
            console.log(err);
            res.status(500).send({status:false})
        }else{
            res.status(200).send(order)
        }
    })
}