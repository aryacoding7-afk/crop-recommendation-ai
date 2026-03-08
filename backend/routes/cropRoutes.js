const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/predict", async (req, res) => {

    try {

        const response = await axios.post(
            "http://127.0.0.1:5001/predict",
            req.body
        );

        res.json(response.data);

    } catch (error) {

        console.error("ML API Error:", error);

        res.status(500).json({
            error: "Prediction failed"
        });
    }
});

module.exports = router;