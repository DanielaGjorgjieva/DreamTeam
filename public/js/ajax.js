/*
    Web Atelier 2021

    Fetch


    Author: Samuel Corecco & Andrea prato
    Collaborators: Alessandro Cravioglio & Francesco Casarella
*/
// const model = require('../../models/index.js').model;
// const ObjectId = require('mongodb').ObjectId;

// const { json } = require("express");

// your user
// let you = {username:"IlPiuPazzO69", password:"", created:[], joined:[], _id:6969402};
let you = undefined;

let events = undefined;

//Fetch for the navbar and header//

function init() {
    parse_path();
    document.getElementById("navigation-bar").querySelectorAll("a").forEach(a => {
        a.addEventListener("click", linkClickHandler);
    });
    buttonsHeader();
}

function linkClickHandler(event) {
    event.preventDefault();

    console.log("a href: " + event.target.href);
    let url = new URL(event.target.href);

    if (url.pathname === "/") {
        goHome();
    }
    if (url.pathname.endsWith("/upload")) {
        activityUpload();
    }
    if (url.pathname === "/sports") {
        listSports();
    }
    if (url.pathname.endsWith("/about")) {
        goAbout();
    }
    if (url.pathname.endsWith("/signin")) {
        addUser();
    }
    if (url.pathname.endsWith("/login")) {
        logUser();
    }
    if(you){
        if (url.pathname.endsWith(you._id)) {
            logUser();
        }
    }
    if (url.pathname.includes("sports")) {
        if (url.pathname.endsWith("edit")) {
            editSport(event.parentNode.id);
        }
    }
}

function LogOutUser() {
    you = undefined;
    goHome();
}

function openYourPage(){
    let html = ejs.views_user({ user: you });
    document.querySelector("main").outerHTML = html;
    renderHeader();
}

function editSport(id) {
    fetch("/edit/" + id).then(res => res.json()).then(obj => {
        setHash('#edit/' + id);
        html = ejs.views_edit(obj);
        document.querySelector("main").outerHTML = html;
        let form = document.querySelector("form.upload-section");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            let body = new FormData(form);
            fetch("/sports/" + id, { method: "PUT", body }).then(res => {
                ejs.views_user(you);
            })
        })
    })
}

function deleteSport(clicked_id) {
    let id = clicked_id.split("_")[0];
    let toDelete = document.getElementById(id);
    fetch("/sports/" + id, { method: "DELETE", headers: { "Accept": "application/json" } }).then(res => {
        toDelete.remove();
    })
}

function goHome() {
    fetch("/")
        .then(res => {
            // res.json()
            console.log("res");
            console.log(res);
        })
        .then((json) => {
            events = json;
            console.log('Events: ');
            console.log(events);
            renderHeader();

            setHash("#home");
            html = ejs.views_home(); //obj in parenthesis removed
            document.querySelector("main").outerHTML = html;
        });
}

function activityUpload() {
    fetch("/upload").then(res => res.text()).then(obj => {
        renderHeader();
        setHash("#upload");
        html = ejs.views_upload({ user: you });
        document.querySelector("main").outerHTML = html;

        if (you) {
            today();
            let form_sub = document.getElementsByClassName("upload-section")[0];
            form_sub.addEventListener("submit", (event) => {
                event.preventDefault();
                let body = new FormData(form_sub);
                fetch("/sports/" + you.username, { method: "POST", body }).then(res => {
                    listSports();
                })
            })
        } else {
            document.querySelectorAll("main a").forEach(a => {
                a.addEventListener("click", linkClickHandler);
            })
        }
    })
}


function listSports() {
    fetch("/sports").then(res => res.json()).then(obj => {
        renderHeader();
        setHash("#sports");
        html = ejs.views_sports({ sports: obj });
        // console.log(html);
        document.querySelector("main").outerHTML = html;
    })
}

function goAbout() {
    console.log('madonna');
    fetch("/about")
        .then(res => console.log(res))
        .then(() => {
            renderHeader();
            console.log('madonna');
            setHash("#about");
            html = ejs.views_about(); //removed obj from parenthesis
            document.querySelector("main").outerHTML = html;
        })
}


