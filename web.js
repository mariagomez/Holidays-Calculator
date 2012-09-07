var express = require('express');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
  response.sendfile(__dirname + '/views/form.html');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});




