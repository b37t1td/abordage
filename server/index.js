
var PORT = process.env.PORT || 8080;

var express = require('express');
var app = express();


app.get('/', function(req,res) {
  res.end('hello world');
});


app.listen(PORT, function() {
  console.log('listening on port ' + PORT);
});

module.exports = app;
