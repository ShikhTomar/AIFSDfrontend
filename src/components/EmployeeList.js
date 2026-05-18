import React, { useEffect, useState } from "react";
import axios from "axios";

import AIRecommendation from "./AIRecommendation";

const EmployeeList = () => {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {

    fetchEmployees();

  }, []);


  const fetchEmployees = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await axios.get(

        "http://localhost:5000/api/employees",

        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setEmployees(response.data);

    } catch (error) {

      console.log(error);

      alert("Failed to Fetch Employees");
    }
  };


  const deleteEmployee = async (id) => {

    try {

      const token = localStorage.getItem("token");

      await axios.delete(

        `https://aifsdbackend.onrender.com/api/employees/${id}`,

        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Employee Deleted");

      fetchEmployees();

    } catch (error) {

      console.log(error);

      alert("Delete Failed");
    }
  };


  return (

    <div>

      <h2>Employee List</h2>

      {

        employees.length === 0
        ?
        <p>No Employees Found</p>
        :
        employees.map((emp) => (

          <div
            key={emp._id}
            className="employee-card"
          >

            <h3>{emp.name}</h3>

            <p>
              <strong>Email:</strong>
              {" "}
              {emp.email}
            </p>

            <p>
              <strong>Department:</strong>
              {" "}
              {emp.department}
            </p>

            <p>
              <strong>Skills:</strong>
              {" "}
              {emp.skills.join(", ")}
            </p>

            <p>
              <strong>Performance Score:</strong>
              {" "}
              {emp.performanceScore}
            </p>

            <p>
              <strong>Experience:</strong>
              {" "}
              {emp.experience} Years
            </p>

            <button
              onClick={() => deleteEmployee(emp._id)}
            >
              Delete
            </button>

            <br /><br />

            <AIRecommendation employee={emp} />

          </div>
        ))
      }

    </div>
  );
};

export default EmployeeList;