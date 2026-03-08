const express = require("express");
const router = express.Router();

const mandiData = require("../data/mandi.json");

// GET mandi prices
router.get("/mandi", (req, res) => {

  const crop = req.query.crop?.toLowerCase();

  if (!crop) {
    return res.json(mandiData);
  }

  const results = mandiData.filter(m =>
    m.crop.toLowerCase().includes(crop)
  );

  res.json(results);

});

module.exports = router;