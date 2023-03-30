//___________________
//Dependencies
//___________________
const express = require('express');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
require('dotenv').config()
const Camping = require("../project_3_backend/models/camping")
const Hiking = require("../project_3_backend/models/hiking")
const cors = require("cors")
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT
//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI).then(() =>{
  console.log("connected to mongo")
})

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project
app.use(cors());//allows us access from another port or domain
//___________________
//=== CONTROLLERS === 
//___________________
const campingController = require("./controllers/camping.js")
app.use("/camping", campingController)


//___________________
// Routes
//___________________
//localhost:3000
app.get('/' , (req, res) => {
  res.send('Hello World!');
});
//____________________________
/// === CAMPING ===
//_____________________________
app.get("/camping", (req, res) => {
  Camping.find({})
  .then((foundCamp) => {
      res.json(foundCamp)
  });
});
// ===  Add ===
app.post("/camping", (req,res) => {
  Camping.create(req.body)
  .then((createdCamp) =>
  {
      res.json(createdCamp);
  });
});
//  === Update  ===
app.put("/camping/:id", (req, res) => {
  Camping.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updatedCamp) => res.json(updatedCamp)
  );
});
//  === DELETE  ===
app.delete("/camping/:id", (req,res) => {
  Camping.findByIdAndDelete(req.params.id).then((deletedCamp) => {
      res.json(deletedCamp)
  })
})

//____________________________
/// === HIKING ===
//_____________________________
app.get("/hiking", (req, res) => {
  Hiking.find({})
  .then((foundHike) => {
      res.json(foundHike)
  });
});
// ===  Add ===
app.post("/hiking", (req,res) => {
  Hiking.create(req.body)
  .then((foundHike) =>
  {
      res.json(foundHike);
  });
});
//  === Update  ===
app.put("/hiking/:id", (req, res) => {
  Hiking.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updatedHike) => res.json(updatedHike)
  );
});
//  === DELETE  ===
app.delete("/hiking/:id", (req,res) => {
  Hiking.findByIdAndDelete(req.params.id).then((deletedHike) => {
      res.json(deletedHike)
  })
})




//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));