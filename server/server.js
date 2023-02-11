
const express = require('express');
const cors = require('cors'); //Cors
const app = express();
const cookieParser = require('cookie-parser');

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));


const server = app.listen(8000, () => {
    console.log("Listening at Port 8000");
})

const io = require("socket.io")(server, {cors: {origin: "*"}});

io.on('connection', socket => {
    console.log('Encantado de conocerte. (Handshake)');
    socket.broadcast.emit('welcome_message', 'Welcome to socket io server');
})