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
const { eventBus } = require("../ws.js");

// ROUTES
router.get("/", function (req, res) {

   try {
      model.sport.find({}).toArray()
         .then(result => {
            res.status(200).json(result);
         }).catch(error => {
            console.error(error);
            res.status(404).end();
         })
   } catch {
      res.status(404).end();
   }
})

// GET AND EDIT SPORT ACTIVITY

router.get('/:id', function (req, res) {

let filter = { _id: new ObjectId(req.params.id) };

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
         res.status(404).end();
      })
   } catch {
      res.status(404).end();
   }
});

router.get('/:id/edit', function (req, res) {

   let filter = { _id: new ObjectId(req.params.id) };

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
         res.status(404).end();
      })
   } catch {
      res.status(404).end();
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
         chat: [],
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
         
         res.status(404).end();
      })
   } catch {
      res.status(404).end();
   }
});

// JOIN SPORT
router.put('/:id/join', function (req, res) {

   let sportFilter = { _id: new ObjectId(req.params.id)};
   let userFilter = {username: req.body.user};
   console.log(userFilter);
   let event = undefined;
   let joinUser = undefined;

   try {
      model.user.findOne(userFilter)
      .then((result) => {
         joinUser = result;
      });
   } catch {
      res.status(404).end();
   }

   try {
      model.sport.findOne(sportFilter)
      .then((result) => {
         // add user to events members
         result.members.push(joinUser);
         event = result;
         console.log(event);

      })
      .then(() => {
         model.sport.updateOne(sportFilter, event);
      })
      .then(() => {
         // add event to user joined events
         model.user.findOne(userFilter)
         .then((result) => {
            result.joined.push(event);
         })
         .then(() => {
            model.sport.updateOne(userFilter, result);
         })
      })
      .then(() => {
         res.status(201).json(event);
      })
      .catch(error => {
         console.error(error);
         res.status(404).end();
      })
   } catch {
      res.status(404).end();
   }
})

// EDIT THE SPORT ACTIVITY
router.put('/:id', function (req, res) {

   let filter = { _id: new ObjectId(req.params.id) };

   try {
      // find old activity
      model.sport.findOne(filter)
      .then((result) => {

         const newActivity = {
            sport: req.body.sport,
            // owner: req.body.owner,
            description: req.body.description || result.description,
            place: req.body.place || result.place,
            frequency: req.body.frequency || result.frequency,
            date: req.body.date || result.date,
            members: result.members,
            chat: result.chat,
            max_members: req.body.max_members || result.max_members
         };
      })
      .then(() => 
      model.sport.updateOne(filter, newActivity)
      )
      .then(result => {
         console.log(result);

         eventBus.emit('sport.edited', result);

         // sent new object as json response
         res.status(200).json(newActivity);
      })
      .catch(error => {
         console.error(error);
         res.status(404).end();
      })
   } catch {
      res.status(404).end();
   }
});

// DELETE
router.delete('/:id', function (req, res) {

   let filter = { _id: new ObjectId(req.params.id) };

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
      res.status(404).end();
   }
});


router.get('/about', function (req, res) {
   try {
      res.status(200);
   } catch {
      res.status(404).end();
   }
})
router.get('/upload', function (req, res) {
   try {
      res.status(200);
   } catch {
      res.status(404).end();
   }
})