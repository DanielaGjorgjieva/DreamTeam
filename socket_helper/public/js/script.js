/**
 * Web Atelier 2021 3 - Object-Oriented JavaScript
 *
 * Student: Bojan Lazarevski
 *
 */

/* *************************************************************** */
/* ** REPLACE THIS FILE WITH YOUR OWN script.js FROM EXERCISE 2 ** */
/* *************************************************************** */

//--------------------------------------------------------------------------------------
// Task 1
//--------------------------------------------------------------------------------------

 /**
 * @param {number} s - A time as the number of seconds.
 * @return {string} A string which represents the number of minutes followed by the remaining seconds
 *  with the M:SS format. If the input value is negative, the resulting string should be in -M:SS format.
 * SS indicates that if the number of seconds is less than 10, it should be padded with a 0 character.
 */
  function format_seconds(s) {
    
    if ((typeof s != "number") || isNaN(s)) {
        return "?:??"
    }
    
    let H = Math.trunc(Math.abs(s) / 3600);
    let M = Math.trunc(Math.abs(s) % 3600 / 60);
    let SS = Math.trunc(Math.abs(s) % 3600 % 60);

    
    if (SS < 10) {
        SS = "0" + SS;
    }
    
    if (H <= 0) {
        return Math.trunc(s) >= 0 ? "" + M + ":" + SS : "-" + M + ":" + SS;
    }
    else {
        return Math.trunc(s) >= 0 ? "" + H + ":" + M + ":" + SS : "-" + H + ":" + M + ":" + SS;
}
    }
    


//They should be able to write this function on the fly


 /**
 * @param {number[]} a - The array of numbers.
 * @param {number} c - The scalar multiplier.
 * @return {number[]} An array computed by multiplying each element of the input array `a`
 * with the input scalar value `c`.
 */
function scalar_product(a, c) {
    if ((!Array.isArray(a)) || (typeof c != "number")) {
        return undefined;
    }
    let A = a.map(x => x * c);
    return A;
}

/**
 * @param {number[]} a - The first array of numbers.
 * @param {number[]} b - The second array of numbers.
 * @return {number} A value computed by summing the products of each pair
 * of elements of its input arrays `a`, `b` in the same position.
 */
/* TODO: One test failing */
function inner_product(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b) || a.length != b.length)
    {
        return undefined;
    }
    
    var sum = 0;
    for (let i = 0; i < a.length; ++i) {
        sum = a[i]*b[i];
    }
    
    return sum;
}


/**
 * @param {array} a - The array.
 * @param {function} mapfn - The function for the map step.
 * @param {function} [reducefn= function(x,y) { return x+y; }] - The
 * function for the reduce step.
 * @param {string} [seed=""] - The accumulator for the reduce step.
 * @return {*} The reduced value after the map and reduce steps.
 */
 function mapReduce(a, mapfn, reducefn =(a,b)=>{return a+b;}, seed="") {
    if (!Array.isArray(a) || typeof mapfn != "function" || (reducefn !== undefined && typeof reducefn != "function"))
        return;
 
    return a.map(mapfn).reduce(reducefn, seed);
}


/**
* @param {integer} x - The first integer.
* @param {integer} y - The second integer.
* @param {integer} [step=1] - The value to add at each step.
* @return {integer[]} An array containing numbers x, x+step, … last, where:
*    - last equals x + n*step for some n,
*    - last <= y < last + step if step > 0 and
*    - last + step < y <= last if step < 0.
*/
function range(x, y, step=1) {
    
    var arr = [];
    
    if ((typeof x !== "number") || (typeof y !== "number") || (typeof step !== "number") || (step === 0)) {
        return undefined;
    }
    else if (step > 0) {
        if (x > y) {
            return [];
        }
        for(x; x <= y; x += step) {
            arr.push(x);
        }
    }
    else {
        if (x < y) {
            return [];
        }
        for(x; x >= y; x += step) {
            arr.push(x);
        }
    }
    
    return arr;
}




