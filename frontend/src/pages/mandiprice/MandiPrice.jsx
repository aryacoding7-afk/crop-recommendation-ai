import "./MandiPrice.css";
import { useState } from "react";
import axios from "axios";

function MandiPrices(){

  const [crop,setCrop] = useState("");
  const [prices,setPrices] = useState([]);
  const [loading,setLoading] = useState(false);

  const fetchPrices = async () => {

    if(!crop) return;

    try{

      setLoading(true);

      // BACKEND WORK
      // React sends crop name to backend as query param
      // Backend should call mandi price API
      // and return market price data

      const response = await axios.get(
        `http://localhost:5000/api/mandi?crop=${crop}`
      );

      {/* BACKEND WORK- response data need to be of form:
                    crop
                    market
                    state
                    price
                */}

      setPrices(response.data);

      setLoading(false);

    }catch(err){

      console.error(err);
      setLoading(false);

    }
  };

  return(

    <div className="mandi-page">

      <h1><span>Mandi</span> Prices  </h1>

      <p className="mandi-desc">
        Check latest market prices for crops
      </p>

      <div className="search-section">

        <input
          type="text"
          placeholder="Enter crop name"
          value={crop}
          onChange={(e)=>setCrop(e.target.value)}
        />

        <button onClick={fetchPrices}>
          Get Prices
        </button>

      </div>

      {loading && <p>Loading market prices...</p>}

      <div className="price-table">

        <table>

          <thead>
            <tr>
              <th>Crop</th>
              <th>Market</th>
              <th>State</th>
              <th>Price (₹/quintal)</th>
            </tr>
          </thead>

          <tbody>

            {prices.map((item,index)=>(

              <tr key={index}>

                <td>{item.crop}</td>
                <td>{item.market}</td>
                <td>{item.state}</td>
                <td>{item.price}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default MandiPrices;