function addUser() {
    renderHeader();
    setHash('#signin');
    html = ejs.views_signin();
    document.querySelector("main").outerHTML = html;
    let form = document.getElementById("submit_user");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let body = new FormData(form);
        fetch("/users", { method: "POST", body }).then(res => {
            goHome();
            setHash("#home");
        })
    })
}


function logUser() {
    renderHeader();
    setHash('#login');
    html = ejs.views_login();
    document.querySelector("main").outerHTML = html;
    let form = document.getElementById("login_form");

    document.getElementById('signin')
        .addEventListener("click", linkClickHandler);

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        fetch("/users/login/" + password + "/" + username)
            .then(res => res.json())
            .then(obj => {
                console.log(obj);
                if (obj) {
                    you = obj;
                    let html = ejs.views_user({ user: you });
                    document.querySelector("main").outerHTML = html;
                    renderHeader();
                    if (you.created.length > 0) {
                        SetButtonUser(you.created.length)
                    }

                } else {
                    alert("Wrong password or user inserted! XD LOL");
                }
            })
            .catch(err => {
                console.error(err);
            })
    });
}


function join_activity(event_id) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: you.username })
    };

    fetch("/sports/" + event_id + "/join/", requestOptions)
        .then(res => res.json())
        .then(obj => {
            you.joined.push(obj);
            fetch("sports/" + id).then(res => res.json()).then(obj => {
                setHash("#event/" + id);
                html = ejs.views_events({ user: you, event: obj });
                document.querySelector("main").outerHTML = html;
            });
        })
        .catch(err => {
            console.error(err);
        })
}


//working Francesco
function renderHeader() {
    html = ejs.views_includes_header({ user: you });
    document.querySelector("header").outerHTML = html;
    buttonsHeader();
}

function buttonsHeader() {
    document.getElementById("page-header").querySelectorAll("a").forEach(a => {
        a.addEventListener("click", linkClickHandler);
    });
}

function visitEvent(id) {
    fetch("sports/" + id).then(res => res.json()).then(obj => {
        setHash("#event/" + id);
        html = ejs.views_events({ user: you, event: obj });
        document.querySelector("main").outerHTML = html;
        let button_join = document.getElementsByName("submit_join")[0];
        console.log("button_join: " + button_join);
        if(button_join){
            button_join.addEventListener("click", (event) => {
                event.preventDefault();
                join_activity(id);
            })
        }
        let log_ev = document.getElementById("login_from_event");
        console.log(log_ev);
        log_ev.addEventListener("click", linkClickHandler);
    })
}

function SetButtonUser(num) {
    let delete_buttons = document.querySelectorAll('[rel="delete"]');
    for (let i = 0; i < num; ++i) {
        delete_buttons[i].setAttribute("onclick", "deleteSport(this.id)");
    }
}

function setHash(position) {
    let window_string = window.location + '';
    if (window_string.includes('#')) {
        window.location = window.location.origin + position;
    } else {
        window.location = window.location + position;
    }
}

function parse_path() {
    let hash = window.location.hash;
    if (hash) {
        if (hash == "#sports") {
            listSports();
        } else if (hash == "#upload") {
            activityUpload();
        } else if (hash.startsWith('#edit')) {
            let id = hash.replace('#edit/', '');
            let new_url = new URL('http://localhost:8888/sports/' + id + '/edit');
            editSport(new_url);
        } else if (hash == "#home") {
            goHome();
        } else if (hash == "#about") {
            goAbout();
        } else if (hash == "#signin") {
            addUser();
        } else if (hash == "#login") {
            logUser();
        }
        /*else if (hash.startsWith('#songs')) {
           let query = hash.replace('#songs/','');
           if (query.startsWith('artist')) {
              let artist = query.replace('artist/','');
              let param = 'artist_'+artist;
              filter(param);
           } else if (query.startsWith('album')) {
              let album = query.replace('album/','');
              let param = 'album_'+album;
              filter(param);
           } else if (query.startsWith('genre')) {
              let genre = query.replace('genre/','');
              let param = 'genre_'+genre;
              filter(genre);
           } else if (query.startsWith('search')) {
              let text = query.replace('search/','');
              search(text);
           }*/
    } else {
        goHome();
    }
}



