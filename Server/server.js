// package references
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');

const users = require('../routes/api/users');
// app references
const notesRouter = require('./routers/notes-router');

// initialization
const PORT = process.env.PORT || 8000;

// configure server

const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cors());
server.use(morgan('combined'));
server.use('/api', notesRouter(PORT));

// DB Config
const db = require('../config/keys').mongoURI;// Connect to MongoDB

mongoose
    .connect(
        db,
        { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB successfully connected'))
    .catch(err => console.log(err));


// Passport middleware
server.use(passport.initialize());

// Passport config
require('../config/passport')(passport);

// Routes
server.use('/api/users', users);


// start server
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT} ...`);
});