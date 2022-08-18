const express = require("express");
const fs = require("fs");
const notes = require("./db/db.json");
const path = require("path");
const uuid = require("uuid");
const { DH_CHECK_P_NOT_SAFE_PRIME } = require("constants");

const app = express();
var PORT = process.env.PORT || 4023;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Setting routes for APIs
//This gets notes saved and joins it in db.json
app.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/db/db.json"));
});

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
