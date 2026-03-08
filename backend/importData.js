const { Client } = require('pg');
const fs = require('fs');

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  password: 'test12345',
  database: 'farm_ai',
  port: 5432,
});

client.connect();

const mandiData = JSON.parse(fs.readFileSync('./data/mandi.json'));
const plantData = JSON.parse(fs.readFileSync('./data/plants.json'));

async function importData() {

  for (let item of mandiData) {
    await client.query(
      "INSERT INTO mandi_prices (crop, market, min_price, max_price, modal_price) VALUES ($1,$2,$3,$4,$5)",
      [item.crop, item.market, item.min_price, item.max_price, item.modal_price]
    );
  }

  for (let plant of plantData) {
    await client.query(
      "INSERT INTO plants (plant_name, description) VALUES ($1,$2)",
      [plant.name, plant.description]
    );
  }

  console.log("Data imported successfully");
  client.end();
}

importData();
