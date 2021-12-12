// const model = require('../../models/index.js').model;
// const ObjectId = require('mongodb').ObjectId;

// your user
let you;

//Fetch for the navbar//

function init() {
    parse_path();
    document.getElementById("navigation-bar").querySelectorAll("a").forEach(a=> {
        a.addEventListener("click", linkClickHandler);
    });
    document.getElementById("page-header").querySelectorAll("a").forEach(a=> {
        a.addEventListener("click", linkClickHandler);
    });
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
    if(url.pathname.contains("sports")) {
        if(url.pathname.endsWith("edit")){
            editSport(event.parentNode.id);
        } else {
            visitEvent();
        }
    }
}

function LogOutUser(){
    you = undefined;
    goHome();
}

function editSport(id){
    fetch("/edit/"+ id).then(res=>res.json()).then(obj=>{
        setHash('#edit/'+id);
        html = ejs.views_edit(obj);
        document.querySelector("main").innerHTML = html;
        let form = document.querySelector("form.upload-section");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            let body = new FormData(form);
            fetch("/sports/"+id, {method: "PUT", body}).then(res=>{
                ejs.views_user(you);
       })
    })
 })
}

function deleteSport(clicked_id){
    let id = clicked_id.split("_")[0];
    let toDelete = document.getElementById(id);
    fetch("/sports/"+id, {method: "DELETE", headers: {"Accept" : "application/json"}}).then(res=> {
        toDelete.remove();
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
                            you.password = "";
                            ejs.views_user(res.json());
                        }).then( ()=> SetButtonUser()
                        );
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

function visitEvent() {
    //check if the user corresponds to the owner:
    //if yes load edit/deletedelete pattern
    //if no load the join/leave pattern
    
}

function SetButtonUser(){
    let delete_buttons = document.querySelectorAll('[rel="delete"]');
    for(let i = 0; i < edit_buttons.length ; ++i){
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
        let id = hash.replace('#edit/','');
        let new_url = new URL('http://localhost:8888/sports/'+id+'/edit');
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
