// function render_player() {
//     fetch("/play")
//         .then((res)=> res.text())
//         .then((html)=>{
//             let page = document.querySelector("*");


//             page.querySelector("footer").insertAdjacentHTML('afterbegin', html);
//             evaluate_js(page.querySelector("*"))
//             evaluate_js(page.querySelector("footer"));
//         })
// }

var socket;
var init = 0;

function init_socket() {
    init = 1;
    socket = io();
    socket.on('connect', ()=> {
        console.log('Browser connected')
        document.querySelector(".socket-info").innerHTML = "Connected";

        socket.emit('daniela', 5);

        socket.on('danielaclient', (msg) => {
            console.log(msg);
        })
     
        socket.on('delete', (msg) => {

            let player = document.getElementById("player");
            let t = player.querySelector("header .title").innerHTML

            if((msg.src).includes(t)) {
                let nxt = player.querySelector("#next");
                nxt.dispatchEvent(new Event("click"))
            }

            ls_remove_song(msg.src);

            console.log("A song has been deleted.")
            let song = document.getElementById(msg.id);
            if(song) {
                song.remove();
            }
            let hashstr = document.location.hash;
            if (hashstr.includes(msg.id)) {
                console.log("Song that is edited was deleted.")
                getSongTable();
            }
            
        })

        socket.on('edit', (msg) => {
            console.log("A song has been edited.")
            let hashstr = document.location.hash;
            if (hashstr.includes(msg)) {
                fetch("/songs/"+msg)
                .then((song) => {
                    return song.json();
                })
                .then((obj) => {
                    let html = ejs.views_edit({result: obj});
                    let page = document.querySelector(".all-content");
                    clear_inner();
                    page.insertAdjacentHTML("afterbegin", html);
                    let closebtn = document.getElementById("closebtn");
                    closebtn.addEventListener("click", (e)=> {
                        getSongTable();
        })
                })
            } else if (hashstr.includes("songs")) {
                getSongTable();
            }
        })

        socket.on('upload', (msg) => {
            console.log("A song has been uploaded. View is being refreshed.")
            getSongTable();
        })

        socket.on('append', (msg) => {
            console.log("A song has been added to local storage.");
            ls_add_song(msg);
        })

        socket.on('playremote', () => {
            console.log("Remote play started.");
            let playbtn = document.getElementById("play");
            playbtn.dispatchEvent(new Event("click"));
        })

        socket.on('pauseremote', () => {
            console.log("Remote play started.");
            let pause_btn = document.getElementById("pause");
            pause_btn.dispatchEvent(new Event("click"));
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
    let song_button = document.getElementById('song-link');
    let remote_button = document.getElementById('remote-link');
    upload_button.addEventListener('click', link_click);
    home_button.addEventListener('click', home_click);
    song_button.addEventListener('click', song_click);
    remote_button.addEventListener('click', remote_click);

    // restoreURI_songs(document.location.hash)
    restoreURI(document.location.hash)
}

function remote_click(e) {
    console.log("Remote player button clicked.")
    e.preventDefault();

    let url = new URL(e.currentTarget.href);
    if(url.pathname == "/player/remote") {
        remotePlayer(); // asyn chronous excecutiuion 
    }
}

function link_click(e) {
    console.log("Upload button clicked.")
    e.preventDefault();

    let url = new URL(e.currentTarget.href);
    if(url.pathname == "/songs/upload") {
        uploadSong(); // asyn chronous excecutiuion 
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
    if(url.pathname == "/songs/home") {
        getHome();

    }
    
}

function song_click(e) {
    console.log("Song button clicked.")
    e.preventDefault();

    let url = new URL(e.currentTarget.href);
    console.log(url.pathname)
    if(url.pathname == "/songs") {
        getSongTable();
        edit_redirect();
        delete_redirect();
    }
}

function getSongTable() {
    fetch("/songs", {headers : { 
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

        let html = ejs.views_includes_song_table(model);
        let page = document.querySelector(".all-content");
        clear_inner();
        page.insertAdjacentHTML("afterbegin", html);
        delete_redirect();
        edit_redirect();
        play_redirect();
        append_redirect();
        document.location.hash = "#songs"
    })
}

function getHome() {
    fetch("/songs/home")
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

function uploadSong() {
    fetch("/songs/upload")
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

            fetch("/songs", {method: "POST", body})
            .then(res => {
                return res.json();
            })
            .then(songs=>console.log(songs))
            .then(() => {
                getSongTable()
                socket.emit('uploaded', body);
            })
        })
    })
}
// function uploadSong() {
//     fetch("/songs/upload")
//     .then(res => {
//         return res.json();
//     })
//     .then(obj => {
//         console.log(obj)
//         let html = ejs.views_upload(obj);
//         let page = document.querySelector(".all-content");
//         clear_inner();
//         page.insertAdjacentHTML("afterbegin", html);
        
//         let form = page.querySelector("form");
//         form.addEventListener("submit", (event) => {
//             event.preventDefault();

//             let body = new FormData(form);
//             console.log(body)

//             fetch("/songs", {method: "POST", body, headers: {"Accept" : "application/json"}})
//             .then(res => {
//                 return res.json();
//             })
//             .then(songs=>console.log(songs))
//             .then(
//                 getSongTable()
//             )
//         })
//     })
// }

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

function play_redirect() {
    let play_buttons = document.querySelectorAll(".playbtns");
    for(let i=0;i < play_buttons.length;i++) {
        play_buttons[i].addEventListener('click', play_click)
    }
}

function append_redirect() {
    let append_buttons = document.querySelectorAll(".append-button");
    for(let i=0; i < append_buttons.length;i++) {
        append_buttons[i].addEventListener('click', append_click)
    }
}

function init_listeners() {
    let genres = document.querySelectorAll(".genrelink");
    for(let i=0;i < genres.length;i++) {
        genres[i].addEventListener("click", genrelink);
    }
    let artists = document.querySelectorAll(".artistlink");
    for(let i=0;i < artists.length;i++) {
        genres[i].addEventListener("click", artistlink);
    }
    let albums = document.querySelectorAll(".albumlink");
    for(let i=0;i < albums.length;i++) {
        genres[i].addEventListener("click", albumlink);
    }
}

function genrelink(e) {
    console.log("Clicked");
    e.preventDefault();

    let filter = e.target.innerHTML;

    fetch("/songs?genre=" + filter, {headers : { 
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

        let html = ejs.views_includes_song_table_genre(model);
        let page = document.querySelector(".all-content");
        clear_inner();
        page.insertAdjacentHTML("afterbegin", html);
        delete_redirect();
        edit_redirect();
        document.location.hash = `#songs/genre/${filter}`
    })
}

function artistlink(e) {
    console.log("Clicked");
    e.preventDefault();

    let filter = e.target.innerHTML;

    fetch("/songs?artist=" + filter, {headers : { 
        'Accept': 'application/json'}})
    .then(res=>res.text())
    .then(html => {
        let page = document.querySelector("*");
        page.innerHTML = html;
    })
}

function albumlink(e) {
    console.log("Clicked");
    e.preventDefault();

    let filter = e.target.innerHTML;

    fetch("/songs?album=" + filter, {headers : { 
        'Accept': 'application/json'}})
    .then(res=>res.text())
    .then(html => {
        let page = document.querySelector("*");
        page.innerHTML = html;
    })
}

function delete_click(e) {

    let id = e.target.parentNode.id;
    let str = "songs" + id;
    console.log(str)

    fetch(`/songs/${id}`,
    {
        method: "DELETE",
        headers: {"Accept" : "application/json"}
    }).then(res => {
        console.log(res.status);
        console.log("H: " + this.innerHTML)
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        let player = document.getElementById("player");
            let t = player.querySelector("header .title").innerHTML

            if(t === this.innerHTML) {
                let nxt = player.querySelector("#next");
                nxt.dispatchEvent(new Event("click"))
            }
        socket.emit('deleted', {id: id, src: this.innerHTML});
    })
}

function edit_click(e) { 
    console.log("Edit clicked");
    e.preventDefault();

    let url = new URL(e.currentTarget.href);
    if(url.pathname.includes("/edit")) {
        editSong(url);
    }
}

function play_click(e) {
    console.log("Play clicked");
    e.preventDefault();

    let audio = document.getElementById("player-audio");
    let player = document.getElementById("player");
    player.querySelector(".title").innerHTML = e.target.id;
    audio.src = e.target.id;
    audio.play();
}

function append_click(e) {
    console.log("Append clicked");
    e.preventDefault();

    let id = e.target.id;
    fetch(`/songs/${id}`, { method: 'GET', headers: {'Accept': 'application/json'}}).then(res => res.json()).then(song_data => {
        ls_add_song(song_data.src.replace('public/', '/'));
        socket.emit('appended', song_data.src)
    // automatically 'refresh' the audio element when adding a song
    }).then( () => {
        window.dispatchEvent(new StorageEvent('storage'));
    });

}

function editSong(url) {
    url = url.pathname.replace("/edit","");
    fetch(url, {headers: {"Accept" : "application/json"}})
    .then((res) => {
        if (res.status == 200) {
            return res.json();
        } else {
            throw new Error("Song missing");
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
            getSongTable();
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
                getSongTable()
                socket.emit('edited', i)
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
        let song_array = document.querySelectorAll(".song")
        for(let i = 0; i < song_array.length; i++) {
            let title = song_array[i].querySelector(".title").innerHTML
            let artist = song_array[i].querySelector(".artist").innerHTML
            let genre = song_array[i].querySelector(".genre").innerHTML
            if(title.includes(input.value) || artist.includes(input.value) || genre.includes(input.value)) {
                song_array[i].style.display = "grid";
            } else {
                song_array[i].style.display = "none";
            }
        }
})}

function restoreURI(URI_frag) {
    // #upload
    if(URI_frag.match('^#upload/?$')) {  
        console.log("UPLOAD HASH")         // #upload
        document.getElementById("upload-link").dispatchEvent(new Event("click"))

    // #songs/genre/:genre      #songs/artist/:artist       #songs/album/:album
    } else if (URI_frag.match("^#songs/genre/.+")) {
        URI_frag = URI_frag.replace(/#songs\//,"").split('/')
        const field = URI_frag[0]
        const value = URI_frag[1]
        document.querySelectorAll(".genrelink").forEach(s => {
            if(value === s.innerHTML) {
                console.log(s)
                s.dispatchEvent(new Event("click"))
            }
        })

    // #songs   #edit/:id   #songs/search/:text
    } else if(URI_frag.match("^#songs") || URI_frag.match("^#edit/.+") || URI_frag.match("^#songs/search/.+")) {    // #edit/:id
        var hash = document.location.hash

        document.getElementById("song-link").dispatchEvent(new Event("click"))
        document.location.hash = hash

    // Anything else
    }  else {  
        console.log("INDEX HASH")    // homepage
        document.getElementById("home-link").dispatchEvent(new Event("click"))
    }
}

function remotePlayer() {
    console.log("Remote play button clicked.")
    fetch("/player/remote")
    .then(res => {
        return res.text();
    })
    .then(obj => {
        console.log(obj);
        let html = ejs.views_remote(obj);
        let page = document.querySelector(".all-content");
        clear_inner();
        page.insertAdjacentHTML("afterbegin", html);
        document.location.hash = "#remote"

        let play_btn = document.getElementById("play");
        play_btn.addEventListener("click", () => {
            socket.emit('remote_play')
        })

        let pause_btn = document.getElementById("pause");
        pause_btn.addEventListener("click", () => {
            socket.emit('remote_pause')
        })

    })
}

///////////////////////////////////////////////////////
// PLAYER INIT BELOW //////////////////////////////////

var playlist;

function ls_add_song(song_src) {
    playlist.load(localStorage.getItem("pl"));
    playlist.songs.push(song_src);
    localStorage.setItem("pl", playlist.toJSON());
    console.log("Local storage songs: "+playlist.songs)
} 

function ls_remove_song(song_src) {
    playlist.load(localStorage.getItem("pl"));
    playlist.songs = playlist.songs.filter(song => (!song.includes(song_src) || !song_src.includes(song)));
    localStorage.setItem("pl", playlist.toJSON());
    console.log("Local storage songs: "+playlist.songs)
} 

function init_player_with_playlist(dom, key, a) {

    render_html();
    
    var player = dom;
    var audio = player.querySelector("#player-audio");
    var window_url = new URLSearchParams(window.location.search);
    var player_title = player.querySelector("header .title");
    

    if (localStorage.getItem(key) !== null) {

        playlist = new Playlist();
        playlist.load(localStorage.getItem(key));
        console.log("Player initialized from local storage")

        set_new_playlist();

    } else {

        playlist = new Playlist(a);

        set_new_playlist();
        
    }

    function set_new_playlist() {

        set_player_listeners();

        if(window_url.has("src")) {
            let field = window_url.get("src");
            let first_song = audio.src = field;
            player_title.innerHTML = first_song;

        } else {
            let first_song = audio.src = playlist.next();
            player_title.innerHTML = first_song;
        }

    }

    function set_player_listeners() {

        window.addEventListener("beforeunload",() => {
            console.log("[window] beforeunload event captured !")
            // Hacky way to make the playlist restart from the same song on the next load
            playlist.prev()
            localStorage.setItem(key, playlist.toJSON())
        })


        // Enqueues new songs when added
        window.addEventListener('storage', function(e) {
            if (e.key === "songToEnqueue") {
                console.log("[window] storage event captured !")
                playlist.appendSong(localStorage.getItem("songToEnqueue"))
                updatePlaylistHTML()
            }
        });

        //OPTIONAL TODO: add button on playlist that removes the song
        // player.querySelectorAll("").forEach((x)=> {x.addEventListener("click",
        // function(){
        //     console.log("Clcik event captured !");
        //     playlist.removeSong(x.parentNode.parentNode.dataset.songindex)
        //     updatePlaylistHTML()
        // }
        // )});

        player.querySelector(".play.buttons #play").addEventListener("click",

            () => {
                console.log("Play button clicked.");
                play_current(audio);
            }

        )

        player.querySelector(".play.buttons #pause").addEventListener("click",
        
            () => {
                console.log("Pause button clicked.")
                pause_current(audio);
            }    

        )

        player.querySelector(".play.buttons #next").addEventListener("click",
        
            () => {
                console.log("Next button clicked.")
                go_to_next(audio);

            }    

        )

        player.querySelector(".play.buttons #prev").addEventListener("click",
        
            () => {
                console.log("Prev button clicked.")
                go_to_beginning();
            }    

        )

        player.querySelector(".play.buttons #repeat").addEventListener("click",

            () => {
                console.log("Repeat button clicked.");
                toggle_repeat();
            }
        )

        player.querySelector(".volume #loud").addEventListener("click",
            
            () => {
                console.log("Volume increased.");
                increase_volume();
            }
        
        )

        player.querySelector(".volume #low").addEventListener("click",
            
            () => {
                console.log("Volume decreased.");
                decrease_volume();
            }
        
        )

        player.querySelector(".volume #mute").addEventListener("click",
            
            () => {
                console.log("Volume muted/unmuted.");
                mute_volume();
            }
        
        )

        player.querySelector(".volume #volumebar").addEventListener("input",
        
            () => {
                console.log("Volume input changed");
                console.log(audio.volume);
                change_volume();
            }    

        )

        player.querySelector("#player-audio").addEventListener("ended",
        
            () => {
                go_to_next();
                console.log("Audio finished playing.");
            }
        )

        player.querySelector("#player-audio").addEventListener("timeupdate", 
            
            () => {
                console.log("Time updated.");
                update_time_visuals();
            }
        )

        player.querySelector("#player-audio").addEventListener("loadeddata",
        
            () => {
                console.log("Data of song loaded.");
                update_song_duration(player, audio);
                
            }
        )
    }

    function play_current(audio) {

        audio.play();
    }
    
    function pause_current(player) {
        audio.pause();
    }

    function go_to_next() {
        next_audio = playlist.next();
        audio.src = next_audio;
        player_title.innerHTML = next_audio;
        play_current(audio);
    }
    
    function go_to_beginning() {
        
        if (!audio.paused) {
            prev_audio = playlist.prev();
            audio.src = prev_audio;
            player_title.innerHTML = prev_audio;
            play_current(audio);
        } else {
            audio.currentTime = 0;
            play_current(audio);
        }
    }

    function toggle_repeat() {
        if (playlist.repeat) {
            playlist.repeat = false;
            console.log("Repeat: FALSE")
        } else {
            playlist.repeat = true;
            console.log("Repeat: TRUE")
        }
    }
    
    function increase_volume() {
    
        if (audio.volume <= 0.9) {
            audio.volume += 0.1;
            player.querySelector(".volume #volumebar").value = audio.volume;
    
        } else {
            console.log("Maximum volue.");
        }
        
    }
    
    function decrease_volume() {
        if (audio.volume >= 0.1) {
            audio.volume -= 0.1;
            player.querySelector(".volume #volumebar").value = audio.volume;
    
        } else {
            console.log("Minimum volue.");
        }
        
    }
    
    function mute_volume() {
    
        if (!audio.muted) {
            audio.muted = true;
            update_volumebar(1);
        } else {
            audio.muted = false;
            update_volumebar(0);
        }
    
        function update_volumebar(b) {
            if(b) {
                player.querySelector(".volume #volumebar").value = 0;
            } else {
                player.querySelector(".volume #volumebar").value = audio.volume;
            }
        }
    }
    
    function change_volume() {
        let bar = player.querySelector(".volume #volumebar");
        let volume = bar.value;
        audio.volume = volume;
    }
    
    function update_time_visuals() {
        let bar = player.querySelector(".seek progress");
        bar.value = audio.currentTime;
    
        let elapsed = player.querySelector(".seek .remain");
        elapsed.innerHTML = format_seconds(audio.currentTime);
        
    }
    
    function update_song_duration(player, audio) {
        player.querySelector(".seek .elapsed").innerHTML = format_seconds(audio.duration)
        player.querySelector(".seek .remain").innerHTML = format_seconds(0);
        let progress = player.querySelector(".seek progress");
        progress.value = 0;
        progress.min = 0;
        progress.max = audio.duration;
    }



    function render_html() {
        dom.innerHTML =   ` <header>
        <p class="title">Living on a prayer</p>
    </header>
    <section class="seek">
        <p class="remain">1:04</p>
        <progress min="0" max="3" value="1"></progress>
        <p class="elapsed">3:12</p>
    </section>
    
    <section class="play buttons">
        <button id="prev" class="small"></button>
        <button id="play"></button>
        <button id="pause"></button>
        <button id="next" class="small"></button>
        <button id="repeat" class="small"></button>
    </section>
    <section class="info">
        <p></p>
    </section>
    
    <aside class="volume">
        <button id="mute"></button>
        <button id="loud"></button>
        <button id="low"></button>
        <input id="volumebar" type="range" value="1" max="1" min="0" step="0.1"></input>
    </aside>
    <!-- This is the hidden audio element which will play your songs
    controlled from the #player buttons -->
    <audio id="player-audio" style="display:none"></audio>`
    }
    

    

    
} 