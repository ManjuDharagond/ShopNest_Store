import './App.css';
import Home from './Components/Home';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import ProductList from './Components/ProductList';
import CartPage from './Components/CartPage';
import authFetch from './UtilityFunction/authFetch';
import Logout from './Components/Logout';
import HomeLogout from './Components/HomeLogout';
import Footer from './Components/Footer';
import About from './Components/About';
import PageNotFound from './Components/PageNotFound';
import User from './Components/User';





function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  

  // Function to handle successful login and update isLoggedIn state
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

 

  const storeCollector = ()=>{
    let store = JSON.parse(localStorage.getItem('login'));
    if(store && store.login){
      setIsLoggedIn(true);
    }
  }
   useEffect(()=>{
      storeCollector();
  },[])




  const getToken = () => {
    return localStorage.getItem('token');
  }

  const authenticatedFetch = async (url, options) => {
    const token = await getToken();
    if (token) {
      options.headers = {
        ...options.headers,
        Authorization: token
      }
    }
    
    const response = await authFetch(url, options)
    return response;
  };


  

  return (
    <Router >
       
      <div className="App" id='root' style={{ height:'100vh' }}>
      <div className='content' >
          <Routes>
          {!localStorage.getItem('login') && <Route path='/' element={<Home />} />}


          {/* Redirects */}
          {localStorage.getItem('login') ? (
              <Route
                path="/"
                element={<Navigate to="/home" replace />}
              />
            ) : (
              <Route
                path="/home"
                element={<Navigate to="/" replace />}
              />
            )}


          {localStorage.getItem('login') && <Route path="/home" element={<HomeLogout/>} />}
          {localStorage.getItem('login') && <Route path="/user" element={<User/>} />}

          <Route path='*' element={<PageNotFound/>} />

          <Route path="/register" element={<Register/>} />
          
          <Route path="/logout" element={<Logout/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<Login onLogin={handleLogin} storeCollector={storeCollector} setUserId={setUserId} />} />

          {localStorage.getItem('login') && <Route path="/products" element={<ProductList userId={userId} authFetch={authenticatedFetch}/>}/>}

          
          {localStorage.getItem('login') && <Route path="/cart" element={<CartPage userId={localStorage.getItem('userId')} authFetch={authenticatedFetch}/>}/>}
          </Routes>
      </div>

      

      {localStorage.getItem('login') && <Footer/>}  
      </div>
    </Router>
    
  );
}

export default App;
