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
 
 //SOCKET
 const {eventBus} = require("../ws.js");
 
 // DEFAULT NOT FOUND
 function notFound() {res.status(404).end()};
 
 // ROUTES
 router.get("/", function (req, res) {
    
    try {
       model.sport.find({}).toArray()
       .then(result => {
          res.status(200).json(result);
       }).catch(error => {
          console.error(error);
          notFound();
       })
    } catch {
       notFound();
    }
 })
 
 // GET AND EDIT SPORT ACTIVITY
 
 router.get('/:id', function (req, res) {
 
    let filter = { _id: new ObjectId(req.params.id)};
 
    try {
       model.sport.findOne(filter)
       .then(result => {
          if (result === null) {
             res.status(404).end();
          } else {
             res.status(200).json(result);
          }
       })
       .catch(error => {
          console.error(error);
          notFound();
       })
    } catch {
       notFound();
    }
 });
 
 router.get('/:id/edit', function (req, res) {
 
    let filter = { _id: new ObjectId(req.params.id)};
 
    try {
       model.sport.findOne(filter)
       .then(result => {
          if (result === null) {
             res.status(404).end();
          } else {
             res.status(200).json(result);
          }
       })
       .catch(error => {
          console.error(error);
          notFound();
       })
    } catch {
       notFound();
    }
 })
 
 // POST AND PUT
 
 // post activity
 
 router.post('/:owner', function (req, res) {
    try {
       const newActivity = {
          sport: req.body.sport,
          owner: req.params.owner,
          description: req.body.description,
          place: req.body.place,
          frequency: req.body.frequency,
          date: req.body.date,
          members: [],
          max_members: req.body.max_members,
       };
    
       // TODO: complete
       model.sport.insertOne(newActivity)
       .then(result => {
          console.log(result);
          
          eventBus.emit('sport.uploaded', newActivity);
       
          // sent new object as json response
          res.status(201).json(newActivity);
       })
       .catch(error => {
          console.error(error);
          notFound();
       })
    } catch {
       notFound();
    }
 });
 
 router.put('/:id', function (req, res) {
 
    try {
       const newActivity = {
          sport: req.body.sport,
          // owner: req.body.owner,
          description: req.body.description,
          place: req.body.place,
          frequency: req.body.frequency,
          date: req.body.date,
          members: [],
          max_members: req.body.max_members,
       };
    
       // TODO: complete
       model.sport.updateOne(filter, newActivity)
       .then(result => {
          console.log(result);
          
          eventBus.emit('sport.edited', result);
       
          // sent new object as json response
          res.status(200).json(newActivity);
       })
       .catch(error => {
          console.error(error);
          notFound();
       })
    } catch {
       notFound();
    }
 });
 
 // DELETE
 router.delete('/:id', function (req, res) {
 
    let filter = { _id: new ObjectId(req.params.id)};
 
    try {
       model.sport.findOneAndDelete(filter)
       .then(result => {
          if (result.value == null) {
             res.status(404).end();
          } else {
             eventBus.emit('sport.deleted', result);
             res.status(204).end();
          }
       })
    } catch {
       notFound();
    }
 });


router.get('/about', function (req, res) {
   try {
      res.status(200);
   } catch {
      notFound();
   }
})
router.get('/upload', function (req, res) {
   try {
      res.status(200);
   } catch {
      notFound();
   }
})