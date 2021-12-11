//EJS Compiled Views - This file was automatically generated on Sat Dec 11 2021 15:40:30 GMT+0100 (Central European Standard Time)
ejs.views_include = function(locals) {
    console.log("views_include_setup",locals);
    return function(path, d) {
        console.log("ejs.views_include",path,d);
        return ejs["views_"+path.replace(/\//g,"_")]({...d,...locals}, null, ejs.views_include(locals));
    }
};
ejs.views_Includes_aside = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
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
  , __lines = "<aside class=\"sidebar\">\n    <form action=\"\" method=\"GET\" class=\"search\">\n        <input type=\"text\" name=\"search\" placeholder=\"Search for an event...\">\n    </form>\n\n    <section class=\"title\">\n        Instructors\n    </section>\n\n    <a href=\"\">\n        <section class=\"section-left\">\n            <img src=\"images/img_avatar.png\" alt=\"first musician\">\n            <p class=\"Artist-Name\">\n                Placeholder <br>\n                <cite> \"...something something something...\"</cite>\n            </p>\n        </section>\n    </a>\n\n    <a href=\"\">\n        <section class=\"section-right\">\n            <p class=\"Artist-Name\">\n                Placeholder <br>\n                <cite> \"...something something something...\"</cite>\n            </p>\n            <img src=\"images/img_avatar.png\" alt=\"second musician\">\n        </section>\n    </a>\n\n    <a href=\"\">\n        <section class=\"section-left\">\n            <img src=\"images/img_avatar.png\" alt=\"first musician\">\n            <p class=\"Artist-Name\">\n                Placeholder <br>\n                <cite> \"...something something something...\"</cite>\n            </p>\n        </section>\n\n        <a href=\"\">\n            <section class=\"section-right\">\n                <p class=\"Artist-Name\">\n                    Placeholder<br>\n                    <cite> \"...something something something...\"</cite>\n                </p>\n                <img src=\"images/img_avatar.png\" alt=\"second musician\">\n            </section>\n        </a>\n\n        <a href=\"\">\n            <section class=\"section-left\">\n                <img src=\"images/img_avatar.png\" alt=\"first musician\">\n                <p class=\"Artist-Name\">\n                    Placeholder <br>\n                    <cite> \"...something something something...\"</cite>\n                </p>\n            </section>\n        </a>\n</aside>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<aside class=\"sidebar\">\n    <form action=\"\" method=\"GET\" class=\"search\">\n        <input type=\"text\" name=\"search\" placeholder=\"Search for an event...\">\n    </form>\n\n    <section class=\"title\">\n        Instructors\n    </section>\n\n    <a href=\"\">\n        <section class=\"section-left\">\n            <img src=\"images/img_avatar.png\" alt=\"first musician\">\n            <p class=\"Artist-Name\">\n                Placeholder <br>\n                <cite> \"...something something something...\"</cite>\n            </p>\n        </section>\n    </a>\n\n    <a href=\"\">\n        <section class=\"section-right\">\n            <p class=\"Artist-Name\">\n                Placeholder <br>\n                <cite> \"...something something something...\"</cite>\n            </p>\n            <img src=\"images/img_avatar.png\" alt=\"second musician\">\n        </section>\n    </a>\n\n    <a href=\"\">\n        <section class=\"section-left\">\n            <img src=\"images/img_avatar.png\" alt=\"first musician\">\n            <p class=\"Artist-Name\">\n                Placeholder <br>\n                <cite> \"...something something something...\"</cite>\n            </p>\n        </section>\n\n        <a href=\"\">\n            <section class=\"section-right\">\n                <p class=\"Artist-Name\">\n                    Placeholder<br>\n                    <cite> \"...something something something...\"</cite>\n                </p>\n                <img src=\"images/img_avatar.png\" alt=\"second musician\">\n            </section>\n        </a>\n\n        <a href=\"\">\n            <section class=\"section-left\">\n                <img src=\"images/img_avatar.png\" alt=\"first musician\">\n                <p class=\"Artist-Name\">\n                    Placeholder <br>\n                    <cite> \"...something something something...\"</cite>\n                </p>\n            </section>\n        </a>\n</aside>")
    ; __line = 58
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_Includes_footer = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
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
  , __lines = "<footer>\n    © DreamTeam - Software Atelier 3\n</footer>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<footer>\n    © DreamTeam - Software Atelier 3\n</footer>")
    ; __line = 3
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_Includes_head = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
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
  , __lines = "<head>\n    <title>DreamTeam</title>\n    <link href=\"/css/base.css\" rel=\"stylesheet\" />\n    <link href=\"/css/homepage.css\" rel=\"stylesheet\" />\n    <link href=\"/css/sport_catalog.css\" rel=\"stylesheet\" />\n    <link href=\"/css/sport_catalog_user.css\" rel=\"stylesheet\" />\n    <link href=\"/css/upload.css\" rel=\"stylesheet\" />\n    <link href=\"https://fonts.googleapis.com/css?family=Quicksand:300,500\" rel=\"stylesheet\">\n    <meta charset=\"UTF-8\" />\n    <meta name=\"author\" content=\"Francesco Casarella\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<head>\n    <title>DreamTeam</title>\n    <link href=\"/css/base.css\" rel=\"stylesheet\" />\n    <link href=\"/css/homepage.css\" rel=\"stylesheet\" />\n    <link href=\"/css/sport_catalog.css\" rel=\"stylesheet\" />\n    <link href=\"/css/sport_catalog_user.css\" rel=\"stylesheet\" />\n    <link href=\"/css/upload.css\" rel=\"stylesheet\" />\n    <link href=\"https://fonts.googleapis.com/css?family=Quicksand:300,500\" rel=\"stylesheet\">\n    <meta charset=\"UTF-8\" />\n    <meta name=\"author\" content=\"Francesco Casarella\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>\n")
    ; __line = 13
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_Includes_header = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
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
  , __lines = "<header class=\"page-header\">\n\n    <a href=\"/\">\n        <img src=\"/images/logo-placeholder-png.png\" alt=\"logo\">\n    </a>\n\n    <h1>DreamTeam</h1>\n\n    //here we check if the user already logged in\n    <% if(user != undefined ){ %>\n        <section class=\"login\">\n            <a href=\"/login\">Login</a> <br>\n            or <br>\n            <a href=\"/signin\">Sign in!</a>\n        </section>\n    <% } else {%>\n        <section class=\"login\">\n            Hi, <a href=\"/user/<%=user._id%>\"><%= user.username%></a>!\n        </section>\n\n    <%}%>\n</header>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<header class=\"page-header\">\n\n    <a href=\"/\">\n        <img src=\"/images/logo-placeholder-png.png\" alt=\"logo\">\n    </a>\n\n    <h1>DreamTeam</h1>\n\n    //here we check if the user already logged in\n    ")
    ; __line = 10
    ;  if(user != undefined ){ 
    ; __append("\n        <section class=\"login\">\n            <a href=\"/login\">Login</a> <br>\n            or <br>\n            <a href=\"/signin\">Sign in!</a>\n        </section>\n    ")
    ; __line = 16
    ;  } else {
    ; __append("\n        <section class=\"login\">\n            Hi, <a href=\"/user/")
    ; __line = 18
    ; __append(escapeFn(user._id))
    ; __append("\">")
    ; __append(escapeFn( user.username))
    ; __append("</a>!\n        </section>\n\n    ")
    ; __line = 21
    ; }
    ; __append("\n</header>")
    ; __line = 22
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_Includes_nav = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
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
  , __lines = "<nav id=\"navigation bar\">\n    <a href=\"/\">Homepage</a>\n    <a href=\"/sports\">Sports List</a>\n    <a href=\"/upload\">Create an event</a>\n    <a href=\"/about\">About Us</a>\n</nav>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<nav id=\"navigation bar\">\n    <a href=\"/\">Homepage</a>\n    <a href=\"/sports\">Sports List</a>\n    <a href=\"/upload\">Create an event</a>\n    <a href=\"/about\">About Us</a>\n</nav>")
    ; __line = 6
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_about = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
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
  , __lines = "<!-- this ejs doesn't need any input -->\n\n<main id=\"about\">\n    <section class=\"title\">\n        <h1>About Us</h1>\n        <p class=\"about\">\n            Placeholder is the result of a university project by <b>Francesco Casarella</b>, <b>Alessandro\n                Cravioglio</b>,\n            <b>Daniela Gjorjieva</b>, <b>Andrea Prato</b> and <b>Samuel Corecco</b>.<br>\n            The project consist in develop a sport event organizer web-app, using all the resources that\n            we learned in Software Atelier 3. <br>\n            This web-app consents you to create and edit your sport event. People can join and talk in the chat.\n        </p>\n    </section>\n\n    <!-- ADVICE SECTION -->\n    <section class=\"title\">\n        <h1>Popular Activities: </h1>\n    </section>\n\n    <section class=\"advices\">\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n    </section>\n</main>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!-- this ejs doesn't need any input -->\n\n<main id=\"about\">\n    <section class=\"title\">\n        <h1>About Us</h1>\n        <p class=\"about\">\n            Placeholder is the result of a university project by <b>Francesco Casarella</b>, <b>Alessandro\n                Cravioglio</b>,\n            <b>Daniela Gjorjieva</b>, <b>Andrea Prato</b> and <b>Samuel Corecco</b>.<br>\n            The project consist in develop a sport event organizer web-app, using all the resources that\n            we learned in Software Atelier 3. <br>\n            This web-app consents you to create and edit your sport event. People can join and talk in the chat.\n        </p>\n    </section>\n\n    <!-- ADVICE SECTION -->\n    <section class=\"title\">\n        <h1>Popular Activities: </h1>\n    </section>\n\n    <section class=\"advices\">\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n    </section>\n</main>")
    ; __line = 72
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

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
  , __lines = "<!-- \nthis ejs should take an event object as input\n\nit should autocomplete with the information of the event\n\nEvent:\n{\n    sport : \"\",\n    owner : \"\",\n    description : \"\",\n    place : \"\",\n    date : \"\",\n    frequency : \"\",\n    max_members : 10,\n    members : [],\n}\n-->\n\n<main id=\"upload\">\n    <section class=\"title\">\n        <h1>Edit your sport activity!</h1>\n    </section>\n\n    <form method=\"POST\" name=\"file\" action=\"/sports/<%= id%>?_method=PUT\" encType=\"multipart/form-data\" class=\"upload-section\">\n\n        <label for=\"sport\"> Sport </label>\n        <input type=\"text\" id=\"sport\" name=\"sport\" placeholder=\"Soccer...\" required>\n\n        <label for=\"description\"> Description</label>\n        <textarea id=\"description\" name=\"description\" rows=\"5\" cols=\"45\"\n            placeholder=\"Write here your sport's description...\"></textarea>\n\n        <label for=\"place\"> Place </label>\n        <input type=\"text\" id=\"place\" name=\"place\" placeholder=\"Lugano...\" required>\n\n        <label for=\"date\">Starting date</label>\n        <input type=\"date\" id=\"date\" name=\"date\" value=\"\" min=\"\" max=\"2025-12-31\" required>\n\n        <label for=\"frequency\">Frequency</label>\n        <select name=\"frequency\" id=\"frequency\" required>\n            <option value=\"Daily\">Daily</option>\n            <option value=\"Weekly\">Weekly</option>\n            <option value=\"Monthly\">Monthly</option>\n            <option value=\"Undefined\">Undefined</option>\n        </select>\n\n        <label for=\"max_members\">Members</label>\n        <input type=\"number\" id=\"max_members\" name=\"max_members\" value=\"1\" min=\"1\" max=\"30\" required><br><br>\n\n        <button type=\"submit\" name=\"submit\"> Submit </button>\n\n    </form>\n\n    <!-- ADVICE SECTION -->\n    <section class=\"title\">\n        <h1>Popular Activities: </h1>\n    </section>\n\n    <section class=\"advices\">\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n    </section>\n    <br>\n</main>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!-- \nthis ejs should take an event object as input\n\nit should autocomplete with the information of the event\n\nEvent:\n{\n    sport : \"\",\n    owner : \"\",\n    description : \"\",\n    place : \"\",\n    date : \"\",\n    frequency : \"\",\n    max_members : 10,\n    members : [],\n}\n-->\n\n<main id=\"upload\">\n    <section class=\"title\">\n        <h1>Edit your sport activity!</h1>\n    </section>\n\n    <form method=\"POST\" name=\"file\" action=\"/sports/")
    ; __line = 24
    ; __append(escapeFn( id))
    ; __append("?_method=PUT\" encType=\"multipart/form-data\" class=\"upload-section\">\n\n        <label for=\"sport\"> Sport </label>\n        <input type=\"text\" id=\"sport\" name=\"sport\" placeholder=\"Soccer...\" required>\n\n        <label for=\"description\"> Description</label>\n        <textarea id=\"description\" name=\"description\" rows=\"5\" cols=\"45\"\n            placeholder=\"Write here your sport's description...\"></textarea>\n\n        <label for=\"place\"> Place </label>\n        <input type=\"text\" id=\"place\" name=\"place\" placeholder=\"Lugano...\" required>\n\n        <label for=\"date\">Starting date</label>\n        <input type=\"date\" id=\"date\" name=\"date\" value=\"\" min=\"\" max=\"2025-12-31\" required>\n\n        <label for=\"frequency\">Frequency</label>\n        <select name=\"frequency\" id=\"frequency\" required>\n            <option value=\"Daily\">Daily</option>\n            <option value=\"Weekly\">Weekly</option>\n            <option value=\"Monthly\">Monthly</option>\n            <option value=\"Undefined\">Undefined</option>\n        </select>\n\n        <label for=\"max_members\">Members</label>\n        <input type=\"number\" id=\"max_members\" name=\"max_members\" value=\"1\" min=\"1\" max=\"30\" required><br><br>\n\n        <button type=\"submit\" name=\"submit\"> Submit </button>\n\n    </form>\n\n    <!-- ADVICE SECTION -->\n    <section class=\"title\">\n        <h1>Popular Activities: </h1>\n    </section>\n\n    <section class=\"advices\">\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n    </section>\n    <br>\n</main>")
    ; __line = 111
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_home = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
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
  , __lines = "<main id=\"homepage\">\n\n    <section class=\"homepage_title\">\n        <h1>Welcome to DreamTeam!</h1>\n    </section>\n\n    <!-- ADVICE SECTION -->\n    <section class=\"title\">\n        <h1>Popular Activities: </h1>\n    </section>\n\n    <section class=\"advices\">\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n    </section>\n    <br>\n    \n</main>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<main id=\"homepage\">\n\n    <section class=\"homepage_title\">\n        <h1>Welcome to DreamTeam!</h1>\n    </section>\n\n    <!-- ADVICE SECTION -->\n    <section class=\"title\">\n        <h1>Popular Activities: </h1>\n    </section>\n\n    <section class=\"advices\">\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n    </section>\n    <br>\n    \n</main>")
    ; __line = 65
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_login = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
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
  , __lines = "<main id=\"login\">\n    <section class=\"title\">\n        <h1>Log in your Account!</h1>\n    </section>\n    \n    <form class=\"upload-section\">\n\n        <label for=\"username\"> Username </label>\n        <input type=\"text\" id=\"username\" name=\"username\" placeholder=\"\" required>\n\n        <label for=\"password\">Password</label>\n        <input type=\"password\" id=\"password\" name=\"password\" minlength=\"8\" required>\n\n        <button type=\"submit\" name=\"submit\">Log In</button>\n    </form>\n\n    <section class=\"formdesc\">\n        You don't have an account? <a href=\"/signin\">Sign in!</a>\n    </section>\n\n    <!-- ADVICE SECTION -->\n    <section class=\"title\">\n        <h1>Popular Activities: </h1>\n    </section>\n\n    <section class=\"advices\">\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n    </section>\n    <br>\n\n</main>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<main id=\"login\">\n    <section class=\"title\">\n        <h1>Log in your Account!</h1>\n    </section>\n    \n    <form class=\"upload-section\">\n\n        <label for=\"username\"> Username </label>\n        <input type=\"text\" id=\"username\" name=\"username\" placeholder=\"\" required>\n\n        <label for=\"password\">Password</label>\n        <input type=\"password\" id=\"password\" name=\"password\" minlength=\"8\" required>\n\n        <button type=\"submit\" name=\"submit\">Log In</button>\n    </form>\n\n    <section class=\"formdesc\">\n        You don't have an account? <a href=\"/signin\">Sign in!</a>\n    </section>\n\n    <!-- ADVICE SECTION -->\n    <section class=\"title\">\n        <h1>Popular Activities: </h1>\n    </section>\n\n    <section class=\"advices\">\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n    </section>\n    <br>\n\n</main>")
    ; __line = 79
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_signin = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
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
  , __lines = "<main id=\"signin\">\n    <section class=\"title\">\n        <h1>Create your Account!</h1>\n    </section>\n    \n    <form class=\"upload-section\" onSubmit=\"return checkPassword(this)\">\n\n        <label for=\"username\"> Username </label>\n        <input type=\"text\" id=\"username\" name=\"username\" placeholder=\"\" required>\n\n        <label for=\"password\">Password</label>\n        <input type=\"password\" id=\"password\" name=\"password\" minlength=\"8\" required>\n\n        <label for=\"password_check\">Confirm Password</label>\n        <input type=\"password\" id=\"pass\" name=\"password_check\" minlength=\"8\" required>\n\n        <button type=\"submit\" name=\"submit\">Sign In</button>\n    </form>\n\n\n    <!-- ADVICE SECTION -->\n    <section class=\"title\">\n        <h1>Popular Activities: </h1>\n    </section>\n\n    <section class=\"advices\">\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n    </section>\n    <br>\n</main>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<main id=\"signin\">\n    <section class=\"title\">\n        <h1>Create your Account!</h1>\n    </section>\n    \n    <form class=\"upload-section\" onSubmit=\"return checkPassword(this)\">\n\n        <label for=\"username\"> Username </label>\n        <input type=\"text\" id=\"username\" name=\"username\" placeholder=\"\" required>\n\n        <label for=\"password\">Password</label>\n        <input type=\"password\" id=\"password\" name=\"password\" minlength=\"8\" required>\n\n        <label for=\"password_check\">Confirm Password</label>\n        <input type=\"password\" id=\"pass\" name=\"password_check\" minlength=\"8\" required>\n\n        <button type=\"submit\" name=\"submit\">Sign In</button>\n    </form>\n\n\n    <!-- ADVICE SECTION -->\n    <section class=\"title\">\n        <h1>Popular Activities: </h1>\n    </section>\n\n    <section class=\"advices\">\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n    </section>\n    <br>\n</main>")
    ; __line = 78
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_sports = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
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
  , __lines = "<!-- \nthis ejs should take the list of event object from the database\n -->\n<main id=\"sports_table\">\n\n    <section class=\"title\">\n        <h1>Group Activities</h1>\n    </section>\n\n    <%if(sports.lenght == 0){%>\n        There are no events\n    <%} else {%>\n    <header>\n        <span></span>\n        <a href=\"sport.html?sort=sport\">Sport</a>\n        <a href=\"sport.html?sort=sport\">Owner</a>\n        <a href=\"sport.html?sort=desc\">Description</a>\n        <a href=\"sport.html?sort=place\">Place</a>\n        <a href=\"sport.html?sort=date\">Starting Date</a>\n        <a href=\"sport.html?sort=max_number\">Frequency</a>\n        <a href=\"sport.html?sort=max_number\">Members</a>\n        <span></span>\n    </header>\n    <%}%>\n\n    <% for(let index = 0; index < sports.length; index++){ \n        let event = sports[index] %>\n\n    <article class=\"sport\">\n        <a rel=\"link\" href=\"/sports/<%= event._id%>\">Link</a>\n        <span class=\"sport\"><%=event.sport%></span>\n        <span class=\"owner\"><%=event.owner%></span>\n        <span class=\"description\"><%=event.description%></span>\n        <span class=\"place\"><%=event.place%></span>\n        <span class=\"starting_date\"><%=event.date%></span>\n        <span class=\"date\"><%=event.frequency%></span>\n        <span class=\"Number of Members\"><%=event.members.lenght%>/<%=event.max_members%></span>\n        <section></section>\n    </article>\n    \n    <%}%>\n</main>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!-- \nthis ejs should take the list of event object from the database\n -->\n<main id=\"sports_table\">\n\n    <section class=\"title\">\n        <h1>Group Activities</h1>\n    </section>\n\n    ")
    ; __line = 10
    ; if(sports.lenght == 0){
    ; __append("\n        There are no events\n    ")
    ; __line = 12
    ; } else {
    ; __append("\n    <header>\n        <span></span>\n        <a href=\"sport.html?sort=sport\">Sport</a>\n        <a href=\"sport.html?sort=sport\">Owner</a>\n        <a href=\"sport.html?sort=desc\">Description</a>\n        <a href=\"sport.html?sort=place\">Place</a>\n        <a href=\"sport.html?sort=date\">Starting Date</a>\n        <a href=\"sport.html?sort=max_number\">Frequency</a>\n        <a href=\"sport.html?sort=max_number\">Members</a>\n        <span></span>\n    </header>\n    ")
    ; __line = 24
    ; }
    ; __append("\n\n    ")
    ; __line = 26
    ;  for(let index = 0; index < sports.length; index++){ 
        let event = sports[index] 
    ; __line = 27
    ; __append("\n\n    <article class=\"sport\">\n        <a rel=\"link\" href=\"/sports/")
    ; __line = 30
    ; __append(escapeFn( event._id))
    ; __append("\">Link</a>\n        <span class=\"sport\">")
    ; __line = 31
    ; __append(escapeFn(event.sport))
    ; __append("</span>\n        <span class=\"owner\">")
    ; __line = 32
    ; __append(escapeFn(event.owner))
    ; __append("</span>\n        <span class=\"description\">")
    ; __line = 33
    ; __append(escapeFn(event.description))
    ; __append("</span>\n        <span class=\"place\">")
    ; __line = 34
    ; __append(escapeFn(event.place))
    ; __append("</span>\n        <span class=\"starting_date\">")
    ; __line = 35
    ; __append(escapeFn(event.date))
    ; __append("</span>\n        <span class=\"date\">")
    ; __line = 36
    ; __append(escapeFn(event.frequency))
    ; __append("</span>\n        <span class=\"Number of Members\">")
    ; __line = 37
    ; __append(escapeFn(event.members.lenght))
    ; __append("/")
    ; __append(escapeFn(event.max_members))
    ; __append("</span>\n        <section></section>\n    </article>\n    \n    ")
    ; __line = 41
    ; }
    ; __append("\n</main>")
    ; __line = 42
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
  , __lines = "<!-- \nthis file should check if the user is logged or not\n -->\n \n<main id=\"upload\">\n    <section class=\"title\">\n        <h1>Add your sport activity!</h1>\n    </section>\n\n    <%if (user.username == \"\") {%>\n\n    <section class=\"formdesc\">\n        If you want to create an event please <a href=\"/login\">Login</a>!\n      </section>\n      <section class=\"formdesc\">\n        You don't have an account? <a href=\"/signin\">Sign in!</a>\n      </section>\n\n    <% } else {%>\n\n    <form method=\"POST\" name=\"file\" action=\"/sports\" encType=\"multipart/form-data\" class=\"upload-section\">\n\n        <label for=\"sport\"> Sport </label>\n        <input type=\"text\" id=\"sport\" name=\"sport\" placeholder=\"Soccer...\" required>\n\n        <label for=\"description\"> Description</label>\n        <textarea id=\"description\" name=\"description\" rows=\"5\" cols=\"45\"\n            placeholder=\"Write here your sport's description...\"></textarea>\n\n        <label for=\"place\"> Place </label>\n        <input type=\"text\" id=\"place\" name=\"place\" placeholder=\"Lugano...\" required>\n\n        <label for=\"date\">Starting date</label>\n        <input type=\"date\" id=\"date\" name=\"date\" value=\"\" min=\"\" max=\"2025-12-31\" required>\n\n        <label for=\"frequency\">Frequency</label>\n        <select name=\"frequency\" id=\"frequency\" required>\n            <option value=\"Daily\">Daily</option>\n            <option value=\"Weekly\">Weekly</option>\n            <option value=\"Monthly\">Monthly</option>\n            <option value=\"Undefined\">Undefined</option>\n        </select>\n\n        <label for=\"max_members\">Members</label>\n        <input type=\"number\" id=\"max_members\" name=\"max_members\" value=\"1\" min=\"1\" max=\"30\" required><br><br>\n\n        <button type=\"submit\" name=\"submit\"> Submit </button>\n    </form>\n    <%}%>\n    <!-- ADVICE SECTION -->\n    <section class=\"title\">\n        <h1>Popular Activities: </h1>\n    </section>\n\n    <section class=\"advices\">\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n    </section>\n    <br>\n</main>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!-- \nthis file should check if the user is logged or not\n -->\n \n<main id=\"upload\">\n    <section class=\"title\">\n        <h1>Add your sport activity!</h1>\n    </section>\n\n    ")
    ; __line = 10
    ; if (user.username == "") {
    ; __append("\n\n    <section class=\"formdesc\">\n        If you want to create an event please <a href=\"/login\">Login</a>!\n      </section>\n      <section class=\"formdesc\">\n        You don't have an account? <a href=\"/signin\">Sign in!</a>\n      </section>\n\n    ")
    ; __line = 19
    ;  } else {
    ; __append("\n\n    <form method=\"POST\" name=\"file\" action=\"/sports\" encType=\"multipart/form-data\" class=\"upload-section\">\n\n        <label for=\"sport\"> Sport </label>\n        <input type=\"text\" id=\"sport\" name=\"sport\" placeholder=\"Soccer...\" required>\n\n        <label for=\"description\"> Description</label>\n        <textarea id=\"description\" name=\"description\" rows=\"5\" cols=\"45\"\n            placeholder=\"Write here your sport's description...\"></textarea>\n\n        <label for=\"place\"> Place </label>\n        <input type=\"text\" id=\"place\" name=\"place\" placeholder=\"Lugano...\" required>\n\n        <label for=\"date\">Starting date</label>\n        <input type=\"date\" id=\"date\" name=\"date\" value=\"\" min=\"\" max=\"2025-12-31\" required>\n\n        <label for=\"frequency\">Frequency</label>\n        <select name=\"frequency\" id=\"frequency\" required>\n            <option value=\"Daily\">Daily</option>\n            <option value=\"Weekly\">Weekly</option>\n            <option value=\"Monthly\">Monthly</option>\n            <option value=\"Undefined\">Undefined</option>\n        </select>\n\n        <label for=\"max_members\">Members</label>\n        <input type=\"number\" id=\"max_members\" name=\"max_members\" value=\"1\" min=\"1\" max=\"30\" required><br><br>\n\n        <button type=\"submit\" name=\"submit\"> Submit </button>\n    </form>\n    ")
    ; __line = 49
    ; }
    ; __append("\n    <!-- ADVICE SECTION -->\n    <section class=\"title\">\n        <h1>Popular Activities: </h1>\n    </section>\n\n    <section class=\"advices\">\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n    </section>\n    <br>\n</main>")
    ; __line = 107
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_user = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
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
  , __lines = "<!-- this ejs takes a user object as input\nUser:\n{\n    username: \"\",\n    password: \"\",\n    created: [],\n    joined: [],\n}\n -->\n\n<main id=\"about\">\n    <section class=\"title\">\n        <h1>Your Profile: <%=user.username%></h1>\n    </section>\n\n    <section class=\"profile\">\n\n        <h3>Your Activities:</h3>\n\n        <% if(user.created.lenght == 0){ %>\n\n        You haven't created any events yet\n\n        <% } else {%>\n\n        <section id=\"sports_table_user\">\n            <header>\n                <span></span>\n                <a href=\"sport.html?sort=sport\">Sport</a>\n                <a href=\"sport.html?sort=sport\">Owner</a>\n                <a href=\"sport.html?sort=desc\">Description</a>\n                <a href=\"sport.html?sort=place\">Place</a>\n                <a href=\"sport.html?sort=date\">Starting Date</a>\n                <a href=\"sport.html?sort=max_number\">Frequency</a>\n                <a href=\"sport.html?sort=max_number\">Members</a>\n                <span></span>\n                <span></span>\n            </header>\n\n            <% for(let index = 0; index < user.created.length; index++){ \n                let event = user.created[index]%>\n\n            <article class=\"sport\">\n                <a rel=\"link\" href=\"/sports/<%= event._id%>\">Link</a>\n                <span class=\"sport\"><%=event.sport%></span>\n                <span class=\"owner\"><%=event.owner%></span>\n                <span class=\"description\"><%=event.description%></span>\n                <span class=\"place\"><%=event.place%></span>\n                <span class=\"starting_date\"><%=event.date%></span>\n                <span class=\"date\"><%=event.frequency%></span>\n                <span class=\"Number of Members\"><%=event.members.lenght%>/<%=event.max_members%></span>\n                <a rel=\"edit\" href=\"\">Edit</a>\n                <a rel=\"delete\" href=\"\">Delete</a>\n            </article>\n\n            <%}%>\n        </section>\n        <%}%>\n\n        <h3>Events you joined:</h3>\n\n        <% if(user.joined.lenght == 0){ %>\n\n            You haven't joined any events yet\n    \n            <% } else {%>\n    \n            <section id=\"sports_table_user\">\n                <header>\n                    <span></span>\n                    <a href=\"sport.html?sort=sport\">Sport</a>\n                    <a href=\"sport.html?sort=sport\">Owner</a>\n                    <a href=\"sport.html?sort=desc\">Description</a>\n                    <a href=\"sport.html?sort=place\">Place</a>\n                    <a href=\"sport.html?sort=date\">Starting Date</a>\n                    <a href=\"sport.html?sort=max_number\">Frequency</a>\n                    <a href=\"sport.html?sort=max_number\">Members</a>\n                    <span></span>\n                    <span></span>\n                </header>\n    \n                <% for(let index = 0; index < user.joined.length; index++){ \n                    let event = user.joined[index]%>\n    \n                <article class=\"sport\">\n                    <a rel=\"link\" href=\"/sports/<%= event._id%>\">Link</a>\n                    <span class=\"sport\"><%=event.sport%></span>\n                    <span class=\"owner\"><%=event.owner%></span>\n                    <span class=\"description\"><%=event.description%></span>\n                    <span class=\"place\"><%=event.place%></span>\n                    <span class=\"starting_date\"><%=event.date%></span>\n                    <span class=\"date\"><%=event.frequency%></span>\n                    <span class=\"Number of Members\"><%=event.members.lenght%>/<%=event.max_members%></span>\n                    <section></section>\n                    <section></section>\n                </article>\n                <%}%>\n            </section>\n            <%}%>\n\n        <h3>If you really want to exit...</h3>\n        <button>Log Out</button>\n\n    </section>\n</main>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!-- this ejs takes a user object as input\nUser:\n{\n    username: \"\",\n    password: \"\",\n    created: [],\n    joined: [],\n}\n -->\n\n<main id=\"about\">\n    <section class=\"title\">\n        <h1>Your Profile: ")
    ; __line = 13
    ; __append(escapeFn(user.username))
    ; __append("</h1>\n    </section>\n\n    <section class=\"profile\">\n\n        <h3>Your Activities:</h3>\n\n        ")
    ; __line = 20
    ;  if(user.created.lenght == 0){ 
    ; __append("\n\n        You haven't created any events yet\n\n        ")
    ; __line = 24
    ;  } else {
    ; __append("\n\n        <section id=\"sports_table_user\">\n            <header>\n                <span></span>\n                <a href=\"sport.html?sort=sport\">Sport</a>\n                <a href=\"sport.html?sort=sport\">Owner</a>\n                <a href=\"sport.html?sort=desc\">Description</a>\n                <a href=\"sport.html?sort=place\">Place</a>\n                <a href=\"sport.html?sort=date\">Starting Date</a>\n                <a href=\"sport.html?sort=max_number\">Frequency</a>\n                <a href=\"sport.html?sort=max_number\">Members</a>\n                <span></span>\n                <span></span>\n            </header>\n\n            ")
    ; __line = 40
    ;  for(let index = 0; index < user.created.length; index++){ 
                let event = user.created[index]
    ; __line = 41
    ; __append("\n\n            <article class=\"sport\">\n                <a rel=\"link\" href=\"/sports/")
    ; __line = 44
    ; __append(escapeFn( event._id))
    ; __append("\">Link</a>\n                <span class=\"sport\">")
    ; __line = 45
    ; __append(escapeFn(event.sport))
    ; __append("</span>\n                <span class=\"owner\">")
    ; __line = 46
    ; __append(escapeFn(event.owner))
    ; __append("</span>\n                <span class=\"description\">")
    ; __line = 47
    ; __append(escapeFn(event.description))
    ; __append("</span>\n                <span class=\"place\">")
    ; __line = 48
    ; __append(escapeFn(event.place))
    ; __append("</span>\n                <span class=\"starting_date\">")
    ; __line = 49
    ; __append(escapeFn(event.date))
    ; __append("</span>\n                <span class=\"date\">")
    ; __line = 50
    ; __append(escapeFn(event.frequency))
    ; __append("</span>\n                <span class=\"Number of Members\">")
    ; __line = 51
    ; __append(escapeFn(event.members.lenght))
    ; __append("/")
    ; __append(escapeFn(event.max_members))
    ; __append("</span>\n                <a rel=\"edit\" href=\"\">Edit</a>\n                <a rel=\"delete\" href=\"\">Delete</a>\n            </article>\n\n            ")
    ; __line = 56
    ; }
    ; __append("\n        </section>\n        ")
    ; __line = 58
    ; }
    ; __append("\n\n        <h3>Events you joined:</h3>\n\n        ")
    ; __line = 62
    ;  if(user.joined.lenght == 0){ 
    ; __append("\n\n            You haven't joined any events yet\n    \n            ")
    ; __line = 66
    ;  } else {
    ; __append("\n    \n            <section id=\"sports_table_user\">\n                <header>\n                    <span></span>\n                    <a href=\"sport.html?sort=sport\">Sport</a>\n                    <a href=\"sport.html?sort=sport\">Owner</a>\n                    <a href=\"sport.html?sort=desc\">Description</a>\n                    <a href=\"sport.html?sort=place\">Place</a>\n                    <a href=\"sport.html?sort=date\">Starting Date</a>\n                    <a href=\"sport.html?sort=max_number\">Frequency</a>\n                    <a href=\"sport.html?sort=max_number\">Members</a>\n                    <span></span>\n                    <span></span>\n                </header>\n    \n                ")
    ; __line = 82
    ;  for(let index = 0; index < user.joined.length; index++){ 
                    let event = user.joined[index]
    ; __line = 83
    ; __append("\n    \n                <article class=\"sport\">\n                    <a rel=\"link\" href=\"/sports/")
    ; __line = 86
    ; __append(escapeFn( event._id))
    ; __append("\">Link</a>\n                    <span class=\"sport\">")
    ; __line = 87
    ; __append(escapeFn(event.sport))
    ; __append("</span>\n                    <span class=\"owner\">")
    ; __line = 88
    ; __append(escapeFn(event.owner))
    ; __append("</span>\n                    <span class=\"description\">")
    ; __line = 89
    ; __append(escapeFn(event.description))
    ; __append("</span>\n                    <span class=\"place\">")
    ; __line = 90
    ; __append(escapeFn(event.place))
    ; __append("</span>\n                    <span class=\"starting_date\">")
    ; __line = 91
    ; __append(escapeFn(event.date))
    ; __append("</span>\n                    <span class=\"date\">")
    ; __line = 92
    ; __append(escapeFn(event.frequency))
    ; __append("</span>\n                    <span class=\"Number of Members\">")
    ; __line = 93
    ; __append(escapeFn(event.members.lenght))
    ; __append("/")
    ; __append(escapeFn(event.max_members))
    ; __append("</span>\n                    <section></section>\n                    <section></section>\n                </article>\n                ")
    ; __line = 97
    ; }
    ; __append("\n            </section>\n            ")
    ; __line = 99
    ; }
    ; __append("\n\n        <h3>If you really want to exit...</h3>\n        <button>Log Out</button>\n\n    </section>\n</main>")
    ; __line = 105
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}