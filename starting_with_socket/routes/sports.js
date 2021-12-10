/**
 * Web Atelier 2021  Exercise 6 - MongoDB
 *
 * Edited by Alessandro Cravioglio
 *
 */

const express = require('express');
const router = express.Router();
module.exports = router;
const jsmediatags = require('jsmediatags');
const fs = require('fs-extra');

// DB
const model = require('../models/index.js').model;
const ObjectId = require('mongodb').ObjectId;

// ROUTES
router.get("/", function (req, res) {
   model.sport.find({}).toArray().then(result => {
      if (req.query.place !== undefined) {
         let place = req.query.place;
         res.status(200);
         res.json(result);
      } else {
         res.status(200);
         if(req.accepts("application/json"))
            res.json(result);
         else if (req.accepts("text/html"))
         // TODO: all EJS 
         // ??????
            res.render("../views/includes/activity_table.ejs", { result: result, ge: "no"})
      }    
   })
})

router.get('/upload', function (req, res) {
   res.status(200).json();
})

router.get('/about', function (req, res) {

})

// GET AND EDIT SPORT ACTIVITY

router.get('/:id', function (req, res) {

   let filter = { _id: new ObjectId(req.params.id)};
   model.sport.findOne(filter).then(result => {
      if (result === null) {
         res.status(404).end();
      } else {
         res.status(200).json(result);
      }
   });
});

router.get('/:id/edit', function (req, res) {

   let filter = { _id: new ObjectId(req.params.id) };
   model.sport.findOne(filter).then(result => {
      if (result === null) {
         res.status(404).end();
      } else {
         res.render('../views/edit.ejs', { result: result });
      }
   })
})

// POST AND PUT

// post activity

router.post('/', function (req, res) {
   console.log(req.body);
   const newActivity = {
     
      instructor: req.body.instructor,
      title: req.body.title,
      place: req.body.place,
 
      duration: req.body.duration,
      quantity: req.body.quantity,

      desc: req.body.desc,
   };
});

router.put('/:id', function (req, res) {
   // where is the updated file ? you just update the db

   const newActivity = {
      // TODO: verify fields of newActivity
      instructor: req.body.instructor,
      title: req.body.title,
      place: req.body.place,
      src: req.body.src,
      duration: req.body.duration,
      quantity: req.body.quantity,
      desc: req.body.desc
   };
   
   let filter = { _id: new ObjectId(req.params. id)};
   const update = { $set: newActivity }
   model.sport.updateOne(filter, update)
   .then(result => {
      let found = (result.upsertedCount == 0);
      if (found) {
         res.status(200).json(newActivity);
      } else { 
         res.status(201).json(newActivity);
      }
   })
});

// DELETE
router.delete('/:id', function (req, res) {

   let filter = { _id: new ObjectId(req.params.id)};
   model.sport.findOneAndDelete(filter).then(result => {
      if (result.value == null) {
         res.status(404).end();
      } else {
         if (req.accepts("html")) {
            // ????????
            res.redirect("/activities");
         } else {
            res.status(204).end();
         }
      }
   })
});