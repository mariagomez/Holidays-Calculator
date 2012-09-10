var express = require('express');

var app = express.createServer(express.logger());


app.get('/holidays', function(request, response) {
  response.sendfile(__dirname + '/views/holidays.html');
});


app.get('/eopp', function(request, response) {
  response.sendfile(__dirname + '/views/eopp.html');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});




