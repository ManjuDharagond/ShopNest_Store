import React,{useState} from 'react';

const ProductDetails = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = async (product) => {
    setCart([...cart, product]);
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/cart/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: product._id, userId: props.userId }),
      })
        .then((response) => response.json())
        .then((data) => {
          alert(data.message);
        });
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
        body: JSON.stringify({ productId: productId, userId: props.userId }),
      })
        .then((response) => response.json())
        .then((data) => {
          alert(data.message);
        });
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };



  return (
    <div className='text-center'>
      <h1>{props.product.productName}</h1>
      <p>{props.product.productDescription}</p>



      <h5 className="card-text">Price :&nbsp;	&#8377; {props.product.productPrice}</h5>


      <img className="card-img-top m-4" style={{ objectFit:'contain', height: '350px', width:'25rem' }} src={props.product.productImage} alt={props.product.productName} />
      <div className="mt-2 ml-2 mb-1 d-flex justify-content-center">
            <button className="btn btn-primary mr-2" onClick={() => addToCart(props.product)}>
              Add to Cart
            </button>
            <button className="btn btn-danger" onClick={() => removeFromCart(props.product._id)}>
              Remove from Cart
            </button>
      </div>
    </div>
  );
};

export default ProductDetails;
