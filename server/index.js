const express = require('express');
const cors = require('cors');
const app = express();
const port = 8001;
const pool = require('./db');

app.use(cors());
app.use(express.json()); //req.body

app.listen(port, () => {
  console.log(`RMF Tips Distribution app running on port ${port}.`);
});

app.get("/data", async (req, res) => {
  try {
    const getData = await pool.query('SELECT * FROM tipsdistributiondata');
    res.json(getData.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
});

app.put("/data/fulltips", async (req, res) => {
  try {
    const { fulltips } = req.body;
    await pool.query('UPDATE tipsdistributiondata SET fulltips = $1', [fulltips]);
    res.json(`Fulltips was updated to ${fulltips} %`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
});

app.put("/data/assistanttips", async (req, res) => {
  try {
    const { assistanttips } = req.body;
    await pool.query('UPDATE tipsdistributiondata SET assistanttips = $1', [assistanttips]);
    res.json(`Fulltips was updated to ${assistanttips} %`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
});