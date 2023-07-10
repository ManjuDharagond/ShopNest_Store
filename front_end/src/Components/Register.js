import React from 'react'
import {useState } from "react";
import { useNavigate } from 'react-router-dom';


export default function Register() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const url = "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
  

  const handleSubmit = (event)=>{
    
    event.preventDefault();    
      fetch(`${process.env.REACT_APP_API_URL}/register`, 
          {
            method:'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email:email, name:name, password:password})
      })
      .then(response =>{
        return response.json();
      })
      .then(data=>{
        navigate('/login');
        alert(data.message);
      })
  }


  return (
  
    <div style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%),url(${url})`, backgroundSize: 'cover', backgroundPosition: "center",backgroundRepeat: 'no-repeat', height: "100vh"}}>
    <div className="container br-5 h-100">
    <div className="row h-100  align-items-center justify-content-center">
      <div className="col-md-6 d-flex">
        <div className="card m-auto" style={{minWidth:'30vw', maxWidth:'95vw'}}>
          <div className="card-body m-3">
            <h2 className="card-title text-center mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit} className="pt-2 mx-auto" style={{minWidth:"75%", maxWidth:'95%'}}>
              <div className="form-group pb-2">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block mt-3">Sign Up</button>
              <div className="text-center mt-4">
                            <p>Already have an account?</p>
                            <a href="/login" style={{textDecoration:'none'}}>Login here</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}