/**
 * @param {number[]} a - The first array of numbers.
 * @param {number[]} b - The second array of numbers.
 * @return {number[]} An array with the elements found both in `a` and `b`.
 */
function array_intersect(a, b) {
    if(!Array.isArray(a) || !Array.isArray(b)) {
        return undefined;
    }
    let arr = [];
    arr = a.filter(el => b.includes(el));
    return arr;
}


/**
 * @param {number[]} a - The first array of numbers.
 * @param {number[]} b - The second array of numbers.
 * @return {number[]} An array with the elements found in `a` but not in `b`.
 */
function array_difference(a, b) {
    if(!Array.isArray(a) || !Array.isArray(b)) {
        return undefined;
    }
    let arr = [];
    arr = a.filter(el => !b.includes(el));
    return arr;
}


//--------------------------------------------------------------------------------------
// Task 2
//--------------------------------------------------------------------------------------

/**
 * @param {number[]} a - The array over which to iterate.
 * @return {function} - call this function to retrieve the next element of the array. The function throws an error if called again after it reaches the last element.
 */
 function iterator(a) {

    if (!Array.isArray(a))
        return undefined;     
    
    var i = 0;     
    
    return function next (b) {
        if (typeof b === "undefined") {                      
            if (i >= a.length) {
                throw "Error";
            }
            return a[i++];
        }
        if (typeof b === "number") {
            i += b;                 
            return i;  
        }                        
        if (Array.isArray(b)) {                     
            a = b;                     
            i = 0;                     
            return next;                 
        }  
    }      
} 

//--------------------------------------------------------------------------------------
// Task 3
//--------------------------------------------------------------------------------------

/**
 * @param {dom} dom_audio - Reference to the `<audio>` element.
 * @param {URL[]} song_urls - An Array of song URLs, whose values can be passed to the <audio src> attribute.
 * @param {Boolean} volume - If true (default), initialize and show the volume control buttons.
 * @return {function} A function which can be called with a new `song_urls` Array to replace the current playlist.
 */
function init_player(song_urls, volume = true)
{
    var window_url = new URLSearchParams(window.location.search);

    set_new_playlist(song_urls);
    set_player_listeners();

    var it;
    var audio;
    var player;

    return (f) => {
        return set_new_playlist;
    }

    function set_new_playlist(song_urls) {

        it = iterator(song_urls);
        audio = document.getElementById("player-audio");;
        player = document.querySelector("#player");

        if(window_url.has("src")) {
            let field = window_url.get("src");
            let first_song = audio.src = field;
            player.querySelector("header .title").innerHTML = "/"+first_song;

        } else {
            let first_song = audio.src = it();
            player.querySelector("header .title").innerHTML = "/"+first_song;
        }

    }

    function set_player_listeners() {

        player.querySelector(".play.buttons #play").addEventListener("click",

            () => {
                console.log("Play button clicked.");
                play_current(player);
            }

        )

        player.querySelector(".play.buttons #pause").addEventListener("click",
        
            () => {
                console.log("Pause button clicked.")
                pause_current(player);
            }    

        )

        player.querySelector(".play.buttons #next").addEventListener("click",
        
            () => {
                console.log("Next button clicked.")
                go_to_next();
            }    

        )

        player.querySelector(".play.buttons #prev").addEventListener("click",
        
            () => {
                console.log("Prev button clicked.")
                go_to_beginning(player, audio);
            }    

        )

        player.querySelector(".volume #loud").addEventListener("click",
            
            () => {
                console.log("Volume increased.");
                increase_volume(player, audio);
            }
        
        )

        player.querySelector(".volume #low").addEventListener("click",
            
            () => {
                console.log("Volume decreased.");
                decrease_volume(player, audio);
            }
        
        )

        player.querySelector(".volume #mute").addEventListener("click",
            
            () => {
                console.log("Volume muted/unmuted.");
                mute_volume(player, audio);
            }
        
        )

        player.querySelector(".volume #volumebar").addEventListener("input",
        
            () => {
                console.log("Volume input changed");
                console.log(audio.volume);
                change_volume(player, audio);
            }    

        )

        player.querySelector("#player-audio").addEventListener("ended",
        
            () => {
                go_to_next(player, it);
                console.log("Audio finished playing.");
            }
        )

        player.querySelector("#player-audio").addEventListener("timeupdate", 
            
            () => {
                console.log("Time updated.");
                update_time_visuals(player, audio);
            }
        )

        player.querySelector("#player-audio").addEventListener("loadeddata",
        
            () => {
                console.log("Data of song loaded.");
                update_song_duration(player, audio);
                
            }
        )

        function go_to_next() {
            try {
                var next_song = it();
                play_audio(player, next_song);
            } catch(e) {
                console.log("Final song reached.");
                set_new_playlist(song_urls);

                /* Optional infinite loop */
                go_to_next();
            }
            
        }


    }

    



    
}

