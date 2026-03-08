const express = require("express");
const router = express.Router();

const plants = require("../data/plantsData");

// GET ALL PLANTS
router.get("/plants", (req, res) => {
  const search = req.query.search || "";

  let results = plants;

  if (search) {
    results = plants.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.json(results);
});

module.exports = router;