/*var express = require('express');
var app = express();

app.listen(process.env.PORT || 3000, function() {
  console.log("listening on 3000");
});

app.get('/*', function(req, res) {
    var jsonResponse = [];
    jsonResponse.push({ "text": "Hi. " + (Math.random() * 5 + 1).toFixed(0) + " is a lucky number..." });
    res.send(jsonResponse);
});*/

var http = require('http');

http.createServer(function (req, response) {
  response.writeHead(200, {"Content-Type": "text/plain"})
  response.end("Hello World\n")
}).listen(process.env.PORT)
