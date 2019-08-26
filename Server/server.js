// package references
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const passport = require("passport");
const users = require("./routers/api/users");
const mongoose = require("mongoose");
// app references
const notesRouter = require('./routers/notes-router');

// initialization
const PORT = process.env.PORT || 5001;

// configure server

const server = express();

//I changed the prop 'extended' to false because of the login instructions
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cors());
server.use(morgan('combined'));

// DB Config
const db = require("../config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

server.use('/api', notesRouter(PORT));
// Passport middleware
server.use(passport.initialize());
// Passport config
require("../config/passport")(passport);
// Routes
server.use("/api/users", users);

// start server

server.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT} ...`);
});