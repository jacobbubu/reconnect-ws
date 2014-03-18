var reconnect = require('./');

//  start client first
reconnect(function (stream) {
  stream.on('data', console.log);
  // => yup, I'm up!
}).on('reconnect', function(n, delay) {
  console.log('reconnect to server', n, delay);
}).connect('ws://localhost:8080');



var WebSocketServer = require('ws').Server;
var http = require('http');
var server = http.createServer();
// var wss = new WebSocketServer({server: server});
var wss = new WebSocketServer({port: 8080});
wss.on('connection', function(ws) {
  ws.send('Hello, client!');
});

// setTimeout(function() {
//   server.listen(8080, function () {
//     console.log('Server is listening on 8080');
//   });
// }, 500);