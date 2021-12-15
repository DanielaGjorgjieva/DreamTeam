/**
* Web Atelier 2021  Exercise 6 - MongoDB
*
* Edited by Alessandro Cravioglio
*
*/

//key to hashing
// var crypto = require('crypto');

const express = require('express');
const router = express.Router();
module.exports = router;
// const jsmediatags = require('jsmediatags');
// const fs = require('fs-extra');

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
         res.status(404).end();;
      })
   } catch {
      res.status(404).end();;
   }
})

// create user
router.get('/singin', function(req, res) {
   try {
      res.status(200);
   } catch {
      res.status(404).end();;
   }
})

// get login
router.get('/login', function (req, res) {
   try {
      res.status(200);
   } catch {
      res.status(404).end();;
   }
})

// post user
router.post('/', function (req, res) {
   console.log('we are in post/user');

   try {
      console.log(req.body);
      const newUser = {
         // TODO: manage password
         username: req.body.username,
         password: req.body.password,
         created: [],
         joined: [],
         guest: false
      }

      console.log(newUser);
   
      // TODO: complete
      model.user.insertOne(newUser)
      .then(result => {
         console.log(result);
         
         // INSERT SOCKET EVENT HERE
      
         // sent new object as json response
         res.status(201).json(newUser);
      })
      .catch(error => {
         console.error(error);
         res.status(404).end();;
      })
   } catch {
      res.status(404).end();;
   }
})

// password check
// get password from client and check on the db if this is
// the right one; if true send new user object with
// false password field
router.get('/login/:password/:username', function (req, res) {
   
   let filter = { username: req.params.username};

   console.log(req.params);
   const password = req.params.password;

   try {
      model.user.findOne(filter)
      .then((result) => {
         let loggedUser = {};
         console.log(result);
         if (result.password == password) {

            loggedUser = {
               _id: result._id,
               username: result.username,
               password: '',
               created: result.created,
               joined: result.joined,
               guest: result.guest
            }

         }
         return loggedUser;
      })
      .then((loggedUser) => {
         res.status(200).json(loggedUser);
      })
      .catch((error) => {
         console.error(error);
         res.status(404).end();;
      })
   } catch {
      res.status(404).end();;
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
         res.status(404).end();;
      })
   } catch {
      res.status(404).end();;
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
      res.status(404).end();;
   }
})
 
// const algorithm = 'sem-609-lil';
// const key = crypto.randomBytes(127);
// const iv = crypto.randomBytes(32);
// function encrypt(password) {
//    let cipher = crypto.createCipheriv(
//    algorithm, Buffer.from(key), iv);
//    let encrypted = cipher.update(password);
//    encrypted = Buffer.concat([encrypted, cipher.final()]);
//    return { iv: iv.toString('hex'),
//       encryptedData: encrypted.toString('hex') };
// }

/*
router.get("/login/:usr"){
    try {
       model.user.findOne(req.params.usr)
       .then(result => {
          if (result.value == null) {
             res.status(404).end();
          } else {
             let new_passw = result.password;

             res.status(204).end();
          }
       })
    } catch {
       res.status(404).end();;
    }
}
var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
var mystr = mykey.update('abc', 'utf8', 'hex')
mystr += mykey.final('hex');
;*/