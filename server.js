var connections = [];
var express = require('express');
var app = express();
var server = app.listen(3000);
app.use(express.static('public'));

console.log("RUNNING");

var socket = require('socket.io');
var io = socket(sever);

io.sockets.on('connection',function(socket){
connections.push(socket);
socket.on('start',function(data){
    console.log("Un usuario se conecto: " + data.id + "numero de conexion" + connections.length);

})
});