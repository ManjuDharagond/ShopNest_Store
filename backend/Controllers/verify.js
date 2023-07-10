require('dotenv').config();
const razorpaySecret = process.env.REACT_APP_RAZORPAY_SECRET;



exports.verify = (req,res)=>{
    let {response} = req.body;
    let body=response.razorpay_order_id + "|" + response.razorpay_payment_id;
   
     var crypto = require("crypto");
     var expectedSignature = crypto.createHmac('sha256', process.env.REACT_APP_RAZORPAY_SECRET)
                                     .update(body.toString())
                                     .digest('hex');
                                    //  console.log("sig received " , response.razorpay_signature);
                                    //  console.log("sig generated " ,expectedSignature);
     var responseNow = {"signatureIsValid":"false"}
     if(expectedSignature === response.razorpay_signature)
      responseNow={"signatureIsValid":"true"}
         res.send(responseNow);
    }   