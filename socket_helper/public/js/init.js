/**
 * Initialize the content of the songs.html page as described in Task 2
 */
 function init_songs() {

    var window_url = new URLSearchParams(window.location.search);
    var title_selector = document.querySelector("title"); 
    var page = window.location.pathname.split("/").pop();
    
    if (page == "songs.html") {

        console.log(page);

        let render = function(song) {
            return `<article class="song" data-sid=${song._id}>
                    <a rel="play" href="player.html?src=${song.src}"" target="player">Play</a>
                    <span class="filename">${song.filename}</span>
                    <span class="duration">${format_seconds(song.duration)}</span>
                    <span class="size">${song.size}</span>
                    <span class="title">${song.title}</span>
                    <span class="album">${song.album}</span>
                    <span class="artist">${song.artist}</span>
                    <span class="genre">${song.genre}</span>
                    <span class="desc"></span>
                    <span><progress class="quality" min="0" max="10" value="${song.quality}"></progress></span>
                    <a rel="enqueue" href="#" data-src="${song.src}">Add to playlist</a>
                    <button data-action="fav" id="fav_${song._id}" data-fav="true">&#9733;</button>
                    <button data-action="delete" id="delete_${song._id}">&#215;</button>
                    
                    <a rel="download" href="/download/${song.filename}" download>MP3</a>
                    </article>`
        }

        var song_table = document.querySelector(".song_table");
        let initialize_song_table = function(catalog) {
            let song_counter = 0;
            catalog.forEach((song) => {
                song_table.innerHTML += render(song);
                song_counter += 1;
            });
            document.querySelector("footer p").innerHTML += `=== Songs displayed: ${song_counter}`;
        }

        if (window_url.has("artist")) {

            let field = window_url.get("artist");
            let arr = find_by(song_data, {'artist' : field})

            initialize_song_table(arr);
            title_selector.innerHTML = `Artist: ${field}`;

            update_side_bar(arr, "album");

        } else if (window_url.has("album")) {

            let field = window_url.get("album");
            let arr = find_by(song_data, {'album' : field})

            initialize_song_table(arr);
            title_selector.innerHTML = `Album: ${field}`;

            update_side_bar(arr, "artist");

        } else if (window_url.has("genre")) {

            let field = window_url.get("genre");
            let arr = find_by(song_data, {'genre' : field});

            initialize_song_table(arr);
            title_selector.innerHTML = `Genre: ${field}`;

            update_side_bar(arr, "artist");

            
        } else {
            initialize_song_table(song_data);
            title_selector.innerHTML = "Song Table";
            update_side_bar(song_data, "artist");
        }
    } else if (page == "index.html") {
        update_side_bar(song_data, "artist");
        init_home();
    }

    document.querySelectorAll(".song a[rel='enqueue']").forEach((x)=>{
        x.addEventListener("click", function(){
            localStorage.setItem("songToEnqueue",this.dataset.src)
        })
    })

    // function get_set() {
    //     let set = [];
    //     arr.forEach((song) => {
    //         for (const [key, value] of Object.entries(song)) {
    //             if ((key == "artist") && (filter == "artist")) {
    //                 if (!set.includes(value)) {
    //                     set.push(value)
    //                 }
    //             } else if ((key == "album") && (filter == "album")) {
    //                 if (!set.includes(value)) {
    //                     set.push(value);
    //                 }
    //             } 
    //         }
    //     });
    //     return set;
    // }

    function update_side_bar(arr, filter) {
        let sidebar = document.getElementById("artistbar");

        let set = [];
        arr.forEach((song) => {
            for (const [key, value] of Object.entries(song)) {
                if ((key == "artist") && (filter == "artist")) {
                    if (!set.includes(value)) {
                        set.push(value)
                    }
                } else if ((key == "album") && (filter == "album")) {
                    if (!set.includes(value)) {
                        set.push(value);
                    }
                } 
            }
        });
        if (filter == "artist") {
            set.forEach((a) => {
                sidebar.innerHTML += `<li><a href="songs.html?artist=${a}">${a}</a></li>`;
            });
            document.querySelector("#dynamic-header").innerHTML = "Artists";
        } else if (filter == "album") {
            set.forEach((a) => {
                sidebar.innerHTML += `<li><a href="songs.html?album=${a}">${a}</a></li>`;
            });
            document.querySelector("#dynamic-header").innerHTML = "Albums";
        }

        return set;

    }
}



/**
 * Initialize the content of the index.html page as described in Task 3
 */
