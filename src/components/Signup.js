import React, { useState } from "react";
import axios from "axios";

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {

    try {

      await axios.post(
        "https://aifsdbackend.onrender.com/api/auth/signup",
        {
          email,
          password
        }
      );

      alert("Signup Successful");

      setEmail("");
      setPassword("");

    } catch (error) {

      console.log(error);

      alert("Signup Failed");
    }
  };

  return (

    <div className="auth-box">

      <h2>Signup</h2>

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

      <button onClick={handleSignup}>
        Signup
      </button>

    </div>
  );
};

export default Signup;