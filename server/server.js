require("dotenv").config();

const express = require("express");

const db = require("./db");

const morgan = require("morgan");

const app = express();

//This is middleware. Always define middle ware before route handelrs
// app.use(morgan("dev"))
// app.use((req,res, next) => {
//   console.log("yay our middleware ran")
//   next();
// })

app.use(express.json());

//Get all Restuarants route handler
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query("select * from restaurants");

    console.log(results);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurant: results.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//Get individual restaurant route handler
app.get("/api/v1/restaurants/:id", async (req, res) => {
  console.log(req.params.id);

  try {
    const results = await db.query("select * from restaurants where id = $1", [
      req.params.id,
    ]);
    
    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//Create a restaurant route handler
app.post("/api/v1/restaurants", (req, res) => {
  console.log(req.body);

  res.status(201).json({
    status: "success",
    data: {
      restaurant: "McDonalds",
    },
  });
});

//Update Restaurants

app.put("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);

  res.status(200).json({
    status: "success",
    data: {
      restaurant: "McDonalds",
    },
  });
});

//Delete Restaurants

app.delete("/api/v1/restaurants/:id", (req, res) => {
  res.status(204).json({
    status: "success",
  });
});

// || default value
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
