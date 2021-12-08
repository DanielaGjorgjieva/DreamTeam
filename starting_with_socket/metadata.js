/**
 * Web Atelier 2021  Exercise 4 - JavaScript on the Server-side
 *
 * Student: Bojan Lazarevski
 *
 * Task 1 - MP3 Metadata Extractor
 *
 */

/**
 * Extracts the metadata from MP3 files.
 */

 const fs = require("fs-extra")
 const jsmediatags = require("jsmediatags")
 const getMP3Duration = require('get-mp3-duration')
 
 //////////////
 const path = require("path")
 
 module.exports = {extractMetadata: extract_file_metadata,rem_empty,get_id3_only}
 
 {
     // Fetching CL arguments
     let args = process.argv.slice(2)
 
     const musicfolder = args[0] || "./public/music"
     const outputpath  = args[1] || "./data.json"
     const webroot     = args[2] || "./public"
 
     scanAll(webroot, musicfolder, outputpath)
 }
 
 /**
  * Scans a folder for all mp3 files and writes the metadata to a JSON file.
  * @param webroot the static webroot folder with which to calculate the relative paths from.
  * @param musicfolder the music folder in which to scans songs.
  * @param outputJSONpath the output path of the JSON file.
  * @returns {Promise} passes the extracted data on resolve.
  */
 function scanAll(webroot, musicfolder, outputJSONpath) {
     return new Promise((resolve,reject)=>{
         fs.readdir(musicfolder, (err, files) => {
             let data = []
             fs.writeFile(outputJSONpath, JSON.stringify(data), (err) => {
                 if (err) {
                     reject(err)
                     return
                 }
             })
     
             if (err) {
                 reject(err)
                 return
             }
             // Only take in account mp3 files
             files = files.filter((f) => f.match(".mp3$"))
     
             files.forEach((f) => {
                 extract_file_metadata(webroot, `${musicfolder}/${f}`)
                     .then((x)=>{
                         data.push(x)
     
                         if (data.length == files.length) {
                             resolve(data)
                             return
                         }
                     })
     
             })
         })
     })
     
 }
 
 /**
  * Extracts the mp3 metadata from the a specified file.
  * @param webroot the static webroot folder with which to calculate the relative paths from.
  * @param file the path to the mp3 file.
  * @returns {Promise} passes the extracted data on resolve.
  */
 function extract_file_metadata(webroot, file) {
     return new Promise((resolve, reject)=> {
         if (!file.match(".mp3$"))
             reject()
 
         const extract_tags = ["src", "filename", "duration", "size", "title", "album", "artist", "genre", "desc", "quality", "favourite"]
         jsmediatags.read(file, {
             onSuccess: (tag) => {
                 console.log(file)
                 tag = tag.tags
                 let obj = {}
                 extract_tags.forEach((t) => {
                     obj[t] = tag[t]
                 })
 
                 if (extract_tags.includes("src"))
                     obj.src = "/"+path.relative(webroot, file)
                 if (extract_tags.includes("filename"))
                     obj.filename = path.basename(file)
                 if (extract_tags.includes("size"))
                     obj.size = fs.statSync(file).size / 1024 / 1024
                 if (extract_tags.includes("duration"))
                     obj.duration = getMP3Duration(fs.readFileSync(file)) / 1000
 
 
                 resolve(set_defaults(obj))
             },
 
             onError: (error) => {
                 console.log(':(', error.type, error.info);
                 reject(error)
             }
         })
     })
 }
 
 /**
  * Removes the undefined/empty fields from the object.
  * @param metadata the object whom fields to filter.
  * @returns {obj} the filtered object
  */
 function rem_empty(metadata) {
     // Removes empty fields
     Object.keys(metadata).forEach(k => {
         if(metadata[k]===undefined || (typeof metadata[k] == "string" && metadata[k].trim() == ""))
             delete metadata[k]
     })
     return metadata
 }
 
 /**
  * Sets the default fields' value on the object, in case they are undefined.
  * @param metadata the object on which to operate.
  * @returns {obj} the object with the updated fields.
  */
 function set_defaults(metadata) {
     const defaultMeta =
         {
             title: "",
             artist: "",
             album: "",
             genre: "",
             desc: "",
             favourite: false,
             quality: 5
         };
     Object.keys(defaultMeta).forEach((k)=>{
         metadata[k] = metadata[k] === undefined? defaultMeta[k]: metadata[k]
     })
 
     return metadata
 }
 
 /**
  * Returns only the fields that are related to the ID3 mp3 specification.
  * @param metadata the object from which to extract the ID3 fields.
  * @returns {obj} the extracted ID3 fields
  */
 function get_id3_only(metadata) {
     return rem_empty ({
             title: metadata.title,
             artist: metadata.artist,
             album: metadata.album,
             genre: metadata.genre,
             desc: metadata.desc,
             favourite: metadata.favourite,
             quality: metadata.quality
     })
 }