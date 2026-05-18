import React from "react";

import Login from "../components/Login";
import Signup from "../components/Signup";

const AuthPage = ({ setIsLoggedIn }) => {

  return (

    <div className="auth-container">

      <Login setIsLoggedIn={setIsLoggedIn} />

      <Signup />

    </div>
  );
};

export default AuthPage;