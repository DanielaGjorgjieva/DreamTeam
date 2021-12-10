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

// GET user

router.get('/:id', function(req, res) {

    let filter = { _id: new ObjectId(req.params.id)};
 
    try {
       model.user.findOne(filter)
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

// create user
router.get('/singin', function(req, res) {
    try {
       res.status(200);
    } catch {
       notFound();
    }
})

// get login
router.get('/login', function (req, res) {
    try {
       res.status(200);
    } catch {
       notFound();
    }
})

// post user
router.post('/', function (req, res) {

    try {
        const newUser = {
            // TODO: manage password
            username: req.body.username,
            password: req.body.password,
            created: [],
            joined: [],
            guest: false
        }
    
       // TODO: complete
       model.user.insertOne(newActivity)
       .then(result => {
          console.log(result);
          
          // INSERT SOCKET EVENT HERE
       
          // sent new object as json response
          res.status(201).json(newUser);
       })
       .catch(error => {
          console.error(error);
          notFound();
       })
    } catch {
       notFound();
    }
})

// edit user
router.put('/:id', function (req, res) {

    try {
        const newUser = {
            // TODO: manage password
            username: req.body.username,
            password: req.body.password,
            created: [],
            joined: [],
            guest: false
        }
    
       // TODO: complete
       model.user.replaceOne(newActivity)
       .then(result => {
          console.log(result);
          
          // INSERT SOCKET EVENT HERE
       
          // sent new object as json response
          res.status(201).json(newUser);
       })
       .catch(error => {
          console.error(error);
          notFound();
       })
    } catch {
       notFound();
    }
})

// delete user
// be careful about that: how can a user be deleted?
// user delete should take o a "guest" state the page:
// delete the user from database; now localstorage should
// contain a fake user with all fields empty
// apart from guest = true

router.delete('/:id', function (req, res) {

    let filter = { _id: new ObjectId(req.params.id)};
 
    try {
       model.user.findOneAndDelete(filter)
       .then(result => {
          if (result.value == null) {
             res.status(404).end();
          } else {
             res.status(204).end();
          }
       })
    } catch {
       notFound();
    }
})