const express = require('express');
const corsOptions = require('./config/corsOptions');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3500;
const pool = require('./db');



// Apply CORS middleware with custom options
 app.use(cors(corsOptions));

// Simple /ping endpoint
app.get('/ping', (req, res) => {
  res.status(200).send('pong');
});

// Parse JSON in incoming requests
app.use(express.json());

// Server listening on the specified port
app.listen(PORT, () => {
  console.log(`RMF Tips Distribution app running on port ${PORT}.`);
});

// Basic route for checking if the server is running
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Route to retrieve data from the database
app.get("/data", async (req, res) => {
  try {
    const getData = await pool.query('SELECT * FROM tipsdistributiondata');
    console.log('getData', getData)
    res.json(getData.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
});

// app.get("/data", async (req, res) => {
//   try {
//     // Replace the database query with a hardcoded object
//     const hardcodedData = [
//       {
//         fulltips: 100,
//   assistanttips: 40,
//   kidspizzaprice: 30,
//   adultspizzaprice: 45,
//   adultscocktailprice: 30,
//   fieldtripprice: 16.26,
//   pizzatipspercent: 10,
//   kitchentipspercent: 30,
//   fronttipspercent: 70,
//   sundayspizzatip: 5
//       }
//       // Add more objects as needed
//     ];


//     // Send the hardcoded object as the JSON response
//     res.json(hardcodedData);
//   } catch (err) {
//     // Handle errors, if any
//     console.error(err.message);
//     res.status(500).send('Internal Server Error');
//   }
// });

// // Route to handle OPTIONS requests explicitly
// app.options("/data/:property", (req, res) => {
//   // Set the necessary CORS headers for the OPTIONS response
//   res.header('Access-Control-Allow-Origin', corsOptions.origin);
//   res.header('Access-Control-Allow-Methods', corsOptions.methods);
//   res.header('Access-Control-Allow-Headers', corsOptions.allowedHeaders.join(','));
//   res.sendStatus(204); // No content for OPTIONS request
// });

// Route to update a specific property in the database
app.put("/data/:property", async (req, res) => {
  const { property } = req.params;
  const { value } = req.body;

  try {
    // Use parameterized queries to prevent SQL injection
    await pool.query(`UPDATE tipsdistributiondata SET ${property} = $1`, [value]);
    res.json(`${property} was updated to ${value}`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
});




// Below: NOT DRY CODE

// app.put("/data/fulltips", async (req, res) => {
//   try {
//     const { fulltips } = req.body;
//     await pool.query('UPDATE tipsdistributiondata SET fulltips = $1', [fulltips]);
//     res.json(`Fulltips was updated to ${fulltips} %`);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Internal Server Error');
//   }
// });

// app.put("/data/assistanttips", async (req, res) => {
//   try {
//     const { assistanttips } = req.body;
//     await pool.query('UPDATE tipsdistributiondata SET assistanttips = $1', [assistanttips]);
//     res.json(`Fulltips was updated to ${assistanttips} %`);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Internal Server Error');
//   }
// });

// app.put("/data/adultspizzaprice", async (req, res) => {
//   try {
//     const { adultspizzaprice } = req.body;
//     await pool.query('UPDATE tipsdistributiondata SET adultspizzaprice = $1', [adultspizzaprice]);
//     res.json(`Fulltips was updated to ${adultspizzaprice} %`);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Internal Server Error');
//   }
// });

// app.put("/data/adultscocktailprice", async (req, res) => {
//   try {
//     const { adultscocktailprice } = req.body;
//     await pool.query('UPDATE tipsdistributiondata SET adultscocktailprice = $1', [adultscocktailprice]);
//     res.json(`Fulltips was updated to ${adultscocktailprice} %`);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Internal Server Error');
//   }
// });

// app.put("/data/kidspizzaprice", async (req, res) => {
//   try {
//     const { kidspizzaprice } = req.body;
//     await pool.query('UPDATE tipsdistributiondata SET kidspizzaprice = $1', [kidspizzaprice]);
//     res.json(`Fulltips was updated to ${kidspizzaprice} %`);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Internal Server Error');
//   }
// });

// app.put("/data/fieldtripprice", async (req, res) => {
//   try {
//     const { fieldtripprice } = req.body;
//     await pool.query('UPDATE tipsdistributiondata SET fieldtripprice = $1', [fieldtripprice]);
//     res.json(`Fulltips was updated to ${fieldtripprice} %`);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Internal Server Error');
//   }
// });

// app.put("/data/pizzatipspercent", async (req, res) => {
//   try {
//     const { pizzatipspercent } = req.body;
//     await pool.query('UPDATE tipsdistributiondata SET pizzatipspercent = $1', [pizzatipspercent]);
//     res.json(`Fulltips was updated to ${pizzatipspercent} %`);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Internal Server Error');
//   }
// });

// app.put("/data/kitchentipspercent", async (req, res) => {
//   try {
//     const { kitchentipspercent } = req.body;
//     await pool.query('UPDATE tipsdistributiondata SET kitchentipspercent = $1', [kitchentipspercent]);
//     res.json(`Fulltips was updated to ${kitchentipspercent} %`);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Internal Server Error');
//   }
// });

// app.put("/data/fronttipspercent", async (req, res) => {
//   try {
//     const { fronttipspercent } = req.body;
//     await pool.query('UPDATE tipsdistributiondata SET fronttipspercent = $1', [fronttipspercent]);
//     res.json(`Fulltips was updated to ${fronttipspercent} %`);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Internal Server Error');
//   }
// });

// app.put("/data/sundayspizzatip", async (req, res) => {
//   try {
//     const { sundayspizzatip } = req.body;
//     await pool.query('UPDATE tipsdistributiondata SET sundayspizzatip = $1', [sundayspizzatip]);
//     res.json(`Fulltips was updated to ${sundayspizzatip} %`);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Internal Server Error');
//   }
// });