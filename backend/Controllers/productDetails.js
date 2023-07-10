const Product = require('../Models/productSchema')

exports.getAllProducts = async(req,res) =>{
    try{
        const products = await Product.find();
        // res.json(products.splice(21,21));
        res.json(products.splice(0,21))
    }catch(error){
        console.error('Error fetching products:' , error);
        res.status(500).json({error:'Internal server error'});
    }
};
