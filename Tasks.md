## This file is intended to keep track of the work of every single member
### Should updated by each team member for his/her work

#### Francesco Casarella
08/12
- created new website style

09/12
- improved HTML and CSS
- added presentation

10/12
- improved HTML and CSS
- removed useless files
- created strucure.txt
- modelled object structures and routes

11/12
- created ejs based on html

12/12
- started fetch integration
- minor fixes and checks

13/12
-improved events.html
-created events.ejs
-improved events.css

14/12
- added renderHeader in ajax.js
- improved header.ejs
- improved header.ejs


15/12
- improved edit.ejs
- imprved events.ejs

- implemented edit fetch and started join fetch (with Alessandro Cravioglio and Samuel Corecco)

- fixed some links and href
- improved some fetches and routes
- fixed sign in button in login
- improved ajax.js, made some correction

- implement chat in event.js

16/12
- improvements in css
- improvements in ejs
- debug

- fixed login
- fixed user.ejs 
- improvements in ajax.js
  (with Alessandro Cravioglio)

-corrected some edit functions
-improved edit.ejs

#### Alessandro Cravioglio

09/12
- created GIT.md
- adapted app.js
- adapted /models/index.js

10/12
worked on /routes folder. 
In detail:
- created users.js
- checked and modified sports.js
- created Tasks.md
- modelled object structures and routes

11/12
worked on DB
- now using ATLAS to deploy db 
- scurity issues solved

13/12
worked on DB
- now using users and password for every users
- sensible data hidden with .env file

14/12
worked on ROUTES/ajax.json
- worked on crypto - now abandoned
- implemented (almost secure) signin 
- implemented login
- worked on sport join (server side, ajax) - worked with Samuel and Francesco

15/12
- code refractoring

- fixed login
- fixed user.ejs 
- improvements in ajax.js
  (with Francesco Casarella)

16/12
- worked on login/update song/ join song
- both server side/client
- debug

18/12
- worked on the chat with Daniela
- ajax.js and sports.js
- worked on password issue

#### Daniela Gjorgjieva
03/12
-created repository
04/12,05/12
-modified HTML and CSS
-checked all the stuff that we can use from previous assignments.
-modified sports.js

07/12,08/12
-started setting up the routes that we will need.
-made it possible for the user to filter by place, instructor and sport.

10/12
-created sign in page, along with javascript.

11/12 
-created events.html and events.css
12/12
-created the Group chat for the users in the events.html page along with css, and started events.ejs
13/12
-working on the css for the homepage and the rest of the html

14/12
-created css animation for the homepage
-worked on the homepage.html

15/12
-some improvements were made in the homepage
-started working on the Trailer video for the project

16/12
-worked on the video, did some interviews on friends, and recorded them
-Helped Francesco and Alessando to debug buttons and links and to fix users.ejs
17/12
-fixed some issues on css
-started implementing the chat

18/12
-doing the chat with Alessandro
-fetch, socket for the chat

#### Andrea Prato
_______
 Since me and Samuel worked together on all the assignments, we decided to work together on the project as well.
 ______


10/12
-Started working on the fetch and the socket with Samuel
-Deleted all the useless parte related to the player and the playlist
-Checked all the code in the files related to fetch and sockets (ajax.js, ws.js)

11/12
-Started writing ajax.js (FETCH-only).

12/12
-Ended fetch the sport related part of the web app
-Fetch for user login, signin and logout
-Init function updated
-Minor modifications to some ejs
-Started working on socket
-Finished sockets non-user related
-Debugged fetch code
-Added four event handlers

13/12
-Fixed old fetches
-Wrote the specific event ejs on the base of Francesco's html
-Updated the sport POST fetch, now working
-Created fetch for the rendering of the specific event page
-Made specific event page working

14/12
-Started creating the client side socket skeleton
-Started working on a system to pass the password to check the user login, without exposing it on the client

15/12
-Started debugging some broken features

16/12
-Working on debugging of features
-Completing edit fetch and delete fetch for all the pages
-Fixed the edit route
-Fixed the fetch for edit from the specific event page
-Added new paths in parsePath and fixed all remaining non-hashed paths
-Fixed the delete fetch
-Started working on sockets

17/12
-Fixed some bugs
-Implemented leave feature
-Implemented route for the leave feature
-Completed sockets
-Created events handler for the server in webServer.js
-Created events handler for the client in client.js
-Created event emission from the routes
-Completed specific events page-delete/edit event communication channels
-Completed sport list-edit/delete/upload communication channels
-Completed sport list and specific event page-/join/leave communication channels

#### Samuel Corecco

_______
Andrea and I, since we had fetch and socket together, always worked together to speed up the work and do it better <3
_______


10/12
-Started working on the fetch/socket with Andrea
-Read reade all documentation to understand the structure (nem, id, functionality, ...) of the program

11/12
-startded writing the fetch in ajax.js. finished some function
-fetch delete add and log_out (function for the user)


12/12
-no more fetches for everything we currently have available in theory all fetches and associated functions should be done
-correct one thing for editing ejs updated (ids added)
-start with socket (done the possible things to do)
-debugging and uploading fetch 

13/12
-debugging on old fetch;
-update upload
-done ejs events with Andre (based on the html of Francesco)
-change little features in the server 

14/12
-started working on the client side of sockets
-work with password with crypto
-work on login/signin
-fetch and a part of server join to activity with Alessandro e Francesco

15/12
-fetch to your page if you click your username 
-login from event if you have not an account or you ar not logged

16/12
-debugging and debuggin for join,userpage,edit and delete
-Fixed the edit route
-Fixed the fetch for edit from the specific event page 
-Fixed deleted
-update parspad and some hash for link
-start socket working :)

17/12
-fixed some bugs
-implemented new routs for leave
-added a leave function in fetch
-completed socket in client && routs && webServer:
  .connect/disconnect
  .edited
  .deleted
  .joined
  .left