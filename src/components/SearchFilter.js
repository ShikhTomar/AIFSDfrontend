import React, { useState } from "react";
import axios from "axios";

const SearchFilter = () => {

  const [department, setDepartment] = useState("");

  const [employees, setEmployees] = useState([]);


  const handleSearch = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await axios.get(

        `https://aifsdbackend.onrender.com/api/employees/search?department=${department}`,

        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setEmployees(response.data);

    } catch (error) {

      console.log(error);
    }
  };


  return (

    <div>

      <h2>Search Employee</h2>

      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />

      <button onClick={handleSearch}>
        Search
      </button>

      {

        employees.map((emp) => (

          <div key={emp._id}>

            <h3>{emp.name}</h3>

            <p>{emp.department}</p>

          </div>
        ))
      }

    </div>
  );
};

export default SearchFilter;