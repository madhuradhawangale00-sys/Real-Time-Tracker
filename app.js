const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");

const app = express();

const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

io.on("connection", function (socket) {
    console.log("connected");

    socket.on("disconnect", function () {
        console.log("disconnected");
    });
});

app.get("/", function (req, res) {
    res.render("index");
});

server.listen(3000, function () {
    console.log("Server running on http://localhost:3000");
});