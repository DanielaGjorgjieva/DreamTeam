const {ObjectId} = require("mongodb");

module.exports = {db_getsong, db_get, db_addsong, db_updatesong, db_deletesong, db_get_ok_file_filter}


function db_get(collection, filter=undefined) {
    return collection.find(filter).toArray()
}

function db_getsong(collection, _id) {
    return collection.findOne({_id:ObjectId(_id)})
}

function db_deletesong(collection, _id) {
    return collection.findOneAndDelete({_id:_id})
}

function db_addsong(collection, metadata) {
    return new Promise(async (resolve) => {
        var ret = await collection.insertOne(metadata)
        resolve(await db_getsong(collection, ret.insertedId))
    })
}

function db_updatesong(collection, _id, metadata) {
    return new Promise(async (resolve) => {

        await collection.findOneAndUpdate({_id:_id}, {$set: metadata})
        resolve(await db_getsong(collection,_id))
    })
}

function db_get_ok_file_filter(allowed_ids=[]) {
    var ret = []
    allowed_ids.forEach(x=>{
        ret.push(ObjectId(x))
    })
    return ret
}

