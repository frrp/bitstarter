var express = require('express');
var data = fs.readFileSync(index.html, encoding)

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
