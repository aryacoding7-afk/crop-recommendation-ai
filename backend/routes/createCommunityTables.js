const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "test12345",
  database: "farm_ai",
  port: 5432
});

async function createTables() {
  try {
    await client.connect();

    await client.query(`
      CREATE TABLE IF NOT EXISTS questions (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        question TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS answers (
        id SERIAL PRIMARY KEY,
        question_id INTEGER REFERENCES questions(id) ON DELETE CASCADE,
        name TEXT NOT NULL,
        answer TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("Community tables created successfully!");

    await client.end();
  } catch (err) {
    console.error(err);
  }
}

createTables();