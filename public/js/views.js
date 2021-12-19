//EJS Compiled Views - This file was automatically generated on Sun Dec 19 2021 16:26:06 GMT+0100 (Central European Standard Time)
ejs.views_include = function(locals) {
    console.log("views_include_setup",locals);
    return function(path, d) {
        console.log("ejs.views_include",path,d);
        return ejs["views_"+path.replace(/\//g,"_")]({...d,...locals}, null, ejs.views_include(locals));
    }
};
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
  , __lines = "<!-- this ejs doesn't need any input -->\n\n<main id=\"about\">\n    <section class=\"title\">\n        <h1>About Us</h1>\n        <p class=\"about\">\n            DreamTeam is the result of a university project by <b>Francesco Casarella</b>, <b>Alessandro Cravioglio</b>,\n            <b>Daniela Gjorjieva</b>, <b>Andrea Prato</b> and <b>Samuel Corecco</b>.<br>\n            The project consist in develop a sport event organizer web-app, using all the resources that\n            we learned in Software Atelier 3. <br>\n            This web-app consents you to create and edit your sport event. People can join and talk in the chat.\n        </p>\n    </section>\n\n    <!-- ADVICE SECTION -->\n    <section class=\"title\">\n        <h1>Our Team: </h1>\n    </section>\n\n    <section class=\"advices\">\n        <a class=\"odd\" href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\" target=\"blank\">\n            <section>\n                Team Leader <br>\n                HTML/CSS/EJS\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Francesco Casarella Photo\">\n            <section>\n                Francesco <br>\n                Casarella\n            </section>\n        </a>\n\n        <a class=\"even\" href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\" target=\"blank\">\n            <section>\n                HTML/CSS\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Daniela Gjorgjieva Photo\">\n            <section>\n                Daniela <br>\n                Gjorgjieva\n            </section>\n        </a>\n\n        <a class=\"odd\" href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\" target=\"blank\">\n            <section>\n                Repo admin <br>\n                ROUTES/DB\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Alessandro Cravioglio Photo\">\n            <section>\n                Alessandro <br>\n                Cravioglio\n            </section>\n        </a>\n\n        <a class=\"even\" href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\" target=\"blank\">\n            <section>\n                SOCKET/FETCH/ <br> EJS\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Andrea Prato Photo\">\n            <section>\n                Andrea <br>\n                Prato\n            </section>\n        </a>\n\n        <a class=\"odd\">\n            <section>\n                SOCKET/FETCH/ <br> EJS\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Samuel Corecco Photo\">\n            <section>\n                Samuel <br>\n                Corecco\n            </section>\n        </a>\n    </section>\n</main>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!-- this ejs doesn't need any input -->\n\n<main id=\"about\">\n    <section class=\"title\">\n        <h1>About Us</h1>\n        <p class=\"about\">\n            DreamTeam is the result of a university project by <b>Francesco Casarella</b>, <b>Alessandro Cravioglio</b>,\n            <b>Daniela Gjorjieva</b>, <b>Andrea Prato</b> and <b>Samuel Corecco</b>.<br>\n            The project consist in develop a sport event organizer web-app, using all the resources that\n            we learned in Software Atelier 3. <br>\n            This web-app consents you to create and edit your sport event. People can join and talk in the chat.\n        </p>\n    </section>\n\n    <!-- ADVICE SECTION -->\n    <section class=\"title\">\n        <h1>Our Team: </h1>\n    </section>\n\n    <section class=\"advices\">\n        <a class=\"odd\" href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\" target=\"blank\">\n            <section>\n                Team Leader <br>\n                HTML/CSS/EJS\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Francesco Casarella Photo\">\n            <section>\n                Francesco <br>\n                Casarella\n            </section>\n        </a>\n\n        <a class=\"even\" href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\" target=\"blank\">\n            <section>\n                HTML/CSS\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Daniela Gjorgjieva Photo\">\n            <section>\n                Daniela <br>\n                Gjorgjieva\n            </section>\n        </a>\n\n        <a class=\"odd\" href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\" target=\"blank\">\n            <section>\n                Repo admin <br>\n                ROUTES/DB\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Alessandro Cravioglio Photo\">\n            <section>\n                Alessandro <br>\n                Cravioglio\n            </section>\n        </a>\n\n        <a class=\"even\" href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\" target=\"blank\">\n            <section>\n                SOCKET/FETCH/ <br> EJS\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Andrea Prato Photo\">\n            <section>\n                Andrea <br>\n                Prato\n            </section>\n        </a>\n\n        <a class=\"odd\">\n            <section>\n                SOCKET/FETCH/ <br> EJS\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Samuel Corecco Photo\">\n            <section>\n                Samuel <br>\n                Corecco\n            </section>\n        </a>\n    </section>\n</main>")
    ; __line = 78
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
  , __lines = "<main id=\"upload\">\n    <section class=\"title\">\n        <h1>Edit your sport activity!</h1>\n    </section>\n\n    <form method=\"POST\" name=\"file\" action=\"/sports/<%= event._id%>?_method=PUT\" encType=\"multipart/form-data\" class=\"upload-section\" id=\"upload-section\">\n\n        <label for=\"sport\"> Sport </label>\n        <input type=\"text\" id=\"sport\" name=\"sport\" value=\"<%= event.sport%>\" placeholder=\"Soccer...\" required>\n\n        <label for=\"description\"> Description</label>\n        <textarea id=\"description\" name=\"description\" rows=\"5\" cols=\"45\" \n            placeholder=\"<%event.description%>\"><%= event.description%></textarea>\n\n        <label for=\"place\"> Place </label>\n        <input type=\"text\" id=\"place\" name=\"place\" value=\"<%= event.place %>\" placeholder=\"Lugano...\" required>\n\n        <label for=\"date\">Starting date</label>\n        <input type=\"date\" id=\"date\" name=\"date\" value=\"<%= event.date %>\" min=\"\" max=\"2025-12-31\" required>\n\n        <label for=\"frequency\">Frequency</label>\n        <select name=\"frequency\" id=\"frequency\" value=\"<%= event.frequency%>\" required>\n            <option value=\"Daily\">Daily</option>\n            <option value=\"Weekly\">Weekly</option>\n            <option value=\"Monthly\">Monthly</option>\n            <option value=\"Undefined\">Undefined</option>\n        </select>\n\n        <label for=\"max_members\">Members</label>\n        <input type=\"number\" id=\"max_members\" name=\"max_members\" value=\"<%= event.max_members%>\" min=\"<%= event.max_members %>\" max=\"30\" required><br><br>\n\n        <button type=\"submit\" name=\"submit\" id=\"submit_button_edit\"> Submit </button>\n\n    </form>\n\n    <!-- ADVICE SECTION -->\n    <section class=\"title\">\n        <h1>Popular Activities: </h1>\n    </section>\n\n    <section class=\"advices\">\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n    </section>\n    <br>\n</main>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<main id=\"upload\">\n    <section class=\"title\">\n        <h1>Edit your sport activity!</h1>\n    </section>\n\n    <form method=\"POST\" name=\"file\" action=\"/sports/")
    ; __line = 6
    ; __append(escapeFn( event._id))
    ; __append("?_method=PUT\" encType=\"multipart/form-data\" class=\"upload-section\" id=\"upload-section\">\n\n        <label for=\"sport\"> Sport </label>\n        <input type=\"text\" id=\"sport\" name=\"sport\" value=\"")
    ; __line = 9
    ; __append(escapeFn( event.sport))
    ; __append("\" placeholder=\"Soccer...\" required>\n\n        <label for=\"description\"> Description</label>\n        <textarea id=\"description\" name=\"description\" rows=\"5\" cols=\"45\" \n            placeholder=\"")
    ; __line = 13
    ; event.description
    ; __append("\">")
    ; __append(escapeFn( event.description))
    ; __append("</textarea>\n\n        <label for=\"place\"> Place </label>\n        <input type=\"text\" id=\"place\" name=\"place\" value=\"")
    ; __line = 16
    ; __append(escapeFn( event.place ))
    ; __append("\" placeholder=\"Lugano...\" required>\n\n        <label for=\"date\">Starting date</label>\n        <input type=\"date\" id=\"date\" name=\"date\" value=\"")
    ; __line = 19
    ; __append(escapeFn( event.date ))
    ; __append("\" min=\"\" max=\"2025-12-31\" required>\n\n        <label for=\"frequency\">Frequency</label>\n        <select name=\"frequency\" id=\"frequency\" value=\"")
    ; __line = 22
    ; __append(escapeFn( event.frequency))
    ; __append("\" required>\n            <option value=\"Daily\">Daily</option>\n            <option value=\"Weekly\">Weekly</option>\n            <option value=\"Monthly\">Monthly</option>\n            <option value=\"Undefined\">Undefined</option>\n        </select>\n\n        <label for=\"max_members\">Members</label>\n        <input type=\"number\" id=\"max_members\" name=\"max_members\" value=\"")
    ; __line = 30
    ; __append(escapeFn( event.max_members))
    ; __append("\" min=\"")
    ; __append(escapeFn( event.max_members ))
    ; __append("\" max=\"30\" required><br><br>\n\n        <button type=\"submit\" name=\"submit\" id=\"submit_button_edit\"> Submit </button>\n\n    </form>\n\n    <!-- ADVICE SECTION -->\n    <section class=\"title\">\n        <h1>Popular Activities: </h1>\n    </section>\n\n    <section class=\"advices\">\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n    </section>\n    <br>\n</main>")
    ; __line = 93
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_events = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
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
  , __lines = "<%\n  let flag = false;\n  function isInside(id){\n    console.log('ID:');\n    console.log(id);\n    event.members.forEach((element)=>{\n      console.log('ELEMENT:')\n      console.log(element)\n      if (element === id){\n        flag = true;\n      }\n    });\n    return flag;\n  }\n%>\n\n<main id=\"event description\">\n    <section class=\"head\">\n      <section class=\"title\">\n        <h1><%=event.sport%></h1>\n        <p>An event from <%=event.owner%> </p>\n      </section>\n\n      <section>\n        <%if(user){\n          if(event.owner !== user.username){\n              if(isInside(user._id)){\n                  console.log(\"you are a member\")%>\n                  <form>\n                    <button type=\"submit\" name=\"submit_leave\"> Leave </button>\n                  </form>\n          <%} else if(event.members.length >= event.max_members) {\n                  console.log(\"event is full\")%>\n                  <section>\n                      Sorry, this event reached the maximum capacity chosen from the owner.\n                  </section>\n          <%} else {\n                  console.log(\"you are NOT a member\")%>\n                  <form>\n                    <button name=\"submit_join\" id=\"<%=event._id%>\"> Join </button>\n                  </form>\n          <%}%>\n          <%} else{\n            console.log(\"you are the OWNER\")%>\n            <a rel=\"edit\" id=\"edit_sport\" href=\"/sports/<%= event._id%>/edit\">Edit</a>\n            <a rel=\"delete\" id=\"delete_sport\" href=\"\" >Delete</a>\n          <%}\n      } else {\n        console.log(\"you are not logged in\")%>\n        If you want to access the event informations please <a id=\"login_from_event\" href=\"/login\">Login</a>!\n      <%}%>\n            </section>\n        </section>\n\n\n\n    <section class=\"title\">\n      <h1>Description</h1>\n      <p class=\"about\">\n       <%= event.description %>\n      </p>\n    </section>\n\n\n    <section class=\"title\">\n      <h2>Details</h2>\n      <p>Place : <%= event.place %></p>\n      <p>Starting Date : <%= event.date %> </p>\n      <p>Members : <%= event.members.length + \"/\" +event.max_members%></p>\n      <p>Frequency: <%= event.frequency %></p>\n    </section>\n\n    <%if(user && ((user.username == event.owner) || isInside(user._id))){%>\n    <div class=\"container_chat\">\n      <div class=\"header\">\n        <h1>Group Chat</h1>\n      </div>\n\n      <div id=\"chat\" class=\"body\">\n        <%\n        event.chat.forEach(chat =>{\n          if(chat.name == user.username){\n        %>\n        <p class=\"text-right\" style=\"color:white;\"> You </p>\n        <p class=\"message user_message\">\n          <%= chat.msg%>\n        </p>\n        <p class=\"text-right\"><%= chat.time%></p>\n\n        <%}else{%>\n\n        <p class=\"text-left\" style=\"color:white;\"><%= chat.name%></p>\n        <p class=\"message\">\n          <%= chat.msg%>\n        </p>\n        <p class=\"text-left\"><%= chat.time%></p>\n\n        <%}})%>\n        \n\n      </div>\n\n      <div class=\"footer\">\n        <form class=\"chat\">\n          <input id =\"msg\" type=\"text_chat\" name=\"msg\" value =\"\">\n          <button id =\"send\">SEND</button>\n        </form>\n      </div>\n\n    </div>\n    <%}%>\n\n  </main>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; 
  let flag = false;
  function isInside(id){
    console.log('ID:');
    console.log(id);
    event.members.forEach((element)=>{
      console.log('ELEMENT:')
      console.log(element)
      if (element === id){
        flag = true;
      }
    });
    return flag;
  }

    ; __line = 15
    ; __append("\n\n<main id=\"event description\">\n    <section class=\"head\">\n      <section class=\"title\">\n        <h1>")
    ; __line = 20
    ; __append(escapeFn(event.sport))
    ; __append("</h1>\n        <p>An event from ")
    ; __line = 21
    ; __append(escapeFn(event.owner))
    ; __append(" </p>\n      </section>\n\n      <section>\n        ")
    ; __line = 25
    ; if(user){
          if(event.owner !== user.username){
              if(isInside(user._id)){
                  console.log("you are a member")
    ; __line = 28
    ; __append("\n                  <form>\n                    <button type=\"submit\" name=\"submit_leave\"> Leave </button>\n                  </form>\n          ")
    ; __line = 32
    ; } else if(event.members.length >= event.max_members) {
                  console.log("event is full")
    ; __line = 33
    ; __append("\n                  <section>\n                      Sorry, this event reached the maximum capacity chosen from the owner.\n                  </section>\n          ")
    ; __line = 37
    ; } else {
                  console.log("you are NOT a member")
    ; __line = 38
    ; __append("\n                  <form>\n                    <button name=\"submit_join\" id=\"")
    ; __line = 40
    ; __append(escapeFn(event._id))
    ; __append("\"> Join </button>\n                  </form>\n          ")
    ; __line = 42
    ; }
    ; __append("\n          ")
    ; __line = 43
    ; } else{
            console.log("you are the OWNER")
    ; __line = 44
    ; __append("\n            <a rel=\"edit\" id=\"edit_sport\" href=\"/sports/")
    ; __line = 45
    ; __append(escapeFn( event._id))
    ; __append("/edit\">Edit</a>\n            <a rel=\"delete\" id=\"delete_sport\" href=\"\" >Delete</a>\n          ")
    ; __line = 47
    ; }
      } else {
        console.log("you are not logged in")
    ; __line = 49
    ; __append("\n        If you want to access the event informations please <a id=\"login_from_event\" href=\"/login\">Login</a>!\n      ")
    ; __line = 51
    ; }
    ; __append("\n            </section>\n        </section>\n\n\n\n    <section class=\"title\">\n      <h1>Description</h1>\n      <p class=\"about\">\n       ")
    ; __line = 60
    ; __append(escapeFn( event.description ))
    ; __append("\n      </p>\n    </section>\n\n\n    <section class=\"title\">\n      <h2>Details</h2>\n      <p>Place : ")
    ; __line = 67
    ; __append(escapeFn( event.place ))
    ; __append("</p>\n      <p>Starting Date : ")
    ; __line = 68
    ; __append(escapeFn( event.date ))
    ; __append(" </p>\n      <p>Members : ")
    ; __line = 69
    ; __append(escapeFn( event.members.length + "/" +event.max_members))
    ; __append("</p>\n      <p>Frequency: ")
    ; __line = 70
    ; __append(escapeFn( event.frequency ))
    ; __append("</p>\n    </section>\n\n    ")
    ; __line = 73
    ; if(user && ((user.username == event.owner) || isInside(user._id))){
    ; __append("\n    <div class=\"container_chat\">\n      <div class=\"header\">\n        <h1>Group Chat</h1>\n      </div>\n\n      <div id=\"chat\" class=\"body\">\n        ")
    ; __line = 80
    ; 
        event.chat.forEach(chat =>{
          if(chat.name == user.username){
        
    ; __line = 83
    ; __append("\n        <p class=\"text-right\" style=\"color:white;\"> You </p>\n        <p class=\"message user_message\">\n          ")
    ; __line = 86
    ; __append(escapeFn( chat.msg))
    ; __append("\n        </p>\n        <p class=\"text-right\">")
    ; __line = 88
    ; __append(escapeFn( chat.time))
    ; __append("</p>\n\n        ")
    ; __line = 90
    ; }else{
    ; __append("\n\n        <p class=\"text-left\" style=\"color:white;\">")
    ; __line = 92
    ; __append(escapeFn( chat.name))
    ; __append("</p>\n        <p class=\"message\">\n          ")
    ; __line = 94
    ; __append(escapeFn( chat.msg))
    ; __append("\n        </p>\n        <p class=\"text-left\">")
    ; __line = 96
    ; __append(escapeFn( chat.time))
    ; __append("</p>\n\n        ")
    ; __line = 98
    ; }})
    ; __append("\n        \n\n      </div>\n\n      <div class=\"footer\">\n        <form class=\"chat\">\n          <input id =\"msg\" type=\"text_chat\" name=\"msg\" value =\"\">\n          <button id =\"send\">SEND</button>\n        </form>\n      </div>\n\n    </div>\n    ")
    ; __line = 111
    ; }
    ; __append("\n\n  </main>")
    ; __line = 113
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
  , __lines = "<main id=\"homepage\">\n\n  <section class=\"homepage_title\">\n    <h1>Enjoy your favorite Sports! </h1>\n  </section>\n\n  <!-- ADVICE SECTION -->\n  <section class=\"title\">\n    <h1>Popular Activities </h1>\n  </section>\n  <div class=\"row1\">\n    <img src=\"images/skiing.jpg\"  class=\"image\" style=\"width:100%\">\n      <!-- in the url adress we put the event -->\n      <a href= \"url\" >\n        <div>Create your own sport activity</div>\n      </a>\n    \n  </div>\n\n\n\n  <div class=\"row2\">\n    <img src=\"images/soccer.jpg\"  class=\"image\" style=\"width:100%\">\n    \n      <!-- in the url adress we put the event -->\n      <a href=\"url\">\n        <div class=\"text\">Create your own sport activity</div>\n      </a>\n    \n  </div>\n\n  <div class=\"row3\">\n    <img src=\"images/tennis.jpg\" class=\"image\" style=\"width:100%\">\n    \n      <!-- in the url adress we put the event -->\n      <a href=\"url\">\n        <div class=\"text\">Create your own sport activity</div>\n      </a>\n   \n  </div>\n\n  <div class=\"row4\">\n    <img src=\"images/swimming.jpg\"  class=\"image\" style=\"width:100%\">\n   \n      <!-- in the url adress we put the event -->\n      <a href=\"url\">\n        <div class=\"text\">Create your own sport activity</div>\n      </a>\n   \n  </div>\n\n\n\n\n  <section class=\"title\">\n    <h1>Famous Sportists </h1>\n\n    <div class=\"container1\">\n      <div class=\"text1\">\n        <br><b> Cristiano Ronaldo dos Santos Aveiro</b><br> is a Portuguese professional\n        footballer who plays as a forward for Premier League club Manchester United and captains the Portugal national\n        team. Often considered the best player in the world and widely regarded as one of the greatest players of all\n        time, Ronaldo has won five Ballon d'Or awardsand four European Golden Shoes, the most by a European player. He\n        has won 32 trophies in his career, including seven league titles, five UEFA Champions Leagues, one UEFA\n        European Championship and one UEFA Nations League.\n      </div>\n      <div class=\"zoom\">\n        <div class=\"image1\">\n          <img src=\"images/cristiano.jpg.jpg\">\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"container1\">\n      <div class=\"zoom\">\n        <div class=\"image1\">\n          <img src=\"images/michael.jpg\">\n        </div>\n      </div>\n      <div class=\"text1\">\n        <br><b>Michael Jeffrey Jordan</b><br> also known by his initials MJ, is an American former\n        professional basketball player and businessman. His biography on the official National Basketball Association\n        (NBA) website states: \"By acclamation, Michael Jordan is the greatest basketball player of all time.\" He\n        was integral in helping to popularize the NBA around the world in the 1980s and 1990s, becoming a global\n        cultural icon in the process. Jordan played 15 seasons in the NBA, winning six championships with the\n        Chicago Bulls.\n      </div>\n\n\n\n    </div>\n\n\n    </div>\n\n    <div class=\"container1\">\n      <div class=\"text1\">\n        <br><b>Lindsey Caroline Vonn</b><br> is an American former World Cup alpine ski racer on\n        the US Ski Team. She won four World Cup overall championships—one of only two female skiers to do so, along\n        with Annemarie Moser-Pröll—with three consecutive titles in 2008, 2009, and 2010.She also won a record eight\n        World Cup season titles in the downhill discipline , five titles in super-G and three consecutive titles in\n        the combined .She has the second highest super ranking of all skiers, men or women.\n      </div>\n      <div class=\"zoom\">\n        <div class=\"image1\">\n          <img src=\"images/lindsey.jpg\">\n        </div>\n      </div>\n\n\n    </div>\n\n\n\n\n    <div class=\"container1\">\n      <div class=\"zoom\">\n        <div class=\"image1\">\n          <img src=\"images/katye2.jpeg\">\n        </div>\n      </div>\n      <div class=\"text1\">\n        <br><b>Kathleen Genevieve Ledecky</b><br> is an American competitive swimmer. Having won 7 Olympic gold medals\n        and 15 world\n        championship gold medals, the most in history for a female swimmer, she is considered one of the greatest\n        female swimmers of all time. Ledecky is the world record holder in the women's 400-, 800-, and 1500-meter\n        freestyle. She also holds the fastest-ever times in the women's 500-, 1000-, 1500-, and 1650-yard freestyle\n        events.\n      </div>\n\n\n\n    </div>\n\n\n\n\n    <div class=\"container1\">\n      <div class=\"text1\">\n        <br><b>Novak Djokovic</b><br> is a Serbian professional tennis player. He is currently ranked\n        as world No. 1 by the Association of Tennis Professionals (ATP). Djokovic has been No. 1 for a record total of\n        351 weeks, and has finished as ATP Year-End No. 1 on a record seven occasions. He has won a joint record\n        20 Grand Slam men's singles titles, including a record nine Australian Open titles.\n      </div>\n      <div class=\"zoom\">\n        <div class=\"image1\">\n          <img src=\"images/novak.jpg\">\n        </div>\n      </div>\n\n\n    </div>\n\n\n\n\n\n</main>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<main id=\"homepage\">\n\n  <section class=\"homepage_title\">\n    <h1>Enjoy your favorite Sports! </h1>\n  </section>\n\n  <!-- ADVICE SECTION -->\n  <section class=\"title\">\n    <h1>Popular Activities </h1>\n  </section>\n  <div class=\"row1\">\n    <img src=\"images/skiing.jpg\"  class=\"image\" style=\"width:100%\">\n      <!-- in the url adress we put the event -->\n      <a href= \"url\" >\n        <div>Create your own sport activity</div>\n      </a>\n    \n  </div>\n\n\n\n  <div class=\"row2\">\n    <img src=\"images/soccer.jpg\"  class=\"image\" style=\"width:100%\">\n    \n      <!-- in the url adress we put the event -->\n      <a href=\"url\">\n        <div class=\"text\">Create your own sport activity</div>\n      </a>\n    \n  </div>\n\n  <div class=\"row3\">\n    <img src=\"images/tennis.jpg\" class=\"image\" style=\"width:100%\">\n    \n      <!-- in the url adress we put the event -->\n      <a href=\"url\">\n        <div class=\"text\">Create your own sport activity</div>\n      </a>\n   \n  </div>\n\n  <div class=\"row4\">\n    <img src=\"images/swimming.jpg\"  class=\"image\" style=\"width:100%\">\n   \n      <!-- in the url adress we put the event -->\n      <a href=\"url\">\n        <div class=\"text\">Create your own sport activity</div>\n      </a>\n   \n  </div>\n\n\n\n\n  <section class=\"title\">\n    <h1>Famous Sportists </h1>\n\n    <div class=\"container1\">\n      <div class=\"text1\">\n        <br><b> Cristiano Ronaldo dos Santos Aveiro</b><br> is a Portuguese professional\n        footballer who plays as a forward for Premier League club Manchester United and captains the Portugal national\n        team. Often considered the best player in the world and widely regarded as one of the greatest players of all\n        time, Ronaldo has won five Ballon d'Or awardsand four European Golden Shoes, the most by a European player. He\n        has won 32 trophies in his career, including seven league titles, five UEFA Champions Leagues, one UEFA\n        European Championship and one UEFA Nations League.\n      </div>\n      <div class=\"zoom\">\n        <div class=\"image1\">\n          <img src=\"images/cristiano.jpg.jpg\">\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"container1\">\n      <div class=\"zoom\">\n        <div class=\"image1\">\n          <img src=\"images/michael.jpg\">\n        </div>\n      </div>\n      <div class=\"text1\">\n        <br><b>Michael Jeffrey Jordan</b><br> also known by his initials MJ, is an American former\n        professional basketball player and businessman. His biography on the official National Basketball Association\n        (NBA) website states: \"By acclamation, Michael Jordan is the greatest basketball player of all time.\" He\n        was integral in helping to popularize the NBA around the world in the 1980s and 1990s, becoming a global\n        cultural icon in the process. Jordan played 15 seasons in the NBA, winning six championships with the\n        Chicago Bulls.\n      </div>\n\n\n\n    </div>\n\n\n    </div>\n\n    <div class=\"container1\">\n      <div class=\"text1\">\n        <br><b>Lindsey Caroline Vonn</b><br> is an American former World Cup alpine ski racer on\n        the US Ski Team. She won four World Cup overall championships—one of only two female skiers to do so, along\n        with Annemarie Moser-Pröll—with three consecutive titles in 2008, 2009, and 2010.She also won a record eight\n        World Cup season titles in the downhill discipline , five titles in super-G and three consecutive titles in\n        the combined .She has the second highest super ranking of all skiers, men or women.\n      </div>\n      <div class=\"zoom\">\n        <div class=\"image1\">\n          <img src=\"images/lindsey.jpg\">\n        </div>\n      </div>\n\n\n    </div>\n\n\n\n\n    <div class=\"container1\">\n      <div class=\"zoom\">\n        <div class=\"image1\">\n          <img src=\"images/katye2.jpeg\">\n        </div>\n      </div>\n      <div class=\"text1\">\n        <br><b>Kathleen Genevieve Ledecky</b><br> is an American competitive swimmer. Having won 7 Olympic gold medals\n        and 15 world\n        championship gold medals, the most in history for a female swimmer, she is considered one of the greatest\n        female swimmers of all time. Ledecky is the world record holder in the women's 400-, 800-, and 1500-meter\n        freestyle. She also holds the fastest-ever times in the women's 500-, 1000-, 1500-, and 1650-yard freestyle\n        events.\n      </div>\n\n\n\n    </div>\n\n\n\n\n    <div class=\"container1\">\n      <div class=\"text1\">\n        <br><b>Novak Djokovic</b><br> is a Serbian professional tennis player. He is currently ranked\n        as world No. 1 by the Association of Tennis Professionals (ATP). Djokovic has been No. 1 for a record total of\n        351 weeks, and has finished as ATP Year-End No. 1 on a record seven occasions. He has won a joint record\n        20 Grand Slam men's singles titles, including a record nine Australian Open titles.\n      </div>\n      <div class=\"zoom\">\n        <div class=\"image1\">\n          <img src=\"images/novak.jpg\">\n        </div>\n      </div>\n\n\n    </div>\n\n\n\n\n\n</main>")
    ; __line = 159
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_includes_aside = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
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
  , __lines = "<aside class=\"sidebar\" id=\"leftSidebar\">\n    <form action=\"\" method=\"GET\" class=\"search\" id=\"filterSports\">\n        <input type=\"text\" name=\"search\" placeholder=\"Search for an event...\">\n    </form>\n\n    <section class=\"title\">\n        <h1>Members:</h1>\n    </section>\n\n    <% if (users.length === 0) { %>\n    <section class=\"section\">\n        There are not user.\n    </section>\n    <% }  else {\n       users.forEach((user) => { %>\n    \n    <section class=\"section\">\n            <br><%= user.username %></br> \n    </section>\n\n    <% })} %>\n\n</aside>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<aside class=\"sidebar\" id=\"leftSidebar\">\n    <form action=\"\" method=\"GET\" class=\"search\" id=\"filterSports\">\n        <input type=\"text\" name=\"search\" placeholder=\"Search for an event...\">\n    </form>\n\n    <section class=\"title\">\n        <h1>Members:</h1>\n    </section>\n\n    ")
    ; __line = 10
    ;  if (users.length === 0) { 
    ; __append("\n    <section class=\"section\">\n        There are not user.\n    </section>\n    ")
    ; __line = 14
    ;  }  else {
       users.forEach((user) => { 
    ; __line = 15
    ; __append("\n    \n    <section class=\"section\">\n            <br>")
    ; __line = 18
    ; __append(escapeFn( user.username ))
    ; __append("</br> \n    </section>\n\n    ")
    ; __line = 21
    ;  })} 
    ; __append("\n\n</aside>")
    ; __line = 23
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_includes_footer = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
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

