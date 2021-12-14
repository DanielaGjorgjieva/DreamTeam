/*
    Web Atelier 2021

    Fetch


    Author: Samuel Corecco & Andrea prato
*/

// const model = require('../../models/index.js').model;
// const ObjectId = require('mongodb').ObjectId;

// your user
// let you = {username:"IlPiuPazzO69", password:"", created:[], joined:[], _id:6969402};
let you = undefined;

//Fetch for the navbar//

function init() {
    parse_path();
    document.getElementById("navigation-bar").querySelectorAll("a").forEach(a => {
        a.addEventListener("click", linkClickHandler);
    });
    document.getElementById("page-header").querySelectorAll("a").forEach(a => {
        a.addEventListener("click", linkClickHandler);
    });
}

function linkClickHandler(event) {
    event.preventDefault();
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

function editSport(id) {
    fetch("/edit/" + id).then(res => res.json()).then(obj => {
        setHash('#edit/' + id);
        html = ejs.views_edit(obj);
        document.querySelector("main").innerHTML = html;
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
    fetch("/").then(res => res.text()).then(obj => {
        setHash("#home");
        html = ejs.views_home(obj);
        document.querySelector("main").innerHTML = html;
    });
}

function activityUpload() {
    fetch("/upload").then(res => res.text()).then(obj => {
        setHash("#upload");
        html = ejs.views_upload({ user: you });
        document.querySelector("main").innerHTML = html;
        today();
        let form_sub = document.getElementsByClassName("upload-section")[0];
        form_sub.addEventListener("submit", (event) => {
            event.preventDefault();
            let body = new FormData(form_sub);
            fetch("/sports/" + you.username, { method: "POST", body }).then(res => {
                listSports();
            })
        })
    })
}


function listSports() {
    fetch("/sports").then(res => res.json()).then(obj => {
        setHash("#sports");
        console.log(obj);
        html = ejs.views_sports({ sports: obj });
        console.log(html);
        document.querySelector("main").innerHTML = html;
    })
}

function goAbout() {
    fetch("/about").then(res => res.text()).then(obj => {
        setHash("#about");
        html = ejs.views_about(obj);
        document.querySelector("main").innerHTML = html;
    })
}


function addUser() {
    setHash('#signin');
    html = ejs.views_signin();
    document.querySelector("main").innerHTML = html;
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
    fetch("/users/login")
    .then(res => {
        console.log('entered');
        res.text()
    })
    .then(obj => {
        setHash('#login');
        html = ejs.views_login();
        document.querySelector("main").innerHTML = html;
        let form = document.getElementById("login_form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            let body = new FormData(form);
            fetch("/login/" + form.password + "/" + form.username).then(res => res.json()).then(obj => {
                if (obj) {
                    fetch("/user/" + obj._id).then(res => {
                        you = res;
                        let html = ejs.views_user(res);
                        document.querySelector("main").outerHTML = html;
                        renderHeader();
                        SetButtonUser()
                    });
                } else {
                    alert("Wrong password or user inserted! XD LOL");
                }
            });
        });
    });
}

//working Francesco
function renderHeader(){
    html = ejs.views_includes_header({user : you});
    document.querySelector("header").outerHTML = html;
}

function visitEvent(id) {
    fetch("sports/" + id).then(res => res.json()).then(obj => {
        setHash("#event/" + id);
        html = ejs.views_events({ user: you, event: obj });
        document.querySelector("main").innerHTML = html;
    })
}

function SetButtonUser() {
    let delete_buttons = document.querySelectorAll('[rel="delete"]');
    for (let i = 0; i < edit_buttons.length; ++i) {
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



