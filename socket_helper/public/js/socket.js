function init_socket() {
    let socket = io();
    socket.on('connect', ()=> {
        console.log('Browser connected')

        document.querySelector(".socket-info").innerHTML = "Connected";
        socket.on('disconnect', ()=> {
            console.log('Disconnected from socket');
            document.querySelector(".socket-info").innerHTML = "Disconnected"
        })

    })
}