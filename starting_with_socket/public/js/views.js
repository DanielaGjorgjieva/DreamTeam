//EJS Compiled Views - This file was automatically generated on Thu Dec 09 2021 15:13:41 GMT+0100 (Central European Standard Time)
ejs.views_include = function(locals) {
    console.log("views_include_setup",locals);
    return function(path, d) {
        console.log("ejs.views_include",path,d);
        return ejs["views_"+path.replace(/\//g,"_")]({...d,...locals}, null, ejs.views_include(locals));
    }
};
ejs.views_edit = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<main>\n    <h1>Song Edit Form</h1>\n    <div class=\"form-div\">\n        <form method=\"POST\" id=\"<%=result._id%>\" action=\"/songs/<%=result._id%>?_method=PUT\" encType=\"multipart/form-data\" class=\"upload-form\">\n            <label>Title</label>\n            <input type=\"text\" name=\"title\" placeholder=\"Title of the song\" value=\"<%= result.title %>\" />\n\n            <label>Artist</label>\n            <input type=\"text\" name=\"artist\" placeholder=\"Artist of the song\" value=\"<%= result.artist %>\" />\n\n            <label>Album</label>\n            <input type=\"text\" name=\"album\" placeholder=\"Album of the song\" value=\"<%= result.album %>\"/>\n\n            <label>Genre</label>\n            <select name=\"genre\">\n                <option value=\"Pop\">Pop</option>\n                <option value=\"Rnb\">RnB</option>\n                <option value=\"Rap\">Rap</option>\n                <option value=\"Rock\">Rock</option>\n                <option value=\"Classical\">Classical</option>\n            </select>\n\n            <label>Description</label>\n            <textarea name=\"desc\" cols=\"30\" rows=\"3\" placeholder=\"Put a description of the song...\" value=\"<%= result.desc %>\"></textarea>\n\n            <label>Input File</label>\n            <input type=\"file\" name=\"filename\" value=\"<%= result.filename %>\" />\n\n            <label for=\"customCbox\">Favorite</label>\n            <input type=\"checkbox\" id=\"customCbox\" name=\"favorite\">\n\n            <label>Quality</label>\n            <input type=\"range\" name=\"quality\" min=\"1\" max=\"10\" value=\"<%=result.quality %>\">\n\n            <span></span>\n            <input type=\"submit\" value=\"Submit\">\n        </form>\n    </div>\n    <button id=\"closebtn\"> Close Edit Form</button>\n</main>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<main>\n    <h1>Song Edit Form</h1>\n    <div class=\"form-div\">\n        <form method=\"POST\" id=\"")
    ; __line = 4
    ; __append(escapeFn(result._id))
    ; __append("\" action=\"/songs/")
    ; __append(escapeFn(result._id))
    ; __append("?_method=PUT\" encType=\"multipart/form-data\" class=\"upload-form\">\n            <label>Title</label>\n            <input type=\"text\" name=\"title\" placeholder=\"Title of the song\" value=\"")
    ; __line = 6
    ; __append(escapeFn( result.title ))
    ; __append("\" />\n\n            <label>Artist</label>\n            <input type=\"text\" name=\"artist\" placeholder=\"Artist of the song\" value=\"")
    ; __line = 9
    ; __append(escapeFn( result.artist ))
    ; __append("\" />\n\n            <label>Album</label>\n            <input type=\"text\" name=\"album\" placeholder=\"Album of the song\" value=\"")
    ; __line = 12
    ; __append(escapeFn( result.album ))
    ; __append("\"/>\n\n            <label>Genre</label>\n            <select name=\"genre\">\n                <option value=\"Pop\">Pop</option>\n                <option value=\"Rnb\">RnB</option>\n                <option value=\"Rap\">Rap</option>\n                <option value=\"Rock\">Rock</option>\n                <option value=\"Classical\">Classical</option>\n            </select>\n\n            <label>Description</label>\n            <textarea name=\"desc\" cols=\"30\" rows=\"3\" placeholder=\"Put a description of the song...\" value=\"")
    ; __line = 24
    ; __append(escapeFn( result.desc ))
    ; __append("\"></textarea>\n\n            <label>Input File</label>\n            <input type=\"file\" name=\"filename\" value=\"")
    ; __line = 27
    ; __append(escapeFn( result.filename ))
    ; __append("\" />\n\n            <label for=\"customCbox\">Favorite</label>\n            <input type=\"checkbox\" id=\"customCbox\" name=\"favorite\">\n\n            <label>Quality</label>\n            <input type=\"range\" name=\"quality\" min=\"1\" max=\"10\" value=\"")
    ; __line = 33
    ; __append(escapeFn(result.quality ))
    ; __append("\">\n\n            <span></span>\n            <input type=\"submit\" value=\"Submit\">\n        </form>\n    </div>\n    <button id=\"closebtn\"> Close Edit Form</button>\n</main>")
    ; __line = 40
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_includes_song_table = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\n\n\n<main class=\"song_table\">\n<header class=\"songs-header\">\n    <span></span>\n    <a href=\"songs.html?sort=filename\">Filename</a>\n    <a href=\"songs.html?sort=duration\">Duration (MM:SS)</a>\n    <a href=\"songs.html?sort=size\">Size (MB)</a>\n    <a href=\"songs.html?sort=title\">Title</a>\n    <a href=\"songs.html?sort=album\">Album</a>\n    <a href=\"songs.html?sort=artist\">Artist</a>\n    <a href=\"songs.html?sort=genre\">Genre</a>\n    <a href=\"songs.html?sort=desc\">Description</a>\n    <a href=\"songs.html?sort=quality\">Quality</a>\n    <a href=\"songs.html?sort=favourite\">Fav</a>\n</header>\n\n<% function add_song() {\n\nlet add = ``;\nresult.forEach((song) => {\nadd += `<article class=\"song\" id=\"${song._id}\" src=\"${song.src}\">\n<a class=\"playbtns\" id=\"${song.src}\" rel=\"play\" href=\"#songs\" target=\"player\">Play</a>\n<span class=\"filename\">${song.filename}</span>\n<span class=\"duration\">${song.duration}</span>\n<span class=\"size\">${song.size}</span>\n<span class=\"title\">${song.title}</span>\n<span class=\"album\">${song.album}</span>\n<span class=\"artist\">${song.artist}</span>\n<span class=\"genre\">${song.genre}</span>\n<span class=\"desc\"></span>\n<span><progress class=\"quality\" min=\"0\" max=\"10\" value=\"3\"></progress></span>\n<button data-action=\"fav\" id=\"fav_61460e91efd0d795bff2e3d5\" data-fav=\"true\">&#9733;</button>\n<button class=\"delete-button\" data-action=\"delete\" src=\"${song.src}\" id=\"${song._id}\">${song.src}</button>\n<a class=\"edit-button\" rel=\"edit\" href=\"/songs/${song._id}/edit\" >EDIT</a>\n<button class=\"append-button\" data-action=\"append\" id=\"${song._id}\">&#x2b;</button> <!-- BITNO -->\n</article>`\n})\n\nreturn add;\n\n} %>\n<%- add_song() %>\n</main>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n\n\n<main class=\"song_table\">\n<header class=\"songs-header\">\n    <span></span>\n    <a href=\"songs.html?sort=filename\">Filename</a>\n    <a href=\"songs.html?sort=duration\">Duration (MM:SS)</a>\n    <a href=\"songs.html?sort=size\">Size (MB)</a>\n    <a href=\"songs.html?sort=title\">Title</a>\n    <a href=\"songs.html?sort=album\">Album</a>\n    <a href=\"songs.html?sort=artist\">Artist</a>\n    <a href=\"songs.html?sort=genre\">Genre</a>\n    <a href=\"songs.html?sort=desc\">Description</a>\n    <a href=\"songs.html?sort=quality\">Quality</a>\n    <a href=\"songs.html?sort=favourite\">Fav</a>\n</header>\n\n")
    ; __line = 19
    ;  function add_song() {

let add = ``;
result.forEach((song) => {
add += `<article class="song" id="${song._id}" src="${song.src}">
<a class="playbtns" id="${song.src}" rel="play" href="#songs" target="player">Play</a>
<span class="filename">${song.filename}</span>
<span class="duration">${song.duration}</span>
<span class="size">${song.size}</span>
<span class="title">${song.title}</span>
<span class="album">${song.album}</span>
<span class="artist">${song.artist}</span>
<span class="genre">${song.genre}</span>
<span class="desc"></span>
<span><progress class="quality" min="0" max="10" value="3"></progress></span>
<button data-action="fav" id="fav_61460e91efd0d795bff2e3d5" data-fav="true">&#9733;</button>
<button class="delete-button" data-action="delete" src="${song.src}" id="${song._id}">${song.src}</button>
<a class="edit-button" rel="edit" href="/songs/${song._id}/edit" >EDIT</a>
<button class="append-button" data-action="append" id="${song._id}">&#x2b;</button> <!-- BITNO -->
</article>`
})

return add;

} 
    ; __line = 43
    ; __append("\n")
    ; __line = 44
    ; __append( add_song() )
    ; __append("\n</main>")
    ; __line = 45
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_includes_song_table_genre = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<% function find_by(a, f) {\n    var keys = Object.keys(f).filter((k)=> f[k] !== undefined && f[k] !== null);\n    return a.filter((x)=>{ return keys.every((a)=>{ return f[a] === x[a] }) })\n}\n    let song_array = find_by(result, {\"genre\": ge});\n    \n%>\n\n\n<main class=\"song_table\">\n<header class=\"songs-header\">\n    <span></span>\n    <a href=\"songs.html?sort=filename\">Filename</a>\n    <a href=\"songs.html?sort=duration\">Duration (MM:SS)</a>\n    <a href=\"songs.html?sort=size\">Size (MB)</a>\n    <a href=\"songs.html?sort=title\">Title</a>\n    <a href=\"songs.html?sort=album\">Album</a>\n    <a href=\"songs.html?sort=artist\">Artist</a>\n    <a href=\"songs.html?sort=genre\">Genre</a>\n    <a href=\"songs.html?sort=desc\">Description</a>\n    <a href=\"songs.html?sort=quality\">Quality</a>\n    <a href=\"songs.html?sort=favourite\">Fav</a>\n</header>\n\n<% function add_song() {\n\nlet add = ``;\nsong_array.forEach((song) => {\nadd += `<article class=\"song\" id=\"${song._id}\">\n<a rel=\"play\" href=\"player.html?61460e91efd0d795bff2e3d5\" target=\"player\">Play</a>\n<span class=\"filename\">${song.filename}</span>\n<span class=\"duration\">${song.duration}</span>\n<span class=\"size\">${song.size}</span>\n<span class=\"title\">${song.title}</span>\n<span class=\"album\">${song.album}</span>\n<span class=\"artist\">${song.artist}</span>\n<span class=\"genre\">${song.genre}</span>\n<span class=\"desc\"></span>\n<span><progress class=\"quality\" min=\"0\" max=\"10\" value=\"3\"></progress></span>\n<button data-action=\"fav\" id=\"fav_61460e91efd0d795bff2e3d5\" data-fav=\"true\">&#9733;</button>\n<button class=\"delete-button\" data-action=\"delete\" id=\"delete_61460e91efd0d795bff2e3d5\">&#215;</button>\n<a class=\"edit-button\" rel=\"edit\" href=\"/songs/${song._id}/edit\" >EDIT</a>\n</article>`\n})\n\nreturn add;\n\n} %>\n<%- add_song() %>\n</main>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ;  function find_by(a, f) {
    var keys = Object.keys(f).filter((k)=> f[k] !== undefined && f[k] !== null);
    return a.filter((x)=>{ return keys.every((a)=>{ return f[a] === x[a] }) })
}
    let song_array = find_by(result, {"genre": ge});
    

    ; __line = 7
    ; __append("\n\n\n<main class=\"song_table\">\n<header class=\"songs-header\">\n    <span></span>\n    <a href=\"songs.html?sort=filename\">Filename</a>\n    <a href=\"songs.html?sort=duration\">Duration (MM:SS)</a>\n    <a href=\"songs.html?sort=size\">Size (MB)</a>\n    <a href=\"songs.html?sort=title\">Title</a>\n    <a href=\"songs.html?sort=album\">Album</a>\n    <a href=\"songs.html?sort=artist\">Artist</a>\n    <a href=\"songs.html?sort=genre\">Genre</a>\n    <a href=\"songs.html?sort=desc\">Description</a>\n    <a href=\"songs.html?sort=quality\">Quality</a>\n    <a href=\"songs.html?sort=favourite\">Fav</a>\n</header>\n\n")
    ; __line = 25
    ;  function add_song() {

let add = ``;
song_array.forEach((song) => {
add += `<article class="song" id="${song._id}">
<a rel="play" href="player.html?61460e91efd0d795bff2e3d5" target="player">Play</a>
<span class="filename">${song.filename}</span>
<span class="duration">${song.duration}</span>
<span class="size">${song.size}</span>
<span class="title">${song.title}</span>
<span class="album">${song.album}</span>
<span class="artist">${song.artist}</span>
<span class="genre">${song.genre}</span>
<span class="desc"></span>
<span><progress class="quality" min="0" max="10" value="3"></progress></span>
<button data-action="fav" id="fav_61460e91efd0d795bff2e3d5" data-fav="true">&#9733;</button>
<button class="delete-button" data-action="delete" id="delete_61460e91efd0d795bff2e3d5">&#215;</button>
<a class="edit-button" rel="edit" href="/songs/${song._id}/edit" >EDIT</a>
</article>`
})

return add;

} 
    ; __line = 48
    ; __append("\n")
    ; __line = 49
    ; __append( add_song() )
    ; __append("\n</main>")
    ; __line = 50
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_index = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<main>\n    <div class=\"main-page\">\n        <div id=\"pic1\" class=\"photo-in-grid\">\n            <img src=\"./images/ed.png\" alt=\"\">\n        </div>\n        <div id=\"pic2\" class=\"photo-in-grid\">\n            <img src=\"./images/weeknd.png\" alt=\"\">\n        </div>\n        <div id=\"pic3\" class=\"photo-in-grid\">\n            <img src=\"./images/sleepy.png\" alt=\"\">\n        </div>\n        <div id=\"pic4\" class=\"photo-in-grid\">\n            <img src=\"./images/silksonic.png\" alt=\"\">\n        </div>\n        <div id=\"pic5\" class=\"photo-in-grid\">\n            <img src=\"./images/meetmeatourspot.png\" alt=\"\">\n        </div>\n        <div id=\"pic6\" class=\"photo-in-grid\">\n            <img src=\"./images/leavebeforeyouloveme.png\" alt=\"\">\n        </div>\n        <div id=\"pic7\" class=\"photo-in-grid\">\n            <img src=\"./images/taiverdes.png\" alt=\"\">\n        </div>\n        <div id=\"pic8\" class=\"photo-in-grid\">\n            <img src=\"./images/beyonce.png\" alt=\"\">\n        </div>\n<div id=\"pic9\" class=\"photo-in-grid\">\n            <img src=\"./images/butter.png\" alt=\"\">\n        </div>\n        <div id=\"pic10\" class=\"photo-in-grid\">\n            <img src=\"./images/heatwave.png\" alt=\"\">\n        </div>\n    </div>\n    <audio controls>\n        <source src=\"../music/one.mp3\" type=\"audio/mpeg\">\n    </audio>\n    <div id=\"extra-content\">\n        <% let time = total_play_time(); %>\n        <% let top_song = best_on_charts(); %>\n        <% function total_play_time() {\n            return \"00:00\";\n        } %>\n        <% function best_on_charts() {\n            let top_song\n\n            if(result.length > 0) {\n                top_song = result.reduce((a,b)=>{return a.quality > b.quality? a:b},result[0])\n                return top_song.title\n            }\n            \n        } %>\n\n        <span>Number of songs: <%- result.length %> </span>\n        <span>Total playtime: <%- time %></span>\n        <span>Best on Charts: <%- top_song %></span>\n    </div>\n</main>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<main>\n    <div class=\"main-page\">\n        <div id=\"pic1\" class=\"photo-in-grid\">\n            <img src=\"./images/ed.png\" alt=\"\">\n        </div>\n        <div id=\"pic2\" class=\"photo-in-grid\">\n            <img src=\"./images/weeknd.png\" alt=\"\">\n        </div>\n        <div id=\"pic3\" class=\"photo-in-grid\">\n            <img src=\"./images/sleepy.png\" alt=\"\">\n        </div>\n        <div id=\"pic4\" class=\"photo-in-grid\">\n            <img src=\"./images/silksonic.png\" alt=\"\">\n        </div>\n        <div id=\"pic5\" class=\"photo-in-grid\">\n            <img src=\"./images/meetmeatourspot.png\" alt=\"\">\n        </div>\n        <div id=\"pic6\" class=\"photo-in-grid\">\n            <img src=\"./images/leavebeforeyouloveme.png\" alt=\"\">\n        </div>\n        <div id=\"pic7\" class=\"photo-in-grid\">\n            <img src=\"./images/taiverdes.png\" alt=\"\">\n        </div>\n        <div id=\"pic8\" class=\"photo-in-grid\">\n            <img src=\"./images/beyonce.png\" alt=\"\">\n        </div>\n<div id=\"pic9\" class=\"photo-in-grid\">\n            <img src=\"./images/butter.png\" alt=\"\">\n        </div>\n        <div id=\"pic10\" class=\"photo-in-grid\">\n            <img src=\"./images/heatwave.png\" alt=\"\">\n        </div>\n    </div>\n    <audio controls>\n        <source src=\"../music/one.mp3\" type=\"audio/mpeg\">\n    </audio>\n    <div id=\"extra-content\">\n        ")
    ; __line = 38
    ;  let time = total_play_time(); 
    ; __append("\n        ")
    ; __line = 39
    ;  let top_song = best_on_charts(); 
    ; __append("\n        ")
    ; __line = 40
    ;  function total_play_time() {
            return "00:00";
        } 
    ; __line = 42
    ; __append("\n        ")
    ; __line = 43
    ;  function best_on_charts() {
            let top_song

            if(result.length > 0) {
                top_song = result.reduce((a,b)=>{return a.quality > b.quality? a:b},result[0])
                return top_song.title
            }
            
        } 
    ; __line = 51
    ; __append("\n\n        <span>Number of songs: ")
    ; __line = 53
    ; __append( result.length )
    ; __append(" </span>\n        <span>Total playtime: ")
    ; __line = 54
    ; __append( time )
    ; __append("</span>\n        <span>Best on Charts: ")
    ; __line = 55
    ; __append( top_song )
    ; __append("</span>\n    </div>\n</main>\n")
    ; __line = 58
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_songs = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\n<html>\n    <head>\n        <link rel=\"stylesheet\" href=\"../../css/song-catalog-style.css\">\n        <link rel=\"stylesheet\" href=\"../../css/song-catalog-mobile-style.css\">\n        <link rel=\"stylesheet\" href=\"../../css/style.css\">\n        <link rel=\"stylesheet\" href=\"../../css/style-mobile.css\">\n        <link rel=\"stylesheet\" href=\"../../css/song-player-mobile-style.css\">\n        <link rel=\"stylesheet\" href=\"../../css/song-player-style.css\">\n        <link rel=\"stylesheet\" href=\"../../css/song-upload-style.css\">\n        <link rel=\"stylesheet\" href=\"../../css/song-upload-mobile-style.css\">\n        <title></title>\n    </head>\n    <body onload=\"init()\">\n        <header class=\"logo-header\">\n            <img src=\"./images/header.png\" alt=\"\">\n        </header>\n        <p class=\"socket-info\"></p>\n        <form id=\"searchform\">\n            <input type=\"text\" name=\"search\">\n        </form>\n        <div class=\"all-content\">\n            <main>\n                \n            </main>\n            \n\n            <!-- insert element here -->\n           \n                <nav class=\"main-page-list-target\">\n                    <h1 class=\"main-page-header\">Navigation:</h1>\n                    <ul id=\"navbar\">\n                        <li><a id=\"home-link\" name=\"home\" data-hash=\"\" href=\"/songs/home\"> Home</a></li>\n                        <li><a id=\"song-link\" name=\"songs\" data-hash=\"#songs\" href=\"/songs\"> Song Catalog</a></li>\n                        <li><a id=\"upload-link\" name=\"upload\" data-hash=\"#upload\" href=\"/songs/upload\"> Song upload</a></li>\n                        <li><a id=\"remote-link\" name=\"remote\" href=\"/player/remote\">Remote Player</a></li>\n                    </ul>\n                </nav>\n                <aside class=\"main-page-list-target\">\n                    <h1 id=\"dynamic-header\" class=\"main-page-header\">Genres:</h1>\n                    <ul id=\"artistbar\">\n<% function add_side_bar(filter) {\n                    let set = [];\n                    result.forEach((song) => {\n                        for (const [key, value] of Object.entries(song)) {\n                            if ((key == \"artist\") && (filter == \"artist\")) {\n                                if (!set.includes(value)) {\n                                    set.push(value)\n                                }\n                            } else if ((key == \"album\") && (filter == \"album\")) {\n                                if (!set.includes(value)) {\n                                    set.push(value);\n                                }\n                            } else if ((key == \"genre\") && (filter == \"genre\")) {\n                                if (!set.includes(value)) {\n                                    set.push(value);\n                                }\n                            }\n                        }\n                    });\n            \n                        let add = ``\n            \n                        if(filter === \"artist\") {\n                            set.forEach((artist) => {\n                                add += `<li><a class=\"artistlink\" href=\"songtable?artist=${artist}\">${artist}</a></li>`;\n                            })\n                        } else if (filter === \"album\") {\n                            set.forEach((album) => {\n                                add += `<li><a class=\"albumlink\" href=\"songtable?album=${album}\">${album}</a></li>`;\n                            })\n                        }   else if (filter === \"genre\") {\n                            set.forEach((genre) => {\n                                add += `<li><a class=\"genrelink\" href=\"/songs?genre=${genre}\">${genre}</a></li>`;\n                            })\n                        }\n            \n                        return add;\n                        \n                    } %>\n<%- add_side_bar(\"genre\") %>\n</ul>\n</aside>\n</div>\n    \n<footer>\n    <div class=\"all-content\">\n    <main>\n    <div id=\"player\">\n\n        <header>\n            <p class=\"title\" id=\"\">Living on a Prayer - Bon Jovi</p>\n        </header>\n\n        <section class=\"seek\">\n            <p class=\"remain\">1:04</p>\n            <progress min=\"0\" max=\"3\" value=\"1\"></progress>\n            <p class=\"elapsed\">3:12</p>\n        </section>\n        \n        <section class=\"play buttons\">\n            <button id=\"prev\" class=\"small\"></button>\n            <button id=\"play\"></button>\n            <button id=\"pause\"></button>\n            <button id=\"next\" class=\"small\"></button>\n        </section>\n        \n        <aside class=\"volume\">\n            <button id=\"mute\"></button>\n            <button id=\"loud\"></button>\n            <button id=\"low\"></button>\n            <input id=\"volumebar\" type=\"range\" value=\"1\" max=\"1\" min=\"0\" step=\"0.1\"></input>\n        </aside>\n        <!-- This is the hidden audio element which will play your songs\n        controlled from the #player buttons -->\n        <audio id=\"player-audio\" style=\"display:none\"></audio>\n    </div>\n    </main>\n</div>\n</footer>\n\n<!-- Script where the init_player function is implemented -->\n\n<script src=\"/socket.io/socket.io.js\"></script>\n<script src=\"js/script.js\"></script>\n<script src=\"js/ajax.js\"></script>\n<script src=\"js/ejs.min.js\"></script>\n<script src=\"js/views.js\"></script>\n<script src=\"js/init.js\"></script>\n\n<script>\n    //This function will call the init_player function passing a test playlist\n    //You are welcome to change the playlist\n\n    function init() {\n        \n        // render_player();\n        upload_redirect();\n        // delete_redirect();\n        // init_search();\n        init_listeners();\n        searchform();\n        init_socket();\n\n        \n            // let songs = ['music/one.mp3','music/two.mp3','music/three.mp3','music/four.mp3','music/five.mp3','music/seven.mp3','music/six.mp3'];\n            // localStorage.setItem(songs, \"0\");\n\n            // //TODO read the browser address bar parameter src (Task 4)\n\n\n            // init_player(songs, true);\n        let songs = [\"music/one.mp3\"];\n        let dom = document.getElementById(\"player\");\n        init_player_with_playlist(dom, \"pl\", songs)\n    }\n</script>\n\n</body>\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n<html>\n    <head>\n        <link rel=\"stylesheet\" href=\"../../css/song-catalog-style.css\">\n        <link rel=\"stylesheet\" href=\"../../css/song-catalog-mobile-style.css\">\n        <link rel=\"stylesheet\" href=\"../../css/style.css\">\n        <link rel=\"stylesheet\" href=\"../../css/style-mobile.css\">\n        <link rel=\"stylesheet\" href=\"../../css/song-player-mobile-style.css\">\n        <link rel=\"stylesheet\" href=\"../../css/song-player-style.css\">\n        <link rel=\"stylesheet\" href=\"../../css/song-upload-style.css\">\n        <link rel=\"stylesheet\" href=\"../../css/song-upload-mobile-style.css\">\n        <title></title>\n    </head>\n    <body onload=\"init()\">\n        <header class=\"logo-header\">\n            <img src=\"./images/header.png\" alt=\"\">\n        </header>\n        <p class=\"socket-info\"></p>\n        <form id=\"searchform\">\n            <input type=\"text\" name=\"search\">\n        </form>\n        <div class=\"all-content\">\n            <main>\n                \n            </main>\n            \n\n            <!-- insert element here -->\n           \n                <nav class=\"main-page-list-target\">\n                    <h1 class=\"main-page-header\">Navigation:</h1>\n                    <ul id=\"navbar\">\n                        <li><a id=\"home-link\" name=\"home\" data-hash=\"\" href=\"/songs/home\"> Home</a></li>\n                        <li><a id=\"song-link\" name=\"songs\" data-hash=\"#songs\" href=\"/songs\"> Song Catalog</a></li>\n                        <li><a id=\"upload-link\" name=\"upload\" data-hash=\"#upload\" href=\"/songs/upload\"> Song upload</a></li>\n                        <li><a id=\"remote-link\" name=\"remote\" href=\"/player/remote\">Remote Player</a></li>\n                    </ul>\n                </nav>\n                <aside class=\"main-page-list-target\">\n                    <h1 id=\"dynamic-header\" class=\"main-page-header\">Genres:</h1>\n                    <ul id=\"artistbar\">\n")
    ; __line = 42
    ;  function add_side_bar(filter) {
                    let set = [];
                    result.forEach((song) => {
                        for (const [key, value] of Object.entries(song)) {
                            if ((key == "artist") && (filter == "artist")) {
                                if (!set.includes(value)) {
                                    set.push(value)
                                }
                            } else if ((key == "album") && (filter == "album")) {
                                if (!set.includes(value)) {
                                    set.push(value);
                                }
                            } else if ((key == "genre") && (filter == "genre")) {
                                if (!set.includes(value)) {
                                    set.push(value);
                                }
                            }
                        }
                    });
            
                        let add = ``
            
                        if(filter === "artist") {
                            set.forEach((artist) => {
                                add += `<li><a class="artistlink" href="songtable?artist=${artist}">${artist}</a></li>`;
                            })
                        } else if (filter === "album") {
                            set.forEach((album) => {
                                add += `<li><a class="albumlink" href="songtable?album=${album}">${album}</a></li>`;
                            })
                        }   else if (filter === "genre") {
                            set.forEach((genre) => {
                                add += `<li><a class="genrelink" href="/songs?genre=${genre}">${genre}</a></li>`;
                            })
                        }
            
                        return add;
                        
                    } 
    ; __line = 80
    ; __append("\n")
    ; __line = 81
    ; __append( add_side_bar("genre") )
    ; __append("\n</ul>\n</aside>\n</div>\n    \n<footer>\n    <div class=\"all-content\">\n    <main>\n    <div id=\"player\">\n\n        <header>\n            <p class=\"title\" id=\"\">Living on a Prayer - Bon Jovi</p>\n        </header>\n\n        <section class=\"seek\">\n            <p class=\"remain\">1:04</p>\n            <progress min=\"0\" max=\"3\" value=\"1\"></progress>\n            <p class=\"elapsed\">3:12</p>\n        </section>\n        \n        <section class=\"play buttons\">\n            <button id=\"prev\" class=\"small\"></button>\n            <button id=\"play\"></button>\n            <button id=\"pause\"></button>\n            <button id=\"next\" class=\"small\"></button>\n        </section>\n        \n        <aside class=\"volume\">\n            <button id=\"mute\"></button>\n            <button id=\"loud\"></button>\n            <button id=\"low\"></button>\n            <input id=\"volumebar\" type=\"range\" value=\"1\" max=\"1\" min=\"0\" step=\"0.1\"></input>\n        </aside>\n        <!-- This is the hidden audio element which will play your songs\n        controlled from the #player buttons -->\n        <audio id=\"player-audio\" style=\"display:none\"></audio>\n    </div>\n    </main>\n</div>\n</footer>\n\n<!-- Script where the init_player function is implemented -->\n\n<script src=\"/socket.io/socket.io.js\"></script>\n<script src=\"js/script.js\"></script>\n<script src=\"js/ajax.js\"></script>\n<script src=\"js/ejs.min.js\"></script>\n<script src=\"js/views.js\"></script>\n<script src=\"js/init.js\"></script>\n\n<script>\n    //This function will call the init_player function passing a test playlist\n    //You are welcome to change the playlist\n\n    function init() {\n        \n        // render_player();\n        upload_redirect();\n        // delete_redirect();\n        // init_search();\n        init_listeners();\n        searchform();\n        init_socket();\n\n        \n            // let songs = ['music/one.mp3','music/two.mp3','music/three.mp3','music/four.mp3','music/five.mp3','music/seven.mp3','music/six.mp3'];\n            // localStorage.setItem(songs, \"0\");\n\n            // //TODO read the browser address bar parameter src (Task 4)\n\n\n            // init_player(songs, true);\n        let songs = [\"music/one.mp3\"];\n        let dom = document.getElementById(\"player\");\n        init_player_with_playlist(dom, \"pl\", songs)\n    }\n</script>\n\n</body>\n</html>")
    ; __line = 160
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_upload = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<main>\n    <h1>Song Upload Form</h1>\n    <div class=\"form-div\">\n        <form method=\"POST\" action=\"/songs\" encType=\"multipart/form-data\" class=\"upload-form\">\n            <label>Title</label>\n            <input type=\"text\" name=\"title\" placeholder=\"Title of the song\" />\n\n            <label>Test</label>\n            <input type=\"text\" name=\"test\" placeholder=\"Test\" />\n\n            <label>Artist</label>\n            <input type=\"text\" name=\"artist\" placeholder=\"Artist of the song\" />\n\n            <label>Album</label>\n            <input type=\"text\" name=\"album\" placeholder=\"Album of the song\" />\n\n            <label>Genre</label>\n            <select name=\"genre\">\n                <option value=\"Pop\">Pop</option>\n                <option value=\"Rnb\">RnB</option>\n                <option value=\"Rap\">Rap</option>\n                <option value=\"Rock\">Rock</option>\n                <option value=\"Classical\">Classical</option>\n            </select>\n\n            <label>Description</label>\n            <textarea name=\"desc\" cols=\"30\" rows=\"3\" placeholder=\"Put a description of the song...\"></textarea>\n\n            <label>Input File</label>\n            <input type=\"file\" name=\"filename\"/>\n\n            <label>Favorite</label>\n            <input type=\"checkbox\" name=\"favorite\">\n\n            <label>Quality</label>\n            <input type=\"range\" name=\"quality\" min=\"1\" max=\"10\">\n\n            <span></span>\n            <input type=\"submit\" value=\"Submit\">\n        </form>\n    </div>\n</main>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<main>\n    <h1>Song Upload Form</h1>\n    <div class=\"form-div\">\n        <form method=\"POST\" action=\"/songs\" encType=\"multipart/form-data\" class=\"upload-form\">\n            <label>Title</label>\n            <input type=\"text\" name=\"title\" placeholder=\"Title of the song\" />\n\n            <label>Test</label>\n            <input type=\"text\" name=\"test\" placeholder=\"Test\" />\n\n            <label>Artist</label>\n            <input type=\"text\" name=\"artist\" placeholder=\"Artist of the song\" />\n\n            <label>Album</label>\n            <input type=\"text\" name=\"album\" placeholder=\"Album of the song\" />\n\n            <label>Genre</label>\n            <select name=\"genre\">\n                <option value=\"Pop\">Pop</option>\n                <option value=\"Rnb\">RnB</option>\n                <option value=\"Rap\">Rap</option>\n                <option value=\"Rock\">Rock</option>\n                <option value=\"Classical\">Classical</option>\n            </select>\n\n            <label>Description</label>\n            <textarea name=\"desc\" cols=\"30\" rows=\"3\" placeholder=\"Put a description of the song...\"></textarea>\n\n            <label>Input File</label>\n            <input type=\"file\" name=\"filename\"/>\n\n            <label>Favorite</label>\n            <input type=\"checkbox\" name=\"favorite\">\n\n            <label>Quality</label>\n            <input type=\"range\" name=\"quality\" min=\"1\" max=\"10\">\n\n            <span></span>\n            <input type=\"submit\" value=\"Submit\">\n        </form>\n    </div>\n</main>")
    ; __line = 42
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}