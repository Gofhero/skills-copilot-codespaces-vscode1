// Create web server
var express = require('express');
var app = express();
// Create a web server
app.get('/', function(req, res) {
    res.send('Hello World');
});
// Start up the web server
app.listen(3000, function() {
    console.log('Listening on port 3000');
});
// Create a web server that listens on port 3000
// app.listen(3000, function() {
//     console.log('Listening on port 3000');
// });