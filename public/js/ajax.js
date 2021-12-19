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
//let you = undefined;
/*
you = {_id:"61bb66610c44c93d9198c4af", username: "PAZZoInCUL0",password: "",joined: [], created: ["61bb6764f12f7ae96a68ced5"
, "61bb6aa4800a28fe58f1dbc2"]}
*/
let you = undefined;
let events = undefined;


//Fetch for the navbar and header//

function init() {
    parse_path();
    document.getElementById("navigation-bar").querySelectorAll("a").forEach(a => {
        a.addEventListener("click", linkClickHandler);
    });
    buttonsHeader();
    renderLeftSidebar();
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
    if (you) {
        if (url.pathname.endsWith(you._id)) {
            openYourPage(you._id);
            // logUser();
        }
    }
    if (url.pathname.includes("sports")) {
        if (url.pathname.endsWith("edit")) {
            let id = url.pathname.replace("/sports/", "").replace("/edit", "");
            editSport(id);
        }
    }
}

function LogOutUser() {
    you = undefined;
    goHome();
}

function openYourPage(id) {

    let userJoined = [];
    let userCreated = [];


    fetch("/users/" + id)
        .then(res => res.json())
        .then(json => {
            you = json;

            fetch("/sports/")
                .then(res => res.json())
                .then(obj => {
                    sports = obj;
                    if (you) {
                        you.joined.forEach((el) => {
                            for (let index = 0; index < sports.length; index++) {
                                if (sports[index]._id == el) {
                                    userJoined.push(sports[index]);
                                }
                            }
                        })
                        you.created.forEach((el) => {
                            for (let index = 0; index < sports.length; index++) {
                                if (sports[index]._id == el) {
                                    userCreated.push(sports[index]);
                                }
                            }
                        })
                    }
                    html = ejs.views_user({
                        user: you,
                        created: userCreated,
                        joined: userJoined
                    })
                    setHash("#user/" + you._id);
                    document.querySelector('main').outerHTML = html;

                    let edit_button = document.querySelectorAll('a[rel="edit"]');
                    if (edit_button) {
                        edit_button.forEach((button) => {
                            button.addEventListener("click", (event) => {
                                event.preventDefault();
                                editSport(button.parentNode.id);
                            });
                        })
                    }
                    let delete_button = document.querySelectorAll('a[rel="delete"]');
                    if (delete_button) {
                        delete_button.forEach((button) => {
                            button.addEventListener("click", (event) => {
                                event.preventDefault();
                                deleteSport(button.parentNode.id);
                            });
                        })
                    }
                })
        })




}

function editSport(id) {
    fetch("sports/" + id + "/edit")
        .then(res => res.json())
        .then(obj => {
            setHash('#edit/' + id);
            html = ejs.views_edit({ event: obj });
            document.querySelector("main").outerHTML = html;
            let form = document.getElementById("upload-section");
            form.addEventListener("submit", (event) => {
                event.preventDefault();
                let body = new FormData(form);
                fetch("/sports/" + id, { method: "PUT", body })
                    .then(res => {
                        listSports();
                    })
            })
        })
}

function deleteSport(clicked_id) {
    let id = clicked_id.split("_")[0];
    // let toDelete = document.getElementById(id);
    fetch("/sports/" + clicked_id, { method: "DELETE", headers: { "Accept": "application/json" } })
        .then(res => {
            listSports();
        })
}

function goHome() {
    fetch("/")
        .then(res => {
        })
        .then((json) => {
            events = json;
            renderHeader();
//             renderLeftSidebar();
            setHash("#home");
            html = ejs.views_home(); //obj in parenthesis removed
            document.querySelector("main").outerHTML = html;
        });
}

