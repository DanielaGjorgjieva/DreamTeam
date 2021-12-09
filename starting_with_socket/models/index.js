/**
 * Web Atelier 2021  Exercise 6 - MongoDB
 *
 * Student: Alessandro Cravioglio
 *
 * Task 1
 *
 */

const mongodb = require('mongodb');
const ObjectId = mongodb.ObjectId;
const MongoClient = mongodb.MongoClient;

const mongodb_uri = 'mongodb://localhost:27017';
const db_name = 'web-atelier-project';
// first collection:s sports
const sport_name = 'sport';
// second collectin: users
const users_name = 'users';
// TODO: after the website is converted to sport application
// NEW COLLECTION -> USERS

const model = {};


MongoClient
    .connect(mongodb_uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
        console.log("Connected to ", mongodb_uri);
        model.db = client.db(db_name);
        model.sport = model.db.collection(sport_name);
        model.users = model.db.collection(users_name);

    })
    .catch(err => console.error(err));


exports.model = model;