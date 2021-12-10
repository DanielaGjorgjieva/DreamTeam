const io = require('socket.io')();

var clients = 0;

function init(server) {
    console.log("Starting WS server.")
    io.attach(server);

    io.on('connection', function(socket) {
        clients += 1;
        console.log("Connected client.")
/*
        socket.on('daniela', (msg) => {
            console.log(msg)
            socket.broadcast.emit('danielaclient', msg*2);
        })
*/
        socket.on('deleted', (msg) => {
            console.log("Song deleted: " + msg.id)
            socket.broadcast.emit('delete', msg);
        })

        socket.on('uploaded', (msg) => {
            console.log("Song uploaded:" + msg)
            socket.broadcast.emit('upload', msg);
        })

        socket.on('edited', (msg) => {
            console.log("Song edited: " + msg)
            socket.broadcast.emit('edit', msg);
        })

        socket.on('disconnect', function() {
            console.log("Client disconnected.")
            clients -= 1;
        })

    })


}

module.exports.init = init;