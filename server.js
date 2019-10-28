//Setting up connections and requirements
var express = require('express'),
    app = express(),
    http = require('http'),
    socketIo = require('socket.io');




// start webserver on port 8080
var server =  http.createServer(app);

var io = socketIo.listen(server);
server.listen(process.env.PORT || 8080);
// add directory with our static files
app.use(express.static(__dirname + '/public')); //files are in public folder
console.log("Server running on 127.0.0.1:8080 cool");







// array of all lines drawn
var line_history = [];

//event-handler for new incoming connections
io.on('connection', function (socket) {


  //Clear Canvas For all at the same time
  //emitting to clear on load so old history is not there
  socket.emit('clearCanvas');
  //Clearing ever 30s
  setInterval(function(){
    socket.emit('clearCanvas');
  }, 30000);







// add handler for message type "draw_line".
socket.on('draw_line', function (data) {

   // add received line to history
   line_history.push(data.line);
   // send line to all clients
   io.emit('draw_line', { line: data.line, color: data.color });

});

});