ejs.views_includes_head = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
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

ejs.views_includes_header = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
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
  , __lines = "<header class=\"page-header\" id=\"page-header\">\n    <span></span>\n\n    <h1>DreamTeam</h1>\n\n    <% if(user == undefined ){ %>\n        <section class=\"login\">\n            <a href=\"login\">Login</a> <br>\n            or <br>\n            <a href=\"signin\">Sign in!</a>\n        </section>\n    <% } else {%>\n        <section class=\"login\">\n            Hi, <a href=\"/user/<%=user._id%>\"><%= user.username%></a>!\n        </section>\n\n    <%}%>\n</header>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<header class=\"page-header\" id=\"page-header\">\n    <span></span>\n\n    <h1>DreamTeam</h1>\n\n    ")
    ; __line = 6
    ;  if(user == undefined ){ 
    ; __append("\n        <section class=\"login\">\n            <a href=\"login\">Login</a> <br>\n            or <br>\n            <a href=\"signin\">Sign in!</a>\n        </section>\n    ")
    ; __line = 12
    ;  } else {
    ; __append("\n        <section class=\"login\">\n            Hi, <a href=\"/user/")
    ; __line = 14
    ; __append(escapeFn(user._id))
    ; __append("\">")
    ; __append(escapeFn( user.username))
    ; __append("</a>!\n        </section>\n\n    ")
    ; __line = 17
    ; }
    ; __append("\n</header>")
    ; __line = 18
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_includes_nav = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
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
  , __lines = "<nav id=\"navigation-bar\">\n    <a href=\"/\" id=\"homepage\">Homepage</a>\n    <a href=\"/sports\" id=\"sport_list\">Sports List</a>\n    <a href=\"/upload\" id=\"create_event\">Create an event</a>\n    <a href=\"/about\" id=\"about_us\">About Us</a>\n</nav>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<nav id=\"navigation-bar\">\n    <a href=\"/\" id=\"homepage\">Homepage</a>\n    <a href=\"/sports\" id=\"sport_list\">Sports List</a>\n    <a href=\"/upload\" id=\"create_event\">Create an event</a>\n    <a href=\"/about\" id=\"about_us\">About Us</a>\n</nav>")
    ; __line = 6
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
  , __lines = "<main id=\"login\">\n    <section class=\"title\">\n        <h1>Log in your Account!</h1>\n    </section>\n    \n    <form class=\"upload-section\" id=\"login_form\">\n\n        <label for=\"username\"> Username </label>\n        <input type=\"text\" id=\"username\" name=\"username\" placeholder=\"\" required>\n\n        <label for=\"password\">Password</label>\n        <input type=\"password\" id=\"password\" name=\"password\" minlength=\"8\" required>\n\n        <button type=\"submit\" name=\"submit\">Log In</button>\n    </form>\n\n    <section class=\"formdesc\">\n        You don't have an account? <a href=\"/signin\" id=\"signin\">Sign in!</a>\n        <!-- onclick=\"addUser()\" -->\n    </section>\n\n    <!-- ADVICE SECTION -->\n    <section class=\"title\">\n        <h1>Popular Activities: </h1>\n    </section>\n\n    <section class=\"advices\">\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n    </section>\n    <br>\n\n</main>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<main id=\"login\">\n    <section class=\"title\">\n        <h1>Log in your Account!</h1>\n    </section>\n    \n    <form class=\"upload-section\" id=\"login_form\">\n\n        <label for=\"username\"> Username </label>\n        <input type=\"text\" id=\"username\" name=\"username\" placeholder=\"\" required>\n\n        <label for=\"password\">Password</label>\n        <input type=\"password\" id=\"password\" name=\"password\" minlength=\"8\" required>\n\n        <button type=\"submit\" name=\"submit\">Log In</button>\n    </form>\n\n    <section class=\"formdesc\">\n        You don't have an account? <a href=\"/signin\" id=\"signin\">Sign in!</a>\n        <!-- onclick=\"addUser()\" -->\n    </section>\n\n    <!-- ADVICE SECTION -->\n    <section class=\"title\">\n        <h1>Popular Activities: </h1>\n    </section>\n\n    <section class=\"advices\">\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n    </section>\n    <br>\n\n</main>")
    ; __line = 80
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
  , __lines = "<main id=\"signin\">\n    <section class=\"title\">\n        <h1>Create your Account!</h1>\n    </section>\n    \n    <form class=\"upload-section\" method=\"POST\" encType=\"multipart/form-data\" id=\"submit_user\">\n\n        <label for=\"username\"> Username </label>\n        <input type=\"text\" id=\"username\" name=\"username\" placeholder=\"\" required>\n\n        <label for=\"password\">Password</label>\n        <input type=\"password\" id=\"password\" name=\"password\" minlength=\"8\" required>\n\n        <label for=\"password_check\">Confirm Password</label>\n        <input type=\"password\" id=\"pass\" name=\"password_check\" minlength=\"8\" required>\n\n        <button type=\"submit\" name=\"submit\">Sign In</button>\n    </form>\n\n    <section class=\"formdesc\">\n        You already have an account? <a href=\"/login\" id=\"login\">Login!</a>\n        <!-- onclick=\"addUser()\" -->\n    </section>\n\n\n    <!-- ADVICE SECTION -->\n    <section class=\"title\">\n        <h1>Popular Activities: </h1>\n    </section>\n\n    <section class=\"advices\">\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n    </section>\n    <br>\n</main>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<main id=\"signin\">\n    <section class=\"title\">\n        <h1>Create your Account!</h1>\n    </section>\n    \n    <form class=\"upload-section\" method=\"POST\" encType=\"multipart/form-data\" id=\"submit_user\">\n\n        <label for=\"username\"> Username </label>\n        <input type=\"text\" id=\"username\" name=\"username\" placeholder=\"\" required>\n\n        <label for=\"password\">Password</label>\n        <input type=\"password\" id=\"password\" name=\"password\" minlength=\"8\" required>\n\n        <label for=\"password_check\">Confirm Password</label>\n        <input type=\"password\" id=\"pass\" name=\"password_check\" minlength=\"8\" required>\n\n        <button type=\"submit\" name=\"submit\">Sign In</button>\n    </form>\n\n    <section class=\"formdesc\">\n        You already have an account? <a href=\"/login\" id=\"login\">Login!</a>\n        <!-- onclick=\"addUser()\" -->\n    </section>\n\n\n    <!-- ADVICE SECTION -->\n    <section class=\"title\">\n        <h1>Popular Activities: </h1>\n    </section>\n\n    <section class=\"advices\">\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n    </section>\n    <br>\n</main>")
    ; __line = 83
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
  , __lines = "<main id=\"sports_table\">\n\n    <section class=\"title\">\n        <h1>Group Activities</h1>\n    </section>\n\n    <%if(sports.length === 0){%>\n        <section class=\"title\">\n            There are no events\n        </section>\n    <%} else {%>\n    <header>\n        <span></span>\n        <a href=\"sport.html?sort=sport\">Sport</a>\n        <a href=\"sport.html?sort=sport\">Owner</a>\n        <a href=\"sport.html?sort=desc\">Description</a>\n        <a href=\"sport.html?sort=place\">Place</a>\n        <a href=\"sport.html?sort=date\">Starting Date</a>\n        <a href=\"sport.html?sort=max_number\">Frequency</a>\n        <a href=\"sport.html?sort=max_number\">Members</a>\n        <span></span>\n    </header>\n    <%}%>\n\n    <% for(let index = 0; index < sports.length; index++){ \n        let event = sports[index] %>\n\n    <article class=\"sport\">\n        <a id=\"<%=event._id%>\" rel=\"link\" onclick=\"visitEvent(this.id)\">Link</a>\n        <span class=\"sport\"><%=event.sport%></span>\n        <span class=\"owner\"><%=event.owner%></span>\n        <span class=\"description\"><%=event.description%></span>\n        <span class=\"place\"><%=event.place%></span>\n        <span class=\"starting_date\"><%=event.date%></span>\n        <span class=\"date\"><%=event.frequency%></span>\n        <span class=\"Number of Members\"><%=event.members.length%>/<%=event.max_members%></span>\n        <section></section>\n    </article>\n    \n    <%}%>\n</main>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<main id=\"sports_table\">\n\n    <section class=\"title\">\n        <h1>Group Activities</h1>\n    </section>\n\n    ")
    ; __line = 7
    ; if(sports.length === 0){
    ; __append("\n        <section class=\"title\">\n            There are no events\n        </section>\n    ")
    ; __line = 11
    ; } else {
    ; __append("\n    <header>\n        <span></span>\n        <a href=\"sport.html?sort=sport\">Sport</a>\n        <a href=\"sport.html?sort=sport\">Owner</a>\n        <a href=\"sport.html?sort=desc\">Description</a>\n        <a href=\"sport.html?sort=place\">Place</a>\n        <a href=\"sport.html?sort=date\">Starting Date</a>\n        <a href=\"sport.html?sort=max_number\">Frequency</a>\n        <a href=\"sport.html?sort=max_number\">Members</a>\n        <span></span>\n    </header>\n    ")
    ; __line = 23
    ; }
    ; __append("\n\n    ")
    ; __line = 25
    ;  for(let index = 0; index < sports.length; index++){ 
        let event = sports[index] 
    ; __line = 26
    ; __append("\n\n    <article class=\"sport\">\n        <a id=\"")
    ; __line = 29
    ; __append(escapeFn(event._id))
    ; __append("\" rel=\"link\" onclick=\"visitEvent(this.id)\">Link</a>\n        <span class=\"sport\">")
    ; __line = 30
    ; __append(escapeFn(event.sport))
    ; __append("</span>\n        <span class=\"owner\">")
    ; __line = 31
    ; __append(escapeFn(event.owner))
    ; __append("</span>\n        <span class=\"description\">")
    ; __line = 32
    ; __append(escapeFn(event.description))
    ; __append("</span>\n        <span class=\"place\">")
    ; __line = 33
    ; __append(escapeFn(event.place))
    ; __append("</span>\n        <span class=\"starting_date\">")
    ; __line = 34
    ; __append(escapeFn(event.date))
    ; __append("</span>\n        <span class=\"date\">")
    ; __line = 35
    ; __append(escapeFn(event.frequency))
    ; __append("</span>\n        <span class=\"Number of Members\">")
    ; __line = 36
    ; __append(escapeFn(event.members.length))
    ; __append("/")
    ; __append(escapeFn(event.max_members))
    ; __append("</span>\n        <section></section>\n    </article>\n    \n    ")
    ; __line = 40
    ; }
    ; __append("\n</main>")
    ; __line = 41
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
  , __lines = "<!-- \nthis file should check if the user is logged or not\n -->\n \n<main id=\"upload\">\n    <section class=\"title\">\n        <h1>Add your sport activity!</h1>\n    </section>\n\n    <%if (!user) {%>\n\n    <section class=\"formdesc\">\n        If you want to create an event please <a href=\"login\">Login</a>!\n        <!-- onclick=\"logUser()\" -->\n      </section>\n      <section class=\"formdesc\">\n        You don't have an account? <a href=\"signin\">Sign in!</a>\n        <!-- onclick=\"addUser()\" -->\n      </section>\n\n    <% } else {%>\n\n    <form method=\"POST\" name=\"file\" action=\"/sports\" encType=\"multipart/form-data\" class=\"upload-section\">\n\n        <label for=\"sport\"> Sport </label>\n        <input type=\"text\" id=\"sport\" name=\"sport\" placeholder=\"Soccer...\" required>\n\n        <label for=\"description\"> Description</label>\n        <textarea id=\"description\" name=\"description\" rows=\"5\" cols=\"45\"\n            placeholder=\"Write here your sport's description...\"></textarea>\n\n        <label for=\"place\"> Place </label>\n        <input type=\"text\" id=\"place\" name=\"place\" placeholder=\"Lugano...\" required>\n\n        <label for=\"date\">Starting date</label>\n        <input type=\"date\" id=\"date\" name=\"date\" value=\"\" min=\"\" max=\"2025-12-31\" required>\n\n        <label for=\"frequency\">Frequency</label>\n        <select name=\"frequency\" id=\"frequency\" required>\n            <option value=\"Daily\">Daily</option>\n            <option value=\"Weekly\">Weekly</option>\n            <option value=\"Monthly\">Monthly</option>\n            <option value=\"Undefined\">Undefined</option>\n        </select>\n\n        <label for=\"max_members\">Members</label>\n        <input type=\"number\" id=\"max_members\" name=\"max_members\" value=\"1\" min=\"1\" max=\"30\" required><br><br>\n\n        <button type=\"submit\" name=\"submit\"> Submit </button>\n    </form>\n    <%}%>\n    <!-- ADVICE SECTION -->\n    <section class=\"title\">\n        <h1>Popular Activities: </h1>\n    </section>\n\n    <section class=\"advices\">\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n    </section>\n    <br>\n</main>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!-- \nthis file should check if the user is logged or not\n -->\n \n<main id=\"upload\">\n    <section class=\"title\">\n        <h1>Add your sport activity!</h1>\n    </section>\n\n    ")
    ; __line = 10
    ; if (!user) {
    ; __append("\n\n    <section class=\"formdesc\">\n        If you want to create an event please <a href=\"login\">Login</a>!\n        <!-- onclick=\"logUser()\" -->\n      </section>\n      <section class=\"formdesc\">\n        You don't have an account? <a href=\"signin\">Sign in!</a>\n        <!-- onclick=\"addUser()\" -->\n      </section>\n\n    ")
    ; __line = 21
    ;  } else {
    ; __append("\n\n    <form method=\"POST\" name=\"file\" action=\"/sports\" encType=\"multipart/form-data\" class=\"upload-section\">\n\n        <label for=\"sport\"> Sport </label>\n        <input type=\"text\" id=\"sport\" name=\"sport\" placeholder=\"Soccer...\" required>\n\n        <label for=\"description\"> Description</label>\n        <textarea id=\"description\" name=\"description\" rows=\"5\" cols=\"45\"\n            placeholder=\"Write here your sport's description...\"></textarea>\n\n        <label for=\"place\"> Place </label>\n        <input type=\"text\" id=\"place\" name=\"place\" placeholder=\"Lugano...\" required>\n\n        <label for=\"date\">Starting date</label>\n        <input type=\"date\" id=\"date\" name=\"date\" value=\"\" min=\"\" max=\"2025-12-31\" required>\n\n        <label for=\"frequency\">Frequency</label>\n        <select name=\"frequency\" id=\"frequency\" required>\n            <option value=\"Daily\">Daily</option>\n            <option value=\"Weekly\">Weekly</option>\n            <option value=\"Monthly\">Monthly</option>\n            <option value=\"Undefined\">Undefined</option>\n        </select>\n\n        <label for=\"max_members\">Members</label>\n        <input type=\"number\" id=\"max_members\" name=\"max_members\" value=\"1\" min=\"1\" max=\"30\" required><br><br>\n\n        <button type=\"submit\" name=\"submit\"> Submit </button>\n    </form>\n    ")
    ; __line = 51
    ; }
    ; __append("\n    <!-- ADVICE SECTION -->\n    <section class=\"title\">\n        <h1>Popular Activities: </h1>\n    </section>\n\n    <section class=\"advices\">\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"even\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n\n        <a href=\"\" class=\"odd\">\n            <section>\n                placeholder\n            </section>\n            <img src=\"images/img_avatar.png\" alt=\"Linking Park photo\">\n            <section>\n                placeholder\n            </section>\n        </a>\n    </section>\n    <br>\n</main>")
    ; __line = 109
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
  , __lines = "<!-- this ejs takes a user object as input\nUser:\n{\n    username: \"\",\n    password: \"\",\n    created: [],\n    joined: [],\n}\n -->\n\n<main id=\"about\">\n    <section class=\"title\">\n        <h1>Your Profile: <%=user.username%></h1>\n    </section>\n\n    <section class=\"profile\">\n\n        <h3>Your Activities:</h3>\n\n        <% if(created.length == 0){ %>\n\n        You haven't created any events yet\n\n        <% } else {%>\n\n        <section id=\"sports_table_user\">\n            <header>\n                <span></span>\n                <a href=\"sport.html?sort=sport\">Sport</a>\n                <a href=\"sport.html?sort=sport\">Owner</a>\n                <a href=\"sport.html?sort=desc\">Description</a>\n                <a href=\"sport.html?sort=place\">Place</a>\n                <a href=\"sport.html?sort=date\">Starting Date</a>\n                <a href=\"sport.html?sort=max_number\">Frequency</a>\n                <a href=\"sport.html?sort=max_number\">Members</a>\n                <span></span>\n                <span></span>\n            </header>\n\n            <% for(let index = 0; index < created.length; index++){ \n                let event = created[index]%>\n\n            <article class=\"sport\" id=\"<%= event._id%>\">\n                <a id=\"<%=event._id%>\" rel=\"link\" onclick=\"visitEvent(this.id)\">Link</a>\n                <span class=\"sport\"><%=event.sport%></span>\n                <span class=\"owner\"><%=event.owner%></span>\n                <span class=\"description\"><%=event.description%></span>\n                <span class=\"place\"><%=event.place%></span>\n                <span class=\"starting_date\"><%=event.date%></span>\n                <span class=\"date\"><%=event.frequency%></span>\n                <span class=\"Number of Members\"><%=event.members.length%>/<%=event.max_members%></span>\n                <a rel=\"edit\" id=\"edit_sport\" href=\"/sports/<%= event._id%>/edit\">Edit</a>\n                <a rel=\"delete\" id=\"delete_button\" class=\"<%= event._id%>\" >Delete</a>\n            </article>\n\n            <%}%>\n        </section>\n        <%}%>\n\n        <h3>Events you joined:</h3>\n\n        <% if(joined.length == 0){ %>\n\n            You haven't joined any events yet\n    \n            <% } else {%>\n    \n            <section id=\"sports_table_user\">\n                <header>\n                    <span></span>\n                    <a href=\"sport.html?sort=sport\">Sport</a>\n                    <a href=\"sport.html?sort=sport\">Owner</a>\n                    <a href=\"sport.html?sort=desc\">Description</a>\n                    <a href=\"sport.html?sort=place\">Place</a>\n                    <a href=\"sport.html?sort=date\">Starting Date</a>\n                    <a href=\"sport.html?sort=max_number\">Frequency</a>\n                    <a href=\"sport.html?sort=max_number\">Members</a>\n                    <span></span>\n                    <span></span>\n                </header>\n    \n                <% for(let index = 0; index < joined.length; index++){ \n                    let event = joined[index]%>\n    \n                <article class=\"sport\">\n                    <a id=\"<%=event._id%>\" rel=\"link\" onclick=\"visitEvent(this.id)\">Link</a>\n                    <span class=\"sport\"><%=event.sport%></span>\n                    <span class=\"owner\"><%=event.owner%></span>\n                    <span class=\"description\"><%=event.description%></span>\n                    <span class=\"place\"><%=event.place%></span>\n                    <span class=\"starting_date\"><%=event.date%></span>\n                    <span class=\"date\"><%=event.frequency%></span>\n                    <span class=\"Number of Members\">  <%=event.members.length%> /  <%=event.max_members%></span>\n                    <section></section>\n                    <section></section>\n                </article>\n                <%}%>\n            </section>\n            <%}%>\n\n        <h3>If you really want to exit...</h3>\n        <button onclick=\"LogOutUser()\">Log Out</button>\n\n    </section>\n</main>"
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
    ;  if(created.length == 0){ 
    ; __append("\n\n        You haven't created any events yet\n\n        ")
    ; __line = 24
    ;  } else {
    ; __append("\n\n        <section id=\"sports_table_user\">\n            <header>\n                <span></span>\n                <a href=\"sport.html?sort=sport\">Sport</a>\n                <a href=\"sport.html?sort=sport\">Owner</a>\n                <a href=\"sport.html?sort=desc\">Description</a>\n                <a href=\"sport.html?sort=place\">Place</a>\n                <a href=\"sport.html?sort=date\">Starting Date</a>\n                <a href=\"sport.html?sort=max_number\">Frequency</a>\n                <a href=\"sport.html?sort=max_number\">Members</a>\n                <span></span>\n                <span></span>\n            </header>\n\n            ")
    ; __line = 40
    ;  for(let index = 0; index < created.length; index++){ 
                let event = created[index]
    ; __line = 41
    ; __append("\n\n            <article class=\"sport\" id=\"")
    ; __line = 43
    ; __append(escapeFn( event._id))
    ; __append("\">\n                <a id=\"")
    ; __line = 44
    ; __append(escapeFn(event._id))
    ; __append("\" rel=\"link\" onclick=\"visitEvent(this.id)\">Link</a>\n                <span class=\"sport\">")
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
    ; __append(escapeFn(event.members.length))
    ; __append("/")
    ; __append(escapeFn(event.max_members))
    ; __append("</span>\n                <a rel=\"edit\" id=\"edit_sport\" href=\"/sports/")
    ; __line = 52
    ; __append(escapeFn( event._id))
    ; __append("/edit\">Edit</a>\n                <a rel=\"delete\" id=\"delete_button\" class=\"")
    ; __line = 53
    ; __append(escapeFn( event._id))
    ; __append("\" >Delete</a>\n            </article>\n\n            ")
    ; __line = 56
    ; }
    ; __append("\n        </section>\n        ")
    ; __line = 58
    ; }
    ; __append("\n\n        <h3>Events you joined:</h3>\n\n        ")
    ; __line = 62
    ;  if(joined.length == 0){ 
    ; __append("\n\n            You haven't joined any events yet\n    \n            ")
    ; __line = 66
    ;  } else {
    ; __append("\n    \n            <section id=\"sports_table_user\">\n                <header>\n                    <span></span>\n                    <a href=\"sport.html?sort=sport\">Sport</a>\n                    <a href=\"sport.html?sort=sport\">Owner</a>\n                    <a href=\"sport.html?sort=desc\">Description</a>\n                    <a href=\"sport.html?sort=place\">Place</a>\n                    <a href=\"sport.html?sort=date\">Starting Date</a>\n                    <a href=\"sport.html?sort=max_number\">Frequency</a>\n                    <a href=\"sport.html?sort=max_number\">Members</a>\n                    <span></span>\n                    <span></span>\n                </header>\n    \n                ")
    ; __line = 82
    ;  for(let index = 0; index < joined.length; index++){ 
                    let event = joined[index]
    ; __line = 83
    ; __append("\n    \n                <article class=\"sport\">\n                    <a id=\"")
    ; __line = 86
    ; __append(escapeFn(event._id))
    ; __append("\" rel=\"link\" onclick=\"visitEvent(this.id)\">Link</a>\n                    <span class=\"sport\">")
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
    ; __append("</span>\n                    <span class=\"Number of Members\">  ")
    ; __line = 93
    ; __append(escapeFn(event.members.length))
    ; __append(" /  ")
    ; __append(escapeFn(event.max_members))
    ; __append("</span>\n                    <section></section>\n                    <section></section>\n                </article>\n                ")
    ; __line = 97
    ; }
    ; __append("\n            </section>\n            ")
    ; __line = 99
    ; }
    ; __append("\n\n        <h3>If you really want to exit...</h3>\n        <button onclick=\"LogOutUser()\">Log Out</button>\n\n    </section>\n</main>")
    ; __line = 105
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}