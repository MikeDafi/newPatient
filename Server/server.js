// package references
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const passport = require("passport");
const mongoose = require("mongoose");


// app references
const notesRouter = require('./routers/notes-router');
const users = require("../mern-auth/routes/api/users");
// initialization
const PORT = process.env.PORT || 5000;

// configure server

const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cors());
server.use(morgan('combined'));
server.use('/api', notesRouter(PORT));

const db = require("../mern-auth/config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

server.use(passport.initialize());

  // Passport config
  require("../mern-auth/config/passport")(passport);
  
  // Routes
server.use("/api/users", users);


// start server

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT} ...`);
});