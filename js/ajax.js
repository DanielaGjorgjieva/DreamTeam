

var socket;
var init = 0;

function init_socket() {
    init = 1;
    socket = io();
    socket.on('connect', ()=> {
        console.log('Browser connected')
        document.querySelector(".socket-info").innerHTML = "Connected";

      
     
        socket.on('delete', (msg) => {

            console.log("An activity has been deleted.")
            let activity = document.getElementById(msg.id);
            if(activity) {
                activity.remove();
            }
            let hashstr = document.location.hash;
            if (hashstr.includes(msg.id)) {
                console.log("Activity that is edited was deleted.")
                getActivityTable();
            }
            
        })

        socket.on('edit', (msg) => {
            console.log("An activity has been edited.")
            let hashstr = document.location.hash;
            if (hashstr.includes(msg)) {
                fetch("/activities/"+msg)
                .then((activity) => {
                    return activity.json();
                })
                .then((obj) => {
                    let html = ejs.views_edit({result: obj});
                    let page = document.querySelector(".all-content");
                    clear_inner();
                    page.insertAdjacentHTML("afterbegin", html);
                    let closebtn = document.getElementById("closebtn");
                    closebtn.addEventListener("click", (e)=> {
                        getActivityTable();
//where is the submit???
        })
                })
            } else if (hashstr.includes("activities")) {
                getActivityTable();
            }
        })

        socket.on('upload', (msg) => {
            console.log("An activity has been uploaded. View is being updated.")
            getActivityTable();
        })
        
        socket.on('disconnect', ()=> {
            console.log('Disconnected from socket');
            document.querySelector(".socket-info").innerHTML = "Disconnected"
        })

    })
}

function upload_redirect() {
    console.log("NAV LOADED")
    let upload_button = document.getElementById('upload-link');
    let home_button = document.getElementById('home-link');
    let activity_button = document.getElementById('activity-link');
    let remote_button = document.getElementById('remote-link');
    upload_button.addEventListener('click', link_click);
    home_button.addEventListener('click', home_click);
    activity_button.addEventListener('click', activity_click);

    // restoreURI_activities(document.location.hash)
    restoreURI(document.location.hash)
}


function link_click(e) {
    console.log("Upload button clicked.")
    e.preventDefault();

    let url = new URL(e.currentTarget.href);
    if(url.pathname == "/activities/upload") {
        uploadActivity(); // asyn chronous excecutiuion 
    }
}

function clear_inner() {
    let page = document.querySelector(".all-content");
    let inner = page.querySelector("main");
    if(inner) {
        inner.remove();
    }
}

function home_click(e) {
    console.log("Home button clicked.")
    e.preventDefault();

    let url = new URL(e.currentTarget.href);
    console.log(url.pathname)
    if(url.pathname == "/activities/home") {
        getHome();

    }
    
}

function activity_click(e) {
    console.log("Activity button clicked.")
    e.preventDefault();

    let url = new URL(e.currentTarget.href);
    console.log(url.pathname)
    if(url.pathname == "/activities") {
        getActivityTable();
        edit_redirect();
        delete_redirect();
    }
}

function getActivityTable() {
    fetch("/activities", {headers : { 
        'Accept': 'application/json'}
    })
    .then(res => {
        console.log(res.status);
        return res.json();
    })
    .then(result => {
        console.log(result);

        let model = {
            result: result, 
        }

        let html = ejs.views_includes_activity_table(model);
        let page = document.querySelector(".all-content");
        clear_inner();
        page.insertAdjacentHTML("afterbegin", html);
        delete_redirect();
        edit_redirect();
        document.location.hash = "#activities"
    })
}

function getHome() {
    fetch("/activities/home")
    .then(res => {
        return res.json();
    })
    .then(obj => {
        let html = ejs.views_index({result: obj});
        let page = document.querySelector(".all-content");
        clear_inner();
        page.insertAdjacentHTML("afterbegin", html);
        document.location.hash = "#index"
    })
}

function uploadActivity() {
    fetch("/activities/upload")
    .then(res => {
        return res.text();
    })
    .then(obj => {
        console.log(obj);
        let html = ejs.views_upload(obj);
        let page = document.querySelector(".all-content");
        clear_inner();
        page.insertAdjacentHTML("afterbegin", html);
        document.location.hash = "#upload"

        let form = page.querySelector("form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            let body = new FormData(form);

            fetch("/activities", {method: "POST", body})
            .then(res => {
                return res.json();
            })
            .then(activities=>console.log(activities))
            .then(() => {
                getActivityTable()
                socket.emit('uploaded', body);
            })
        })
    })
}


function edit_redirect() {
    console.log("EDIT LOADED");
    let edit_buttons = document.querySelectorAll(".edit-button");
    for(let i=0; i<edit_buttons.length; i++) {
        edit_buttons[i].addEventListener('click', edit_click);
    }
}

function delete_redirect() {
    let delete_buttons = document.querySelectorAll(".delete-button");
    for(let i=0; i<delete_buttons.length; i++) {
        delete_buttons[i].addEventListener('click', delete_click);
    }
}


