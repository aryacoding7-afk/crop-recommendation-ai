const express = require("express");
const router = express.Router();

const plants = require("../data/plants.json");


// GET all plants OR search plants
router.get("/plants", (req, res) => {

  const search = req.query.search?.toLowerCase();

  // If no search query → return all plants
  if (!search) {
    return res.json(plants);
  }

  // Filter plants by common name
  const results = plants.filter(plant =>
    plant.common_name.toLowerCase().includes(search)
  );

  res.json(results);
});


// GET single plant by name
router.get("/plants/:name", (req, res) => {

  const plant = plants.find(
    p => p.common_name.toLowerCase() === req.params.name.toLowerCase()
  );

  if (!plant) {
    return res.status(404).json({ error: "Plant not found" });
  }

  res.json(plant);
});


module.exports = router;