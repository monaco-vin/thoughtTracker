const express = require("express");

const app = express();

/* 
make routes file w/ apiRoutes.js and htmlRoute.js
create html routes so that  GET /notes returns a notes.html file
create html route so a GET * returns an index.html file
db.json stores and retrieves notes using fs
create API route so GET /api/notes read db.json file and returns notes in JSON
create API route so POST /api/notes recieves a new note
 -save on request body
 -adds to db.json file
 -returns new note
create API route so DELETE /api/notes/:id recieves query param w/ id of a note to delete
 -give each new saved note a unique id
 -to delete note:
  -read all notes from db.json file
   -delete note with id of the note to be deleted
   -then rewrite all notes to db.json file

*/
