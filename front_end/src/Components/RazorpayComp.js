import React, { useEffect, useState } from 'react';


export default function RazorpayComp({userId}) {
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(()=>{
        calculateFinalBill(userId)
    },[])
    
    const calculateFinalBill = async (userId) => {
        try {
          await fetch(`${process.env.REACT_APP_API_URL}/calculate-bill`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId }),
          })
            .then(response => response.json())
            .then(data => {
              setTotalPrice(data.total)  
              if(data.total!==0){
              // alert(`Final bill: ${data.total}. Are you sure want to pay?`);
              // setShowModal(true); 
              }
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
    
        let response = await fetch(`${process.env.REACT_APP_API_URL}/get-order-id`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: totalPrice }),
        });
        let order = await response.json();
    
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
           
    
           let afterResponse = await fetch(`${process.env.REACT_APP_API_URL}/verify`, {
              method: "POST",
              timeout: 0,
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({response: response }),
            })
           let responseNow = await afterResponse.json();
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
    


  return (
        <div className="text-center" onClick={()=>{
            calculateFinalBill(userId);
            if(totalPrice!==0){
                makePayment();
            }
        }}>
             Proceed to Checkout
        </div>
  )
}