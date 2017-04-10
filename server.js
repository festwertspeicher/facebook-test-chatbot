var express = require('express');
var app = express();

app.listen(80, function() {
    console.log('Chatfuel Bot-Server listening on port 80...');
});

app.get('/*', function(req, res) {
    var jsonResponse = [];
    jsonResponse.push({
      "messages": [
        { "text": "Hi. your lucky number is:" },
        { "text": "..." + (Math.random() * 5 + 1).toFixed(0) + "..." }
      ]
    });
    res.send(jsonResponse);
});
