const express = require("express");
const router = express.Router();
const axios = require("axios");

const API_TOKEN = "usr-t_TllfeOAwcUSGn84AS5KHuhvFgSgYFeB7jTfr3ZY";

// search plants
router.get("/plants", async (req, res) => {

  try {

    const search = req.query.search || "";

    const response = await axios.get(
      `https://trefle.io/api/v1/plants/search`,
      {
        params: {
          q: search,
          token: API_TOKEN
        }
      }
    );

    const plants = response.data.data.map(p => ({
      common_name: p.common_name,
      scientific_name: p.scientific_name,
      family: p.family,
      image_url: p.image_url
    }));

    res.json(plants);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Plant API error"
    });

  }

});

module.exports = router;