function activityUpload() {
    fetch("/upload")
        .then(res => res.text())
        .then(obj => {
            renderHeader();
//             renderLeftSidebar();
            setHash("#upload");
            html = ejs.views_upload({ user: you });
            document.querySelector("main").outerHTML = html;

            if (you) {
                today();
                let form_sub = document.getElementsByClassName("upload-section")[0];
                form_sub.addEventListener("submit", (event) => {
                    event.preventDefault();
                    let body = new FormData(form_sub);
                    fetch("/sports/" + you.username, { method: "POST", body })
                        .then(res => {
                            listSports();
                            you.created.push(res._id);
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
    let tmp = you;
    fetch("/sports").then(res => res.json()).then(obj => {
        you = tmp;
        renderHeader();
//         renderLeftSidebar();
        setHash("#sports");
        html = ejs.views_sports({ sports: obj });
        document.querySelector("main").outerHTML = html;
        you = tmp;
    })
}

function listSportsArg(obj) {

    renderHeader();
//     renderLeftSidebar();
    setHash("#sports");
    html = ejs.views_sports({ sports: obj });
    document.querySelector("main").outerHTML = html;

}

function goAbout() {
    fetch("/about")
        .then(res => res.text())
        .then(obj => {
            setHash("#about");
            html = ejs.views_about();
            document.querySelector("main").innerHTML = html;
        })
}

function filtered_table(filter) {

    fetch('/sports')
        .then(res => res.json())
        .then(obj => {
            console.log("we in filter_table", filter);

            console.log(obj);

            let filteredPlace = [];
            let filteredSport = [];
            let filteredOwner = [];
            let filteredDescription = [];

            // place
            obj.forEach(sport => {
                console.log(sport);
                sport.place.toLowerCase().match(filter.toLowerCase()) ? filteredPlace.push(sport) : obj = obj;
            })
            // sport
            obj.forEach(sport => {
                sport.sport.toLowerCase().match(filter.toLowerCase()) ? filteredSport.push(sport) : obj = obj;
            })
            // owner
            obj.forEach(sport => {
                sport.owner.toLowerCase().match(filter.toLowerCase()) ? filteredOwner.push(sport) : obj = obj;
            })
            // description
            obj.forEach(sport => {
                sport.description.toLowerCase().match(filter.toLowerCase()) ? filteredDescription.push(sport) : obj = obj;
            })

            let sportList = { sports: Array.from(new Set(filteredPlace.concat(filteredSport, filteredOwner, filteredDescription))) };

            if (filter === "") {
                sportList = {sports : obj};
                listSports();
                return;
            }

            renderHeader();
            html = ejs.views_sports(sportList);
            document.querySelector("main").outerHTML = html;
        })
}

function search_table() {
    let search = document.querySelector(".searchForm");
    search.addEventListener("input", (e) => {
        e.preventDefault();
        console.log('filtering');

        let input = document.getElementById("filterSports");

        let searchKey = input.value;

        if (input.value == '') {
            console.log('hello');
            listSports();
            return;
        }

        filtered_table(searchKey);
    });
}


function addUser() {
    renderHeader();
    renderLeftSidebar();
    setHash('#signin');
    html = ejs.views_signin();
    document.querySelector("main").outerHTML = html;
    let form = document.getElementById("submit_user");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let body = new FormData(form);

        let password2 = document.getElementById("pass").value;
        let password = document.getElementById("password").value;
        if(password2 === password) {
            fetch("/users", { method: "POST", body })
            .then(res =>
                 res.json()
            ).then(res => {
                console.log("inside /users");
                console.log(res);
                if(!res.exist) {
                    alert("This username has already been selected by another user.");
                } else {
                    goHome();
                    setHash("#home");
                }
                
            })
        } else {
            alert("Not matching passwords")
        }
    })
    document.getElementById('login').addEventListener('click', linkClickHandler);
}




function logUser() {
    renderHeader();
    renderLeftSidebar();
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
            .then(res =>
                res.json()
            )
            .then(obj => {
                if (obj._id !== 'fail') {
                    you = obj;
                    goHome();
                } else {
                    alert("Wrong username or password inserted!");
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
        body: JSON.stringify({ user: you.username , user_id : you._id})
    };

    fetch("/sports/" + event_id + "/join/", requestOptions)
        .then(res => res.json())
        .then(obj => {
            you.joined.push(obj._id);
            visitEvent(event_id);
        })
        .catch(err => {
            console.error(err);
        })
}

function leaveEvent(id) {
    fetch("/sports/" + id + "/leave/" + you._id).then(res => res.json()).then(obj => {
        you = obj;
        listSports();
    })
}

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

function renderLeftSidebar() {
    fetch("/users/")
        .then(res => res.json())
        .then(obj => {
            html = ejs.views_includes_aside({ users: obj });
            document.querySelector('aside').outerHTML = html;
        search_table();
        })
}

function visitEvent(id) {
    fetch("sports/" + id)
        .then(res => res.json())
        .then(obj => {
            setHash("#event/" + id);
            html = ejs.views_events({ user: you, event: obj });
            document.querySelector("main").outerHTML = html;
            let button_join = document.getElementsByName("submit_join")[0];
            if (button_join) {
                button_join.addEventListener("click", (event) => {
                    event.preventDefault();
                    join_activity(id);
                })
            }
            let button_leave = document.getElementsByName("submit_leave")[0];
            if (button_leave) {
                button_leave.addEventListener("click", (event) => {
                    event.preventDefault();
                    leaveEvent(id);
                })
            }
            let log_ev = document.getElementById("login_from_event");
            if (log_ev) {
                log_ev.addEventListener("click", linkClickHandler);
            }
            let edit_button = document.getElementById("edit_sport");
            if (edit_button) {
                edit_button.addEventListener("click", linkClickHandler);
            }
            let delete_button = document.getElementById("delete_sport");
            if (delete_button) {
                delete_button.addEventListener("click", (event) => {
                    event.preventDefault();
                    deleteSport(id);
                });
            }

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
            let id = hash.replace('/sports/ ', '').replace('/edit', '');
            editSport(id);
        } else if (hash == "#home") {
            goHome();
        } else if (hash == "#about") {
            goAbout();
        } else if (hash == "#signin") {
            addUser();
        } else if (hash == "#login") {
            logUser();
        } else if (hash.startsWith("#user")) {
            // openYourPage(you._id);
            goHome();
        } else if (hash.startsWith("#event")) {
            let id = hash.replace('#event/', '');
            visitEvent(id);
        } else {
            goHome();
        }
    } else {
        goHome();
    }
}
