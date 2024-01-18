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

app.put("/data/adultspizzaprice", async (req, res) => {
  try {
    const { adultspizzaprice } = req.body;
    await pool.query('UPDATE tipsdistributiondata SET adultspizzaprice = $1', [adultspizzaprice]);
    res.json(`Fulltips was updated to ${adultspizzaprice} %`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
});

app.put("/data/adultscocktailprice", async (req, res) => {
  try {
    const { adultscocktailprice } = req.body;
    await pool.query('UPDATE tipsdistributiondata SET adultscocktailprice = $1', [adultscocktailprice]);
    res.json(`Fulltips was updated to ${adultscocktailprice} %`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
});

app.put("/data/kidspizzaprice", async (req, res) => {
  try {
    const { kidspizzaprice } = req.body;
    await pool.query('UPDATE tipsdistributiondata SET kidspizzaprice = $1', [kidspizzaprice]);
    res.json(`Fulltips was updated to ${kidspizzaprice} %`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
});

app.put("/data/fieldtripprice", async (req, res) => {
  try {
    const { fieldtripprice } = req.body;
    await pool.query('UPDATE tipsdistributiondata SET fieldtripprice = $1', [fieldtripprice]);
    res.json(`Fulltips was updated to ${fieldtripprice} %`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
});

app.put("/data/pizzatipspercent", async (req, res) => {
  try {
    const { pizzatipspercent } = req.body;
    await pool.query('UPDATE tipsdistributiondata SET pizzatipspercent = $1', [pizzatipspercent]);
    res.json(`Fulltips was updated to ${pizzatipspercent} %`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
});

app.put("/data/kitchentipspercent", async (req, res) => {
  try {
    const { kitchentipspercent } = req.body;
    await pool.query('UPDATE tipsdistributiondata SET kitchentipspercent = $1', [kitchentipspercent]);
    res.json(`Fulltips was updated to ${kitchentipspercent} %`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
});

app.put("/data/fronttipspercent", async (req, res) => {
  try {
    const { fronttipspercent } = req.body;
    await pool.query('UPDATE tipsdistributiondata SET fronttipspercent = $1', [fronttipspercent]);
    res.json(`Fulltips was updated to ${fronttipspercent} %`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
});

app.put("/data/sundayspizzatip", async (req, res) => {
  try {
    const { sundayspizzatip } = req.body;
    await pool.query('UPDATE tipsdistributiondata SET sundayspizzatip = $1', [sundayspizzatip]);
    res.json(`Fulltips was updated to ${sundayspizzatip} %`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
});