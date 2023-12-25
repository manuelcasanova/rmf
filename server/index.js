const express = require('express');
const app = express();
const port = 8001;
const cors = require('cors');
const pool = require('./db');

app.use(cors());
app.use(express.json()); //req.body

app.listen(port, () => {
  
  console.log(`RMF Tips Distribution app running on port ${port}.`);

});

app.get("/data", async (req, res) => {

  try {
    const getData = await pool.query(
      'SELECT * FROM tipsdistributiondata'
    );
    res.json(getData.rows)
  } catch (err) {
    console.error(err.message)
  }
})