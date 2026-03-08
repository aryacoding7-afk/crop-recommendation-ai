const express = require("express");
const router = express.Router();
const axios = require("axios");

const API_KEY = "579b464db66ec23bdd00000167205c3b0f77406b64a3b2842bfc3b13";

router.get("/mandi", async (req, res) => {

  try {

    const crop = req.query.crop || "";

    const response = await axios.get(
      "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070",
      {
        params: {
          "api-key": API_KEY,
          format: "json",
          limit: 20,
          "filters[commodity]": crop
        }
      }
    );

    const mandiData = response.data.records.map(r => ({
      crop: r.commodity,
      market: r.market,
      state: r.state,
      price: r.modal_price
    }));

    res.json(mandiData);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Failed to fetch mandi prices"
    });

  }

});

module.exports = router;