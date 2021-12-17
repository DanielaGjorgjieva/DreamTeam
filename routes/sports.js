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
const { eventBus } = require("../webServer.js");
// const PersistentFile = require('formidable/PersistentFile');

// ROUTES
router.get("/", function (req, res) {
   try {
      model.sport.find({}).toArray()
         .then(result => {
            res.status(200).json(result); //returns the sport array
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
         console.log('insertONE:');
         console.log(result);

         // eventBus.emit('sport.uploaded', newActivity);

         let userFilter = {username: req.params.owner};
         model.user.findOne(userFilter)
         .then((user) => {
            // console.log('PORCOPIO');
            console.log(newActivity._id);
            user.created.push(newActivity._id);
            
            let msg={sport: newActivity};
            eventBus.emit('sport.upload', msg);

            model.user.replaceOne(userFilter, user, {upsert: true})
            .then(()=>res.status(201).json(newActivity));
         })       
         
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
router.put('/:id/join/', function (req, res) {
   let msg;
   let sportFilter = { _id: new ObjectId(req.params.id)};
   let userFilter = {username: req.body.user};
   console.log(userFilter);
   let event = undefined;
   let joinUser = undefined;
  
   try {
      model.user.findOne(userFilter)
      .then((result) => {
         joinUser = result;
         // sport _id is added to user.joined
         joinUser.joined.push(sportFilter._id);
         console.log("joinUser");
         console.log(joinUser);
      })
      .then(() => {
         model.user.replaceOne(userFilter, joinUser, {upser: true});
      })
   } catch {
      res.status(404).end();
   }

   try {

      // add user joinUser to sport
      model.sport.findOne(sportFilter)
      .then((result) => {
         result.members.push(joinUser._id);
         event = result;
         console.log("result", result);
         return result;
      })
      .then((result) => {
         model.sport.replaceOne(sportFilter, result, {upsert: true});
      })
      .then(() => {
         eventBus.emit('sport.joined', msg);
         res.status(201).json(event);
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
         console.log(result);

         const newActivity = {
            sport: req.body.sport,
            owner: result.owner,
            description: req.body.description || result.description,
            place: req.body.place || result.place,
            frequency: req.body.frequency || result.frequency,
            date: req.body.date || result.date,
            members: result.members,
            chat: result.chat,
            max_members: req.body.max_members || result.max_members
         };
         model.sport.replaceOne(filter, newActivity)
         return newActivity;
      })
      .then(result => {
         console.log(result);

         eventBus.emit('sport.edited', result);

         // sent new object as json response
         res.status(200).json(result);
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
   let msg = {id: req.params.id};
   let filter = { _id: new ObjectId(req.params.id) };

   try {
      model.sport.findOneAndDelete(filter)
      .then(result => {
         if (result.value == null) {
            res.status(404).end();
         } else {
            eventBus.emit('sport.deleted', msg);
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

router.get('/:id/activities', function(req,res) {
   res.status(200).json({a:req.params.id});
})

router.get('/:id/leave/:userid', function (req, res) {
   let msg = {user: ""};
   let filter = { _id: new ObjectId(req.params.id) };
   let userFilter = { _id: new ObjectId(req.params.userid) };
   try {
      model.sport.findOne(filter)
         .then((result) => {
            let newmembers = [];
            for(let i = 0; i < result.members.length ; ++i){
               if(result.members[i].toString() !== req.params.userid){
                  newmembers.push(result.members[i]);
               }
            }
            result.members = newmembers;
            model.sport.replaceOne(filter, result);
            model.user.findOne(userFilter)
               .then((res_user) => {
                  msg.user = res_user.username;
                  let newjoined = [];
                  for(let i = 0; i < res_user.joined.length ; ++i){
                     if(res_user.joined[i].toString() !== req.params.id){
                        newjoined.push(res_user.joined[i]);
                     }
                  }
                  res_user.joined = newjoined;
                  console.log(res_user);
                  model.user.replaceOne(userFilter, res_user);
                  eventBus.emit('sport.left', msg);
                  res.status(200).json(res_user);
               })
         })
   }
   catch {
      res.status(404).end();
   }
})