function init_listeners() {
    let places = document.querySelectorAll(".placelink");
    for(let i=0;i < places.length;i++) {
        places[i].addEventListener("click", placelink);
    }
    let instructors = document.querySelectorAll(".instructorlink");
    for(let i=0;i < instructors.length;i++) {
        places[i].addEventListener("click", instructorlink);
    }
    let titles = document.querySelectorAll(".titlelink");
    for(let i=0;i < titles.length;i++) {
        places[i].addEventListener("click", titlelink);
    }
}

function placelink(e) {
    console.log("Clicked");
    e.preventDefault();

    let filter = e.target.innerHTML;

    fetch("/activities?place=" + filter, {headers : { 
        'Accept': 'application/json'}})
    .then(res => {
        console.log(res.status);
        return res.json();
    })
    .then(result => {
        console.log(result);

        let model = {
            result: result,
            ge: filter 
        }

        let html = ejs.views_includes_activity_table_place(model);
        let page = document.querySelector(".all-content");
        clear_inner();
        page.insertAdjacentHTML("afterbegin", html);
        delete_redirect();
        edit_redirect();
        document.location.hash = `#activities/place/${filter}`
    })
}

function instructorlink(e) {
    console.log("Clicked");
    e.preventDefault();

    let filter = e.target.innerHTML;

    fetch("/activities?instructor=" + filter, {headers : { 
        'Accept': 'application/json'}})
    .then(res=>res.text())
    .then(html => {
        let page = document.querySelector("*");
        page.innerHTML = html;
    })
}

function titlelink(e) {
    console.log("Clicked");
    e.preventDefault();

    let filter = e.target.innerHTML;

    fetch("/activities?title=" + filter, {headers : { 
        'Accept': 'application/json'}})
    .then(res=>res.text())
    .then(html => {
        let page = document.querySelector("*");
        page.innerHTML = html;
    })
}

//Title and instructor seem incomplete (don't set the hash)

function delete_click(e) {

    let id = e.target.parentNode.id;
    let str = "activities" + id;
    console.log(str)

    fetch(`/activities/${id}`,
    {
        method: "DELETE",
        headers: {"Accept" : "application/json"}
    }).then(res => {
        console.log(res.status);
        console.log("H: " + this.innerHTML)
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        socket.emit('deleted', {id: id, src: this.innerHTML});
    })
}

function edit_click(e) { 
    console.log("Edit clicked");
    e.preventDefault();

    let url = new URL(e.currentTarget.href);
    if(url.pathname.includes("/edit")) {
        editActivity(url);
    }
}

function editActivity(url) {
    url = url.pathname.replace("/edit","");
    fetch(url, {headers: {"Accept" : "application/json"}})
    .then((res) => {
        if (res.status == 200) {
            return res.json();
        } else {
            throw new Error("Activity missing");
        }
    })
    .then(obj => {

        console.log(obj)
        let html = ejs.views_edit({result: obj});
        let page = document.querySelector(".all-content");
        clear_inner();
        page.insertAdjacentHTML("afterbegin", html);

        let closebtn = document.getElementById("closebtn");
        closebtn.addEventListener("click", (e)=> {
            getActivityTable();
        })

        let form = page.querySelector("form");
        let i = form.id;
        document.location.hash = `#edit/${i}`;
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            console.log("Edit submitted")
            fetch(e.target.action, {
                method: "PUT",
                headers: {"Accept":"application/json"},
                body : new FormData(this)
            })
            .then(() => {
                getActivityTable();
                socket.emit('edited', i);
            })
        })
    })
    .catch((err)=>{
        console.log(err);
    })
}

function searchform() {
    let input = document.querySelector("input[name='search']")
    input.addEventListener("input", (e) => {
        let activity_array = document.querySelectorAll(".activity")
        for(let i = 0; i < activity_array.length; i++) {
            let title = activity_array[i].querySelector(".title").innerHTML
            let instructor = activity_array[i].querySelector(".instructor").innerHTML
            let place = activity_array[i].querySelector(".place").innerHTML
            if(title.includes(input.value) || instructor.includes(input.value) || place.includes(input.value)) {
                activity_array[i].style.display = "grid";
            } else {
                activity_array[i].style.display = "none";
            }
        }
})}

function restoreURI(URI_frag) {
    // #upload
    if(URI_frag.match('^#upload/?$')) {  
        console.log("UPLOAD HASH")         // #upload
        document.getElementById("upload-link").dispatchEvent(new Event("click"))

    // #activities/place/:place      #activities/instructor/:instructor       #activities/title/:title
    } else if (URI_frag.match("^#activities/place/.+")) {
        URI_frag = URI_frag.replace(/#activities\//,"").split('/')
        const field = URI_frag[0]
        const value = URI_frag[1]
        document.querySelectorAll(".placelink").forEach(s => {
            if(value === s.innerHTML) {
                console.log(s)
                s.dispatchEvent(new Event("click"))
            }
        })

    // #activities   #edit/:id   #activities/search/:text
    } else if(URI_frag.match("^#activities") || URI_frag.match("^#edit/.+") || URI_frag.match("^#activities/search/.+")) {    // #edit/:id
        var hash = document.location.hash

        document.getElementById("activity-link").dispatchEvent(new Event("click"))
        document.location.hash = hash

    // Anything else
    }  else {  
        console.log("INDEX HASH")    // homepage
        document.getElementById("home-link").dispatchEvent(new Event("click"))
    }
}

    

    

    
