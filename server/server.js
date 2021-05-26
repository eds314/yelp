require('dotenv').config()

const express = require('express')

const morgan = require('morgan')

const app = express()

//This is middleware. Always define middle ware before route handelrs
// app.use(morgan("dev"))
// app.use((req,res, next) => {
//   console.log("yay our middleware ran")
//   next();
// })

app.use(express.json());


//Get all Restuarants rout handler
app.get("/api/v1/getRestaurants", (req, res) => {
  console.log("route handler ran")
  res.status(200).json({
    status: 'success',
    data: {
      restaurant: ["McDonalds", "Wendys"],
    }
    
  })
})

//Get individual restaurant route handler
app.get("/api/v1/restaurants/:restaurantid", (req, res) => {
  console.log(req.params);
});

//Create a restaurant route handler
app.post("/api/v1/restaurants", (req, res) => {
  console.log(req.body);
})

// || default value
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`)
})