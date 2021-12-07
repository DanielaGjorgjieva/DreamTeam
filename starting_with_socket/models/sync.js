/**
 * Web Atelier 2021  Exercise 6 - MongoDB
 *
 * Student: __STUDENT NAME__
 *
 * Task 2
 *
 */

const fs = require('fs-extra');
const { model } = require('.');
const metadata = require("../metadata.js");
const path = require("path")

//Hint: reuse the implementation from Ex 2

function array_intersect(a, b) {
    if(!Array.isArray(a) || !Array.isArray(b)) {
        return undefined;
    }
    let arr = [];
    arr = a.filter(el => b.includes(el));
    return arr;
}

function array_difference(a, b) {
    if(!Array.isArray(a) || !Array.isArray(b)) {
        return undefined;
    }
    let arr = [];
    arr = a.filter(el => !b.includes(el));
    return arr;
}


module.exports.check = function (db_songs, folder) {
    
    let filenames = [];
    let songs;

    return new Promise((resolve, reject) => {
        
        db_songs.find({}).toArray().then((found) => {
            found.forEach((file) => {
                filenames.push(file.filename);

            });

            try {
                songs = fs.readdirSync(folder);
            } catch (err) {
                reject(err);
            }

            let missing_object = array_difference(songs, filenames);
            let missing_file = array_difference(filenames, songs);
            let object_file_ok = array_intersect(songs, filenames);

            missing_object.forEach((id) => {
                let extension = id.split(".")[1];
                if (extension == 'mp3' || extension == 'mp4' || extension == 'aud') {
                    metadata.extractMetadata("./public", "./public/music/" + id).then(result => {
                        db_songs.insertOne(result).then(res => {
                        })
                    })
                    
                }
            });

            missing_file.forEach((id) => {
                found.forEach((object) => {
                    if (id === object.filename)
                        object.missing_file = true;
                });
            });

            object_file_ok.forEach((id) => {
                found.forEach((object) => {
                    if (id === object.filename) {
                        if (object.missing_file)
                            object.missing_file = false;
                    }
                });
            });

            let result = {
                missing_object: missing_object,
                missing_file: missing_file,
                object_file_ok: object_file_ok
            }

            resolve(result);
        });
    });
}
