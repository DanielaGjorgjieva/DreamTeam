const model = require('../models/index.js').model;
const ObjectId = require('mongodb').ObjectId;

// your user
let you;

//Fetch for the navbar//

function init(){

}

function linkClickHandler(event) {
    event.preventDefault();
    let url = new URL(event.current.href);
    
    if(url.pathname === "/") {
        goHome();
    }
   if (url.pathname.endsWith("/upload")){
        activityUpload();
    }
    if (url.pathname.endsWith("/sports")) {
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

}

function SetButtonUser(){
    //ID
    let edit_buttons = document.querySelectorAll('[rel="edit"]');
    for(let i = 0; i < edit_buttons.length ; ++i){
        edit_buttons[i].setAttribute("onclick", "editSport(this.id)");
    }

    let delate_buttons = document.querySelectorAll('[rel="delete"]');
    for(let i = 0; i < edit_buttons.length ; ++i){
        delate_buttons[i].setAttribute("onclick", "deletSport(this.id)");
    }
}


function LogOutUser(){
    you = undefined;
    goHome();
}

function editSport(clicked_id){
    let id = clicked_id.split("_")[0];
    fetch("/edit/"+ id).then(res=>res.json()).then(obj=>{
        setHash('#edit/'+id);
        html = ejs.views_edit(obj);
        document.querySelector("main").innerHTML = html;
        let form = document.querySelector("form.upload-section");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            let body = new FormData(form);
            fetch(""+id, {method: "PUT", body}).then(res=>{
                ejs.views_user(you);
       })
    })
 })
}

function deletSport(clicked_id){
    let id = clicked_id.split("_")[0];
    // ID
    let section_sport = document.getElementById(id);
    fetch(""+id, {method: "DELETE", headers: {"Accept" : "application/json"}}).then(res=> {
        section_sport.remove();
    })
}

function goHome() {
    fetch("/").then(res=>res.text()).then(obj=> {
        setHash("#home");
        html = ejs.views_home(obj);
        document.querySelector("main").innerHTML = html;
    })
}

function activityUpload() {
    fetch("/upload").then(res=>res.text()).then(obj=> {
        setHash("#upload");
        html = ejs.views_upload({user: you});
        document.querySelector("main").innerHTML = html;
    })
}

function listSports() {
    fetch("/sport").then(res=>res.json()).then(obj=>{
        setHash("#sport");
        html = ejs.views_about({event: obj});
        document.querySelector("main").innerHTML = html;
    })
}

function goAbout() {
    fetch("/about").then(res=>res.text()).then(obj=> {
        setHash("#about");
        html = ejs.views_about(obj);
        document.querySelector("main").innerHTML = html;
    })
}

function addUser() {
    fetch("/signin").then(res=>res.text()).then(obj=> {
        setHash('#signin');
        html = ejs.views_signin(obj);
        document.querySelector("main").innerHTML = html;
        let form = document.querySelector("form.upload-section");
        let body = new FormData(form)
        form.addEventListener("submit", (event)=> {
            event.preventDefault();
            fetch("/", {method : "POST", body}).then(res=> {
                ejs.views_home();
                setHash("#home");
            })
        })
    })
}

function logUser() {
    fetch("/login").then(res=>res.text()).then(obj=> {
        setHash('#login');
        html = ejs.views_login(obj);
        document.querySelector("main").innerHTML = html;
        let form = document.querySelector("form.upload-section");
        form.addEventListener("submit", (event)=> {
            let password = document.getElementById("password").value;
            let username = document.getElementById("username").value;
            model.user.findOne({username: username}).then(result => {
                if (result) {
                    if (password === result.password) {
                        fetch("/user/" + result._id).then(res=> {
                            you = res.json();
                            ejs.views_user(res.json());
                        }).then({
                            SetButtonUser()
                        });
                    } else {
                        alert("Wrong password inserted!");
                    }
                }else{
                    alert("Invalid username!");
                }
            });
        });
    });
}



// function setHash(position) {
//     let window_string = window.location + '';
//   if (window_string.includes('#')) {
//      window.location = window.location.origin + position;
//   } else {
//      window.location = window.location + position;
//   }
// }

// function parse_path() {
//   let hash = window.location.hash;
//   if (hash) {
//      if (hash == "#songs") {
//         search('');
//      } else if (hash == "#upload") {
//         search('');
//         addSong();
//      } else if (hash.startsWith('#edit')) {
//         let id = hash.replace('#edit/','');
//         let new_url = new URL('http://localhost:8888/songs/'+id+'/edit');
//         editSong(new_url);
//      } else if (hash.startsWith('#songs')) {
//         let query = hash.replace('#songs/','');
//         if (query.startsWith('artist')) {
//            let artist = query.replace('artist/','');
//            let param = 'artist_'+artist;
//            filter(param);
//         } else if (query.startsWith('album')) {
//            let album = query.replace('album/','');
//            let param = 'album_'+album;
//            filter(param);
//         } else if (query.startsWith('genre')) {
//            let genre = query.replace('genre/','');
//            let param = 'genre_'+genre;
//            filter(genre);
//         } else if (query.startsWith('search')) {
//            let text = query.replace('search/','');
//            search(text);
//         }
//      } else {
//         search('');
//      }
//   } else {
//      search('');
//   }
// }
