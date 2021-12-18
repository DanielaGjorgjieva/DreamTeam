/*
    Web Atelier 2021
    socket


    Author: Samuel Corecco & Andrea prato
*/
const io = require('socket.io')();
const EventEmitter = require('events');
const eventBus = new EventEmitter();



function init(server) {
    io.attach(server);

    io.on('connect', function (socket) {
        console.log("A new client has connected!");

        socket.on('disconnect', function() {
            console.log("A client has disconnected!");
        });


    socket.on('message',msg=>{
        console.log("message", msg);
 
        let message = {user: msg.user, text: msg.text}

        //send to ALL browsers
        socket.broadcast.emit('message', message);
    })

        
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



//NEED SPECIFIC EVENT pAGE TO JOIN OR LEAVE

//join into list and user profile
//leave into list and user profile

module.exports.eventBus = eventBus;
module.exports.init = init;