/**
 * Web Atelier 2021  Exercise 6 - MongoDB
 *
 * Student: __STUDENT NAME__
 *
 * /activitys API router
 *
 *
 */

/**
 * TODO: REPLACE WITH THE music.js FILE FROM YOUR PREVIOUS ASSIGNMENT
 * THEN REWRITE TO READ/WRITE TO THE DATABASE INSTEAD OF THE data.json FILE
 */

const express = require('express');
const router = express.Router();
module.exports = router;



const jsmediatags = require('jsmediatags');
const fs = require('fs-extra');


const model = require('../models/index.js').model;

const ObjectId = require('mongodb').ObjectId;


router.get("/", function (req, res) {
   model.music.find({}).toArray().then(result => {

      if (req.query.place !== undefined) {
         let place = req.query.place;
         console.log("Gnere put");
         res.status(200);
         res.json(result);
         // res.render("../views/includes/activity_table_place.ejs", { result: result, ge: place });
      } else {
         res.status(200);
         if(req.accepts("application/json"))
            res.json(result);
         else if (req.accepts("text/html"))
            res.render("../views/includes/activity_table.ejs", { result: result, ge: "no"})
      }

      
   })
})

router.get("/home", function (req, res) {
   model.music.find({}).toArray().then(result => {

      res.status(200);
      res.json(result);
   })
})
router.delete('/:id', function (req, res) {

   let filter = { _id: new ObjectId(req.params.id)};
   model.music.findOneAndDelete(filter).then(result => {
      if (result.value == null) {
         res.status(404).end();
      } else {
         if (req.accepts("html")) {
            res.redirect("/activities");
         } else {
            res.status(204).end();
         }
      }
   })
});


router.get('/upload', function (req, res) {
   res.status(200).json();
})

router.get('/:id/edit', function (req, res) {

   let filter = { _id: new ObjectId(req.params.id) };
   model.music.findOne(filter).then(result => {
      if (result === null) {
         res.status(404).end();
      } else {
         res.render('../views/edit.ejs', { result: result });
      }
   })



})



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


   // delete this for later becauce we don;t need files now
   /* TODO: file = null */
   let file = req.files["filename"];
   console.log(file)
   file.mv("public/music/" + file.name).then(() => {
      return model.music.insertOne(newActivity)
   }).then((result) => {
      console.log(result.insertedId);
      newActivity._id = result.insertedId;
      return newActivity;
      // return model.music.find({}).toArray();
   }).then((result) => {
      res.status(201).json(result);
   })
});




   

   

   


router.get('/:id', function (req, res) {

   let filter = { _id: new ObjectId(req.params.id)};
   model.music.findOne(filter).then(result => {
      if (result === null) {
         res.status(404).end();
      } else {
         res.status(200).json(result);
      }
   });


});

//  router.get('/upload', function(req, res) {
//    res.render('../views/includes/upload.ejs');
// })




router.put('/:id', function (req, res) {
   // where is the updated file ? you just update the db 
   // TODO

   const newActivity = {
    
      instructor: req.body.instructor,
      title: req.body.title,
      place: req.body.place,
   
      src: req.body.src,
 
      duration: req.body.duration,
      quantity: req.body.quantity,
       desc: req.body.desc,
      _id: new ObjectId(req.params.id)
   };
   

   let filter = { _id: new ObjectId(req.params. id)};
   const update = { $set: newActivity }
   model.music.updateOne(filter, update)
      .then(result => {
         let found = (result.upsertedCount == 0);
         if (found) {
            res.status(200).json(newActivity);
         } else { 
            res.status(201).json(newActivity);
         }
      })

    // check if thhe file is modified 
    // in case yes, update the file in the fs 
    // That ' sassignement 6 
});





