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
 
    try {
        model.sport.find({}).toArray().then(result => {
            res.status(200).type("application/json").json(result);
            console.log("/ -> sended: ");
            console.log(result);
        })
    } catch (error) {
        console.log(error);
        res.status(404).end();
    }
});

router.get('/upload', function (req, res) {
    try {
       res.status(200).json({});
    } catch {
       res.status(404).end();
    }
 })

router.get('/about', function (req, res) {
    try {
       res.status(200).json({});
    } catch {
        res.status(404).end();
    }
 })
 