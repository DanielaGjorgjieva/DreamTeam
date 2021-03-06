/**
 * Web Atelier 2021  Exercise 6 - MongoDB
 *
 * Student: Alessandro Cravioglio
 *
 * Task 1
 *
 */

const mongodb = require('mongodb');
require('dotenv').config('../.env');
const ObjectId = mongodb.ObjectId;
const MongoClient = mongodb.MongoClient;

//
const mongoose = require('mongoose');
const crypto = require('crypto');

const db_name = 'web-atelier-project';
// first collection:s sports
const sport_name = 'sport';
// second collectin: users
const users_name = 'user';
// TODO: after the website is converted to sport application
// NEW COLLECTION -> USERS

const model = {};

// now using ATLAS to deploy the MONGOdb database

// env file? -> useful?
const url = process.env.ATLAS_URI;


// connection parameters

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

MongoClient
    .connect(url, connectionParams)
    .then(client => {
        console.log("Connected to database");
        model.db = client.db(db_name);
        model.sport = model.db.collection(sport_name);
        model.user = model.db.collection(users_name);
    })
    .catch(err => console.error(err));

exports.model = model;