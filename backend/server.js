const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  password: 'yourpassword',
  database: 'crop_recommendation',
  port: 5432,
});

client.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error("Connection error", err));

const express = require("express");
const cors = require("cors");

const cropRoutes = require("./routes/cropRoutes");
const plantRoutes = require("./routes/plantRoutes");
const mandiRoutes = require("./routes/mandiRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", cropRoutes);
app.use("/api", plantRoutes);
app.use("/api", mandiRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server running on port 5000");
});
