import React, { useState } from "react";
import axios from "axios";

const EmployeeForm = () => {

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    department: "",
    skills: "",
    performanceScore: "",
    experience: ""

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const token = localStorage.getItem("token");

      const employeeData = {

        ...formData,
skills: formData.skills
  .split(",")
  .map(skill => skill.trim())
        
      };

      await axios.post(

        "https://aifsdbackend.onrender.com/api/employees",

        employeeData,

        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Employee Added");
      window.location.reload();

    } catch (error) {

      console.log(error);

      alert("Error Adding Employee");
    }
  };


  return (

    <div>

      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="department"
          placeholder="Department"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="skills"
          placeholder="Skills"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="performanceScore"
          placeholder="Performance Score"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="experience"
          placeholder="Experience"
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Add Employee
        </button>

      </form>

    </div>
  );
};

export default EmployeeForm;