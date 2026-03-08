const express = require("express");
const router = express.Router();
const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "test12345",
  database: "farm_ai",
  port: 5432
});

client.connect();


// GET all questions
router.get("/questions", async (req, res) => {
  try {
    const result = await client.query(
      `SELECT q.*, 
      (SELECT COUNT(*) FROM answers a WHERE a.question_id = q.id) AS answers_count
      FROM questions q
      ORDER BY created_at DESC`
    );

    res.json(result.rows);

  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});


// POST a question
router.post("/questions", async (req, res) => {
  const { name, question } = req.body;

  try {
    const result = await client.query(
      "INSERT INTO questions (name, question) VALUES ($1,$2) RETURNING *",
      [name, question]
    );

    res.json(result.rows[0]);

  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});


// GET answers for a question
router.get("/questions/:id", async (req, res) => {
  const id = req.params.id;

  try {

    const question = await client.query(
      "SELECT * FROM questions WHERE id=$1",
      [id]
    );

    const answers = await client.query(
      "SELECT * FROM answers WHERE question_id=$1 ORDER BY created_at",
      [id]
    );

    res.json({
      question: question.rows[0],
      answers: answers.rows
    });

  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});


// POST an answer
router.post("/answers", async (req, res) => {

  const { question_id, name, answer } = req.body;

  try {

    const result = await client.query(
      "INSERT INTO answers (question_id, name, answer) VALUES ($1,$2,$3) RETURNING *",
      [question_id, name, answer]
    );

    res.json(result.rows[0]);

  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});


module.exports = router;