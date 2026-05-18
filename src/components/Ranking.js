import React, { useEffect, useState } from "react";
import axios from "axios";

const Ranking = () => {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {

    fetchRankings();

  }, []);


  const fetchRankings = async () => {

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

      const sortedEmployees = response.data.sort(

        (a, b) =>
          b.performanceScore - a.performanceScore
      );

      setEmployees(sortedEmployees);

    } catch (error) {

      console.log(error);
    }
  };


  return (

    <div>

      <h2>Employee Rankings</h2>

      {

        employees.map((emp, index) => (

          <div
            key={emp._id}
            className="employee-card"
          >

            <h3>
              #{index + 1} - {emp.name}
            </h3>

            <p>
              Department: {emp.department}
            </p>

            <p>
              Performance Score:
              {" "}
              {emp.performanceScore}
            </p>

          </div>
        ))
      }

    </div>
  );
};

export default Ranking;