import "./CropLibrary.css";
import { useState, useEffect } from "react";
import axios from "axios";

function CropLibrary() {

  const [search, setSearch] = useState("");
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPlants = async () => {

    try {

      setLoading(true);

      // BACKEND WORK
      // frontend is sending search data as query param
      //handle it by dynamic route
      //you need to use trefle.io global plant api and send the response

      const response = await axios.get(
        `http://localhost:5000/api/plants?search=${search}`
      );

      {/* BACKEND WORK- need the response obj of this type:
                Backend should send:
                image_url
                common_name
                scientific_name
                family
            */}

      setPlants(response.data);

      setLoading(false);

    } catch (error) {

      console.error("Error fetching plants:", error);
      setLoading(false);

    }

  };

  useEffect(() => {

    const delayDebounce = setTimeout(() => {

      if (search.length < 2) return;

      fetchPlants();

    }, 500);

    return () => clearTimeout(delayDebounce);

  }, [search]);


  


  return (

    <div className="library-page">

      <h1><span>Crop</span> Library </h1>

      <p className="library-desc">
        Search crops and explore plant information
      </p>

      <input
        type="text"
        className="search-bar"
        placeholder="Search crops..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />

      {loading && <p>Searching crops...</p>}

      <div className="crop-grid">

        {plants.map((plant,index)=>(

          <div className="crop-card" key={index}>


            {plant.image_url && (
              <img
                src={plant.image_url}
                alt={plant.common_name}
              />
            )}

            <h3>{plant.common_name || "Unknown Plant"}</h3>

            <p>
              <b>Scientific Name:</b> {plant.scientific_name}
            </p>

            <p>
              <b>Family:</b> {plant.family}
            </p>

          </div>

        ))}

      </div>

    </div>

  );
}

export default CropLibrary;