function play_current(player) {
    player.querySelector("#player-audio").play();
}

function pause_current(player) {
    player.querySelector("#player-audio").pause();
}

function go_to_beginning(player, audio) {
    audio.currentTime = 0;
    play_current(player);
}

function increase_volume(player, audio) {

    if (audio.volume <= 0.9) {
        audio.volume += 0.1;
        player.querySelector(".volume #volumebar").value = audio.volume;

    } else {
        console.log("Maximum volue.");
    }
    
}

function decrease_volume(player, audio) {
    if (audio.volume >= 0.1) {
        audio.volume -= 0.1;
        player.querySelector(".volume #volumebar").value = audio.volume;

    } else {
        console.log("Minimum volue.");
    }
    
}

function mute_volume(player, audio) {

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

function change_volume(player, audio) {
    let bar = player.querySelector(".volume #volumebar");
    let volume = bar.value;
    audio.volume = volume;
}

function update_time_visuals(player, audio) {
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

function play_audio(player, url) {
    const p = player.querySelector("#player-audio");

    p.src = url;
    p.currentTime = 0;

    player.querySelector("header .title").innerHTML = "/"+url;

    play_current(player);
    
}

//--------------------------------------------------------------------------------------
// Task 4
//--------------------------------------------------------------------------------------

/**
 * @param {String} text - The mini markdown text string.
 * @return {String} The corresponding HTML representation.
 */
 function mini_md(text)
 {
    var output = "";
    var previous = '\n';
    var heading = false;
    var subtitle = false;
    var paragraph = false;
    var start = false;
    const characters = text.split('');

    characters.forEach((e) => {
        switch (e) {
            case '#':
                // Previous symbol was a #, so this must
                // be a subtitle.
                if (heading) {
                    subtitle = true;
                    heading = false;
                    // We are in a new line, this is a heading.
                } else if (previous == '\n') {
                    heading = true;
                } else 
                    output += e;

                previous = e;
                        break;
                     
            case ' ':
                // If this is a title
                // We use start to determine
                // if we have already started
                // or not writing.
                if (heading && !start) {
                    output += '<h1>';
                    start = true;
                }
                // If this is a subtitle
                else if (subtitle && !start) {
                    output += '<h2>';
                    start = true;
                } else 
                    output += e;
                         
                previous = e;   
                break;
                     
            case '\n':
                // If there was an empty line
                if (previous == '\n') {
                    if (paragraph) {
                        // close the paragraph
                        output += '</p><p>\n';
                    } else {
                        // empty line result in the beginning
                        // of the paragraph
                        output += '<p>\n';
                        paragraph = true;
                    }
                } else {
                    // close title
                    if (heading) {
                        output += '</h1>\n';
                        heading = false;
                        start = false;
                        // close the subtitle
                    } else if (subtitle) {
                        output += '</h2>\n';
                        subtitle = false;
                        start = false;
                        // we continue the normal text
                    } else 
                        output += e;
                }
                         
                previous = e;
                break;
                     
            default:
                previous = e;
                output += e;
        }});

    if (heading) {
        output += '</h1>';
        heading = false;
    } else if (subtitle) {
        output += '</h2>';
        subtitle = false;
    } else if (paragraph) {
        output += '</p>';
        paragraph = false;
    }
    console.log(output);
    return output;
}