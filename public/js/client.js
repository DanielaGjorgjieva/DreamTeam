/*
    Web Atelier 2021
    socket


    Author: Samuel Corecco & Andrea prato
*/
let socket = io();

socket.on('connect', () => {
    console.log("Your client has connected succesfully!");
});

socket.on('disconnect', () => {
    console.log("Your client has disconnected!");
});

socket.on('sport.edited', (event) => {
    console.log("Event edited!");
    parse_path();
});

socket.on('sport.deleted', (event) => {
    console.log("Event deleted!");
    let url = window.location.href;
    if(url.endsWith(event.id)) {
        listSports();
    } else {
        parse_path();
    }
});

socket.on('sport.joined', (event) => {
    console.log("An user joined a sport event");
    parse_path();
});

socket.on('sport.left', (event) => {
    console.log(event.user + " left a sport event");
    parse_path();
});

socket.on('sport.uploaded', (event) => {
    console.log(event.sport.sport + " has been uploaded");
    parse_path();
});

socket.on('signed.in', (event) => {
    console.log(event.username + " has signed in!");
    renderLeftSidebar();
});

socket.on('msgSended', (event)=>{
    console.log('a message on' + event._id + 'was sended');
    let url = window.location.href;
    if(url.endsWith(event._id)) {
        visitEvent(event._id);
    }
})