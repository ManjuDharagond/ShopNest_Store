const User = require('../Models/userSchema');
const Product = require('../Models/productSchema')

exports.getAllProduct = async (req, res) => {
  const { userId } = req.params;
  try {
    // Find the user by ID and populate the 'cart' field
    const user = await User.findById(userId).populate('cart.productId', [
      'productName',
      'productPrice',
      'productDescription',
      'productImage'
    ]);

    if (user) {
      // Extract the cart items from the user object
      const cartItems = user.cart.map(item => {
        return {
          productId: item.productId._id,
          productName: item.productId.productName,
          productImage: item.productId.productImage,
          productPrice: item.productId.productPrice,
          productDescription: item.productId.productDescription,
          quantity:item.quantity
        };
      });
      res.status(200).json(cartItems);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).json({ message: 'Error fetching cart items' });
  }
};



exports.addProduct = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    // console.log(userID, productId);

    // Find the user by ID
    const user = await User.findById(userId);
    
    // Find the product in the user's cart
    const cartProduct = user.cart.find(
      (item) => item.productId.toString() === productId
    );

    if (cartProduct) {
      // If the product exists in the cart, update the quantity
      cartProduct.quantity += 1;
    } else {
      // If the product doesn't exist, add it to the cart with initial quantity
      const product = await Product.findById(productId);
      user.cart.push({ productId, quantity: 1 });
    }

    // Save the updated user document
    await user.save();

    res.status(200).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};



 
  // Update the quantity of a product in the user's cart
  exports.updateQuantity = async(req,res) => {
  //  const { userId, productId, update } = req.body;
  //  console.log(userId, productId, update);
    try {
      const { userId, productId, update } = req.body;
  
      // Find the user by ID
      const user = await User.findById(userId);
  
      // Find the product in the cart
      const cartItem = user.cart.find(
        (item) => {
          if(item.productId.toString() === productId){
              return true;
          }
        }
      );
  
      if (cartItem) {
        // Update the quantity
        if(update == 1){
          cartItem.quantity += 1;
        }else{
          if(cartItem.quantity >=1){
            cartItem.quantity -= 1;
          }         
        }
        await user.save();
        res.status(200).json({ message: 'Cart updated successfully' });
      } else {
        res.status(404).json({ error: 'Product not found in cart' });
      }
    } catch (error) {
      console.error('Error updating cart:', error);
      res.status(500).json({ error: 'An error occurred' });
    }
  };

 
  
  // Remove a product from the user's cart
  exports.removeProduct = async(req,res) => {
    try {
      const { userId, productId } = req.body;
  
      // Find the user by ID
      const user = await User.findById(userId);
      
      // Find the index of the product in the cart
      const productIndex = user.cart.findIndex(
        (item) => item.productId.toString() === productId
      );
  
      if (productIndex !== -1) {
        // Remove the product from the cart
        user.cart.splice(productIndex, 1);
        await user.save();
        res.status(200).json({ message: 'Product removed from cart' });
      } else {
        res.status(404).json({ message: 'Product not found in cart' });
      }
    } catch (error) {
      console.error('Error removing product from cart:', error);
      res.status(500).json({ error: 'An error occurred' });
    }
  };


  