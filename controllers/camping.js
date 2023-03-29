const express = require("express")
const router = express.Router()
const Camping = require("../models/camping.js")

//  ========================
//  ===     ROUTES  === 
//  ========================
router.get("/camping", (req, res) => {
    Camping.find({})
    .then((foundCamp) => {
        res.json(foundCamp)
    });
});

// ===  Add ===
router.post("/camping", (req,res) => {
    Camping.create(req.body)
    .then((createdCamp) =>
    {
        res.json(createdCamp);
    });
});
//  === Update  ===
router.put("/camping/:id", (req, res) => {
    Camping.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
      (updatedCamp) => res.json(updatedCamp)
    );
  });
//  === DELETE  ===
router.delete("/camping/:id", (req,res) => {
    Camping.findByIdAndDelete(req.params.id).then((deletedCamp) => {
        res.json(deletedCamp)
    })
})

module.exports = router