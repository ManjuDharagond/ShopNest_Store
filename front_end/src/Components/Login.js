import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import jwtDecode from "jwt-decode";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  const [gmail, setGmail] = useState(null);
  const [name, setName] = useState(null);
  const [user, setUser] = useState(null);
  const url =
    "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80";

  const responseGoogle = async (response) => {
    const profileObj = jwtDecode(response.credential);
    console.log(profileObj);

    if (profileObj.email_verified) {
      setGmail(profileObj.email);
      setName(profileObj.name);
      setUser(profileObj);
      if (gmail) {
        localStorage.setItem("userName", user.name);
        localStorage.setItem("email", user.email);
        localStorage.setItem("imageUrl", user.picture);
        handleLogin();
      } else {
        alert("Please try again");
      }
    }
  };

  useEffect(() => {
    /*global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: responseGoogle,
      scope: "",
    });

    google.accounts.id.renderButton(
      document.getElementById("googleSignInDiv"),
      { theme: "outline", size:'large',  width:'inherit', padding:'10px' }
    );

  });


  const handleLogin = () => {
    fetch(`${process.env.REACT_APP_API_URL}/google-login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: gmail, name: name }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const { token, user } = data.data;
        props.setUserId(user._id);
        localStorage.setItem("token", token);
        localStorage.setItem("login", true);
        localStorage.setItem("userId", user._id);

        setLoggedIn(true);
        props.onLogin();
        props.storeCollector();
        navigate("/home");
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const { token, user } = data.data;
        props.setUserId(user._id);
        console.log(user);

        localStorage.setItem("token", token);
        localStorage.setItem("login", true);
        localStorage.setItem("userId", user._id);
        localStorage.setItem("userName", user.name);
        localStorage.setItem("email", user.email);
        localStorage.setItem(
          "imageUrl",
          "https://media.istockphoto.com/id/1209654046/vector/user-avatar-profile-icon-black-vector-illustration.jpg?s=612x612&w=0&k=20&c=EOYXACjtZmZQ5IsZ0UUp1iNmZ9q2xl1BD1VvN6tZ2UI="
        );

        setLoggedIn(true);
        props.onLogin();
        props.storeCollector();
        navigate("/home");
      })
      .catch((error) => {
        alert("Login failed:", error);
      });
  };

  const buttonStyles = {
    display:'flex',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding: "10px",
    minWidth:"75%", maxWidth:"95%"
  };

  return (
    <div
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%),url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="container h-100 br-5">
        <div className="row h-100 align-items-center justify-content-center ">
          <div className="col-md-6 d-flex">
            <div
              className="card m-auto"
              style={{ minWidth: "30vw", maxWidth: "95vw" }}
            >
              <div className="card-body m-3">
                {loggedIn ? (
                  <div>
                    <h2 className="card-title text-center">Welcome, user!</h2>
                  </div>
                ) : (
                  <div>
                    <h2 className="card-title text-center mb-4">Login</h2>
                    <form
                      onSubmit={handleSubmit}
                      className="pt-2 mx-auto"
                      style={{ minWidth: "75%", maxWidth: "95%" }}
                    >
                      <div className="form-group pb-2">
                        <input
                          type="email"
                          className="form-control mt-2"
                          id="email"
                          name="email"
                          placeholder="Email Address"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      </div>
                      <div className="form-group pb-4">
                        <input
                          type="password"
                          className="form-control mt-2"
                          id="password"
                          name="password"
                          placeholder="Password"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Login
                      </button>
                    </form>


                    <div className="d-flex">
                      <div
                        className="mt-3 mx-auto"
                        id="googleSignInDiv"
                        style={buttonStyles}
                        data-type="standard"
                      ></div>
                    </div>


                    <div className="text-center mt-4">
                      <p>
                        Don't have an account?{" "}
                        <Link to="/register" className="btn text-primary pt-0">
                          Register Here!
                        </Link>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
