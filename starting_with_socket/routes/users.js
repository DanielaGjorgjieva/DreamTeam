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

})

// create user
router.get('/sing_in', function(req, res) {

})

// post user
router.post('/', function (req, res) {

})

// delete user
router.delete('/:id', function (req, res) {

})

// edit user
router.put('/:id', function (req, res) {

})