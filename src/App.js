import React, { useState } from "react";

import "./App.css";

import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  return (

    <div>

      {
        isLoggedIn
        ?
        <Dashboard setIsLoggedIn={setIsLoggedIn} />
        :
        <AuthPage setIsLoggedIn={setIsLoggedIn} />
      }

    </div>
  );
}

export default App;