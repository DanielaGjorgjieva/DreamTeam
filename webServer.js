/*
    Web Atelier 2021
    socket


    Author: Samuel Corecco & Andrea prato
*/
const io = require('socket.io')();
const EventEmitter = require('events');
const eventBus = new EventEmitter();

let map_user_socket = {}

function init(server) {
    io.attach(server);

    io.on('connect', function (socket) {
        console.log("A new client has connected!");

        socket.on('disconnect', function() {
            console.log("A client has disconnected!");
        });
        
    });
}

//edit into list

eventBus.on('sport.edited', (event) => {
    console.log('Sport has been edited!');
    io.emit('sport.edited', event);
});

//delete into list

eventBus.on('sport.deleted', (event) => {
    console.log('Sport has been deleted!');
    io.emit('sport.deleted', event);
});

//upload into list

eventBus.on('sport.uploaded', (event) => {
    console.log('Sport has been uploaded!');
    io.emit('sport.uploaded', event);
});


eventBus.on('message',msg=>{
    console.log(msg);

   
    map_user_socket[msg.user] = socket.id;

    

    //send to ALL browsers
    io.emit('message', msg);
})

//NEED SPECIFIC EVENT pAGE TO JOIN OR LEAVE

//join into list and user profile
//leave into list and user profile

module.exports.eventBus = eventBus;
module.exports.init = init;