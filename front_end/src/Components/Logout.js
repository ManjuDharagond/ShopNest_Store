import React from 'react'
import Navbar from './Navbar';

export default function Logout() {


    const handleClick = () =>{
        const logoutUser = async () => {
            const logoutUser = async () => {
                try {
                 
                    fetch(`${process.env.REACT_APP_API_URL}/logout`,{
                            method:"POST",
                            headers:{
                                "Content-Type": "application/json",
                            }
                        })
                        .then(response=>{
                            return response.json();
                        })
                        .then(data=>{ 
                            localStorage.removeItem('token');
                            window.localStorage.removeItem("isLoggedIn");
                            window.localStorage.removeItem("login");
                            window.localStorage.removeItem("userId");

                            window.localStorage.removeItem("userName");
                            window.localStorage.removeItem("email");
                            window.localStorage.removeItem("imageUrl");

                            window.location.href = '/';
                        })
                 
                } catch (error) {
                console.log("logout error");
                  console.log(error.response.data);
                }
              };
          
              logoutUser();
          };
      
          logoutUser();
    }



  return (
    <div>
      <Navbar/>
    <div className="container d-flex justify-content-center align-items-center " style={{height:'80vh'}}>
      <div className="text-center">
        <h2 className="mb-4">Are you sure you want to logout?</h2>
        <button className="btn btn-danger" onClick={handleClick}>
          Logout
        </button>
      </div>
    </div>
    </div>

  )
}
