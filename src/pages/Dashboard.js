import React from "react";

import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import SearchFilter from "../components/SearchFilter";
import Ranking from "../components/Ranking";

const Dashboard = ({ setIsLoggedIn }) => {

  const handleLogout = () => {

    localStorage.removeItem("token");

    setIsLoggedIn(false);
  };

  return (

    <div className="dashboard">

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >

        <h1 className="title">
          Employee Analytics Dashboard
        </h1>

        <button onClick={handleLogout}>
          Logout
        </button>

      </div>

      <div className="section">
        <EmployeeForm />
      </div>

      <div className="section">
        <SearchFilter />
      </div>

      <div className="section">
        <EmployeeList />
      </div>
      <div className="section">
  <Ranking />
</div>
    </div>
  );
};

export default Dashboard;