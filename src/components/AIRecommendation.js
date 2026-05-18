import React, { useState } from "react";
import axios from "axios";

const AIRecommendation = ({ employee }) => {

  const [recommendation, setRecommendation] = useState("");

  const [loading, setLoading] = useState(false);


  const getRecommendation = async () => {

    try {

      setLoading(true);

      const token = localStorage.getItem("token");

      const response = await axios.post(

        "https://aifsdbackend.onrender.com/api/ai/recommend",

        employee,

        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setRecommendation(
        response.data.recommendation
      );

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);

      alert("AI Recommendation Failed");
    }
  };


  return (

    <div>

      <button onClick={getRecommendation}>

        Get AI Recommendation

      </button>

      <br /><br />

      {

        loading
        ?
        <p>Loading AI Response...</p>
        :
        <p>{recommendation}</p>
      }

    </div>
  );
};

export default AIRecommendation;