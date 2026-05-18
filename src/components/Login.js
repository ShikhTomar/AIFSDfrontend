import React, { useState } from "react";
import axios from "axios";

const Login = ({ setIsLoggedIn }) => {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");


  const handleLogin = async () => {

    try {

      const response = await axios.post(

        "https://aifsdbackend.onrender.com/api/auth/login",

        {
          email,
          password
        }
      );

      console.log(response.data);

      localStorage.setItem(
        "token",
        response.data.token
      );

      alert("Login Successful");

      setIsLoggedIn(true);

    } catch (error) {

      console.log(error.response?.data);

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };


  return (

    <div className="auth-box">

      <h2>Login</h2>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>

    </div>
  );
};

export default Login;