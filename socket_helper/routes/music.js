/**
 * Web Atelier 2021  Exercise 6 - MongoDB
 *
 * Student: __STUDENT NAME__
 *
 * /songs API router
 *
 *
 */

/**
 * TODO: REPLACE WITH THE music.js FILE FROM YOUR PREVIOUS ASSIGNMENT
 * THEN REWRITE TO READ/WRITE TO THE DATABASE INSTEAD OF THE data.json FILE
 */

const express = require('express');
const router = express.Router();
module.exports = router;

// const generate_songs = require('../metadata.js')
// generate_songs.init();
// const song_data = require('../data.json');
// const song_data_ejs = require('../data.json');
// if (song_data === null) {
//     console.log("Couldn't log song_data.")
// }


const jsmediatags = require('jsmediatags');
const fs = require('fs-extra');


const model = require('../models/index.js').model;

const ObjectId = require('mongodb').ObjectId;


router.get("/", function (req, res) {
   model.music.find({}).toArray().then(result => {

      if (req.query.genre !== undefined) {
         let genre = req.query.genre;
         console.log("Gnere put");
         res.status(200);
         res.json(result);
         // res.render("../views/includes/song_table_genre.ejs", { result: result, ge: genre });
      } else {
         res.status(200);
         if(req.accepts("application/json"))
            res.json(result);
         else if (req.accepts("text/html"))
            res.render("../views/includes/song_table.ejs", { result: result, ge: "no"})
      }

      
   })
})

router.get("/home", function (req, res) {
   model.music.find({}).toArray().then(result => {

      res.status(200);
      res.json(result);
   })
})
router.delete('/:id', function (req, res) {

   let filter = { _id: new ObjectId(req.params.id)};
   model.music.findOneAndDelete(filter).then(result => {
      if (result.value == null) {
         res.status(404).end();
      } else {
         if (req.accepts("html")) {
            res.redirect("/songs");
         } else {
            res.status(204).end();
         }
      }
   })
});


router.get('/upload', function (req, res) {
   res.status(200).json();
})

router.get('/:id/edit', function (req, res) {

   let filter = { _id: new ObjectId(req.params.id) };
   model.music.findOne(filter).then(result => {
      if (result === null) {
         res.status(404).end();
      } else {
         res.render('../views/edit.ejs', { result: result });
      }
   })



})



router.post('/', function (req, res) {

   console.log(req.body);
   const newSong = {
      title: req.body.title,
      artist: req.body.artist,
      album: req.body.album,
      genre: req.body.genre,
      filename: req.files["filename"].name,
      src: "music/" + req.files["filename"].name,
      size: req.body.size,
      duration: req.body.duration,
      quality: req.body.quality,
      favorite: req.body.favorite,
      desc: req.body.desc,
   };

   /* TODO: file = null */
   let file = req.files["filename"];
   console.log(file)
   file.mv("public/music/" + file.name).then(() => {
      return model.music.insertOne(newSong)
   }).then((result) => {
      console.log(result.insertedId);
      newSong._id = result.insertedId;
      return newSong;
      // return model.music.find({}).toArray();
   }).then((result) => {
      res.status(201).json(result);
   })
});


router.post('/fake', function (req, res) {
   var songs = []
   var promises = []

   for(let i = 0; i < 500000; i++) {
      const newSong = {
         title: i,
         artist: i,
      }
      songs.push(newSong)
   }

   model.music.deleteMany({}).then(result => {
      songs.forEach((song,i=0) => {
         model.music.insertOne(song).then(result => {

            promises.push(result);
            console.log(i++);
         })
         
      })
      Promise.all(promises).then((a) => { 
         res.send("ok").status(200);
      })
   });

   

   

   


   // /* TODO: file = null */
   // let file = req.files["filename"];
   //  file.mv(__dirname + "/../music/" + file.name, function(err) {
   //    //The uploaded file has been moved
   // });

   // model.music.insertOne(newSong).then(result => {
   //    console.log(result);
   // })

   // res.status("201").json(newSong);

});

router.get('/:id', function (req, res) {

   let filter = { _id: new ObjectId(req.params.id)};
   model.music.findOne(filter).then(result => {
      if (result === null) {
         res.status(404).end();
      } else {
         res.status(200).json(result);
      }
   });


});

//  router.get('/upload', function(req, res) {
//    res.render('../views/includes/upload.ejs');
// })




router.put('/:id', function (req, res) {
   // where is the updated file ? you just update the db 
   // TODO

   const newSong = {
      title: req.body.title,
      artist: req.body.artist,
      album: req.body.album,
      genre: req.body.genre,
      filename: req.body.filename,
      src: req.body.src,
      size: req.body.size,
      duration: req.body.duration,
      quality: req.body.quality,
       favorite: req.body.favorite,
       desc: req.body.desc,
      _id: new ObjectId(req.params.id)
   };
   

   let filter = { _id: new ObjectId(req.params. id)};
   const update = { $set: newSong }
   model.music.updateOne(filter, update)
      .then(result => {
         let found = (result.upsertedCount == 0);
         if (found) {
            res.status(200).json(newSong);
         } else { 
            res.status(201).json(newSong);
         }
      })

    // check if thhe file is modified 
    // in case yes, update the file in the fs 
    // That ' sassignement 6 
});





