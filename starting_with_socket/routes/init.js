/**
* Web Atelier 2021  Exercise 5 - Express and EJS
*
* Student: 
*
* /songs API router
*
* This module skeleton exports the routes for Task 1
*
* You can extend it to include the routes for Task 2
*
*/

const express = require('express');
const router = express.Router();
module.exports = router;

const sync = require("../models/sync.js")


const jsmediatags = require('jsmediatags');
const fs = require('fs-extra');

const model = require('../models/index.js').model;

const musicfolder = "public/music"


router.get('/', function(req, res) {
 
    model.music.find({}).toArray().then(result => {
        res.status(200);
        res.render("../views/songs.ejs", {result: result});
    })

});

router.get('/home', function(req, res) {
 
    model.music.find({}).toArray().then(result => {
        res.status(200);
        res.json(result);
    })

});

router.get('/playlist', function(req, res) {
    model.music.find({}).toArray().then(result => {
    if(req.accepts("html")) {
        res.render("../views/includes/player.ejs", {result: result});
    }})
})

router.get('/play', function(req, res) {
    model.music.find({}).toArray().then(result => {
    if(req.accepts("html")) {
        res.render("../views/includes/play.ejs", {result: result});
    }})
})



router.get('/music/*.mp3', function(req, res) {
    res.sendFile('${req.params[0]}.mp3', {root: '/music/'}, err => {
        res.status(404).end();
    })
})

router.get("/player/remote", function (req, res) {
    res.status(200).json();
})


 
 
 