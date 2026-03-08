import "./cropai.css";
import { useState } from "react";
import axios from "axios";

function CropRecommendation(){

  const [formData,setFormData] = useState({
    nitrogen:"",
    phosphorus:"",
    potassium:"",
    temperature:"",
    humidity:"",
    rainfall:""
  });

  const [prediction,setPrediction] = useState(null);
  const [loading,setLoading] = useState(false);

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();

    try{

      setLoading(true);

      // BACKEND WORK
      // This sends the form data to backend, handle it by the route /api/predict
      // frontend is sending the formData object ,{nitrogen: ,phosphorous: ....}

      const response = await axios.post(
        "http://localhost:5000/api/predict",
        formData
      );

      // BACKEND WORK
      // Backend should return something like:
      // { crop: "Rice" }

      setPrediction(response.data.crop);

      setLoading(false);

    }catch(error){

      console.error("Prediction error:",error);
      setLoading(false);

    }
  };

  return(

    <div className="crop-page">

      <h1><span>AI Crop</span> Recommendation 🌱</h1>

      <p className="page-desc">
        Enter your soil and weather conditions to get the best crop suggestion.
      </p>

      <form className="crop-form" onSubmit={handleSubmit}>

        <div className="input-grid">

          <input
            type="number"
            placeholder="Nitrogen"
            name="nitrogen"
            onChange={handleChange}
          />

          <input
            type="number"
            placeholder="Phosphorus"
            name="phosphorus"
            onChange={handleChange}
          />

          <input
            type="number"
            placeholder="Potassium"
            name="potassium"
            onChange={handleChange}
          />

          <input
            type="number"
            placeholder="Temperature (°C)"
            name="temperature"
            onChange={handleChange}
          />

          <input
            type="number"
            placeholder="Humidity (%)"
            name="humidity"
            onChange={handleChange}
          />

          <input
            type="number"
            placeholder="Rainfall (mm)"
            name="rainfall"
            onChange={handleChange}
          />

        </div>

        <button className="predict-btn" type="submit">
          Predict Crop
        </button>

      </form>

      {loading && <p className="loading">Analyzing soil data...</p>}

      {prediction && (

        <div className="result-card">

          <h2>Recommended Crop</h2>

          <h1 className="crop-result">
            🌾 {prediction}
          </h1>

        </div>

      )}

    </div>
  );
}

export default CropRecommendation;