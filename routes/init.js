/**
*
* Edited by Alessandro Cravioglio 
*
* /songs API router
*
*/

const express = require('express');
const router = express.Router();
module.exports = router;
const jsmediatags = require('jsmediatags');
const fs = require('fs-extra');

const model = require('../models/index.js').model;

// TODO: rework all views

router.get('/', function(req, res) {
 
    model.sport.find({}).toArray().then(result => {
        res.status(200).json(result);
    })
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
 