function init_home() {

    

    var extra_content = document.querySelector("#extra-content");
    let time = total_play_time();
    let num_of_songs = song_data.length;
    let best = best_on_charts();

    extra_content.innerHTML = `
    <span>Total Songs: ${num_of_songs}</span>
    <span>Total Playtime: ${time}</span>
    <span>Best on Charts: ${best}</span>
    `


    // <span>Total Play Time: 37m 41s</span>
    // <span>Total Songs: 2198</span>
    // <span>Best on Charts: Bad Habits</span>

    function total_play_time() {
        let sum = 0;
        song_data.forEach((song) =>
        {
            if('duration' in song) {
                if(song['duration'] != NaN) {
                    sum += song['duration'];
                    sum = Math.trunc(sum);
                }
            }
        })
        return format_seconds(sum);
    }

    function best_on_charts() {
        top_song = song_data[0];
        song_data.forEach((song) =>
        {
            if('quality' in song) {
                if(song['quality'] != NaN) {
                    if (song['quality'] > top_song['quality']) {
                        top_song = song;
                    }
                }
            }
        })
        if ('title' in top_song) {
            return top_song['title'];
        } else {
            return undefined;
        }
    }




}




/**
 * @param {Array[Object]} a - Array of objects, which may contain at least field k
 * @param {String} k - The name of a field of the objects inside the array
 * @return {Object{Array[Object]}} - returns a dictionary which indexes the original Objects
 * contained in the Array a depending on the values of their field k.
 */
function group_by(a, k) {
    if (Array.isArray(a)) {
        var ret = {}
        a.forEach((x)=>{
            var ind = x[k] != undefined ? x[k]:undefined
            if (ret[ind] === undefined)
                ret[ind] = []
            ret[ind].push(x)
        });
 
        return ret
    }
}



/**
 * @param {Array[Object]} a - Array of objects
 * @param {Object} f - Filter object, to be matched against the objects in the array
 * @return {Array[Object]}} - returns an array of the matching objects.
 * An object matches the filter if all non-undefined/non-null fields of the filter
 * are found with the same value in the object
 */
function find_by(a, f) {
    var keys = Object.keys(f).filter((k)=> f[k] !== undefined && f[k] !== null);
    return a.filter((x)=>{ return keys.every((a)=>{ return f[a] === x[a] }) })
}


//This is the constructor function stub for Task 5.
//If you prefer to use classes, feel free to change it accordingly.
class Playlist {
    constructor(a = [], repeat = false) {

        this.index = 0;
        this.songs = a;
        this.repeat = repeat;
        this.it = iterator(a);
    }

        toJSON() {
            return JSON.stringify(
                {
                    index: this.index,
                    songs: this.songs,
                    repeat: this.repeat
                });
        };

        load(json) {
            try {
                json = JSON.parse(json);
            } catch (e) {
                /* No throwing of exc */
                return;
            };

            Object.keys(json).forEach((field) => {
                this[field] = json[field];
            });
            this.it = iterator(this.songs);
            iterator(this.index);

        };

        next() {
            try {
                let next_song = this.it();
                this.index++;
                return next_song;
                // Iterator returns error if the index goes out of bounds
            } catch (e) {
                if (this.repeat) {
                    // Restarts the playlist
                    this.it = iterator(this.songs);
                    this.index = 0;
                    return this.it();

                } else
                    //TODO: FIX???!?!!?
                    return;
            }
        };

        prev() {
            var prev_song;
            try {
                this.it(-2);
                prev_song = this.it();

                if (prev_song === undefined) {
                    throw "Undefined";
                }

                this.index--;
                return prev_song;
                // Iterator returns error if we go to a negative index (e.g -2)
            } catch (e) {
                if (this.repeat) {
                    // Restarts the playlist
                    this.it = iterator(this.songs);
                    // Sets the index to the last song
                    this.index = this.songs.length - 1;
                    this.it(this.index);
                    return this.it();

                } else {
                    this.it = iterator(this.songs);
                    this.index = 0;
                    return this.it();
                }
            }
        };

        appendSong(s) {
            this.songs.push(s);
        };

        removeSong(s) {
            this.songs.splice(s,1);
        }

        toHTML() {
            var html_content = `<h1>Music Playlist</h1>
                <p>Total songs in this playlist: ${this.songs.length} </p>
                <p>Currently playing song: ${this.songs[this.index]} </p>`;

            if(this.repeat) {
                html_content += `<p>Auto-repeat: ON </p>`;
            } else {
                html_content += `<p>Auto-repeat: OFF </p>`;
            }

            return html_content;
        }

}



//Task 6
//Adapt and extend the code of init_player
