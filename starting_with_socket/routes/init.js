/**
* 
* Student: Daniela Gjorgjieva
*
* Edited by Alessandro Cravioglio 
*
* /songs API router
*
*/

const express = require('express');
const router = express.Router();
module.exports = router;

const sync = require("../models/sync.js")


const jsmediatags = require('jsmediatags');
const fs = require('fs-extra');

const model = require('../models/index.js').model;

// TODO: rework all views

router.get('/', function(req, res) {
 
    model.sport.find({}).toArray().then(result => {
        res.status(200);
        res.render("../views/songs.ejs", {result: result});
    })

});

router.get('/home', function(req, res) {
 
    model.sport.find({}).toArray().then(result => {
        res.status(200);
        res.json(result);
    })

});

// is this route somehow useful? -alessandro
router.get('/playlist', function(req, res) {
    model.sport.find({}).toArray().then(result => {
    if(req.accepts("html")) {
        res.render("../views/includes/player.ejs", {result: result});
    }})
})

// see comment above
router.get('/play', function(req, res) {
    model.sport.find({}).toArray().then(result => {
    if(req.accepts("html")) {
        res.render("../views/includes/play.ejs", {result: result});
    }})
})

// REMOTE feature could be implemented: think about that
router.get("/player/remote", function (req, res) {
    res.status(200).json();
})


 
 
 