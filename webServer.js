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

eventBus.on('signed.in', (event) => {
    console.log("A new user has signed in!");
    io.emit('signed.in', event);
})

//NEED SPECIFIC EVENT pAGE TO JOIN OR LEAVE

//join into list and user profile
eventBus.on('sport.joined', (event) => {
    console.log(event.user + ' has joined an activity!');
    io.emit('sport.joined', event);
});
//leave into list and user profile
eventBus.on('sport.left', (event) => {
    console.log(event.user + ' has left n activity!');
    io.emit('sport.left', event);
});

eventBus.on('msgSended', (event)=>{
    console.log('A message in '+ event._id + ' was sended!');
    io.emit('msgSended', event);
})


module.exports.eventBus = eventBus;
module.exports.init = init;