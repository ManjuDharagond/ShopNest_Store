
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authFetch from '../UtilityFunction/authFetch';
import Navbar from './Navbar';

const CartPage = ({ userId }) => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetchCartItems(userId);
    calculateFinalBill(userId);
  });

  const fetchCartItems = async (userId) => {
    try {
      authFetch(`${process.env.REACT_APP_API_URL}/cart/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(response => setCart(response))
      
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      await authFetch(`${process.env.REACT_APP_API_URL}/cart/remove`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: productId, userId: userId }),
      })
        .then((data) => {
          calculateFinalBill(userId);
          alert(data.message);
          fetchCartItems(userId); // Fetch updated cart items after removing an item
        });
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const increaseQuantity = async (productId) => {
    try {
      await authFetch(`${process.env.REACT_APP_API_URL}/cart/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: productId, userId: userId , update:1}),
      })
        .then(data => {
          calculateFinalBill(userId);
          fetchCartItems(userId); // Fetch updated cart items after increasing quantity
        });
    } catch (error) {
      console.error('Error increasing quantity:', error);
    }
  };

  const decreaseQuantity = async (productId, quantity) => {
    if(quantity === 1){
      removeFromCart(productId)
    } else{
    try {
      await authFetch(`${process.env.REACT_APP_API_URL}/cart/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: productId, userId: userId, update:0}),
      })
        .then(data => {
          calculateFinalBill(userId);
          fetchCartItems(userId); // Fetch updated cart items after decreasing quantity
        });
    } catch (error) {
      console.error('Error decreasing quantity:', error);
    }
  }
};



  const calculateFinalBill = async (userId) => {
    try {
      await authFetch(`${process.env.REACT_APP_API_URL}/calculate-bill`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      })
        .then((data) => {
          setTotalPrice(data.total)  
        });
    } catch (error) {
      console.error('Error calculating final bill:', error);
    }
  };



  let loadScript = async () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);
    return true;
  };

  let makePayment = async () => {
    let isLoaded = await loadScript();
    if (!isLoaded) {
      alert("Fail to load SDK");
      return false;
    }

    let response = await authFetch(`${process.env.REACT_APP_API_URL}/get-order-id`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: totalPrice }),
    });
    let order = await response;

    if (order.status === 500) {
      alert("Unable to create order it... Try again..");
      return false;
    }

    var options = {
      key: process.env.REACT_APP_RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: order.currency,
      name: order.name,
      description: "Make Your Day By This Order",
      image:
        "https://static.vecteezy.com/system/resources/previews/016/016/817/non_2x/ecommerce-logo-free-png.png",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler:async function(response) {
       

       let afterResponse = await authFetch(`${process.env.REACT_APP_API_URL}/verify`, {
          method: "POST",
          timeout: 0,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({response: response }),
        })
       let responseNow = await afterResponse;
        if(responseNow.signatureIsValid){
          alert('Payment verified success')
        }else{
          alert('Payment verified failed, Try again')
        }
      },
      theme: {
        color: "#3399cc",
      },
    };

    try {
      var rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function(response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });
    } catch (error) {
      alert("Something went wrong... try again..");
    }

    rzp1.open();
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
    <div>
      <Navbar/>
    <div className="container">
      <h1 className="text-center m-3">My Cart</h1>
      <div className='text-center mt-4 '>
       {{totalPrice}<=1?(<h5>Please add any item to proceed</h5>):(<h5 >Total summary :&nbsp;	&#8377; {totalPrice} </h5>)}
      </div>
      <br />
      <br />
      {cart.length > 0 ? (
        <div className='row'>  

      
        {cart.map((item) => (
    <div className={`${cart.length === 1? "col-md-12" : "col-md-6" }` } style={{ display: 'flex', flexDirection: 'column' }} key={item.productId}>
      <div className="card mb-4 d-flex align-items-center p-4 h-100">
        <img src={item.productImage}className="card-img-top p-4" style={{ objectFit:'contain', height: '300px' }} alt={item.productName} />
        <div className="card-body text-center p-4  ">
          <h5 className="card-title">{item.productName}</h5>
          <p className={`${cart.length === 1? "w-50 card-text mx-auto  description" : "card-text" }`}>{truncateDescription(item.productDescription)}</p>
          
          {/* <div className="d-flex justify-content-center pt-3"> */}
            {/* <div className="mt-auto pt-3 ml-2 mb-1 d-flex justify-content-center d-flex justify-content-between align-items-center" > */}
            <div className="mt-auto pt-3  mb-1 d-flex justify-content-center align-items-center row" >
                <div className='mr-3 m-2 '>
                  <span className="font-weight-bold">Price :&nbsp;	&#8377;{item.productPrice*item.quantity}</span>
                </div>
                <div className='m-2'>
                  <span className='ml-3'>Quantity : &nbsp; </span>
                  <button
                    className="btn btn-secondary mr-2"
                    onClick={() => decreaseQuantity(item.productId, item.quantity)}
                    disabled={item.quantity === 0}               
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="btn btn-secondary ml-2"
                    onClick={() => increaseQuantity(item.productId)}
                  >
                    +
                  </button>
                </div>
                </div>
                
            </div>

        {/* </div> */}
        
        <div className="card-footer p-0 mt-1">
          <button
            className="btn btn-danger btn-block"
            onClick={() => removeFromCart(item.productId)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  ))}


  <div className="col-md-12 text-center mt-5">
          <button onClick={() => {
            calculateFinalBill(userId);
            makePayment();
          }} className="btn btn-primary">
            Proceed to Checkout
          </button>
        </div>
      </div>
    ) : (
      <h2 className="text-center ">Your cart is empty.</h2>
    )}
    <div className='text-center m-4'>
      <button onClick={() => navigate('/products')} className="btn btn-secondary ">
        Go Back
      </button>
  </div>

    </div>
    </div>
  );
};

export default CartPage;











