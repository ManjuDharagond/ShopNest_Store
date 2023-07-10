// Import necessary modules
const Product = require('../Models/productSchema');
const User = require('../Models/userSchema');

// Calculate the final bill for the user's cart
exports.calculateFinalBill = async (req,res) => {
    
    try {
        const {userId} =req.body;
        const user = await User.findById(userId).populate('cart.productId')
    
        let subtotal = 0;
    
        if(user){
          for (const item of user.cart) {
            const product = item.productId;
      
            // Fetch the product's price from the database
            const productData = await Product.findById(product);
            const price = productData.productPrice;
      
            // Calculate the subtotal for the item
            const itemSubtotal = item.quantity * price;
            subtotal += itemSubtotal;
          }
        }
        res.send({total: subtotal})

      } catch (error) {
        res.send({error})
        console.error('Error calculating final bill:', error);
        throw error;
      }
};
