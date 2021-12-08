/**
 * Initialize the content of the activities.html page as described in Task 2
 */
 function init_activities() {

    var window_url = new URLSearchParams(window.location.search);
    var title_selector = document.querySelector("title"); 
    var page = window.location.pathname.split("/").pop();
    
    if (page == "activities.html") {

        console.log(page);

        let render = function(activity) {
            return `<article class="activity" data-sid=${activity._id}>
                    <a rel="play" href="player.html?src=${activity.src}"" target="player">Play</a>
                    <span class="title">${activity.sport}</span>
                    <span class="duration">${format_seconds(activity.duration)}</span>
                    <span class="desc"></span>
                    <span class="place">${activity.place}</span>
                   
                    <span class="instructor">${activity.instructor}</span>

                     <span><progress class="date"  min="2018-01-01" max="2023-12-31"value="${activity.date}"></progress></span>
                     <span><progress class="quantity"  min="0" max="25"value="${activity.quantity}"></progress></span>
                  
                    
                    </article>`
        }

          // <a rel="enqueue" href="#" data-src="${activity.src}">Add to playlist</a>
                    // <button data-action="fav" id="fav_${activity._id}" data-fav="true">&#9733;</button>
                    // <button data-action="delete" id="delete_${activity._id}">&#215;</button>

        var activity_table = document.querySelector(".activity_table");
        let initialize_activity_table = function(catalog) {
            let activity_counter = 0;
            catalog.forEach((activity) => {
                activity_table.innerHTML += render(activity);
                activity_counter += 1;
            });
            document.querySelector("footer p").innerHTML += `=== activities displayed: ${activity_counter}`;
        }

        if (window_url.has("instructor")) {

            let field = window_url.get("instructor");
            let arr = find_by(activity_data, {'instructor' : field})

            initialize_activity_table(arr);
            title_selector.innerHTML = `instructor: ${field}`;

            update_side_bar(arr, "title");

        } else if (window_url.has("title")) {

            let field = window_url.get("title");
            let arr = find_by(activity_data, {'title' : field})

            initialize_activity_table(arr);
            title_selector.innerHTML = `Title: ${field}`;

            update_side_bar(arr, "instructor");

        } else if (window_url.has("place")) {

            let field = window_url.get("place");
            let arr = find_by(activity_data, {'place' : field});

            initialize_activity_table(arr);
            title_selector.innerHTML = `Place: ${field}`;

            update_side_bar(arr, "instructor");

            
        } else {
            initialize_activity_table(activity_data);
            title_selector.innerHTML = "activity Table";
            update_side_bar(activity_data, "instructor");
        }
    } else if (page == "index.html") {
        update_side_bar(activity_data, "instructor");
        init_home();
    }

    document.querySelectorAll(".activity a[rel='enqueue']").forEach((x)=>{
        x.addEventListener("click", function(){
            localStorage.setItem("activityToEnqueue",this.dataset.src)
        })
    })


    function update_side_bar(arr, filter) {
        let sidebar = document.getElementById("instructorbar");

        let set = [];
        arr.forEach((activity) => {
            for (const [key, value] of Object.entries(activity)) {
                if ((key == "instructor") && (filter == "instructor")) {
                    if (!set.includes(value)) {
                        set.push(value)
                    }
                } else if ((key == "title") && (filter == "title")) {
                    if (!set.includes(value)) {
                        set.push(value);
                    }
                } 
            }
        });
        if (filter == "instructor") {
            set.forEach((a) => {
                sidebar.innerHTML += `<li><a href="activities.html?instructor=${a}">${a}</a></li>`;
            });
            document.querySelector("#dynamic-header").innerHTML = "Instructors";
        } else if (filter == "title") {
            set.forEach((a) => {
                sidebar.innerHTML += `<li><a href="activities.html?title=${a}">${a}</a></li>`;
            });
            document.querySelector("#dynamic-header").innerHTML = "Titles";
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
    let num_of_activities = activity_data.length;
    let best = best_on_charts();

    extra_content.innerHTML = `
    <span>Total activities: ${num_of_activities}</span>
    <span>Total Playtime: ${time}</span>
    <span>Best on Charts: ${best}</span>
    `


    // <span>Total Play Time: 37m 41s</span>
    // <span>Total activities: 2198</span>
    // <span>Best on Charts: Bad Habits</span>

    function total_play_time() {
        let sum = 0;
        activity_data.forEach((activity) =>
        {
            if('duration' in activity) {
                if(activity['duration'] != NaN) {
                    sum += activity['duration'];
                    sum = Math.trunc(sum);
                }
            }
        })
        return format_seconds(sum);
    }

    function best_on_charts() {
        top_activity = activity_data[0];
        activity_data.forEach((activity) =>
        {
            if('quality' in activity) {
                if(activity['quality'] != NaN) {
                    if (activity['quality'] > top_activity['quality']) {
                        top_activity = activity;
                    }
                }
            }
        })
        if ('title' in top_activity) {
            return top_activity['title'];
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
        this.activities = a;
        this.repeat = repeat;
        this.it = iterator(a);
    }

        toJSON() {
            return JSON.stringify(
                {
                    index: this.index,
                    activities: this.activities,
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
            this.it = iterator(this.activities);
            iterator(this.index);

        };

        next() {
            try {
                let next_activity = this.it();
                this.index++;
                return next_activity;
                // Iterator returns error if the index goes out of bounds
            } catch (e) {
                if (this.repeat) {
                    // Restarts the playlist
                    this.it = iterator(this.activities);
                    this.index = 0;
                    return this.it();

                } else
                    //TODO: FIX???!?!!?
                    return;
            }
        };

        prev() {
            var prev_activity;
            try {
                this.it(-2);
                prev_activity = this.it();

                if (prev_activity === undefined) {
                    throw "Undefined";
                }

                this.index--;
                return prev_activity;
                // Iterator returns error if we go to a negative index (e.g -2)
            } catch (e) {
                if (this.repeat) {
                    // Restarts the playlist
                    this.it = iterator(this.activities);
                    // Sets the index to the last activity
                    this.index = this.activities.length - 1;
                    this.it(this.index);
                    return this.it();

                } else {
                    this.it = iterator(this.activities);
                    this.index = 0;
                    return this.it();
                }
            }
        };

        appendactivity(s) {
            this.activities.push(s);
        };

        removeactivity(s) {
            this.activities.splice(s,1);
        }

        toHTML() {
            var html_content = `<h1>Music Playlist</h1>
                <p>Total activities in this playlist: ${this.activities.length} </p>
                <p>Currently playing activity: ${this.activities[this.index]} </p>`;

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
