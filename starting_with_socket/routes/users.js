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
    // go to profile page
})

// create user
router.get('/singin', function(req, res) {
    // go to signin page
})

// get login
router.get('/login', function (req, res) {

})

// post user
router.post('/', function (req, res) {

    const newUser = {
        // TODO: manage password
        username: req.body.username,
        password: req.body.password,
        created: [],
        joined: []
    }

})

// delete user
router.delete('/:id', function (req, res) {
    // delete user
    // redirect to main
})

// edit user
router.put('/:id', function (req, res) {
})