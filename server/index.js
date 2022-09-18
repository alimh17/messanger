const path = require('path');
const express = require('express');
const http = require("http");
const socketServ = require("socket.io");
const connectDB = require('./db/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const uploaded = require('express-fileupload');
const saveMessages = require('./utils/saveMessages');
require('dotenv').config()

const app = express()
const server = http.createServer(app);
const io = socketServ(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(uploaded())

app.use(express.static(path.join(__dirname, "public")))

io.on("connection", (socket) => {

    console.log(socket.id + ' ==== connected');

    socket.on("join", roomName => {
        const concat = `${roomName.id}--with--${roomName.to}`
        let split = concat.split('--with--');
        let unique = [...new Set(split)].sort((a, b) => (a < b ? -1 : 1));
        let updatedRoomName = `${unique[0]}--with--${unique[1]}`;


        Array.from(socket.rooms)
            .filter(it => it !== socket.id)
            .forEach(id => {
                socket.leave(id);
                socket.removeAllListeners(`emitMessage`);
            });

        socket.join(updatedRoomName);
        socket.on(`emitMessage`, message => {
            Array.from(socket.rooms)
                .filter(it => it !== socket.id)
                .forEach(id => {
                    saveMessages(roomName)
                    socket.to(id).emit('onMessage', message);
                });
        });
        socket.on('disconnect', () => {
            console.log(socket.id + ' ==== diconnected');
            socket.removeAllListeners();
        });
    })
});



const PORT = process.env.PORT || 5000

//* ------------------ Router ------------------
app.use("/", require('./router/upload'))
app.use("/api", require('./router/allUsers'))
app.use("/api", require('./router/currentChat'))
app.use("/api", require('./router/deleteChat'))



connectDB()
server.listen(PORT, () => console.log(`server is runnig on port ${PORT}`))
