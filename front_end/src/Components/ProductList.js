import React, { useEffect, useState } from 'react';
import ProductDetails from './ProductDetails';
import authFetch from '../UtilityFunction/authFetch';
import Navbar from './Navbar';



const ProductList = ({ usersId }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [userId, setuserId] = useState(null);


  useEffect(() => {
    setuserId(localStorage.getItem('userId'))
    fetchProducts();
  },[]);


  const fetchProducts = async () => {
    try {
      const response = await authFetch(`${process.env.REACT_APP_API_URL}/products/all`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      setProducts(response);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const addToCart = async (product) => {

    setCart([...cart, product]);
    try {
      await authFetch(`${process.env.REACT_APP_API_URL}/cart/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: product._id, userId: userId }),
      })
        .then(response => alert(response.message));
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  


  const removeFromCart = async (productId) => {
    const updatedCart = cart.filter((item) => item._id !== productId);
    setCart(updatedCart);
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/cart/remove`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: productId, userId: userId }),
      })
        .then((response) => response.json())
        .then((data) => {
          alert(data.message);
        });
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

 

  const truncateDescription = (description) => {
    const words = description.split(' ');
    const maxWords = 10; // Set the desired maximum number of words
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return description;
  };

  return (
    <div >
      <Navbar/>
    <div className="container" >
     {selectedProduct? (null): (
      <h1 className="text-center pt-2">Explore all New Products!</h1>
     )}
     
      <br />
      <div className="row">
        {selectedProduct ? (
          <div className="col-md-6 col-lg-10 offset-lg-1 offset-md-3">
            <ProductDetails product={selectedProduct} userId={userId} />
            <div className="text-center">
              <br />
              <button className="btn btn-primary " onClick={() => setSelectedProduct(null)}>
                Go Back
              </button>
              <br />
              <br />
            </div>
          </div>
        ) : (
          
          products.map(product => (
            <div className="col-md-4 mb-4" key={product._id} >
              <div className="card pb-3" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div onClick={() => handleProductClick(product)}>
                  <img src={product.productImage} className="card-img-top p-4" style={{ objectFit:'contain', height: '300px' }} alt={product.productName} />
                  <div className="card-body text-center p-4">
                    <h5 className="card-title">{product.productName}</h5>
                    <h5 className="card-text">Price :&nbsp;	&#8377; {product.productPrice}</h5>
                    
                    <p className="card-text description">{truncateDescription(product.productDescription)}</p>
                  </div>
                </div>
                <div className="mt-auto ml-2 mb-1 d-flex justify-content-center">
                  <button className="btn btn-primary mr-2" onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                  <button className="btn btn-danger" onClick={() => removeFromCart(product._id)}>
                    Remove from Cart
                  </button>
                </div>
              </div>
            </div>          
          )) 
          )}
      </div>
      
    </div>
    </div>
  );
};

export default ProductList;
